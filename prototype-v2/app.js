import { initConstellation } from './hero-constellation.js';
import { DistortImage } from './image-distortion.js';

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ------------------------------------------------------------------ */
/* Smooth inertia scroll (Lenis)                                       */
/* ------------------------------------------------------------------ */
let lenis = null;
if (!reduced && window.Lenis) {
  lenis = new window.Lenis({ lerp: 0.1, wheelMultiplier: 1 });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

function scrollToTarget(target) {
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: -70, duration: 1.1 });
  else el.scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (href.length > 1) {
      e.preventDefault();
      scrollToTarget(href);
    }
  });
});

/* ------------------------------------------------------------------ */
/* Custom cursor                                                       */
/* ------------------------------------------------------------------ */
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let ringX = 0, ringY = 0, mouseX = -100, mouseY = -100;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

(function animateRing() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  ring.style.left = ringX + 'px';
  ring.style.top = ringY + 'px';
  requestAnimationFrame(animateRing);
})();

function bindCursorHover(root = document) {
  root.querySelectorAll('a, button, .hero-label, .palette-item').forEach((el) => {
    if (el.dataset.cursorBound) return;
    el.dataset.cursorBound = '1';
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '16px';
      cursor.style.height = '16px';
      ring.style.width = '52px';
      ring.style.height = '52px';
      ring.style.opacity = '0.6';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '10px';
      cursor.style.height = '10px';
      ring.style.width = '36px';
      ring.style.height = '36px';
      ring.style.opacity = '1';
    });
  });
}
bindCursorHover();

/* ------------------------------------------------------------------ */
/* Nav scroll state + reveals                                          */
/* ------------------------------------------------------------------ */
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

/* ------------------------------------------------------------------ */
/* Constellation hero                                                  */
/* ------------------------------------------------------------------ */
const featuredDefs = [
  { label: 'Deal Room', href: '#project-deal-room', nx: 0.24, ny: 0.10 },
  { label: 'AI Chat Assistant', href: '#project-agent', nx: 0.36, ny: -0.08 },
  { label: 'EasyEat', href: '#project-easyeat', nx: 0.22, ny: -0.32 },
  { label: 'Design Playground', href: '#work', nx: 0.10, ny: 0.34 },
  { label: 'Portfolio Assistant', href: '#about', nx: 0.33, ny: 0.28 },
];

initConstellation(
  document.getElementById('constellation'),
  document.getElementById('heroLabels'),
  featuredDefs
);
bindCursorHover(document.getElementById('heroLabels'));

document.getElementById('heroLabels').addEventListener('click', (e) => {
  const label = e.target.closest('.hero-label');
  if (!label) return;
  e.preventDefault();
  scrollToTarget(label.getAttribute('href'));
});

/* ------------------------------------------------------------------ */
/* WebGL image distortion                                              */
/* ------------------------------------------------------------------ */
document.querySelectorAll('.js-distort').forEach((img) => new DistortImage(img));

/* ------------------------------------------------------------------ */
/* Command palette                                                     */
/* ------------------------------------------------------------------ */
const palette = document.getElementById('palette');
const paletteInput = document.getElementById('paletteInput');
const paletteResults = document.getElementById('paletteResults');
const paletteAnswer = document.getElementById('paletteAnswer');
const paletteAnswerTitle = document.getElementById('paletteAnswerTitle');
const paletteAnswerBody = document.getElementById('paletteAnswerBody');
const paletteBack = document.getElementById('paletteBack');

let paletteOpen = false;
let paletteOpenedAt = 0;
let activeIndex = 0;
let currentItems = [];

const NAV_ITEMS = [
  { type: 'nav', title: 'Selected Work', hint: 'Section', action: () => scrollToTarget('#work') },
  { type: 'nav', title: 'About', hint: 'Section', action: () => scrollToTarget('#about') },
  { type: 'nav', title: 'Contact', hint: 'Section', action: () => scrollToTarget('#contact') },
  { type: 'nav', title: 'Back to top', hint: 'Section', action: () => scrollToTarget('#hero') },
  { type: 'nav', title: 'Deal Room — case study', hint: 'Open page', action: () => { window.location.href = '../deal-room-case-study.html'; } },
  { type: 'nav', title: 'Contextual Chat Assistant — case study', hint: 'Open page', action: () => { window.location.href = '../case-study-systematic-agent.html'; } },
  { type: 'nav', title: 'EasyEat — case study', hint: 'Open page', action: () => { window.location.href = '../easyeat-case-study.html'; } },
  { type: 'nav', title: 'Email Gaurav', hint: 'mailto', action: () => { window.location.href = 'mailto:gauravavinash3@gmail.com'; } },
  { type: 'nav', title: 'View current live site', hint: 'Open page', action: () => { window.location.href = '../index.html'; } },
];

let KB_ITEMS = [];

function plainText(md) {
  return (md || '')
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1');
}

function titleFromId(id) {
  return id
    .split('_')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

fetch('../assets/portfolio-assistant/knowledge-base.json?v=4')
  .then((r) => (r.ok ? r.json() : null))
  .then((kb) => {
    if (!kb || !kb.topics) return;
    KB_ITEMS = Object.entries(kb.topics).map(([id, topic]) => ({
      type: 'ask',
      title: titleFromId(id),
      hint: 'Answer',
      keywords: (topic.aliases || []).join(' '),
      answer: plainText(topic.response),
    }));
  })
  .catch(() => {});

function renderResults(query) {
  const q = query.trim().toLowerCase();

  const navMatches = NAV_ITEMS.filter((i) => !q || i.title.toLowerCase().includes(q));
  const askMatches = KB_ITEMS.filter(
    (i) => !q || i.title.toLowerCase().includes(q) || (i.keywords && i.keywords.toLowerCase().includes(q))
  ).slice(0, q ? 8 : 5);

  currentItems = [...navMatches, ...askMatches];
  activeIndex = 0;

  if (!currentItems.length) {
    paletteResults.innerHTML = '<div class="palette-empty">No results. Try “deal room”, “skills”, or “process”.</div>';
    return;
  }

  let html = '';
  if (navMatches.length) {
    html += '<div class="palette-group-label">Navigate</div>';
    navMatches.forEach((item) => {
      html += itemHtml(item, currentItems.indexOf(item));
    });
  }
  if (askMatches.length) {
    html += '<div class="palette-group-label">Ask about Gaurav</div>';
    askMatches.forEach((item) => {
      html += itemHtml(item, currentItems.indexOf(item));
    });
  }
  paletteResults.innerHTML = html;
  updateActive();
  bindCursorHover(paletteResults);
}

function itemHtml(item, index) {
  const icon = item.type === 'nav' ? '→' : '✦';
  return `
    <button class="palette-item" data-index="${index}" role="option">
      <span class="palette-item-icon">${icon}</span>
      <span>${item.title}</span>
      <span class="palette-item-hint">${item.hint}</span>
    </button>`;
}

function updateActive() {
  paletteResults.querySelectorAll('.palette-item').forEach((el) => {
    el.classList.toggle('is-active', Number(el.dataset.index) === activeIndex);
  });
  const active = paletteResults.querySelector('.palette-item.is-active');
  if (active) active.scrollIntoView({ block: 'nearest' });
}

function selectItem(index) {
  const item = currentItems[index];
  if (!item) return;
  if (item.type === 'nav') {
    closePalette();
    item.action();
  } else {
    paletteResults.hidden = true;
    paletteAnswer.hidden = false;
    paletteAnswerTitle.textContent = item.title;
    paletteAnswerBody.textContent = item.answer;
  }
}

function showResultsView() {
  paletteAnswer.hidden = true;
  paletteResults.hidden = false;
  paletteInput.focus();
}

function openPalette() {
  if (paletteOpen) return;
  paletteOpen = true;
  paletteOpenedAt = performance.now();
  palette.classList.add('is-open');
  palette.setAttribute('aria-hidden', 'false');
  paletteInput.value = '';
  showResultsView();
  renderResults('');
  setTimeout(() => paletteInput.focus(), 30);
  if (lenis) lenis.stop();
}

function closePalette() {
  if (!paletteOpen) return;
  // Ignore the same click that opened the palette landing on the backdrop
  if (performance.now() - paletteOpenedAt < 150) return;
  paletteOpen = false;
  palette.classList.remove('is-open');
  palette.setAttribute('aria-hidden', 'true');
  if (lenis) lenis.start();
}

document.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    paletteOpen ? closePalette() : openPalette();
    return;
  }
  if (!paletteOpen) return;

  if (e.key === 'Escape') {
    if (!paletteAnswer.hidden) showResultsView();
    else closePalette();
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();
    activeIndex = Math.min(activeIndex + 1, currentItems.length - 1);
    updateActive();
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    activeIndex = Math.max(activeIndex - 1, 0);
    updateActive();
  } else if (e.key === 'Enter') {
    e.preventDefault();
    selectItem(activeIndex);
  }
});

paletteInput.addEventListener('input', () => {
  showResultsView();
  renderResults(paletteInput.value);
});

paletteResults.addEventListener('click', (e) => {
  const btn = e.target.closest('.palette-item');
  if (btn) selectItem(Number(btn.dataset.index));
});

paletteBack.addEventListener('click', showResultsView);

document.querySelectorAll('[data-palette-close]').forEach((el) => el.addEventListener('click', closePalette));
document.getElementById('cmdkHint').addEventListener('click', openPalette);
document.querySelectorAll('[data-open-palette]').forEach((el) => el.addEventListener('click', openPalette));
