(function () {
  const { useState, useEffect, useRef, useCallback } = React;
  const e = React.createElement;

  const ASSETS = {
    profile: "../assets/profile.png",
    dealRoom: "../assets/deal-room-engagement-showcase.png",
    chat: "../assets/contextual-chat-assistant-showcase.png",
    easyeat: "../assets/easyeat-customization-showcase.png",
    resume: "../assets/Resume-Gaurav.pdf",
    logo: "../assets/logo-ga.svg",
    nomad: "../assets/design-playground/nomad-mobile-mockup.png",
    health: "../assets/design-playground/health-karma-mockup.png",
    swaply: "../assets/design-playground/swaply-mockup.png",
    loadingPoster: "../assets/design-playground/loading-range-poster.png",
    loadingVideo: "../assets/design-playground/loading-range.mp4",
  };

  const FEATURED = [
    {
      href: "./contextual-chat.html",
      img: ASSETS.chat,
      title: "Contextual chat for investor discovery",
      sub: "Designed and launched an AI chat assistant so investors explore companies in natural language—replacing a fragmented multi-step search. OpenAI + vector search cut search from 30–40 minutes to under 30s and lifted engagement 25%.",
      tags: ["AI Search", "B2B SaaS"],
      lead: true,
    },
    {
      href: "../deal-room-case-study.html",
      img: ASSETS.dealRoom,
      title: "Deal Room — structured deal execution",
      sub: "Deal work was split across surfaces. We anchored creation on the company profile—where intent already lives. +32% deal creation adoption.",
      tags: ["Deal Room", "B2B SaaS"],
    },
    {
      href: "../easyeat-case-study.html",
      img: ASSETS.easyeat,
      title: "EasyEat customization redesign",
      sub: "Multi-country launch across Android and iOS. Redesigned monetisation and customization flows for clearer CTAs and less friction. +8.3% QR adoption in 3 weeks.",
      tags: ["FoodTech", "Mobile UX"],
    },
  ];

  const PLAYGROUND = [
    { title: "Nomad", img: ASSETS.nomad, tip: "Nomad · Interface", href: "../index.html#design-playground" },
    { title: "Health Karma", img: ASSETS.health, tip: "Health Karma · Interface", href: "../index.html#design-playground" },
    { title: "Swaply", img: ASSETS.swaply, tip: "Swaply · Interface", href: "../index.html#design-playground" },
    { title: "Loading Range", img: ASSETS.loadingPoster, video: ASSETS.loadingVideo, tip: "Loading Range · Motion", href: "../index.html#design-playground" },
    { title: "Mobile UX", img: ASSETS.easyeat, tip: "Mobile transformation", href: "../mobile-transformation-case-study.html" },
  ];

  const BRING = [
    {
      icon: "01",
      title: "Clarity in complex systems",
      body: "I turn fragmented enterprise workflows into structured paths people can finish with confidence.",
    },
    {
      icon: "02",
      title: "Human–AI product craft",
      body: "Query states, progressive disclosure, and failure paths designed for uncertain model responses.",
    },
    {
      icon: "03",
      title: "Measurable outcomes",
      body: "Adoption, speed, and decision quality—design choices tied to proof, not decoration.",
    },
  ];

  const TIMELINE = [
    {
      heading: "Work experience",
      rows: [
        {
          date: "Mar 2023 – Present",
          title: "Product Designer II · Systematic",
          body: "New York, United States · Remote. AI-powered B2B SaaS—contextual chat, AI profile creation, search, data room, and templates for fundraising workflows.",
        },
        {
          date: "Aug 2022 – Nov 2022",
          title: "Product Designer · Valeo Health",
          body: "Gurugram, India. Early-stage healthcare SaaS across web, mobile web, and app. Led multi-language UX and scalable cross-platform patterns.",
        },
        {
          date: "Dec 2021 – Aug 2022",
          title: "UI/UX Designer · Easy Eat",
          body: "Gurugram, India. Multi-country product launch for Android and iOS. Redesigned monetisation flows and defined animation and micro-interaction guidelines.",
        },
        {
          date: "Jan 2021 – Dec 2021",
          title: "Visual Designer · LA FUORI",
          body: "New Delhi, India. Sole designer on a B2B website—IA, wireframes, and visual execution—plus campaigns, motion, and brand assets.",
        },
      ],
    },
    {
      heading: "Education",
      rows: [
        {
          date: "2017 – 2021",
          title: "Bachelor of Design · National Institute of Fashion Technology",
          body: "CGPA 8. Design foundation spanning UX strategy, interaction, visual design, and systems thinking.",
        },
      ],
    },
  ];

  function Icon({ name }) {
    if (name === "work") {
      return e("svg", { viewBox: "0 0 24 24", fill: "none", "aria-hidden": true },
        e("rect", { x: 3, y: 7, width: 18, height: 13, rx: 2, stroke: "currentColor", strokeWidth: 1.7 }),
        e("path", { d: "M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", stroke: "currentColor", strokeWidth: 1.7 })
      );
    }
    if (name === "about") {
      return e("svg", { viewBox: "0 0 24 24", fill: "none", "aria-hidden": true },
        e("circle", { cx: 12, cy: 8, r: 3.2, stroke: "currentColor", strokeWidth: 1.7 }),
        e("path", { d: "M5 19c1.5-3.2 4-4.8 7-4.8S17.5 15.8 19 19", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" })
      );
    }
    if (name === "contact") {
      return e("svg", { viewBox: "0 0 24 24", fill: "none", "aria-hidden": true },
        e("rect", { x: 3, y: 5, width: 18, height: 14, rx: 2, stroke: "currentColor", strokeWidth: 1.7 }),
        e("path", { d: "m4 8 8 6 8-6", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" })
      );
    }
    if (name === "linkedin") {
      return e("svg", { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true, width: 14, height: 14 },
        e("path", { d: "M6.5 9.5H4V20h2.5V9.5zM5.25 4A1.5 1.5 0 1 0 5.26 7a1.5 1.5 0 0 0-.01-3zM20 20h-2.5v-5.6c0-1.8-.7-2.7-1.9-2.7-1.1 0-1.7.8-2 1.5-.1.3-.1.7-.1 1.1V20H11V9.5h2.4v1.4c.5-.8 1.5-1.9 3.5-1.9 2.4 0 4.1 1.6 4.1 5.1V20z" })
      );
    }
    if (name === "mail") {
      return e("svg", { viewBox: "0 0 24 24", fill: "none", "aria-hidden": true, width: 14, height: 14 },
        e("rect", { x: 3, y: 5, width: 18, height: 14, rx: 2, stroke: "currentColor", strokeWidth: 1.7 }),
        e("path", { d: "m4 8 8 6 8-6", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" })
      );
    }
    return null;
  }

  function Eye({ sizeClass }) {
    return e("span", {
      className: "ga-eye " + (sizeClass || ""),
      "data-eye": "true",
      "aria-hidden": "true",
    }, e("span", { className: "ga-pupil", "data-pupil": "true" }));
  }

  function Splash({ onDone }) {
    const [phase, setPhase] = useState("boot");
    const reduced = useRef(window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    useEffect(() => {
      document.body.classList.add("is-splash-active");
      const t = reduced.current
        ? [0, 40, 80, 120, 160]
        : [200, 1700, 1920, 2770, 4050];
      const ids = [
        setTimeout(() => setPhase("ring"), t[0]),
        setTimeout(() => setPhase("cover"), t[1]),
        setTimeout(() => setPhase("ready"), t[2]),
        setTimeout(() => setPhase("reveal"), t[3]),
        setTimeout(() => {
          setPhase("done");
          document.body.classList.remove("is-splash-active");
          onDone();
        }, t[4]),
      ];
      return () => ids.forEach(clearTimeout);
    }, [onDone]);

    const cls = [
      "splash",
      ["ring", "cover", "ready", "reveal"].includes(phase) ? "is-ringing" : "",
      phase === "cover" || phase === "ready" ? "is-covering" : "",
      phase === "reveal" ? "is-revealing" : "",
      phase === "done" ? "is-done" : "",
    ].filter(Boolean).join(" ");

    return e("div", { className: cls, role: "status", "aria-label": "Loading" },
      e("div", { className: "splash-wipe", "aria-hidden": true }),
      e("div", { className: "splash-logo", "aria-hidden": true },
        e("svg", { className: "splash-ring", viewBox: "0 0 80 80" },
          e("circle", { className: "splash-ring-track", cx: 40, cy: 40, r: 36 }),
          e("circle", { className: "splash-ring-progress", cx: 40, cy: 40, r: 36 })
        ),
        e("span", { className: "splash-logo-mark" },
          e("img", { src: ASSETS.logo, alt: "", width: 72, height: 39, decoding: "async" })
        )
      )
    );
  }

  function useEyes() {
    useEffect(() => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 3 };
      let pending = false;

      function updatePupils() {
        pending = false;
        document.querySelectorAll("[data-eye]").forEach((eye) => {
          const pupil = eye.querySelector("[data-pupil]");
          if (!pupil) return;
          const r = eye.getBoundingClientRect();
          if (!r.width) return;
          const cx = r.left + r.width / 2;
          const cy = r.top + r.height / 2;
          const dx = mouse.x - cx;
          const dy = mouse.y - cy;
          const dist = Math.hypot(dx, dy) || 1;
          const reach = Math.min(dist / 240, 1);
          const maxX = r.width * 0.2;
          const maxY = r.height * 0.2;
          pupil.style.transform =
            "translate(" + ((dx / dist) * maxX * reach).toFixed(1) + "px," +
            ((dy / dist) * maxY * reach).toFixed(1) + "px)";
        });
      }

      function requestUpdate() {
        if (!pending) {
          pending = true;
          requestAnimationFrame(updatePupils);
        }
      }

      const onMove = (ev) => {
        mouse.x = ev.clientX;
        mouse.y = ev.clientY;
        requestUpdate();
      };

      window.addEventListener("mousemove", onMove, { passive: true });
      window.addEventListener("scroll", requestUpdate, { passive: true, capture: true });

      let blinkTimer = 0;
      const blinkEye = (eye, cls, ms) => {
        eye.classList.add(cls);
        setTimeout(() => eye.classList.remove(cls), ms);
      };
      const scheduleBlink = () => {
        if (reduced) return;
        blinkTimer = window.setTimeout(() => {
          document.querySelectorAll("[data-eye]").forEach((eye) => blinkEye(eye, "is-blinking", 160));
          scheduleBlink();
        }, 2000 + Math.random() * 4000);
      };
      scheduleBlink();

      const onClick = (ev) => {
        const eye = ev.target.closest && ev.target.closest("[data-eye]");
        if (!eye) return;
        eye.classList.remove("is-blinking");
        blinkEye(eye, "is-winking", 320);
      };
      document.addEventListener("click", onClick);

      return () => {
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("scroll", requestUpdate, true);
        document.removeEventListener("click", onClick);
        clearTimeout(blinkTimer);
      };
    }, []);
  }

  /* Michelle-style sticky cover parallax + hero plx */
  function useCoverScroll(ready) {
    useEffect(() => {
      if (!ready) return;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const mobile = window.matchMedia("(max-width: 900px)").matches;
      if (reduced || mobile) return;

      let pending = false;
      const introPanel = document.querySelector(".ga-panel--intro");

      const applyHeroEyesParallax = (el, plx) => {
        const lift = parseFloat(el.dataset.lift || 0);
        let ty = plx - lift;
        el.style.transform = "translateY(" + ty.toFixed(1) + "px)";
        if (!introPanel) return;
        const minGap = 16;
        const overflow = el.getBoundingClientRect().bottom - (introPanel.getBoundingClientRect().top - minGap);
        if (overflow > 0) {
          ty -= overflow;
          el.style.transform = "translateY(" + ty.toFixed(1) + "px)";
        }
      };

      const parallax = () => {
        const vh = window.innerHeight || 800;

        document.querySelectorAll("[data-plx]").forEach((el) => {
          const factor = parseFloat(el.getAttribute("data-plx")) || 0;
          const sec = el.closest("[data-screen-label]") || el.parentElement;
          const r = sec.getBoundingClientRect();
          const d = r.top + r.height / 2 - vh / 2;
          const plx = -d * factor;
          if (el.classList.contains("ga-hero-eyes-parallax")) {
            applyHeroEyesParallax(el, plx);
            return;
          }
          el.style.transform = "translateY(" + plx.toFixed(1) + "px)";
        });

        document.querySelectorAll(".ga-cover[data-plx-section]").forEach((section) => {
          const inner = section.querySelector(":scope > .ga-cover-inner");
          if (!inner) return;
          const factor = parseFloat(section.getAttribute("data-plx-section")) || 0.06;
          const roll = parseFloat(section.getAttribute("data-plx-roll")) || 0;
          const r = section.getBoundingClientRect();
          const d = r.top + r.height / 2 - vh / 2;
          const ty = (-d * factor).toFixed(1);
          const rot = roll ? ((d / vh) * roll).toFixed(2) : "0";
          inner.style.transform = "translateY(" + ty + "px) rotate(" + rot + "deg)";
        });
      };

      const onScroll = () => {
        if (!pending) {
          pending = true;
          requestAnimationFrame(() => {
            pending = false;
            parallax();
          });
        }
      };

      document.addEventListener("scroll", onScroll, { passive: true, capture: true });
      window.addEventListener("resize", onScroll, { passive: true });
      parallax();

      return () => {
        document.removeEventListener("scroll", onScroll, true);
        window.removeEventListener("resize", onScroll);
      };
    }, [ready]);
  }

  function useReveals(ready) {
    useEffect(() => {
      if (!ready) return;
      const nodes = document.querySelectorAll(".ga-reveal");
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        nodes.forEach((n) => n.classList.add("is-visible"));
        return;
      }
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      nodes.forEach((n) => io.observe(n));
      return () => io.disconnect();
    }, [ready]);
  }

  function BrandMark() {
    return e("a", {
      href: "#top",
      className: "ga-brand",
      "aria-label": "Gaurav Avinash home",
      "data-tip": "Home",
    },
      e("img", {
        src: ASSETS.logo,
        alt: "",
        width: 112,
        height: 61,
        decoding: "async",
      })
    );
  }

  function Nav() {
    const tipRef = useRef(null);

    useEffect(() => {
      const tip = tipRef.current;
      if (!tip) return;
      const onOver = (ev) => {
        const el = ev.target.closest && ev.target.closest("[data-tip]");
        if (!el) return;
        const r = el.getBoundingClientRect();
        tip.textContent = el.getAttribute("data-tip");
        tip.style.left = r.left + r.width / 2 + "px";
        tip.style.top = r.bottom + 10 + "px";
        tip.classList.add("is-on");
      };
      const onOut = (ev) => {
        if (!(ev.target.closest && ev.target.closest("[data-tip]"))) return;
        tip.classList.remove("is-on");
      };
      document.addEventListener("mouseover", onOver);
      document.addEventListener("mouseout", onOut);
      return () => {
        document.removeEventListener("mouseover", onOver);
        document.removeEventListener("mouseout", onOut);
      };
    }, []);

    return e(React.Fragment, null,
      e("nav", { className: "ga-nav", "aria-label": "Primary" },
        e("a", { href: "#top", className: "ga-nav-home", "aria-label": "Home", "data-tip": "Home" },
          e(Eye), e(Eye)
        ),
        e("div", { className: "ga-nav-links" },
          e("a", { href: "#work", className: "ga-nav-link", "aria-label": "Work", "data-tip": "Work" }, e(Icon, { name: "work" })),
          e("a", { href: "#about", className: "ga-nav-link", "aria-label": "About", "data-tip": "About" }, e(Icon, { name: "about" })),
          e("a", { href: "#contact", className: "ga-nav-link", "aria-label": "Contact", "data-tip": "Contact" }, e(Icon, { name: "contact" }))
        )
      ),
      e("div", { className: "ga-tooltip", ref: tipRef, "aria-hidden": true })
    );
  }

  function WorkCard({ item }) {
    return e("a", {
      href: item.href,
      className: "ga-card" + (item.lead ? " ga-card--lead" : ""),
    },
      e("span", { className: "ga-card-media" },
        e("img", { src: item.img, alt: "", loading: "lazy", decoding: "async" })
      ),
      e("span", { className: "ga-card-body" },
        e("span", { className: "ga-card-copy" },
          e("span", { className: "ga-card-title" }, item.title),
          e("span", { className: "ga-card-sub" }, item.sub),
          e("span", { className: "ga-tags" },
            item.tags.map((t) => e("span", { className: "ga-tag", key: t }, t))
          )
        ),
        e("span", { className: "ga-card-footer" },
          e("span", { className: "ga-card-arrow", "aria-hidden": true }, "↑")
        )
      )
    );
  }

  function MarqueeTile({ item, index, hidden }) {
    const rot = "ga-marquee-tile--" + ((index % 6) + 1);
    const kids = item.video
      ? e("video", {
          src: item.video,
          poster: item.img,
          muted: true,
          loop: true,
          playsInline: true,
          autoPlay: true,
          "aria-hidden": true,
        })
      : e("img", { src: item.img, alt: hidden ? "" : item.title, loading: "lazy" });

    return e("a", {
      href: item.href,
      className: "ga-marquee-tile " + rot,
      "data-tip": item.tip,
      "aria-hidden": hidden ? "true" : undefined,
      tabIndex: hidden ? -1 : undefined,
    }, kids);
  }

  function App() {
    const [ready, setReady] = useState(false);
    const onSplashDone = useCallback(() => setReady(true), []);

    useEyes();
    useCoverScroll(ready);
    useReveals(ready);

    const marqueeItems = PLAYGROUND.concat(PLAYGROUND);

    return e("div", { className: "ga-root" },
      e(Splash, { onDone: onSplashDone }),
      e(Nav),
      e(BrandMark),

      e("div", { className: "ga-fold", id: "top" },
        e("header", { className: "ga-hero", "data-screen-label": "Hero" },
          e("h1", { className: "ga-hero-title", "data-plx": "0.32" },
            "A designer", e("br"),
            "who turns", e("br"),
            "complexity", e("br"),
            "into clarity"
          ),
          e("div", { className: "ga-hero-eyes", "aria-hidden": true },
            e("div", { className: "ga-hero-eyes-parallax", "data-plx": "0.18" },
              e(Eye, { sizeClass: "ga-eye-hero" }),
              e(Eye, { sizeClass: "ga-eye-hero" })
            )
          )
        ),

        e("section", { className: "ga-panel--intro", "data-screen-label": "Intro" },
          e("div", { className: "ga-intro-row ga-reveal" },
            e("h2", { className: "ga-intro-heading" }, "Hi! I am Gaurav Avinash"),
            e("div", { className: "ga-intro-actions" },
              e("a", {
                className: "ga-icon-btn",
                href: "https://www.linkedin.com/in/gauravavinash",
                target: "_blank",
                rel: "noreferrer",
                "aria-label": "LinkedIn",
              }, e(Icon, { name: "linkedin" })),
              e("a", {
                className: "ga-icon-btn",
                href: "mailto:gauravavinash3@gmail.com",
                "aria-label": "Email",
              }, e(Icon, { name: "mail" })),
              e("a", {
                className: "ga-pill-btn",
                href: ASSETS.resume,
                target: "_blank",
                rel: "noreferrer",
              }, "Resume")
            ),
            e("p", { className: "ga-intro-copy" },
              "Product designer with 4+ years crafting AI-powered B2B SaaS products. I specialise in Human–AI interaction, complex data workflows, and 0→1 builds—turning ambiguous problems into intuitive, measurable experiences."
            )
          )
        ),

        e("section", { className: "ga-panel--featured", id: "work" },
          e("div", { className: "ga-reveal" },
            e("p", { className: "ga-eyebrow" }, e("span", { className: "ga-eyebrow-dot" }), "Featured work"),
            e("h2", { className: "ga-section-title" }, "I design AI products for complex B2B systems.")
          ),
          e("div", { className: "ga-featured-grid ga-reveal" },
            FEATURED.map((item) => e(WorkCard, { item, key: item.href + item.title }))
          )
        )
      ),

      /* Sticky cover: More work (Design Playground) */
      e("section", {
        className: "ga-cover ga-more-work",
        "data-screen-label": "More work",
        "data-plx-section": "0.07",
        "data-plx-roll": "0.8",
        id: "more-work",
      },
        e("div", { className: "ga-cover-inner" },
          e("div", { className: "ga-more-work-head" },
            e("h2", null, "More work"),
            e("p", null, "Design playground — interface explorations and motion studies beyond full case studies.")
          ),
          e("div", { className: "ga-marquee-viewport", "aria-label": "Design playground projects" },
            e("div", { className: "ga-marquee-track" },
              marqueeItems.map((item, i) => e(MarqueeTile, {
                item,
                index: i,
                hidden: i >= PLAYGROUND.length,
                key: item.title + "-" + i,
              }))
            )
          )
        )
      ),

      /* Sticky cover: What I bring */
      e("section", {
        className: "ga-cover ga-bring",
        "data-screen-label": "What can I bring",
        "data-plx-section": "0.06",
        "data-plx-roll": "0.6",
      },
        e("div", { className: "ga-cover-inner" },
          e("h2", { className: "ga-bring-title" }, "What can I bring"),
          e("div", { className: "ga-bring-grid" },
            BRING.map((item) => e("article", { className: "ga-bring-item", key: item.title },
              e("span", { className: "ga-bring-icon", "aria-hidden": true }, item.icon),
              e("h3", null, item.title),
              e("p", null, item.body)
            ))
          )
        )
      ),

      /* About */
      e("section", { className: "ga-about", id: "about", "data-screen-label": "About" },
        e("h2", { className: "ga-about-title ga-reveal" }, "About"),
        e("div", { className: "ga-about-grid ga-reveal" },
          e("div", { className: "ga-about-col" },
            e("div", { className: "ga-about-copy" },
              e("p", null, "Product Designer II at Systematic—remote with a New York team on AI-powered B2B SaaS. I specialise in Human–AI interaction design, complex data workflows, and 0→1 product builds."),
              e("p", null, "Known for translating ambiguous problems into intuitive, measurable experiences—improving engagement, reducing drop-off, and accelerating user workflows."),
              e("p", null, "Open to Product Designer roles in B2B SaaS. I solve complex workflows where clarity and measurable outcomes both matter.")
            ),
            TIMELINE.map((block) => e("div", { className: "ga-timeline", key: block.heading },
              e("h3", null, block.heading),
              block.rows.map((row) => e("div", { className: "ga-timeline-row", key: row.date + row.title },
                e("div", { className: "ga-timeline-date" }, row.date),
                e("div", null,
                  e("p", null, row.title),
                  e("p", null, row.body)
                )
              ))
            ))
          ),
          e("figure", { className: "ga-about-photo" },
            e("img", { src: ASSETS.profile, alt: "Gaurav Avinash portrait" })
          )
        )
      ),

      /* Sticky cover: Contact */
      e("section", {
        className: "ga-cover ga-contact",
        id: "contact",
        "data-screen-label": "Contact",
        "data-plx-section": "0.05",
        "data-plx-roll": "0.4",
      },
        e("div", { className: "ga-cover-inner" },
          e("div", { className: "ga-contact-grid" },
            e("div", null,
              e("p", { className: "ga-eyebrow" }, e("span", { className: "ga-eyebrow-dot" }), "Get in touch"),
              e("div", { className: "ga-contact-eyes", "aria-hidden": true },
                e(Eye, { sizeClass: "ga-eye-contact" }),
                e(Eye, { sizeClass: "ga-eye-contact" })
              ),
              e("h2", { className: "ga-contact-title" },
                "Let's build something ",
                e("em", null, "that ships.")
              ),
              e("p", { className: "ga-contact-sub" },
                "Open to Product Designer roles in B2B SaaS. I solve complex workflows where clarity and measurable outcomes both matter."
              )
            ),
            e("div", { className: "ga-contact-links" },
              e("a", { className: "ga-contact-link", href: "mailto:gauravavinash3@gmail.com" },
                e("div", null,
                  e("div", { className: "ga-contact-link-label" }, "gauravavinash3@gmail.com"),
                  e("div", { className: "ga-contact-link-meta" }, "Email · Best way to reach me")
                ),
                e("span", null, "↗")
              ),
              e("a", {
                className: "ga-contact-link",
                href: "https://www.linkedin.com/in/gauravavinash",
                target: "_blank",
                rel: "noreferrer",
              },
                e("div", null,
                  e("div", { className: "ga-contact-link-label" }, "LinkedIn"),
                  e("div", { className: "ga-contact-link-meta" }, "www.linkedin.com/in/gauravavinash")
                ),
                e("span", null, "↗")
              ),
              e("a", { className: "ga-contact-link", href: "tel:+918527386404" },
                e("div", null,
                  e("div", { className: "ga-contact-link-label" }, "Phone"),
                  e("div", { className: "ga-contact-link-meta" }, "+91 8527386404")
                ),
                e("span", null, "↗")
              ),
              e("a", {
                className: "ga-contact-link",
                href: ASSETS.resume,
                target: "_blank",
                rel: "noreferrer",
              },
                e("div", null,
                  e("div", { className: "ga-contact-link-label" }, "Download Resume"),
                  e("div", { className: "ga-contact-link-meta" }, "Updated Aug 2026")
                ),
                e("span", null, "↓")
              )
            )
          )
        )
      ),

      e("footer", { className: "ga-footer" },
        e("div", { className: "ga-footer-inner" },
          e("span", null, "Gaurav Avinash · Product Designer · UX/AI Design"),
          e("span", null, "4+ years · AI B2B SaaS · Human–AI interaction"),
          e("span", null, "Prototype v6 · green")
        )
      )
    );
  }

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(e(App));
})();
