const projects = [
  {
    title: "KYC Onboarding Rebuild",
    problem:
      "Users dropped when ID checks felt like a compliance trap, not a setup step.",
    outcome: "Completion rate up 31% in 8 weeks",
    insight:
      "Re-sequenced checks by perceived risk, not backend dependency order.",
  },
  {
    title: "Card Failure Recovery",
    problem:
      "Payment failures looked final, even when retry paths were still valid.",
    outcome: "Support tickets down 22% and retries up 18%",
    insight:
      "Error states became decision states with context and progressive recovery.",
  },
  {
    title: "Subscription Pause Flow",
    problem:
      "Customers churned because cancel was obvious, but pause was buried and vague.",
    outcome: "Saved 14% monthly churn in first quarter",
    insight:
      "Exposed intent-based options at the exact moment confidence dipped.",
  },
];

const principles = [
  {
    headline: "I don't simplify flows blindly - I protect intent.",
    text: "If a user has to decide carefully, removing steps can increase risk instead of reducing friction.",
  },
  {
    headline: "Good UX is often sequencing, not reduction.",
    text: "Order shapes confidence. The same content in a different sequence can change outcomes dramatically.",
  },
  {
    headline: "I push back on assumption-led decisions.",
    text: "I ask for evidence early. If we cannot validate a claim, we treat it as a hypothesis, not strategy.",
  },
  {
    headline: "Edge cases are product strategy.",
    text: "In fintech, edge states are where trust either compounds or breaks.",
  },
];

const caseLinks = [
  "Reducing onboarding drop-offs in KYC flow",
  "Improving trust in payments experience",
  "Designing card-control behavior for high-anxiety moments",
];

const playgroundItems = [
  {
    title: "Voice-guided bill split concept",
    tag: "interaction prototype",
  },
  {
    title: "Friction mapping model for risk-heavy forms",
    tag: "framework note",
  },
  {
    title: "Microcopy experiments for failed payment retries",
    tag: "writing + UX",
  },
];

function populateProjects() {
  const container = document.getElementById("project-grid");
  container.innerHTML = projects
    .map(
      (project) => `
      <article class="project-card reveal">
        <div class="project-ui" aria-hidden="true"></div>
        <div class="project-content">
          <h3>${project.title}</h3>
          <p>${project.problem}</p>
          <span class="metric">${project.outcome}</span>
          <p class="project-insight">${project.insight}</p>
        </div>
      </article>
    `
    )
    .join("");
}

function populatePrinciples() {
  const container = document.getElementById("principles");
  container.innerHTML = principles
    .map(
      (item) => `
      <article class="principle reveal">
        <strong>${item.headline}</strong>
        <p>${item.text}</p>
      </article>
    `
    )
    .join("");
}

function populateCaseLinks() {
  const container = document.getElementById("case-links-list");
  container.innerHTML = caseLinks
    .map(
      (title, index) => `
      <a class="case-item reveal" href="#">
        <div>${title}</div>
        <span>Case 0${index + 1}</span>
      </a>
    `
    )
    .join("");
}

function populatePlayground() {
  const container = document.getElementById("playground-list");
  container.innerHTML = playgroundItems
    .map(
      (item) => `
      <a class="playground-item reveal" href="#">
        <div>${item.title}</div>
        <span>${item.tag}</span>
      </a>
    `
    )
    .join("");
}

function setupRevealAnimation() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

populateProjects();
populatePrinciples();
populateCaseLinks();
populatePlayground();
setupRevealAnimation();
