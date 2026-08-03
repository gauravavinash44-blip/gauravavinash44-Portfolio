/* Prototype v3 — family.co-inspired direction */
(function () {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) document.documentElement.classList.add('reduced');

  gsap.registerPlugin(ScrollTrigger);

  /* ---------------- Smooth scroll ---------------- */
  let lenis = null;
  if (!reduced && window.Lenis) {
    lenis = new window.Lenis({ lerp: 0.11 });
    window.__lenis = lenis;
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href.length <= 1) return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(el, { offset: -20, duration: 1.2 });
      else el.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* ---------------- Hero entrance ---------------- */
  if (!reduced) {
    const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
    intro
      .from('.nav-inner', { y: -24, opacity: 0, duration: 0.7 })
      .from('.hero-h1', { y: 44, opacity: 0, duration: 0.9 }, 0.1)
      .from('.hero-sub', { y: 30, opacity: 0, duration: 0.8 }, 0.25)
      .from('.hero-btns .btn', { y: 22, opacity: 0, duration: 0.7, stagger: 0.08 }, 0.38)
      .from('.hero-device', { y: 90, opacity: 0, scale: 0.94, duration: 1.1, ease: 'power4.out' }, 0.45)
      .from('.float-card', {
        y: 40,
        opacity: 0,
        scale: 0.7,
        duration: 0.9,
        stagger: 0.09,
        ease: 'back.out(1.8)',
      }, 0.75);
  }

  /* ---------------- Floating cards: bob + parallax ---------------- */
  const floatCards = gsap.utils.toArray('.float-card');

  if (!reduced) {
    // Gentle bob on the inner element so it doesn't fight the parallax
    floatCards.forEach((card, i) => {
      const inner = card.firstElementChild;
      gsap.to(inner, {
        y: () => 10 + Math.random() * 10,
        duration: 2.6 + Math.random() * 1.6,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: i * 0.35,
      });
    });

    // Mouse parallax
    const setters = floatCards.map((card) => ({
      depth: parseFloat(card.dataset.depth || '1'),
      x: gsap.quickTo(card, 'x', { duration: 0.9, ease: 'power3.out' }),
      y: gsap.quickTo(card, 'y', { duration: 0.9, ease: 'power3.out' }),
    }));
    const device = document.querySelector('.hero-device');
    const deviceX = gsap.quickTo(device, 'x', { duration: 1.1, ease: 'power3.out' });
    const deviceY = gsap.quickTo(device, 'y', { duration: 1.1, ease: 'power3.out' });

    window.addEventListener('pointermove', (e) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      setters.forEach((s) => {
        s.x(nx * -26 * s.depth);
        s.y(ny * -18 * s.depth);
      });
      deviceX(nx * -10);
      deviceY(ny * -7);
    });

    // Slight scroll drift on hero stage
    gsap.to('.hero-stage', {
      y: 60,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
    });
  }

  /* ---------------- Scroll reveals ---------------- */
  gsap.utils.toArray('[data-reveal]').forEach((el) => {
    if (reduced) return;
    gsap.fromTo(
      el,
      { y: 44, opacity: 0, scale: 0.98 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 86%', once: true },
      }
    );
  });

  /* ---------------- Pinned Deal Room flow ---------------- */
  const flowTabs = gsap.utils.toArray('.flow-tab');
  const flowScreens = gsap.utils.toArray('.flow-screen');
  const flowCaptions = gsap.utils.toArray('.flow-caption');
  const STEPS = flowScreens.length;
  let currentStep = 0;

  function setStep(step) {
    if (step === currentStep) return;
    currentStep = step;
    flowTabs.forEach((el, i) => el.classList.toggle('is-active', i === step));
    flowScreens.forEach((el, i) => el.classList.toggle('is-active', i === step));
    flowCaptions.forEach((el, i) => el.classList.toggle('is-active', i === step));
  }

  ScrollTrigger.create({
    trigger: '.flow',
    start: 'top top',
    end: '+=' + STEPS * 720,
    pin: '.flow-pin',
    scrub: true,
    onUpdate(self) {
      const step = Math.min(STEPS - 1, Math.floor(self.progress * STEPS));
      setStep(step);
    },
  });

  // Tabs are also clickable (jump within the pinned range)
  flowTabs.forEach((tab, i) => {
    tab.style.cursor = 'pointer';
    tab.addEventListener('click', () => setStep(i));
  });

  /* Recalculate scroll bounds once all media has loaded */
  window.addEventListener('load', () => {
    if (lenis) lenis.resize();
    ScrollTrigger.refresh();
  });

  /* ---------------- Autoplay videos when visible ---------------- */
  document.querySelectorAll('video[autoplay]').forEach((v) => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      });
    }, { threshold: 0.25 });
    io.observe(v);
  });

  /* ---------------- Animated counters ---------------- */
  gsap.utils.toArray('.detail-num').forEach((el) => {
    if (reduced) return;
    const target = parseFloat(el.dataset.count);
    const prefix = el.dataset.prefix ? el.dataset.prefix.replace('&lt;', '<') : '';
    const suffix = el.dataset.suffix || '';
    const decimals = String(el.dataset.count).includes('.') ? 1 : 0;
    const obj = { v: 0 };
    gsap.to(obj, {
      v: target,
      duration: 1.6,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      onUpdate() {
        el.textContent = prefix + obj.v.toFixed(decimals) + suffix;
      },
    });
  });
})();
