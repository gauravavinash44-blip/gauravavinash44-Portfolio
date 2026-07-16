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
  const modalDialogEl = modalEl && modalEl.querySelector('.pg-modal-dialog');
  const modalBodyEl = modalEl && modalEl.querySelector('.pg-modal-body');
  const lightboxEl = document.getElementById('pgLightbox');
  const lightboxImgEl = document.getElementById('pgLightboxImg');
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

  function isMobileLayout(item) {
    return item.preview && item.preview.layout === 'mobile';
  }

  function renderImageTag(preview, lazy) {
    const attrs = lazy
      ? 'loading="lazy" decoding="async"'
      : 'loading="eager" decoding="async" fetchpriority="high"';
    const srcset = preview.srcSet
      ? ` srcset="${escapeHtml(preview.srcSet)}"`
      : '';

    return `<img src="${escapeHtml(preview.src)}"${srcset} alt="${escapeHtml(preview.alt)}" width="${preview.width}" height="${preview.height}" ${attrs}>`;
  }

  function renderPreviewMedia(item, lazy) {
    const preview = item.preview;

    if (item.media && item.media.type === 'video') {
      return `<video muted loop playsinline autoplay poster="${escapeHtml(item.media.poster || preview.src)}" aria-hidden="true"><source src="${escapeHtml(item.media.src)}" type="video/mp4"></video>`;
    }

    if (item.media && item.media.type === 'gif') {
      return renderImageTag({ ...preview, src: item.media.src }, lazy);
    }

    return renderImageTag(preview, lazy);
  }

  function formatThinking(thinking) {
    if (Array.isArray(thinking)) {
      const items = thinking.map((line) => `<li>${escapeHtml(line)}</li>`).join('');
      return `<ul class="pg-modal-list">${items}</ul>`;
    }
    return `<p class="pg-modal-text">${escapeHtml(thinking)}</p>`;
  }

  function createCard(item, index) {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = `pg-card reveal${index > 0 ? ` reveal-delay-${Math.min(index, 3)}` : ''}`;
    card.setAttribute('data-project-id', item.id);
    card.setAttribute('aria-label', `View details for ${item.title}`);

    const mediaClass = isMobileLayout(item) ? 'pg-card-media pg-card-media--mobile' : 'pg-card-media';

    card.innerHTML = `
      <div class="${mediaClass}">
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

  function openLightbox(src, alt) {
    if (!lightboxEl || !lightboxImgEl) return;
    lightboxImgEl.src = src;
    lightboxImgEl.alt = alt || '';
    lightboxEl.classList.add('is-open');
    lightboxEl.setAttribute('aria-hidden', 'false');
    document.body.classList.add('pg-lightbox-open');
    lightboxEl.querySelector('.pg-lightbox-close').focus();
  }

  function closeLightbox() {
    if (!lightboxEl) return;
    lightboxEl.classList.remove('is-open');
    lightboxEl.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('pg-lightbox-open');
    lightboxImgEl.removeAttribute('src');
  }

  function bindHeroZoom(button, preview) {
    if (!button) return;
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      openLightbox(preview.src, preview.alt);
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

    const overviewHtml = item.overview
      ? `<div class="pg-modal-block">
          <div class="pg-modal-label">Overview</div>
          <p class="pg-modal-text">${escapeHtml(item.overview)}</p>
        </div>`
      : '';

    const contentHtml = `
      <div class="pg-modal-content">
        <div class="pg-modal-category">${escapeHtml(item.category)}</div>
        <h2 class="pg-modal-title" id="pgModalTitle">${escapeHtml(item.title)}</h2>
        ${overviewHtml}
        <div class="pg-modal-block">
          <div class="pg-modal-label">Design Objective</div>
          <p class="pg-modal-text">${escapeHtml(item.objective)}</p>
        </div>
        <div class="pg-modal-block">
          <div class="pg-modal-label">Design Thinking</div>
          ${formatThinking(item.thinking)}
        </div>
        <div class="pg-modal-block">
          <div class="pg-modal-label">Tools</div>
          <div class="pg-modal-tools">${toolsHtml}</div>
        </div>
        ${protoHtml}
        ${galleryHtml ? `<div class="pg-modal-gallery">${galleryHtml}</div>` : ''}
      </div>
    `;

    if (modalDialogEl) {
      modalDialogEl.classList.toggle('pg-modal-dialog--editorial', isMobileLayout(item));
    }

    if (isMobileLayout(item)) {
      const heroImg = renderImageTag(item.preview, false);
      modalBodyEl.className = 'pg-modal-body pg-modal-body--editorial';
      modalBodyEl.innerHTML = `
        <div class="pg-modal-visual">
          <button type="button" class="pg-hero-zoom" aria-label="View full size mockup">
            ${heroImg}
          </button>
          <span class="pg-hero-zoom-hint">Click to enlarge</span>
        </div>
        ${contentHtml}
      `;
      bindHeroZoom(modalBodyEl.querySelector('.pg-hero-zoom'), item.preview);
    } else {
      modalBodyEl.className = 'pg-modal-body';

      let heroMedia = renderPreviewMedia(item, false);
      if (item.media && item.media.type === 'video') {
        heroMedia = `<video controls playsinline poster="${escapeHtml(item.media.poster || item.preview.src)}"><source src="${escapeHtml(item.media.src)}" type="video/mp4"></video>`;
      } else if (item.media && item.media.type === 'gif') {
        heroMedia = renderImageTag({ ...item.preview, src: item.media.src }, false);
      } else {
        heroMedia = renderImageTag(item.preview, false);
      }

      modalBodyEl.innerHTML = `
        <div class="pg-modal-hero">${heroMedia}</div>
        ${contentHtml}
      `;
    }

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
    if (modalDialogEl) modalDialogEl.classList.remove('pg-modal-dialog--editorial');
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
    }

    if (lightboxEl) {
      lightboxEl.querySelector('.pg-lightbox-backdrop').addEventListener('click', closeLightbox);
      lightboxEl.querySelector('.pg-lightbox-close').addEventListener('click', closeLightbox);
    }

    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      if (lightboxEl && lightboxEl.classList.contains('is-open')) {
        closeLightbox();
        return;
      }
      if (modalEl && modalEl.classList.contains('is-open')) closeModal();
    });
  }

  init();
})();
