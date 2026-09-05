/* Prototype v4 - rauno.me-inspired direction */
(function () {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Tiles: fade in + videos play only while visible */
  const tiles = document.querySelectorAll('.tile');
  if (tiles.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target.querySelector('video');
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          if (video) video.play().catch(() => {});
        } else if (video) {
          video.pause();
        }
      });
    }, { threshold: 0.15 });
    tiles.forEach((t) => io.observe(t));
  }

  /* Inline hero videos play on hover */
  document.querySelectorAll('.inline-media video').forEach((v) => {
    const wrap = v.closest('.inline-media');
    wrap.addEventListener('mouseenter', () => v.play().catch(() => {}));
    wrap.addEventListener('mouseleave', () => v.pause());
  });

  /* Mantra: lines light up one by one as they enter view */
  const mantra = document.getElementById('mantra');
  if (mantra && !reduced) {
    const lines = mantra.querySelectorAll('span');
    const io = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      lines.forEach((line, i) => {
        setTimeout(() => line.classList.add('lit'), 260 * i);
      });
      io.disconnect();
    }, { threshold: 0.4 });
    io.observe(mantra);
  } else if (mantra) {
    mantra.querySelectorAll('span').forEach((l) => l.classList.add('lit'));
  }
})();
