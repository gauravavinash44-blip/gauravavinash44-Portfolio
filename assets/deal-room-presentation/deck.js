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
          <p class="deck-title-secondary">Founders and investors were already talking. The paperwork and status lived somewhere else.</p>
        </div>
        <div class="deck-hero-meta">
          <p class="deck-sub">B2B SaaS  Fintech  Deal Room</p>
          <dl class="deck-meta">
            <div><dt>ROLE</dt><dd>Product Designer II</dd></div>
            <div><dt>SYSTEMATIC</dt><dd>Remote</dd></div>
            <div><dt>TIMELINE</dt><dd>2023 - 2024</dd></div>
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
          <h2 class="deck-title">Deal creation was off the company profile. NDAs were in email. Status was a rumor.</h2>
        </div>
        <div class="deck-hero-body">
          <div class="deck-grid deck-grid--challenge">
            <article class="deck-card">
              <h3>Scenario</h3>
              <p class="deck-sub">
                People hung out on the company profile. Create Deal lived elsewhere. NDAs bounced through DocuSign-ish email threads and Drive folders. On the next call, founders still had to say who opened what, who signed, who ghosted.
              </p>
            </article>
            <article class="deck-card">
              <h3>Task</h3>
              <ul class="deck-list">
                <li>Put create on the company profile</li>
                <li>NDA review and sign inside the product</li>
                <li>One place for deal status both sides could trust</li>
                <li>Design for creators and reviewers, not one hero user</li>
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
          <h2 class="deck-title deck-title--wide">Interest showed up. Commitment got stuck between tools.</h2>
        </div>
        <div class="deck-hero-body">
          <p class="deck-sub">Profiles in Systematic. Docs in Drive. NDAs in email. Chats in WhatsApp. Same deal, four places.</p>
          <p class="deck-sub">Nobody said the product was bad. They just stopped mid-path and never quite came back the same day.</p>
        </div>
      `,
    },
    {
      id: "problem",
      html: `
        <div class="deck-hero-head">
          <p class="deck-eyebrow">Research · Secondary Research</p>
          <h2 class="deck-title">DocSend and DocuSign, for the parts we might steal.</h2>
        </div>
        <div class="deck-hero-body">
          <p class="deck-sub">Not a competitive teardown. More like: how short is the path from upload to signed access, and what does free vs paid force you to eat. We needed a light gate inside Systematic, not another legal destination.</p>
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
          <h2 class="deck-title">Six or seven calls. Same three sticking points.</h2>
        </div>
        <div class="deck-hero-body">
          <p class="deck-sub">Founders, partner investors, and Partha on the PM side. Not a polished research program. Working sessions and calls until the same frictions stopped surprising us.</p>
          <div class="deck-grid deck-grid--conversations">
            <article class="deck-card">
              <h3>Questions asked</h3>
              <ol class="deck-list deck-list--in-card">
                <li>Where do you drop off when creating a deal?</li>
                <li>How do you sign NDAs when reviewing one?</li>
                <li>Once it's shared, how do you track who has access and who's signed?</li>
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
          <h2 class="deck-title">What they said, mostly unedited.</h2>
        </div>
        <div class="deck-hero-body">
          <div class="deck-insights">
            <article class="deck-insight">
              <span class="deck-insight__mark" aria-hidden="true">“</span>
              <p class="deck-insight__quote">When I want to check out a company, I still have to sign an NDA somewhere else before I can even see the documents.</p>
              <p class="deck-insight__who">Hisham Kissim, VC</p>
              <hr class="deck-insight__rule" />
              <p class="deck-insight__context">NDA outside the place he's evaluating. That gap kept coming up.</p>
            </article>
            <article class="deck-insight">
              <span class="deck-insight__mark" aria-hidden="true">“</span>
              <p class="deck-insight__quote">If someone wants me to sign an NDA, I usually end up doing it on a completely different platform.</p>
              <p class="deck-insight__who">Peter Marchioni, Investor Partner</p>
              <hr class="deck-insight__rule" />
              <p class="deck-insight__context">Different platform. Same deal. He shrugged when he said it.</p>
            </article>
            <article class="deck-insight">
              <span class="deck-insight__mark" aria-hidden="true">“</span>
              <p class="deck-insight__quote">We were losing people right at deal creation. Get them past that step, and tracking becomes the real value.</p>
              <p class="deck-insight__who">Partha Panwala, PM</p>
              <hr class="deck-insight__rule" />
              <p class="deck-insight__context">Creation first. Tracking second. He was blunt about the order.</p>
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
          <h2 class="deck-title">Bets we made before we had a full answer.</h2>
        </div>
        <div class="deck-hero-body">
          <div class="deck-assumptions">
            <article class="deck-assumption">
              <span class="deck-assumption__num" aria-hidden="true">1</span>
              <div class="deck-assumption__copy">
                <h3 class="deck-assumption__title">Creation belongs on the company profile.</h3>
                <p class="deck-assumption__body">That's where people already open the tab. A separate deal dashboard felt clean in sketches and wrong in practice.</p>
              </div>
            </article>
            <article class="deck-assumption">
              <span class="deck-assumption__num" aria-hidden="true">2</span>
              <div class="deck-assumption__copy">
                <h3 class="deck-assumption__title">NDA signing stays in-product.</h3>
                <p class="deck-assumption__body">Hisham and Peter named the tool-switch without prompting. We treated that as non-negotiable, even when legal wanted more ceremony.</p>
              </div>
            </article>
            <article class="deck-assumption">
              <span class="deck-assumption__num" aria-hidden="true">3</span>
              <div class="deck-assumption__copy">
                <h3 class="deck-assumption__title">Owners can share, grant, and revoke anytime.</h3>
                <p class="deck-assumption__body">Same company, multiple deals. Access is messy. Better to design for revoke than pretend every share is permanent.</p>
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
          <h2 class="deck-title">Two HMWs. We kept circling them.</h2>
        </div>
        <div class="deck-hero-body">
          <div class="deck-grid">
            <article class="deck-card">
              <h3>HMW</h3>
              <p><strong>How might we let creators see document engagement without pinging people?</strong></p>
              <p>After share, an engagement tab: who's in, access level, whether anything moved. Incomplete on purpose. No fake “heat score.”</p>
            </article>
            <article class="deck-card">
              <h3>HMW</h3>
              <p><strong>How might we handle NDAs without leaving Systematic?</strong></p>
              <p>Three paths we could ship: default Systematic template, custom upload, or a pre-approved template reused across deals. Default was fastest. Custom was the one legal actually used.</p>
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
          <h2 class="deck-title">Both “easy” options left something broken.</h2>
        </div>
        <div class="deck-hero-body">
          <div class="deck-grid">
            <article class="deck-card deck-card--warn">
              <span class="deck-badge">Option A</span>
              <h3>More widgets and status labels on the old layout.</h3>
              <p>Looked productive in a critique. Still no path. Still four places for one deal.</p>
            </article>
            <article class="deck-card deck-card--warn">
              <span class="deck-badge">Option B</span>
              <h3>A standalone Deal Room, cut off from the profile.</h3>
              <p>Cleaner room. Worse memory. People would still bounce back to the profile for context.</p>
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
          <h2 class="deck-title deck-title--wide">We put execution on the company profile. Not a new home. A path through the one they already used.</h2>
        </div>
        <div class="deck-hero-body">
          <div class="deck-decision-flow" aria-label="Commitment ladder">
            <article class="deck-decision-step">
              <span class="deck-decision-step__num">1</span>
              <h3 class="deck-decision-step__title">Setup</h3>
              <p class="deck-decision-step__body">Create from the profile. Company context rides along.</p>
            </article>
            <span class="deck-decision-flow__arrow" aria-hidden="true">→</span>
            <article class="deck-decision-step">
              <span class="deck-decision-step__num">2</span>
              <h3 class="deck-decision-step__title">NDA</h3>
              <p class="deck-decision-step__body">Gate inside the product. Not an attachment waiting in inbox zero.</p>
            </article>
            <span class="deck-decision-flow__arrow" aria-hidden="true">→</span>
            <article class="deck-decision-step">
              <span class="deck-decision-step__num">3</span>
              <h3 class="deck-decision-step__title">Commitments</h3>
              <p class="deck-decision-step__body">Docs, access, interest. Same flow, still unfinished edges.</p>
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
          <h2 class="deck-title">Host path and investor path. Same deal object.</h2>
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
          <h2 class="deck-title">Four pieces we shipped. Not a manifesto.</h2>
        </div>
        <div class="deck-hero-body">
          <div class="deck-grid">
            <article class="deck-card">
              <h3>1 - Profile-anchored entry</h3>
              <p>“Create Deal Room” on the company profile. One less place to hunt.</p>
            </article>
            <article class="deck-card">
              <h3>2 - Guided gates</h3>
              <p>Setup, then NDA, then commitments. Visible order. People still skipped steps when they could.</p>
            </article>
            <article class="deck-card">
              <h3>3 - In-product confidentiality</h3>
              <p>Sign in the deal path. Access unlocks after. Some still asked for a PDF copy afterward.</p>
            </article>
            <article class="deck-card">
              <h3>4 - Progress visibility</h3>
              <p>Viewed, signed, downloaded, interest. Follow-ups got shorter. They didn't disappear.</p>
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
          <p class="deck-sub">Investor creates a deal from the company profile and flips NDA required. Docs stay dark until someone signs.</p>
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
          <p class="deck-sub">Invite lands. Before any sensitive file opens, the NDA prompt. Sign, then the room unlocks. No third-tab detour.</p>
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
          <p class="deck-sub">Owner side: grant, revoke, see who signed. Still some chasing. Less blind chasing.</p>
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
          <h2 class="deck-title">Numbers after launch. Caveats included.</h2>
        </div>
        <div class="deck-hero-body">
          <div class="deck-grid">
            <article class="deck-card">
              <h3>+32%</h3>
              <p>Deal creation after entry moved onto the company profile.</p>
            </article>
            <article class="deck-card">
              <h3>-27%</h3>
              <p>Measured friction from discovery to action on the guided path.</p>
            </article>
          </div>
          <h3>What the metrics don't say</h3>
          <p>Some deals still stalled at NDA. We could see the stall now. Fixing it is a different project.</p>
        </div>
      `,
    },
    {
      id: "learnings",
      html: `
        <div class="deck-hero-head">
          <p class="deck-eyebrow">LEARNINGS &amp; ROLE</p>
          <h2 class="deck-title">What stuck. What I'd argue about again.</h2>
        </div>
        <div class="deck-hero-body">
          <div class="deck-grid">
            <article class="deck-card">
              <h3>LEARNINGS</h3>
              <ul class="deck-list">
                <li>If people already live on a surface, fight hard before inventing a new one.</li>
                <li>Gates only help if they're visible in the path. Hidden legal steps just move the drop-off.</li>
                <li>Status without a next action is decoration. We shipped some of that early and had to cut it.</li>
              </ul>
            </article>
            <article class="deck-card">
              <h3>MY ROLE</h3>
              <p>Research synthesis, IA, flows, UI, handoff. Product, eng, and legal on sequencing and what we could measure after ship.</p>
              <h3 style="margin-top: 14px;">Collaboration</h3>
              <p>Most of the friction was NDA order and permissions language. “Progress” on the dashboard meant three different things until we picked one and lived with it.</p>
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
          <h2 class="deck-title">Open threads, not a roadmap speech.</h2>
        </div>
        <div class="deck-hero-body">
          <ul class="deck-list">
            <li>Interest signals that actually trigger a follow-up move, not another badge</li>
            <li>Same gate patterns on other deal types without copy-paste IA</li>
            <li>When a gate stalls, help the founder. Right now we mostly show the stall</li>
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
          <p class="deck-sub">Happy to talk through the messy parts, not just the +32%.</p>
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
                <span>Drop a screen export in assets/deal-room-presentation/screens/ - wired via themes.json.</span>
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
      document.title = `Deal Room - ${SLIDES[index].id} (${current}/${total}) · Gaurav Avinash`;
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
