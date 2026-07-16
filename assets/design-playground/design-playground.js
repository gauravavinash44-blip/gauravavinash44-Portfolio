(function () {
  const DATA_URL = './assets/design-playground/playground-data.json';
  const section = document.getElementById('design-playground');
  if (!section) return;

  const tabsEl = section.querySelector('.pg-tabs');
  const indicatorEl = section.querySelector('.pg-tab-indicator');
  const interfacePanel = section.querySelector('[data-panel="interface"]');
  const motionPanel = section.querySelector('[data-panel="motion"]');
  const interfaceGrid = section.querySelector('[data-grid="interface"]');
  const motionGrid = section.querySelector('[data-grid="motion"]');
  const modalEl = document.getElementById('pgModal');
  const modalBodyEl = modalEl && modalEl.querySelector('.pg-modal-body');
  const exploreBtn = section.querySelector('[data-pg-explore]');

  let data = null;
  let activeCategory = 'interface';
  let scrollAnchor = 0;

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

  function createCard(item, index) {
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

    card.addEventListener('click', () => openModal(item));
    return card;
  }

  function renderGrid(gridEl, items) {
    gridEl.innerHTML = '';
    items.forEach((item, i) => gridEl.appendChild(createCard(item, i)));
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

    tabsEl.querySelectorAll('.pg-tab').forEach((tab) => {
      const selected = tab.dataset.category === category;
      tab.setAttribute('aria-selected', selected ? 'true' : 'false');
      if (selected) updateIndicator(tab);
    });
  }

  function openModal(item) {
    if (!modalEl || !modalBodyEl) return;

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

    const heroClass =
      item.id === 'nomad' ? 'pg-modal-hero pg-modal-hero--dark' : 'pg-modal-hero';

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

  function closeModal() {
    if (!modalEl) return;
    modalEl.classList.remove('is-open');
    modalEl.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('pg-modal-open');
    const video = modalEl.querySelector('video');
    if (video) video.pause();
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

    renderGrid(interfaceGrid, data.interface);
    renderGrid(motionGrid, data.motion);

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

    if (exploreBtn) {
      exploreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        tabsEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    }

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
