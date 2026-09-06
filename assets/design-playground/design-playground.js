(function () {
  const DATA_URL = './assets/design-playground/playground-data.json?v=13';
  const section = document.getElementById('design-playground');
  const modalEl = document.getElementById('pgModal');
  if (!modalEl) return;

  const tabsEl = section && section.querySelector('.pg-tabs');
  const indicatorEl = section && section.querySelector('.pg-tab-indicator');
  const interfacePanel = section && section.querySelector('[data-panel="interface"]');
  const motionPanel = section && section.querySelector('[data-panel="motion"]');
  const motionLockEl = motionPanel && motionPanel.querySelector('.pg-motion-lock');
  const interfaceGrid = section && section.querySelector('[data-grid="interface"]');
  const motionGrid = section && section.querySelector('[data-grid="motion"]');
  const modalBodyEl = modalEl.querySelector('.pg-modal-body');

  const CINEMA_MS = 250;
  const MOTION_LOCKED = false;
  let data = null;
  let activeCategory = 'interface';
  let scrollAnchor = 0;
  let motionScrollY = 0;
  let cinemaClosing = false;
  let pendingOpenId = null;
  let protoReturnItem = null;

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function renderEmbed(item, large) {
    const src = (item.media && item.media.src) || item.preview.src;
    const cls = large ? 'pg-motion-embed pg-motion-embed--cinema' : 'pg-motion-embed';
    return `<iframe class="${cls}" src="${escapeHtml(src)}" title="${escapeHtml(item.title)}" loading="eager" tabindex="-1" aria-hidden="true"></iframe>`;
  }

  function renderPreviewMedia(item, lazy) {
    const preview = item.preview;
    const attrs = lazy
      ? 'loading="lazy" decoding="async"'
      : 'loading="eager" decoding="async"';

    if (item.media && item.media.type === 'embed') {
      return renderEmbed(item, false);
    }

    if (item.media && item.media.type === 'video') {
      return `<video muted loop playsinline autoplay disablepictureinpicture poster="${escapeHtml(item.media.poster || preview.src)}" aria-hidden="true"><source src="${escapeHtml(item.media.src)}" type="video/mp4"></video>`;
    }

    if (item.media && item.media.type === 'gif') {
      return `<img src="${escapeHtml(item.media.src)}" alt="${escapeHtml(preview.alt)}" width="${preview.width}" height="${preview.height}" ${attrs}>`;
    }

    return `<img src="${escapeHtml(preview.src)}" alt="${escapeHtml(preview.alt)}" width="${preview.width}" height="${preview.height}" ${attrs}>`;
  }

  function renderCinemaMedia(item) {
    if (item.media && item.media.type === 'embed') {
      return renderEmbed(item, true);
    }

    if (item.media && item.media.type === 'video') {
      const video = `<video muted loop playsinline autoplay disablepictureinpicture poster="${escapeHtml(item.media.poster || item.preview.src)}" aria-label="${escapeHtml(item.title)}"><source src="${escapeHtml(item.media.src)}" type="video/mp4"></video>`;
      if (item.id === 'space-between') {
        return `<div class="pg-cinema-crop pg-cinema-crop--space-between">${video}</div>`;
      }
      return video;
    }

    if (item.media && item.media.type === 'gif') {
      return `<img src="${escapeHtml(item.media.src)}" alt="" decoding="async">`;
    }

    return `<img src="${escapeHtml(item.preview.src)}" alt="${escapeHtml(item.preview.alt)}" width="${item.preview.width}" height="${item.preview.height}">`;
  }

  function playVideosIn(container) {
    if (!container) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    container.querySelectorAll('video').forEach((video) => {
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.removeAttribute('controls');
      if (reduce) {
        video.pause();
        video.removeAttribute('autoplay');
        return;
      }
      const play = () => video.play().catch(() => {});
      if (video.readyState >= 2) play();
      else video.addEventListener('loadeddata', play, { once: true });
    });
  }

  function createInterfaceCard(item, index) {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = `pg-card reveal${index > 0 ? ` reveal-delay-${Math.min(index, 3)}` : ''}`;
    card.setAttribute('data-project-id', item.id);
    card.setAttribute('aria-label', `View details for ${item.title}`);

    card.innerHTML = `
      <div class="pg-card-media">
        <div class="pg-card-media-inner">
          ${renderPreviewMedia(item, true)}
        </div>
      </div>
      <div class="pg-card-body">
        <div class="pg-card-category">${escapeHtml(item.category)}</div>
        <h3 class="pg-card-title">${escapeHtml(item.title)}</h3>
        <p class="pg-card-desc">${escapeHtml(item.description)}</p>
        <span class="pg-card-link">View Details →</span>
      </div>
    `;

    card.addEventListener('click', () => openInterfaceModal(item));
    return card;
  }

  function createMotionCard(item, index) {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = `pg-card pg-card--motion reveal${index > 0 ? ` reveal-delay-${Math.min(index, 3)}` : ''}`;
    card.setAttribute('data-project-id', item.id);
    card.setAttribute('aria-label', `Expand ${item.title}`);

    card.innerHTML = `
      <div class="pg-card-media">
        <div class="pg-card-media-inner">
          ${renderPreviewMedia(item, false)}
        </div>
      </div>
      <div class="pg-card-body">
        <h3 class="pg-card-title">${escapeHtml(item.title)}</h3>
      </div>
    `;

    card.addEventListener('click', () => openMotionModal(item));
    return card;
  }

  function renderGrid(gridEl, items, kind) {
    gridEl.innerHTML = '';
    items.forEach((item, i) => {
      const card = kind === 'motion' ? createMotionCard(item, i) : createInterfaceCard(item, i);
      gridEl.appendChild(card);
    });
    observeReveals(gridEl);
    if (kind === 'motion') playVideosIn(gridEl);
  }

  function observeReveals(container) {
    const reveals = container.querySelectorAll('.reveal:not(.visible)');
    if (!window.__pgRevealObserver) {
      window.__pgRevealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              window.__pgRevealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
    }
    reveals.forEach((el) => window.__pgRevealObserver.observe(el));
  }

  function updateIndicator(tab) {
    if (!indicatorEl || !tab) return;
    indicatorEl.style.width = `${tab.offsetWidth}px`;
    indicatorEl.style.transform = `translateX(${tab.offsetLeft}px)`;
  }

  function updateMotionLock(isMotionActive) {
    if (!motionPanel || !MOTION_LOCKED) {
      if (motionPanel) motionPanel.classList.remove('is-locked');
      if (motionLockEl) motionLockEl.setAttribute('aria-hidden', 'true');
      return;
    }
    motionPanel.classList.toggle('is-locked', isMotionActive);
    if (motionLockEl) {
      motionLockEl.setAttribute('aria-hidden', isMotionActive ? 'false' : 'true');
    }
  }

  function switchCategory(category) {
    if (category === activeCategory) return;

    const prevPanel = activeCategory === 'interface' ? interfacePanel : motionPanel;
    const nextPanel = category === 'interface' ? interfacePanel : motionPanel;

    scrollAnchor = window.scrollY;

    prevPanel.classList.add('is-fading');
    prevPanel.classList.remove('is-active');
    prevPanel.setAttribute('hidden', '');

    setTimeout(() => {
      prevPanel.classList.remove('is-fading');
      prevPanel.style.display = 'none';
      nextPanel.style.display = 'block';
      nextPanel.removeAttribute('hidden');
      requestAnimationFrame(() => {
        nextPanel.classList.add('is-active');
        window.scrollTo(0, scrollAnchor);
        observeReveals(nextPanel);
        if (category === 'motion') playVideosIn(motionPanel);
      });
    }, 200);

    activeCategory = category;
    updateMotionLock(category === 'motion');

    tabsEl.querySelectorAll('.pg-tab').forEach((tab) => {
      const selected = tab.dataset.category === category;
      tab.setAttribute('aria-selected', selected ? 'true' : 'false');
      if (selected) updateIndicator(tab);
    });
  }

  function pauseModalMedia() {
    if (!modalEl) return;
    modalEl.querySelectorAll('video').forEach((video) => video.pause());
  }

  function lockScroll() {
    motionScrollY = window.scrollY;
    document.body.style.top = `-${motionScrollY}px`;
    document.body.classList.add('pg-modal-open', 'pg-scroll-locked');
  }

  function unlockScroll() {
    document.body.classList.remove('pg-modal-open', 'pg-scroll-locked');
    document.body.style.top = '';
    window.scrollTo(0, motionScrollY);
  }

  function openInterfaceModal(item) {
    if (!modalEl || !modalBodyEl || cinemaClosing) return;

    modalEl.classList.remove('pg-modal--cinema', 'is-closing');
    modalEl.setAttribute('aria-labelledby', 'pgModalTitle');
    modalEl.removeAttribute('aria-label');

    const galleryHtml = (item.gallery || [])
      .filter(Boolean)
      .map(
        (src) =>
          `<img src="${escapeHtml(src)}" alt="" loading="lazy" decoding="async">`
      )
      .join('');

    const toolsHtml = (item.tools || [])
      .map((t) => `<span class="pg-modal-tool">${escapeHtml(t)}</span>`)
      .join('');

    const protoHtml = item.prototype
      ? `<div class="pg-modal-block pg-modal-block--proto">
          <div class="pg-modal-label">Prototype</div>
          <p class="pg-modal-text">Click the link to view the full prototype.</p>
          <button type="button" class="pg-modal-proto" data-pg-open-proto>View full prototype →</button>
        </div>`
      : '';

    let heroMedia;
    if (item.media && item.media.type === 'video') {
      heroMedia = `<video controls playsinline poster="${escapeHtml(item.media.poster || item.preview.src)}"><source src="${escapeHtml(item.media.src)}" type="video/mp4"></video>`;
    } else if (item.media && item.media.type === 'gif') {
      heroMedia = `<img src="${escapeHtml(item.media.src)}" alt="${escapeHtml(item.preview.alt)}" width="${item.preview.width}" height="${item.preview.height}">`;
    } else {
      heroMedia = `<img src="${escapeHtml(item.preview.src)}" alt="${escapeHtml(item.preview.alt)}" width="${item.preview.width}" height="${item.preview.height}">`;
    }

    const darkMediaIds = { nomad: true, 'health-karma': true, splitly: true };
    const heroClass = darkMediaIds[item.id]
      ? 'pg-modal-hero pg-modal-hero--dark'
      : 'pg-modal-hero';

    modalEl.classList.remove('pg-modal--proto');
    protoReturnItem = null;

    modalBodyEl.innerHTML = `
      <div class="${heroClass}">${heroMedia}</div>
      <div class="pg-modal-content">
        <div class="pg-modal-category">${escapeHtml(item.category)}</div>
        <h2 class="pg-modal-title" id="pgModalTitle">${escapeHtml(item.title)}</h2>
        <div class="pg-modal-block">
          <div class="pg-modal-label">Design Objective</div>
          <p class="pg-modal-text">${escapeHtml(item.objective)}</p>
        </div>
        <div class="pg-modal-block">
          <div class="pg-modal-label">Design Thinking</div>
          <p class="pg-modal-text">${escapeHtml(item.thinking)}</p>
        </div>
        <div class="pg-modal-block">
          <div class="pg-modal-label">Tools</div>
          <div class="pg-modal-tools">${toolsHtml}</div>
        </div>
        ${protoHtml}
        ${galleryHtml ? `<div class="pg-modal-gallery">${galleryHtml}</div>` : ''}
      </div>
    `;

    const protoBtn = modalBodyEl.querySelector('[data-pg-open-proto]');
    if (protoBtn) {
      protoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openPrototypeViewer(item);
      });
    }

    lockScroll();
    modalEl.classList.add('is-open');
    modalEl.setAttribute('aria-hidden', 'false');
    const closeBtn = modalEl.querySelector('.pg-modal-close');
    if (closeBtn) closeBtn.focus();
  }

  function openPrototypeViewer(item) {
    if (!modalEl || !modalBodyEl || !item || !item.prototype) return;

    protoReturnItem = item;
    pauseModalMedia();
    modalEl.classList.add('pg-modal--proto');
    modalEl.classList.remove('pg-modal--cinema', 'is-closing');
    modalEl.setAttribute('aria-labelledby', 'pgProtoTitle');

    modalBodyEl.innerHTML = `
      <div class="pg-proto-shell">
        <div class="pg-proto-toolbar">
          <button type="button" class="pg-proto-back" data-pg-proto-back>← Back to details</button>
          <h2 class="pg-proto-title" id="pgProtoTitle">${escapeHtml(item.title)} · Live prototype</h2>
        </div>
        <iframe
          class="pg-proto-frame"
          src="${escapeHtml(item.prototype)}"
          title="${escapeHtml(item.title)} live prototype"
          allow="fullscreen"
        ></iframe>
      </div>
    `;

    const backBtn = modalBodyEl.querySelector('[data-pg-proto-back]');
    if (backBtn) {
      backBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openInterfaceModal(protoReturnItem || item);
      });
      backBtn.focus();
    }
  }

  function openMotionModal(item) {
    if (MOTION_LOCKED || cinemaClosing) return;
    if (!modalEl || !modalBodyEl) return;

    modalEl.classList.add('pg-modal--cinema');
    modalEl.classList.remove('is-closing', 'pg-modal--proto');
    modalEl.removeAttribute('aria-labelledby');
    modalEl.setAttribute('aria-label', item.title);

    modalBodyEl.innerHTML = `<div class="pg-cinema-media">${renderCinemaMedia(item)}</div>`;

    lockScroll();
    modalEl.classList.add('is-open');
    modalEl.setAttribute('aria-hidden', 'false');
    const closeBtn = modalEl.querySelector('.pg-modal-close');
    if (closeBtn) closeBtn.focus();

    playVideosIn(modalBodyEl);
  }

  function closeModal(force) {
    if (!modalEl || cinemaClosing) return;
    if (!modalEl.classList.contains('is-open') && !modalEl.classList.contains('is-closing')) return;

    // Escape / Back: leave prototype viewer and restore project details
    if (!force && modalEl.classList.contains('pg-modal--proto') && protoReturnItem) {
      openInterfaceModal(protoReturnItem);
      return;
    }

    const isCinema = modalEl.classList.contains('pg-modal--cinema');

    if (isCinema) {
      cinemaClosing = true;
      pauseModalMedia();
      modalEl.classList.add('is-closing');
      modalEl.classList.remove('is-open');

      setTimeout(() => {
        modalEl.classList.remove('is-closing', 'pg-modal--cinema', 'pg-modal--proto');
        modalEl.setAttribute('aria-hidden', 'true');
        if (modalBodyEl) modalBodyEl.innerHTML = '';
        unlockScroll();
        cinemaClosing = false;
        if (activeCategory === 'motion') playVideosIn(motionPanel);
      }, CINEMA_MS);
      return;
    }

    pauseModalMedia();
    protoReturnItem = null;
    modalEl.classList.remove('is-open', 'pg-modal--cinema', 'pg-modal--proto', 'is-closing');
    modalEl.setAttribute('aria-hidden', 'true');
    if (modalBodyEl) modalBodyEl.innerHTML = '';
    unlockScroll();
  }

  function openById(id) {
    if (!id) return false;
    if (!data) {
      pendingOpenId = id;
      return false;
    }
    const iface = (data.interface || []).find((item) => item.id === id);
    if (iface) {
      openInterfaceModal(iface);
      return true;
    }
    const motion = (data.motion || []).find((item) => item.id === id);
    if (motion) {
      openMotionModal(motion);
      return true;
    }
    return false;
  }

  window.DesignPlayground = {
    open: openById,
  };

  async function init() {
    try {
      const res = await fetch(DATA_URL);
      if (!res.ok) throw new Error('Failed to load playground data');
      data = await res.json();
    } catch (err) {
      console.error('[Design Playground]', err);
      return;
    }

    if (interfaceGrid) renderGrid(interfaceGrid, data.interface, 'interface');
    if (motionGrid) renderGrid(motionGrid, data.motion, 'motion');

    if (interfacePanel) {
      interfacePanel.classList.add('is-active');
      interfacePanel.style.display = 'block';
    }
    if (motionPanel) motionPanel.style.display = 'none';
    updateMotionLock(false);

    if (tabsEl) {
      const firstTab = tabsEl.querySelector('[data-category="interface"]');
      updateIndicator(firstTab);

      tabsEl.querySelectorAll('.pg-tab').forEach((tab) => {
        tab.addEventListener('click', () => switchCategory(tab.dataset.category));
      });

      window.addEventListener('resize', () => {
        const activeTab = tabsEl.querySelector('[aria-selected="true"]');
        updateIndicator(activeTab);
      });
    }

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible' && activeCategory === 'motion') {
        playVideosIn(motionPanel);
      }
    });

    const backdrop = modalEl.querySelector('.pg-modal-backdrop');
    const dialog = modalEl.querySelector('.pg-modal-dialog');
    const closeBtn = modalEl.querySelector('.pg-modal-close');

    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(true);
      });
    }
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeModal(true);
      });
    }
    if (dialog) {
      dialog.addEventListener('click', (e) => e.stopPropagation());
    }

    modalEl.addEventListener('click', (e) => {
      if (e.target === modalEl) closeModal(true);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalEl.classList.contains('is-open')) {
        e.preventDefault();
        closeModal(false);
      }
    });

    if (pendingOpenId) {
      openById(pendingOpenId);
      pendingOpenId = null;
    }
  }

  init();
})();
