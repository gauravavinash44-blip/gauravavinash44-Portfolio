(() => {
  const ASSET_BASE = "./assets/deal-room-presentation/";
  const MANIFEST_URL = `${ASSET_BASE}themes.json?v=4`;

  const ICON_IMAGE = `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" stroke-width="1.6"/>
      <circle cx="9" cy="10" r="1.6" fill="currentColor"/>
      <path d="M4.5 16.5 9 13l3 2.5 3.5-4 4 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;

  const SLIDES = [
    {
      id: "title",
      html: `
        <div class="deck-hero-head">
          <h1 class="deck-title deck-title--brand">Deal Room</h1>
          <p class="deck-title-secondary">Designing a guided investment workflow — so founders and investors move from intent to commitment inside one structured path.</p>
        </div>
        <div class="deck-hero-meta">
          <p class="deck-sub">B2B SaaS  Fintech  Deal Room</p>
          <dl class="deck-meta">
            <div><dt>ROLE</dt><dd>Product Designer II</dd></div>
            <div><dt>SYSTEMATIC</dt><dd>Remote</dd></div>
            <div><dt>TIMELINE</dt><dd>2023 — 2024</dd></div>
            <div><dt>ADOPTION</dt><dd>+32% deal creation</dd></div>
            <div><dt>FRICTION</dt><dd>-27% discovery to action</dd></div>
          </dl>
        </div>
      `,
    },
    {
      id: "users",
      html: `
        <div class="deck-hero-head">
          <p class="deck-eyebrow">U X  C H A L L E N G E</p>
          <h2 class="deck-title">Fundraising broke outside the product — exactly when trust should compound.</h2>
        </div>
        <div class="deck-hero-body">
          <div class="deck-grid deck-grid--challenge">
            <article class="deck-card">
              <h3>Scenario</h3>
              <p class="deck-sub">
                Deal creation sat buried away from the company profile, where fundraising intent already lived. NDAs, documents, and permissions were scattered across email and Drive. There was no single answer to who viewed, signed, downloaded, or showed interest, so founders kept repeating the same context across calls and threads.
              </p>
            </article>
            <article class="deck-card">
              <h3>Task</h3>
              <ul class="deck-list">
                <li>Anchor deal creation where intent already exists, the company profile</li>
                <li>Bring NDA review and signing inside the product, not an email attachment</li>
                <li>Give founders and investors one shared source of truth for deal status</li>
                <li>Design for both sides of the table: founders creating, investors reviewing</li>
              </ul>
            </article>
          </div>
        </div>
      `,
    },
    {
      id: "hook",
      html: `
        <div class="deck-hero-head">
          <p class="deck-eyebrow">T H E  H O O K</p>
          <h2 class="deck-title deck-title--wide">Deal interest existed. A reliable path to commitment did not.</h2>
        </div>
        <div class="deck-hero-body">
          <p class="deck-sub">Founders and investors already had profiles, documents, NDAs, and conversations — but they lived in email, Drive, WhatsApp, and disconnected product surfaces.</p>
          <p class="deck-sub">Momentum died between tools, not from a lack of intent.</p>
          <p class="deck-sub">Every handoff between tools reintroduced uncertainty for both sides.</p>
        </div>
      `,
    },
    {
      id: "problem",
      html: `
        <div class="deck-hero-head">
          <p class="deck-eyebrow">Research · Secondary Research</p>
          <h2 class="deck-title">Quick study: how existing tools handle confidentiality.</h2>
        </div>
        <div class="deck-hero-body">
          <p class="deck-sub">Studied DocSend and DocuSign to understand how they structure NDA and document-sharing flows: how simple the signing process is, their pricing model, and their end-to-end UX from upload to signed access. The goal was to see what a lightweight, trustworthy NDA gate could look like living inside a product, instead of a separate legal tool.</p>
          <div class="deck-grid deck-grid--research">
            <article class="deck-card">
              <h3>What we looked for</h3>
              <ul class="deck-list deck-list--in-card">
                <li>Signing simplicity</li>
                <li>Free vs paid tiers</li>
                <li>Element structure</li>
                <li>UX &amp; flow patterns</li>
              </ul>
            </article>
            <div class="deck-stack">
              <article class="deck-card">
                <h3>DocSend</h3>
                <p>Document sharing + analytics</p>
              </article>
              <article class="deck-card">
                <h3>DocuSign</h3>
                <p>E-signature + NDA workflow</p>
              </article>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: "states",
      html: `
        <div class="deck-hero-head">
          <p class="deck-eyebrow">Research · User Conversations</p>
          <h2 class="deck-title">Gathering insights on deal execution and NDA friction.</h2>
        </div>
        <div class="deck-hero-body">
          <p class="deck-sub">To understand where deal creation and document sharing were breaking down, we spoke with founders, partner investors, and our internal PM through calls and working sessions. We connected with 6-7 partner investors and founders, plus regular check-ins with our PM to align on what was buildable.</p>
          <div class="deck-grid deck-grid--conversations">
            <article class="deck-card">
              <h3>Questions asked</h3>
              <ol class="deck-list deck-list--in-card">
                <li>Where do you drop off when creating or setting up a deal?</li>
                <li>How do you currently sign NDAs when reviewing a deal?</li>
                <li>Once a deal is shared, how do you track who has access, who's signed, and what stage each person is at?</li>
              </ol>
            </article>
            <article class="deck-card deck-participants">
              <h3>Participants</h3>
              <ul class="deck-participants-list">
                <li class="deck-participant">
                  <span class="deck-participant__avatar" aria-hidden="true">HK</span>
                  <div class="deck-participant__info">
                    <strong class="deck-participant__name">Hisham Kissim</strong>
                    <span class="deck-participant__role">Venture Capitalist</span>
                  </div>
                </li>
                <li class="deck-participant">
                  <span class="deck-participant__avatar" aria-hidden="true">PM</span>
                  <div class="deck-participant__info">
                    <strong class="deck-participant__name">Peter Marchioni</strong>
                    <span class="deck-participant__role">Investor Partner</span>
                  </div>
                </li>
                <li class="deck-participant">
                  <span class="deck-participant__avatar" aria-hidden="true">PP</span>
                  <div class="deck-participant__info">
                    <strong class="deck-participant__name">Partha Panwala</strong>
                    <span class="deck-participant__role">Product Manager, Systematic</span>
                  </div>
                </li>
              </ul>
            </article>
          </div>
        </div>
      `,
    },
    {
      id: "research",
      html: `
        <div class="deck-hero-head">
          <p class="deck-eyebrow">Research · Identified Insights</p>
          <h2 class="deck-title">What the conversations surfaced.</h2>
        </div>
        <div class="deck-hero-body">
          <div class="deck-insights">
            <article class="deck-insight">
              <span class="deck-insight__mark" aria-hidden="true">“</span>
              <p class="deck-insight__quote">When I want to check out a company, I still have to sign an NDA somewhere else before I can even see the documents.</p>
              <p class="deck-insight__who">Hisham Kissim, VC</p>
              <hr class="deck-insight__rule" />
              <p class="deck-insight__context">Investors expect confidentiality handled in the same place they're evaluating a deal, not as an external step.</p>
            </article>
            <article class="deck-insight">
              <span class="deck-insight__mark" aria-hidden="true">“</span>
              <p class="deck-insight__quote">If someone wants me to sign an NDA, I usually end up doing it on a completely different platform.</p>
              <p class="deck-insight__who">Peter Marchioni, Investor Partner</p>
              <hr class="deck-insight__rule" />
              <p class="deck-insight__context">NDA signing is disconnected from deal review, adding a tool switch at the exact moment trust needs to build.</p>
            </article>
            <article class="deck-insight">
              <span class="deck-insight__mark" aria-hidden="true">“</span>
              <p class="deck-insight__quote">We were losing people right at deal creation. Get them past that step, and tracking becomes the real value.</p>
              <p class="deck-insight__who">Partha Panwala, PM</p>
              <hr class="deck-insight__rule" />
              <p class="deck-insight__context">The earliest drop-off was creating the deal itself. The entry point had to get simpler first.</p>
            </article>
          </div>
        </div>
      `,
    },
    {
      id: "insights",
      html: `
        <div class="deck-hero-head">
          <p class="deck-eyebrow">Analysis · Assumptions</p>
          <h2 class="deck-title">What we assumed going in, and why.</h2>
        </div>
        <div class="deck-hero-body">
          <div class="deck-assumptions">
            <article class="deck-assumption">
              <span class="deck-assumption__num" aria-hidden="true">1</span>
              <div class="deck-assumption__copy">
                <h3 class="deck-assumption__title">Deal creation happens from the company profile.</h3>
                <p class="deck-assumption__body">Investors and founders both start from a company's profile, not a separate dashboard. Anchoring creation there keeps context intact from the moment the deal exists.</p>
              </div>
            </article>
            <article class="deck-assumption">
              <span class="deck-assumption__num" aria-hidden="true">2</span>
              <div class="deck-assumption__copy">
                <h3 class="deck-assumption__title">NDA signing needs to happen inside the platform.</h3>
                <p class="deck-assumption__body">Feedback from Hisham and Peter made this clear: being sent elsewhere to sign an NDA breaks trust at the exact moment it should be building.</p>
              </div>
            </article>
            <article class="deck-assumption">
              <span class="deck-assumption__num" aria-hidden="true">3</span>
              <div class="deck-assumption__copy">
                <h3 class="deck-assumption__title">Deal profiles can be shared, and access granted or revoked anytime.</h3>
                <p class="deck-assumption__body">An investor can create multiple deals for the same company and share any deal with others. The owner needs control over who sees what, and the ability to pull access back.</p>
              </div>
            </article>
          </div>
        </div>
      `,
    },
    {
      id: "assumptions",
      html: `
        <div class="deck-hero-head">
          <p class="deck-eyebrow">Analysis · Problem Solving</p>
          <h2 class="deck-title">Two HMWs shaped everything that followed.</h2>
        </div>
        <div class="deck-hero-body">
          <div class="deck-grid">
            <article class="deck-card">
              <h3>HMW</h3>
              <p><strong>How might we let deal creators track document engagement without manually following up?</strong></p>
              <p>An engagement tab surfaces automatically when a deal is shared, showing document access level and how the deal is performing against everyone it's shared with.</p>
            </article>
            <article class="deck-card">
              <h3>HMW</h3>
              <p><strong>How might we let creators and signers handle NDAs without ever leaving the platform?</strong></p>
              <p>Three paths: a default Systematic NDA template (recommended, fastest), a custom document the creator uploads for digital signature, or a pre-approved template reusable across deals.</p>
            </article>
          </div>
        </div>
      `,
    },
    {
      id: "hmw",
      html: `
        <div class="deck-hero-head">
          <p class="deck-eyebrow">The Tension</p>
          <h2 class="deck-title">Two incomplete paths kept showing up in critiques.</h2>
        </div>
        <div class="deck-hero-body">
          <div class="deck-grid">
            <article class="deck-card deck-card--warn">
              <span class="deck-badge">Option A</span>
              <h3>Add more deal dashboard widgets and status labels on top of the existing sprawl.</h3>
              <p>More status without a guided path still confuses.</p>
            </article>
            <article class="deck-card deck-card--warn">
              <span class="deck-badge">Option B</span>
              <h3>Ship a standalone Deal Room object, disconnected from the company profile.</h3>
              <p>A room without profile context still forces context switching.</p>
            </article>
          </div>
        </div>
      `,
    },
    {
      id: "tension",
      html: `
        <div class="deck-hero-head">
          <p class="deck-eyebrow">K E Y D E C I S I O N</p>
          <h2 class="deck-title deck-title--wide">We didn't add another destination. We anchored deal execution where intent already lives — the company profile.</h2>
        </div>
        <div class="deck-hero-body">
          <div class="deck-decision-flow" aria-label="Commitment ladder">
            <article class="deck-decision-step">
              <span class="deck-decision-step__num">1</span>
              <h3 class="deck-decision-step__title">Setup</h3>
              <p class="deck-decision-step__body">Create the room from the profile with shared context</p>
            </article>
            <span class="deck-decision-flow__arrow" aria-hidden="true">→</span>
            <article class="deck-decision-step">
              <span class="deck-decision-step__num">2</span>
              <h3 class="deck-decision-step__title">NDA</h3>
              <p class="deck-decision-step__body">Confidentiality as a product gate, not an email attachment</p>
            </article>
            <span class="deck-decision-flow__arrow" aria-hidden="true">→</span>
            <article class="deck-decision-step">
              <span class="deck-decision-step__num">3</span>
              <h3 class="deck-decision-step__title">Commitments</h3>
              <p class="deck-decision-step__body">Documents, access, and interest tracked in one flow</p>
            </article>
          </div>
        </div>
      `,
    },
    {
      id: "decision",
      html: `
        <div class="deck-hero-head">
          <p class="deck-eyebrow">IDEATION · USER FLOW</p>
          <h2 class="deck-title">Two flows, one shared source of truth.</h2>
        </div>
        <div class="deck-hero-body">
          <div class="deck-flowmap">
            <section class="deck-flowmap__lane deck-flowmap__lane--host" aria-label="Host deal creator flow">
              <p class="deck-flowmap__role">Host / Deal creator</p>
              <div class="deck-flowmap__row">
                <span class="deck-flowmap__stage">Create deal</span>
                <div class="deck-flowmap__steps">
                  <span class="deck-flowmap__step">Company profile</span>
                  <span class="deck-flowmap__step">Setup Deal Terms</span>
                  <span class="deck-flowmap__step">Deal profile</span>
                  <span class="deck-flowmap__step">Upload docs</span>
                </div>
              </div>
              <div class="deck-flowmap__row">
                <span class="deck-flowmap__stage">Share &amp; gate</span>
                <div class="deck-flowmap__steps">
                  <span class="deck-flowmap__step">Share to investor(s)</span>
                  <span class="deck-flowmap__step">Set NDA requirement</span>
                  <span class="deck-flowmap__step">Upload NDA (3 options)</span>
                  <span class="deck-flowmap__step">Track engagement</span>
                </div>
              </div>
            </section>

            <section class="deck-flowmap__lane deck-flowmap__lane--investor" aria-label="Investor participant flow">
              <p class="deck-flowmap__role">Investor / Participant</p>
              <div class="deck-flowmap__row">
                <span class="deck-flowmap__stage">Receive</span>
                <div class="deck-flowmap__steps">
                  <span class="deck-flowmap__step">Get notified (email / app)</span>
                  <span class="deck-flowmap__step">Open deal profile</span>
                  <span class="deck-flowmap__step">Sign NDA prompt</span>
                  <span class="deck-flowmap__step">Sign &amp; unlock</span>
                </div>
              </div>
              <div class="deck-flowmap__row">
                <span class="deck-flowmap__stage">Engage</span>
                <div class="deck-flowmap__steps">
                  <span class="deck-flowmap__step">View documents</span>
                  <span class="deck-flowmap__step">Subscribe / commit</span>
                  <span class="deck-flowmap__step">Track deal status</span>
                  <span class="deck-flowmap__step">Deal closed or rejected</span>
                </div>
              </div>
            </section>

            <p class="deck-flowmap__banner">
              <strong>Deal Terms banner</strong>
              <span>(creator side): Upload NDA · Upload LOI · Collect Subscription · Receive Fund · Close / Reject Deal</span>
            </p>
          </div>
        </div>
      `,
    },
    {
      id: "flow-host",
      html: `
        <div class="deck-hero-head">
          <p class="deck-eyebrow">SOLUTION APPROACH</p>
          <h2 class="deck-title">Four systems that turned fragmented fundraising into guided execution.</h2>
        </div>
        <div class="deck-hero-body">
          <div class="deck-grid">
            <article class="deck-card">
              <h3>1 — Profile-anchored entry</h3>
              <p>“Create Deal Room” lives where fundraising intent already exists, so context travels with the action.</p>
            </article>
            <article class="deck-card">
              <h3>2 — Guided gates</h3>
              <p>Setup → NDA → Commitments as a visible ladder, not hidden states buried in navigation.</p>
            </article>
            <article class="deck-card">
              <h3>3 — In-product confidentiality</h3>
              <p>NDA review and signing stay inside the deal path, so access unlocks without leaving the product.</p>
            </article>
            <article class="deck-card">
              <h3>4 — Progress visibility</h3>
              <p>Dashboards surface who viewed, signed, downloaded, and showed interest, so follow-ups become intentional.</p>
            </article>
          </div>
        </div>
      `,
    },
    {
      id: "flow-participant",
      html: `
        <div class="deck-hero-head">
          <p class="deck-eyebrow">SOLUTION · SCENARIO WALK THROUGH 1 OF 3</p>
          <h2 class="deck-title">Create the deal, set the rule</h2>
        </div>
        <div class="deck-hero-body">
          <p class="deck-sub">Scenario: As an investor, I want to create a deal and set a rule that no one can view my documents until they've signed an NDA.</p>
          <div class="deck-grid deck-grid--screens">
            <article class="deck-card deck-card--screen">
              <h3>Deal creation from company profile</h3>
              <figure class="deck-screen-frame">
                <img src="./assets/deal-room-presentation/screens/screen-walk-create-profile.png?v=2" alt="Company profile with Create Deal Room action" />
              </figure>
            </article>
            <article class="deck-card deck-card--screen">
              <h3>Deal profile with NDA requirement toggle</h3>
              <figure class="deck-screen-frame">
                <img src="./assets/deal-room-presentation/screens/screen-walk-nda-toggle.png?v=1" alt="Deal profile with NDA requirement toggle" />
              </figure>
            </article>
          </div>
        </div>
      `,
    },
    {
      id: "solution",
      html: `
        <div class="deck-hero-head">
          <p class="deck-eyebrow">SOLUTION · SCENARIO WALK THROUGH 2 OF 3</p>
          <h2 class="deck-title">Share it, sign it</h2>
        </div>
        <div class="deck-hero-body">
          <p class="deck-sub">Scenario: As the person receiving a shared deal, I want to know immediately what's expected of me before I see anything sensitive, then get instant access once I sign.</p>
          <div class="deck-grid deck-grid--screens">
            <article class="deck-card deck-card--screen">
              <h3>Notification with deal invite</h3>
              <figure class="deck-screen-frame deck-screen-frame--center">
                <img src="./assets/deal-room-presentation/screens/screen-walk-notify.png?v=3" alt="In-product notification: deal shared with you" />
              </figure>
            </article>
            <article class="deck-card deck-card--screen">
              <h3>Sign NDA to grant access</h3>
              <figure class="deck-screen-frame">
                <img src="./assets/deal-room-presentation/screens/screen-walk-sign-nda.png?v=1" alt="Sign NDA to grant access" />
              </figure>
            </article>
          </div>
        </div>
      `,
    },
    {
      id: "principles",
      html: `
        <div class="deck-hero-head">
          <p class="deck-eyebrow">SOLUTION · SCENARIO WALK THROUGH 3 OF 3</p>
          <h2 class="deck-title">Manage and track access</h2>
        </div>
        <div class="deck-hero-body">
          <p class="deck-sub">Scenario: As the deal owner, I want to grant or revoke access at any point, and see who's signed and who hasn't, without chasing anyone.</p>
          <div class="deck-grid deck-grid--screens">
            <article class="deck-card deck-card--screen">
              <h3>Engagement dashboard, per-person status</h3>
              <figure class="deck-screen-frame">
                <img src="./assets/deal-room-presentation/screens/screen-walk-engagement.png?v=2" alt="Engagement dashboard with per-person status" />
              </figure>
            </article>
            <article class="deck-card deck-card--screen">
              <h3>Deal Terms Track Access</h3>
              <figure class="deck-screen-frame">
                <img src="./assets/deal-room-presentation/screens/screen-walk-access.png?v=3" alt="Deal Terms track access" />
              </figure>
            </article>
          </div>
        </div>
      `,
    },
    {
      id: "impact",
      html: `
        <div class="deck-hero-head">
          <p class="deck-eyebrow">IMPACT</p>
          <h2 class="deck-title">Measured outcomes after launch.</h2>
        </div>
        <div class="deck-hero-body">
          <div class="deck-grid">
            <article class="deck-card">
              <h3>+32%</h3>
              <p>Deal creation adoption after anchoring entry to the company profile.</p>
            </article>
            <article class="deck-card">
              <h3>-27%</h3>
              <p>Discovery-to-action friction across the guided commitment path.</p>
            </article>
          </div>
          <h3>Clearer next steps</h3>
          <p>Fewer dead ends between interest, NDA, and investor commitment.</p>
          <p class="deck-sub">[ Mark: insert real analytics screenshot or metric source here if you have one, e.g. dashboard export or PM report ]</p>
        </div>
      `,
    },
    {
      id: "learnings",
      html: `
        <div class="deck-hero-head">
          <p class="deck-eyebrow">LEARNINGS &amp; ROLE</p>
          <h2 class="deck-title">What I'd carry into the next one.</h2>
        </div>
        <div class="deck-hero-body">
          <div class="deck-grid">
            <article class="deck-card">
              <h3>LEARNINGS</h3>
              <ul class="deck-list">
                <li>Entry points beat dashboards when intent already lives somewhere else.</li>
                <li>Gates create trust when they're visible, not when they're legal afterthoughts.</li>
                <li>Status is only useful if it answers “what do I do next?”</li>
              </ul>
            </article>
            <article class="deck-card">
              <h3>MY ROLE</h3>
              <p>Led research synthesis, IA, flow design, UI, and handoff for Deal Room, working with product, engineering, and legal on gated commitment paths and adoption metrics.</p>
              <h3 style="margin-top: 14px;">Collaboration</h3>
              <p>Partnered tightly on NDA sequencing, permission models, and dashboard definitions so progress stayed measurable after ship.</p>
            </article>
          </div>
        </div>
      `,
    },
    {
      id: "next",
      html: `
        <div class="deck-hero-head">
          <p class="deck-eyebrow">NEXT STEPS</p>
          <h2 class="deck-title">Where this product can go next.</h2>
        </div>
        <div class="deck-hero-body">
          <ul class="deck-list">
            <li>Deeper investor interest signals tied to follow-up playbooks</li>
            <li>Reusable gate patterns across deal types for faster team learning</li>
            <li>Stronger founder coaching moments when a gate stalls</li>
          </ul>
        </div>
      `,
    },
    {
      id: "close",
      html: `
        <div class="deck-hero-head">
          <p class="deck-eyebrow">Deal Room · Systematic</p>
          <h2 class="deck-title deck-title--wide">Thanks.</h2>
        </div>
        <div class="deck-hero-body">
          <p class="deck-sub">Thank you for reading. Let's build smarter products together.</p>
          <dl class="deck-meta">
            <div><dt>gauravavinash3@gmail.com</dt><dd></dd></div>
            <div><dt>linkedin.com/in/gauravavinash</dt><dd></dd></div>
          </dl>
        </div>
      `,
    },
  ];

  function screenSlide(id, eyebrow, title, slotTitle, slotHint) {
    return {
      id,
      html: `
        <div class="deck-hero-head">
          <p class="deck-eyebrow">${eyebrow}</p>
          <h2 class="deck-title">${title}</h2>
        </div>
        <div class="deck-hero-body">
          <div class="deck-two">
            <div>
              <p class="deck-sub">${slotHint}</p>
            </div>
            <figure class="deck-slot" data-slot="${id}" aria-label="${slotTitle} placeholder">
              <div class="deck-slot-inner">
                <div class="deck-slot-icon">${ICON_IMAGE}</div>
                <p class="deck-slot-tag">Screen placeholder</p>
                <strong>${slotTitle}</strong>
                <span>Drop a screen export in assets/deal-room-presentation/screens/ — wired via themes.json.</span>
              </div>
            </figure>
          </div>
        </div>
      `,
    };
  }

  let manifest = null;

  async function loadManifest() {
    try {
      const res = await fetch(MANIFEST_URL);
      if (!res.ok) return null;
      return await res.json();
    } catch (_) {
      return null;
    }
  }

  function slideMeta(slideId) {
    return manifest?.slides?.[slideId] || { theme: "intro" };
  }

  function applySlideTheme(slideId) {
    const meta = slideMeta(slideId);
    const themeKey = meta.theme || "intro";
    const theme = manifest?.themes?.[themeKey] || {};

    document.documentElement.dataset.deckTheme = themeKey;
    document.documentElement.style.setProperty(
      "--slide-accent",
      theme.accent || "#27ae60"
    );
    document.documentElement.style.setProperty(
      "--slide-wash",
      theme.wash || "#ffffff"
    );
    document.documentElement.style.setProperty(
      "--slide-grid",
      theme.grid ? "1" : "0"
    );
  }

  function hydrateSlotImages(root) {
    root.querySelectorAll(".deck-slot[data-src]").forEach((slot) => {
      if (slot.dataset.hydrated === "true") return;
      const src = slot.getAttribute("data-src");
      if (!src) return;
      const slotId = slot.dataset.slot || slot.getAttribute("data-slot");
      const img = new Image();
      // Cache-bust overwritten `screen-profile` / `screen-create` images instantly.
      const bustedSrc =
        slotId === "screen-profile" || slotId === "screen-create"
          ? `${src}?v=3`
          : src;
      img.src = bustedSrc;
      img.alt = slot.getAttribute("aria-label") || "Deal Room screen";
      img.onload = () => {
        slot.dataset.hydrated = "true";
        slot.classList.add("has-image");
        slot.appendChild(img);
      };
    });
  }

  function mountLottie(container, src) {
    if (!window.lottie || container.dataset.lottieReady === "true") return;
    fetch(src)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!data) return;
        container.dataset.lottieReady = "true";
        container.innerHTML = "";
        window.lottie.loadAnimation({
          container,
          renderer: "svg",
          loop: true,
          autoplay: false,
          animationData: data,
        });
        container._lottie = window.lottie.getRegisteredAnimations().slice(-1)[0];
        const slide = container.closest(".deck-slide");
        if (slide?.classList.contains("is-active")) {
          container._lottie?.play();
        }
      })
      .catch(() => {});
  }

  function hydrateSlideAssets(slideEl, slideId) {
    if (!manifest) return;
    const meta = slideMeta(slideId);

    if (meta.screen) {
      const slot = slideEl.querySelector(".deck-slot");
      if (slot && !slot.getAttribute("data-src")) {
        slot.setAttribute("data-src", ASSET_BASE + meta.screen);
      }
    }

    if (meta.illustration && !slideEl.querySelector(".deck-illustration")) {
      const src = ASSET_BASE + meta.illustration;
      const probe = new Image();
      probe.onload = () => {
        if (slideEl.querySelector(".deck-illustration")) return;
        const fig = document.createElement("figure");
        fig.className = "deck-illustration";
        fig.setAttribute("aria-hidden", "true");
        const img = document.createElement("img");
        img.src = src;
        img.alt = "";
        fig.appendChild(img);
        slideEl.classList.add("deck-slide--with-art");
        slideEl.appendChild(fig);
        requestAnimationFrame(() => fig.classList.add("is-loaded"));
      };
      probe.src = src;
    }

    if (meta.lottie) {
      const slotInner = slideEl.querySelector(".deck-slot-inner");
      const listRoot = slideEl.querySelector(".deck-list");
      const anchor = slotInner || listRoot;
      if (anchor && !slideEl.querySelector(".deck-lottie")) {
        const src = ASSET_BASE + meta.lottie;
        fetch(src, { method: "HEAD" })
          .then((r) => {
            if (!r.ok) return;
            const box = document.createElement("div");
            box.className = "deck-lottie";
            box.dataset.lottieSrc = src;
            anchor.prepend(box);
            mountLottie(box, src);
          })
          .catch(() => {});
      }
    }

    hydrateSlotImages(slideEl);
  }

  function hydrateAllAssets(stageEl) {
    if (!manifest || !stageEl) return;
    stageEl.querySelectorAll(".deck-slide").forEach((slideEl) => {
      const slideId = slideEl.id.replace(/^slide-/, "");
      hydrateSlideAssets(slideEl, slideId);
    });
  }

  function playActiveLotties(stageEl) {
    if (!window.lottie || !stageEl) return;
    stageEl.querySelectorAll(".deck-slide .deck-lottie").forEach((box) => {
      box._lottie?.pause();
    });
    const active = stageEl.querySelector(".deck-slide.is-active");
    active?.querySelectorAll(".deck-lottie").forEach((box) => {
      if (box.dataset.lottieSrc && box.dataset.lottieReady !== "true") {
        mountLottie(box, box.dataset.lottieSrc);
        return;
      }
      box._lottie?.play();
    });
  }

  async function boot() {
    manifest = await loadManifest();

    const stage = document.getElementById("deck-stage");
    const bar = document.getElementById("deck-progress");
    const counter = document.getElementById("deck-counter");
    const btnPrev = document.getElementById("deck-prev");
    const btnNext = document.getElementById("deck-next");

    if (!stage || !bar || !counter || !btnPrev || !btnNext) return;

    let index = 0;
    let animTimer = 0;

    function renderSlides() {
      stage.innerHTML = SLIDES.map(
        (slide, i) => `
      <article class="deck-slide${i === 0 ? " is-active" : ""}" data-index="${i}" id="slide-${slide.id}" aria-hidden="${i === 0 ? "false" : "true"}">
        ${slide.html}
      </article>
    `
      ).join("");
    }

    function updateChrome() {
      const total = SLIDES.length;
      const current = index + 1;
      bar.style.width = `${(current / total) * 100}%`;
      counter.textContent = `${String(current).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
      btnPrev.disabled = index === 0;
      btnNext.disabled = index === total - 1;
      document.title = `Deal Room — ${SLIDES[index].id} (${current}/${total}) · Gaurav Avinash`;
    }

    function goTo(next, dir = 1) {
      if (next < 0 || next >= SLIDES.length || next === index) return;

      const slides = [...stage.querySelectorAll(".deck-slide")];
      const currentEl = slides[index];
      const nextEl = slides[next];
      if (!currentEl || !nextEl) return;

      window.clearTimeout(animTimer);
      slides.forEach((el) => {
        el.classList.remove("is-active", "is-exit-left", "is-exit-right");
        el.setAttribute("aria-hidden", "true");
      });

      currentEl.classList.add(dir > 0 ? "is-exit-left" : "is-exit-right");
      nextEl.classList.add("is-active");
      nextEl.setAttribute("aria-hidden", "false");

      index = next;
      applySlideTheme(SLIDES[index].id);
      updateChrome();
      playActiveLotties(stage);

      animTimer = window.setTimeout(() => {
        currentEl.classList.remove("is-exit-left", "is-exit-right");
      }, 280);
    }

    function next() {
      goTo(index + 1, 1);
    }

    function prev() {
      goTo(index - 1, -1);
    }

    renderSlides();
    applySlideTheme(SLIDES[0].id);
    updateChrome();
    hydrateAllAssets(stage);
    playActiveLotties(stage);

    btnPrev.addEventListener("click", prev);
    btnNext.addEventListener("click", next);

    window.addEventListener("keydown", (e) => {
      if (e.target && ["INPUT", "TEXTAREA"].includes(e.target.tagName)) return;
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(0, -1);
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(SLIDES.length - 1, 1);
      }
    });

    /* One wheel stroke = one horizontal slide (snap). */
    let wheelLock = false;
    let wheelTimer = 0;
    const WHEEL_COOLDOWN_MS = 520;
    const WHEEL_THRESHOLD = 18;

    function onWheelNavigate(e) {
      const active = stage.querySelector(".deck-slide.is-active");
      if (active && active.scrollHeight > active.clientHeight + 2) {
        const atTop = active.scrollTop <= 0;
        const atBottom = active.scrollTop + active.clientHeight >= active.scrollHeight - 2;
        if ((e.deltaY < 0 && !atTop) || (e.deltaY > 0 && !atBottom)) {
          return;
        }
      }

      if (Math.abs(e.deltaY) < WHEEL_THRESHOLD && Math.abs(e.deltaX) < WHEEL_THRESHOLD) return;

      e.preventDefault();
      if (wheelLock) return;

      const dominant = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (dominant === 0) return;

      wheelLock = true;
      if (dominant > 0) next();
      else prev();

      window.clearTimeout(wheelTimer);
      wheelTimer = window.setTimeout(() => {
        wheelLock = false;
      }, WHEEL_COOLDOWN_MS);
    }

    window.addEventListener("wheel", onWheelNavigate, { passive: false });

    let touchX = null;
    let touchY = null;
    stage.addEventListener(
      "touchstart",
      (e) => {
        touchX = e.changedTouches[0].clientX;
        touchY = e.changedTouches[0].clientY;
      },
      { passive: true }
    );
    stage.addEventListener(
      "touchend",
      (e) => {
        if (touchX == null || touchY == null) return;
        const dx = e.changedTouches[0].clientX - touchX;
        const dy = e.changedTouches[0].clientY - touchY;
        touchX = null;
        touchY = null;
        if (Math.abs(dx) < 40 && Math.abs(dy) < 40) return;
        if (Math.abs(dx) >= Math.abs(dy)) {
          if (dx < 0) next();
          else prev();
        } else {
          if (dy < 0) next();
          else prev();
        }
      },
      { passive: true }
    );
  }

  boot();
})();
