(() => {
  'use strict';

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Case-page entry wipe (green cover, no logo) ---- */
  if (!reduced && document.body.classList.contains('mc-case') && !document.body.classList.contains('mc-case-locked')) {
    const overlay = document.createElement('div');
    overlay.className = 'mc-case-splash';
    document.body.appendChild(overlay);
    document.body.classList.add('mc-case-splash-active');

    const COVER_MS = 750;
    const HOLD_MS = 180;
    const REVEAL_MS = 1050;
    const coverStart = 60;
    const readyAt = coverStart + COVER_MS;
    const revealStart = readyAt + HOLD_MS;
    const doneAt = revealStart + REVEAL_MS;

    window.setTimeout(() => {
      document.body.classList.add('mc-case-splash-cover');
    }, coverStart);

    window.setTimeout(() => {
      document.body.classList.add('mc-case-splash-ready');
    }, readyAt);

    window.setTimeout(() => {
      document.body.classList.add('mc-case-splash-reveal');
    }, revealStart);

    window.setTimeout(() => {
      overlay.remove();
      document.body.classList.remove(
        'mc-case-splash-active',
        'mc-case-splash-cover',
        'mc-case-splash-ready',
        'mc-case-splash-reveal'
      );
    }, doneAt);
  }

  /* ---- Eyes follow cursor ---- */
  const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 3 };
  let rafPending = false;

  function updatePupils() {
    rafPending = false;
    document.querySelectorAll('[data-eye]').forEach((eye) => {
      const pupil = eye.querySelector('[data-pupil]');
      if (!pupil) return;
      const r = eye.getBoundingClientRect();
      if (r.width === 0) return;
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = mouse.x - cx;
      const dy = mouse.y - cy;
      const dist = Math.hypot(dx, dy) || 1;
      const reach = Math.min(dist / 240, 1);
      const tx = (dx / dist) * r.width * 0.2 * reach;
      const ty = (dy / dist) * r.height * 0.2 * reach;
      pupil.style.transform = 'translate(' + tx.toFixed(1) + 'px,' + ty.toFixed(1) + 'px)';
    });
  }

  function requestPupilUpdate() {
    if (!rafPending) {
      rafPending = true;
      requestAnimationFrame(updatePupils);
    }
  }

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    requestPupilUpdate();
  }, { passive: true });

  window.addEventListener('scroll', requestPupilUpdate, { passive: true, capture: true });

  /* ---- Blinking ---- */
  if (!reduced) {
    const scheduleBlink = () => {
      const delay = 2000 + Math.random() * 4000;
      setTimeout(() => {
        document.querySelectorAll('[data-eye]').forEach((eye) => {
          eye.style.transition = 'transform 0.12s ease';
          eye.style.transform = 'scaleY(0.08)';
          setTimeout(() => { eye.style.transform = 'scaleY(1)'; }, 150);
        });
        scheduleBlink();
      }, delay);
    };
    scheduleBlink();
  }

  /* ---- Click to wink ---- */
  document.addEventListener('click', (e) => {
    const eye = e.target.closest && e.target.closest('[data-eye]');
    if (!eye) return;
    eye.style.transition = 'transform 0.14s ease';
    eye.style.transform = 'scaleY(0.06)';
    setTimeout(() => { eye.style.transform = 'scaleY(1)'; }, 320);
  });

  /* ---- Hover tooltips ---- */
  const tip = document.createElement('div');
  tip.className = 'mc-tooltip';
  document.body.appendChild(tip);

  document.addEventListener('mouseover', (e) => {
    const el = e.target.closest && e.target.closest('[data-tip]');
    if (!el) return;
    const r = el.getBoundingClientRect();
    tip.textContent = el.getAttribute('data-tip');
    tip.style.left = (r.left + r.width / 2) + 'px';
    tip.style.top = (r.bottom + 10) + 'px';
    tip.classList.add('is-visible');
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest && e.target.closest('[data-tip]')) {
      tip.classList.remove('is-visible');
    }
  });

  /* ---- Count-up stats ---- */
  const SPLASH_DONE_MS = 2040;

  const animateCount = (el) => {
    const target = parseFloat(el.getAttribute('data-count'));
    const t0 = performance.now();
    const dur = 1100;
    const step = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = String(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const runCounter = (el) => {
    if (el._counted) return;
    el._counted = true;
    if (reduced) {
      el.textContent = el.getAttribute('data-count');
    } else {
      animateCount(el);
    }
  };

  const headerCounters = document.querySelectorAll('.mc-case-header [data-count]');
  const scrollCounters = Array.from(document.querySelectorAll('[data-count]')).filter(
    (el) => !el.closest('.mc-case-header')
  );

  const startHeaderCounters = () => {
    headerCounters.forEach(runCounter);
  };

  if (headerCounters.length) {
    if (!reduced && document.body.classList.contains('mc-case')) {
      window.setTimeout(startHeaderCounters, SPLASH_DONE_MS);
    } else {
      startHeaderCounters();
    }
  }

  if (scrollCounters.length) {
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        runCounter(entry.target);
        countObserver.unobserve(entry.target);
      });
    }, { threshold: 0.35 });
    scrollCounters.forEach((el) => countObserver.observe(el));
  }

  /* ---- Scroll reveal: Part 01 blocks + auto-apply across case sections ---- */
  const revealRoot = document.querySelector('.sa-part01, #design-solutions, .sa-reveal');
  if (revealRoot && document.body.classList.contains('mc-case')) {
    const stacks = document.querySelectorAll('.mc-section .ga-stack');
    stacks.forEach((stack) => {
      Array.from(stack.children).forEach((child, index) => {
        if (child.classList.contains('sa-reveal')) return;
        child.classList.add('sa-reveal');
        const delay = (index % 3) + 1;
        if (delay > 0 && index > 0) child.classList.add('sa-reveal-delay-' + Math.min(delay, 3));
      });
    });
    document.querySelectorAll('.sa-iterations > .sa-iteration').forEach((el, index) => {
      if (el.classList.contains('sa-reveal')) return;
      el.classList.add('sa-reveal');
      if (index > 0) el.classList.add('sa-reveal-delay-' + Math.min(index, 3));
    });
    document.querySelectorAll('.sa-final-block, .sa-iterations-intro, .sa-banner, .sa-callout').forEach((el) => {
      if (!el.classList.contains('sa-reveal')) el.classList.add('sa-reveal');
    });
  }

  const revealNodes = Array.from(document.querySelectorAll('.sa-reveal'));
  if (revealNodes.length) {
    if (reduced) {
      revealNodes.forEach((el) => el.classList.add('is-in'));
    } else {
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-in');
          revealObserver.unobserve(entry.target);
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
      revealNodes.forEach((el) => revealObserver.observe(el));
    }
  }

  /* ---- Image lightbox (iteration designs + marked media) ---- */
  (function initLightbox() {
    const sources = [];

    function collectFromImg(img, group) {
      if (!img || !img.getAttribute('src')) return;
      const titleEl = img.closest('.sa-iteration')?.querySelector('.sa-iteration-head h4');
      sources.push({
        src: img.currentSrc || img.getAttribute('src'),
        alt: img.getAttribute('alt') || '',
        caption: titleEl ? titleEl.textContent.trim() : (img.getAttribute('alt') || ''),
        group: group || 'default',
        el: img
      });
    }

    document.querySelectorAll('.sa-iteration .ga-media img, .sa-part01 .ga-media img').forEach((img) => {
      const group = img.closest('.sa-iteration') ? 'iterations' : 'part01';
      collectFromImg(img, group);
      const media = img.closest('.ga-media');
      if (media) {
        media.classList.add('sa-zoomable');
        media.setAttribute('role', 'button');
        media.setAttribute('tabindex', '0');
        media.setAttribute('aria-label', 'View larger: ' + (img.getAttribute('alt') || 'design'));
      }
    });

    document.querySelectorAll('[data-lightbox]').forEach((img) => {
      if (img.tagName === 'IMG') collectFromImg(img, img.getAttribute('data-lightbox') || 'gallery');
    });

    if (!sources.length) return;

    const overlay = document.createElement('div');
    overlay.className = 'sa-lightbox';
    overlay.hidden = true;
    overlay.innerHTML =
      '<div class="sa-lightbox-backdrop" data-close="true"></div>' +
      '<div class="sa-lightbox-dialog" role="dialog" aria-modal="true" aria-label="Design preview">' +
      '<button type="button" class="sa-lightbox-close" aria-label="Close preview" data-close="true">×</button>' +
      '<button type="button" class="sa-lightbox-nav is-prev" aria-label="Previous design">‹</button>' +
      '<figure class="sa-lightbox-figure">' +
      '<img class="sa-lightbox-img" alt="">' +
      '<figcaption class="sa-lightbox-caption"></figcaption>' +
      '</figure>' +
      '<button type="button" class="sa-lightbox-nav is-next" aria-label="Next design">›</button>' +
      '</div>';
    document.body.appendChild(overlay);

    const imgEl = overlay.querySelector('.sa-lightbox-img');
    const captionEl = overlay.querySelector('.sa-lightbox-caption');
    const prevBtn = overlay.querySelector('.sa-lightbox-nav.is-prev');
    const nextBtn = overlay.querySelector('.sa-lightbox-nav.is-next');
    let activeIndex = 0;
    let lastFocus = null;

    function groupIndices(group) {
      return sources.map((s, i) => (s.group === group ? i : -1)).filter((i) => i >= 0);
    }

    function show(index) {
      activeIndex = index;
      const item = sources[index];
      if (!item) return;
      imgEl.src = item.src;
      imgEl.alt = item.alt;
      captionEl.textContent = item.caption;
      const g = groupIndices(item.group);
      const multi = g.length > 1;
      prevBtn.hidden = !multi;
      nextBtn.hidden = !multi;
      overlay.hidden = false;
      document.body.classList.add('sa-lightbox-open');
      overlay.querySelector('.sa-lightbox-close').focus();
    }

    function close() {
      overlay.hidden = true;
      document.body.classList.remove('sa-lightbox-open');
      imgEl.removeAttribute('src');
      if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
    }

    function step(dir) {
      const item = sources[activeIndex];
      if (!item) return;
      const g = groupIndices(item.group);
      const pos = g.indexOf(activeIndex);
      if (pos < 0) return;
      const next = g[(pos + dir + g.length) % g.length];
      show(next);
    }

    function openFromImg(img) {
      const index = sources.findIndex((s) => s.el === img);
      if (index < 0) return;
      lastFocus = document.activeElement;
      show(index);
    }

    document.addEventListener('click', (e) => {
      const media = e.target.closest('.sa-zoomable');
      if (!media) return;
      const img = media.querySelector('img');
      if (!img) return;
      e.preventDefault();
      openFromImg(img);
    });

    document.addEventListener('keydown', (e) => {
      if (overlay.hidden) {
        if ((e.key === 'Enter' || e.key === ' ') && e.target.classList?.contains('sa-zoomable')) {
          e.preventDefault();
          const img = e.target.querySelector('img');
          if (img) openFromImg(img);
        }
        return;
      }
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'ArrowRight') step(1);
    });

    overlay.addEventListener('click', (e) => {
      if (e.target.closest('[data-close]')) close();
    });
    prevBtn.addEventListener('click', (e) => { e.stopPropagation(); step(-1); });
    nextBtn.addEventListener('click', (e) => { e.stopPropagation(); step(1); });
  })();

  /* ---- Live Systematic Agent loading prototype ---- */
  (function initResponseLoaderDemo() {
    const demos = Array.from(document.querySelectorAll('[data-sa-loader]'));
    if (!demos.length) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    demos.forEach((demo) => {
      const label = demo.querySelector('[data-sa-loader-label]');
      let timer = null;
      let phase = 'loading';

      function setPhase(next) {
        phase = next;
        demo.classList.toggle('is-loading', next === 'loading');
        demo.classList.toggle('is-ready', next === 'ready');
        if (label) {
          label.textContent = next === 'loading'
            ? 'Ask Systematic Agent or search'
            : 'Ask Systematic Agent or search';
        }
      }

      function loop() {
        if (reducedMotion) {
          setPhase('loading');
          return;
        }
        setPhase('loading');
        window.clearTimeout(timer);
        timer = window.setTimeout(() => {
          setPhase('ready');
          timer = window.setTimeout(loop, 2200);
        }, 2800);
      }

      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loop();
          } else {
            window.clearTimeout(timer);
            setPhase('loading');
          }
        });
      }, { threshold: 0.35 });
      io.observe(demo);
    });
  })();

  /* ---- Scroll spy (table of contents) ---- */
  const links = {};
  document.querySelectorAll('[data-spy]').forEach((a) => {
    links[a.getAttribute('data-spy')] = a;
  });

  document.querySelectorAll('.mc-toc [data-spy]').forEach((link) => {
    const section = document.getElementById(link.getAttribute('data-spy'));
    if (!section) return;
    const isProcess = section.classList.contains('mc-section--process') || section.querySelector('.mc-process-intro');
    if (!isProcess) return;
    const eyebrow = section.querySelector(
      '.mc-process-intro .mc-eyebrow-bar, .mc-2col-header .mc-eyebrow-bar, .mc-eyebrow-bar'
    );
    if (eyebrow?.textContent.trim()) link.textContent = eyebrow.textContent.trim();
  });

  const setActive = (id) => {
    Object.entries(links).forEach(([key, a]) => {
      a.classList.toggle('is-active', key === id);
    });
  };
  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setActive(entry.target.getAttribute('data-spy-target'));
    });
  }, { rootMargin: '-25% 0px -60% 0px' });
  document.querySelectorAll('[data-spy-target]').forEach((s) => spyObserver.observe(s));
  const firstSpy = document.querySelector('[data-spy-target]');
  if (firstSpy) setActive(firstSpy.getAttribute('data-spy-target'));

  /* ---- TOC visibility: hide outside main content (before body / after next) ---- */
  const toc = document.querySelector('.mc-toc');
  const caseBody = document.querySelector('.mc-case-body');
  const nextSection = document.querySelector('.mc-next');

  if (toc && caseBody) {
    const getNavOffset = () => {
      const styles = getComputedStyle(document.body);
      const belowNav = parseFloat(styles.getPropertyValue('--mc-sticky-below-nav'));
      return Number.isFinite(belowNav) ? belowNav : 81;
    };

    const updateTocVisibility = () => {
      const offset = getNavOffset();
      const bodyRect = caseBody.getBoundingClientRect();
      const nextRect = nextSection ? nextSection.getBoundingClientRect() : null;
      const inMainContent = bodyRect.top < window.innerHeight && bodyRect.bottom > offset + 120;
      const beforeNext = !nextRect || nextRect.top > offset + 48;
      toc.classList.toggle('is-hidden', !(inMainContent && beforeNext));
    };

    document.addEventListener('scroll', updateTocVisibility, { passive: true, capture: true });
    window.addEventListener('resize', updateTocVisibility, { passive: true });
    updateTocVisibility();
  }

  /* ---- Before / after compare slider ---- */
  document.querySelectorAll('[data-compare]').forEach((compare) => {
    const stage = compare.querySelector('.mc-compare-stage');
    if (!stage) return;
    const viewport = stage.querySelector('.mc-compare-viewport') || stage;

    const syncSplit = (ratio) => {
      const viewportRect = viewport.getBoundingClientRect();
      const stageRect = stage.getBoundingClientRect();
      const x = ratio * viewportRect.width;
      stage.style.setProperty('--split-pos', (viewportRect.left - stageRect.left + x) + 'px');
      viewport.style.setProperty('--split-pos', (ratio * 100).toFixed(2) + '%');
    };

    syncSplit(0.5);

    const setSplitFromClientX = (clientX) => {
      const viewportRect = viewport.getBoundingClientRect();
      const x = Math.min(Math.max(clientX - viewportRect.left, 0), viewportRect.width);
      syncSplit(x / viewportRect.width);
    };

    let dragging = false;
    let activePointerId = null;

    const startDrag = (e) => {
      dragging = true;
      activePointerId = e.pointerId;
      stage.setPointerCapture(e.pointerId);
      setSplitFromClientX(e.clientX);
      e.preventDefault();
    };

    const moveDrag = (e) => {
      if (!dragging) return;
      setSplitFromClientX(e.clientX);
      e.preventDefault();
    };

    const endDrag = (e) => {
      if (!dragging) return;
      dragging = false;
      if (activePointerId !== null && stage.hasPointerCapture(activePointerId)) {
        stage.releasePointerCapture(activePointerId);
      }
      activePointerId = null;
    };

    stage.addEventListener('pointerdown', startDrag, true);
    stage.addEventListener('pointermove', moveDrag);
    stage.addEventListener('pointerup', endDrag);
    stage.addEventListener('pointercancel', endDrag);
    window.addEventListener('resize', () => {
      const viewportRect = viewport.getBoundingClientRect();
      const current = parseFloat(viewport.style.getPropertyValue('--split-pos')) / 100 || 0.5;
      syncSplit(current);
    }, { passive: true });
  });

  /* ---- View Case Study: progress loader before navigate ---- */
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const cta = target.closest('a.ga-case-cta');
    if (!(cta instanceof HTMLAnchorElement)) return;
    if (cta.target === '_blank' || cta.hasAttribute('download')) return;

    const href = cta.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('javascript:')) {
      return;
    }

    event.preventDefault();
    if (document.body.classList.contains('ga-case-cta-leaving')) return;
    document.body.classList.add('ga-case-cta-leaving');

    try {
      sessionStorage.setItem('ga-portfolio-internal-nav', '1');
    } catch (_) { /* ignore */ }

    const overlay = document.createElement('div');
    overlay.className = 'ga-case-cta-loader';
    overlay.setAttribute('role', 'status');
    overlay.setAttribute('aria-label', 'Loading case study');
    overlay.innerHTML = '<div class="ga-case-cta-loader__track"><span class="ga-case-cta-loader__bar"></span></div>';
    document.body.appendChild(overlay);

    requestAnimationFrame(() => {
      overlay.classList.add('is-on');
      const bar = overlay.querySelector('.ga-case-cta-loader__bar');
      if (bar) {
        requestAnimationFrame(() => {
          bar.classList.add('is-fill');
        });
      }
    });

    const go = () => {
      window.location.href = cta.href;
    };

    if (reduced) {
      go();
      return;
    }

    window.setTimeout(go, 780);
  }, true);

  /* ---- Muted inline video autoplay ---- */
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('video').forEach((v) => {
    const isHeroMotion = v.classList.contains('mc-case-hero-video');

    if (reduceMotion && isHeroMotion) {
      v.pause();
      v.removeAttribute('autoplay');
      const wrap = v.closest('.mc-case-hero-img--motion');
      const fallback = wrap && wrap.querySelector('.mc-case-hero-fallback');
      if (fallback) fallback.hidden = false;
      v.style.display = 'none';
      return;
    }

    v.muted = true;
    v.defaultMuted = true;
    v.controls = false;
    v.removeAttribute('controls');
    v.setAttribute('muted', '');
    v.setAttribute('autoplay', '');
    v.playsInline = true;
    v.setAttribute('playsinline', '');
    v.setAttribute('webkit-playsinline', '');

    const play = () => {
      v.muted = true;
      const pr = v.play();
      if (pr && pr.catch) pr.catch(() => {});
    };

    if (isHeroMotion) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) play();
          else v.pause();
        });
      }, { threshold: 0.15 });
      io.observe(v);
    }

    play();
    v.addEventListener('loadeddata', play);
    v.addEventListener('canplay', play);
  });
})();
