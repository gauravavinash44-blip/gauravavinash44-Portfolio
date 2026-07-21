(function () {
  const DATA_URL = './assets/design-playground/playground-data.json';
  const section = document.getElementById('design-playground');
  if (!section) return;

  const tabsEl = section.querySelector('.pg-tabs');
  const indicatorEl = section.querySelector('.pg-tab-indicator');
  const interfacePanel = section.querySelector('[data-panel="interface"]');
  const motionPanel = section.querySelector('[data-panel="motion"]');
  const motionLockEl = motionPanel && motionPanel.querySelector('.pg-motion-lock');
  const interfaceGrid = section.querySelector('[data-grid="interface"]');
  const motionGrid = section.querySelector('[data-grid="motion"]');
  const modalEl = document.getElementById('pgModal');
  const modalBodyEl = modalEl && modalEl.querySelector('.pg-modal-body');

  const CINEMA_MS = 250;
  const MOTION_LOCKED = true;
  let data = null;
  let activeCategory = 'interface';
  let scrollAnchor = 0;
  let motionScrollY = 0;
  let cinemaClosing = false;

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function renderPreviewMedia(item, lazy) {
    const preview = item.preview;
    const attrs = lazy
      ? 'loading="lazy" decoding="async"'
      : 'loading="eager" decoding="async"';

    if (item.media && item.media.type === 'video') {
      return `<video muted loop playsinline autoplay poster="${escapeHtml(item.media.poster || preview.src)}" ${attrs.replace('loading="lazy"', '')} aria-hidden="true"><source src="${escapeHtml(item.media.src)}" type="video/mp4"></video>`;
    }

    if (item.media && item.media.type === 'gif') {
      return `<img src="${escapeHtml(item.media.src)}" alt="${escapeHtml(preview.alt)}" width="${preview.width}" height="${preview.height}" ${attrs}>`;
    }

    return `<img src="${escapeHtml(preview.src)}" alt="${escapeHtml(preview.alt)}" width="${preview.width}" height="${preview.height}" ${attrs}>`;
  }

  function renderMotionThumbnail(item) {
    const poster = (item.media && item.media.poster) || item.preview.src;
    return `<img src="${escapeHtml(poster)}" alt="${escapeHtml(item.preview.alt)}" width="${item.preview.width}" height="${item.preview.height}" loading="lazy" decoding="async">`;
  }

  function renderCinemaMedia(item) {
    if (item.media && item.media.type === 'video') {
      return `<video muted loop playsinline autoplay><source src="${escapeHtml(item.media.src)}" type="video/mp4"></video>`;
    }

    if (item.media && item.media.type === 'gif') {
      return `<img src="${escapeHtml(item.media.src)}" alt="" decoding="async">`;
    }

    return `<img src="${escapeHtml(item.preview.src)}" alt="${escapeHtml(item.preview.alt)}" width="${item.preview.width}" height="${item.preview.height}">`;
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
    card.setAttribute('aria-label', `Play ${item.title}`);

    card.innerHTML = `
      <div class="pg-card-media">
        <div class="pg-card-media-inner">
          ${renderMotionThumbnail(item)}
        </div>
      </div>
      <div class="pg-card-body">
        <h3 class="pg-card-title">${escapeHtml(item.title)}</h3>
        <p class="pg-card-desc">${escapeHtml(item.description)}</p>
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
    if (!motionPanel || !MOTION_LOCKED) return;
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
    if (!modalEl || !modalBodyEl) return;

    modalEl.classList.remove('pg-modal--cinema', 'is-closing');
    modalEl.setAttribute('aria-labelledby', 'pgModalTitle');

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
      ? `<a class="pg-modal-proto" href="${escapeHtml(item.prototype)}" target="_blank" rel="noreferrer">Open prototype →</a>`
      : '';

    let heroMedia = renderPreviewMedia(item, false);
    if (item.media && item.media.type === 'video') {
      heroMedia = `<video controls playsinline poster="${escapeHtml(item.media.poster || item.preview.src)}"><source src="${escapeHtml(item.media.src)}" type="video/mp4"></video>`;
    } else if (item.media && item.media.type === 'gif') {
      heroMedia = `<img src="${escapeHtml(item.media.src)}" alt="${escapeHtml(item.preview.alt)}" width="${item.preview.width}" height="${item.preview.height}">`;
    } else {
      heroMedia = `<img src="${escapeHtml(item.preview.src)}" alt="${escapeHtml(item.preview.alt)}" width="${item.preview.width}" height="${item.preview.height}">`;
    }

    const darkMediaIds = { nomad: true, 'health-karma': true };
    const heroClass = darkMediaIds[item.id]
      ? 'pg-modal-hero pg-modal-hero--dark'
      : 'pg-modal-hero';

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

    modalEl.classList.add('is-open');
    modalEl.setAttribute('aria-hidden', 'false');
    document.body.classList.add('pg-modal-open');
    modalEl.querySelector('.pg-modal-close').focus();
  }

  function openMotionModal(item) {
    if (MOTION_LOCKED) return;
    if (!modalEl || !modalBodyEl) return;

    modalEl.classList.add('pg-modal--cinema');
    modalEl.classList.remove('is-closing');
    modalEl.removeAttribute('aria-labelledby');
    modalEl.setAttribute('aria-label', item.title);

    modalBodyEl.innerHTML = `<div class="pg-cinema-media">${renderCinemaMedia(item)}</div>`;

    lockScroll();
    modalEl.classList.add('is-open');
    modalEl.setAttribute('aria-hidden', 'false');
    modalEl.querySelector('.pg-modal-close').focus();

    const video = modalBodyEl.querySelector('video');
    if (video) {
      video.play().catch(() => {});
    }
  }

  function closeModal() {
    if (!modalEl || cinemaClosing) return;

    const isCinema = modalEl.classList.contains('pg-modal--cinema');

    if (isCinema) {
      cinemaClosing = true;
      pauseModalMedia();
      modalEl.classList.add('is-closing');
      modalEl.classList.remove('is-open');

      setTimeout(() => {
        modalEl.classList.remove('is-closing', 'pg-modal--cinema');
        modalEl.setAttribute('aria-hidden', 'true');
        modalBodyEl.innerHTML = '';
        unlockScroll();
        cinemaClosing = false;
      }, CINEMA_MS);
      return;
    }

    pauseModalMedia();
    modalEl.classList.remove('is-open', 'pg-modal--cinema', 'is-closing');
    modalEl.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('pg-modal-open');
  }

  async function init() {
    try {
      const res = await fetch(DATA_URL);
      if (!res.ok) throw new Error('Failed to load playground data');
      data = await res.json();
    } catch (err) {
      console.error('[Design Playground]', err);
      return;
    }

    renderGrid(interfaceGrid, data.interface, 'interface');
    renderGrid(motionGrid, data.motion, 'motion');

    interfacePanel.classList.add('is-active');
    interfacePanel.style.display = 'block';
    motionPanel.style.display = 'none';

    const firstTab = tabsEl.querySelector('[data-category="interface"]');
    updateIndicator(firstTab);

    tabsEl.querySelectorAll('.pg-tab').forEach((tab) => {
      tab.addEventListener('click', () => switchCategory(tab.dataset.category));
    });

    window.addEventListener('resize', () => {
      const activeTab = tabsEl.querySelector('[aria-selected="true"]');
      updateIndicator(activeTab);
    });

    if (modalEl) {
      modalEl.querySelector('.pg-modal-backdrop').addEventListener('click', closeModal);
      modalEl.querySelector('.pg-modal-close').addEventListener('click', closeModal);
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalEl.classList.contains('is-open')) closeModal();
      });
    }
  }

  init();
})();
