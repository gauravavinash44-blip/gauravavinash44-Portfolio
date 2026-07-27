(function () {
  const KB_URL = './assets/portfolio-assistant/knowledge-base.json?v=4';
  const TYPE_SPEED_MS = 14;
  const TYPE_CHUNK = 2;

  const fabEl = document.getElementById('paFab');
  const modalEl = document.getElementById('paModal');
  const messagesEl = document.getElementById('paMessages');
  const formEl = document.getElementById('paForm');
  const inputEl = document.getElementById('paInput');
  const sendBtn = document.querySelector('.pa-send');
  const closeBtn = modalEl && modalEl.querySelector('.pa-modal-close');
  const backdropEl = modalEl && modalEl.querySelector('.pa-modal-backdrop');

  if (!fabEl || !modalEl || !messagesEl || !formEl || !inputEl) return;

  let knowledge = null;
  let isBusy = false;
  let isOpen = false;
  let hasStarted = false;
  let scrollY = 0;
  let reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function normalize(text) {
    return text
      .toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function formatResponse(text) {
    let html = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

    return html;
  }

  function scrollToBottom() {
    requestAnimationFrame(() => {
      messagesEl.scrollTop = messagesEl.scrollHeight;
    });
  }

  function setBusy(busy) {
    isBusy = busy;
    inputEl.disabled = busy;
    if (sendBtn) sendBtn.disabled = busy;
  }

  function findTopicId(query) {
    if (!knowledge) return null;

    const normalized = normalize(query);
    if (!normalized) return null;

    const topics = knowledge.topics;

    for (const [id] of Object.entries(topics)) {
      if (normalize(id.replace(/_/g, ' ')) === normalized) return id;
    }

    for (const [id, topic] of Object.entries(topics)) {
      const aliases = topic.aliases || [];
      for (const alias of aliases) {
        if (normalize(alias) === normalized) return id;
      }
    }

    for (const [id, topic] of Object.entries(topics)) {
      const aliases = topic.aliases || [];
      for (const alias of aliases) {
        const nAlias = normalize(alias);
        if (normalized.includes(nAlias) || nAlias.includes(normalized)) return id;
      }
    }

    for (const [id, topic] of Object.entries(topics)) {
      const aliases = topic.aliases || [];
      for (const alias of aliases) {
        const words = normalize(alias).split(' ');
        if (words.length > 1 && words.every((w) => normalized.includes(w))) return id;
      }
    }

    return null;
  }

  function getTopicPayload(topicId) {
    if (topicId && knowledge.topics[topicId]) {
      return knowledge.topics[topicId];
    }
    return knowledge.fallback;
  }

  function createMessageRow(role) {
    const row = document.createElement('div');
    row.className = `pa-message pa-message--${role}`;
    messagesEl.appendChild(row);
    scrollToBottom();
    return row;
  }

  function createBubble(row, role) {
    const bubble = document.createElement('div');
    bubble.className = `pa-bubble pa-bubble--${role}`;
    row.appendChild(bubble);
    return bubble;
  }

  function renderSuggestions(row, suggestions, limit) {
    if (!suggestions || !suggestions.length) return;

    const max = limit ?? 3;

    const wrap = document.createElement('div');
    wrap.className = 'pa-suggestions';
    wrap.setAttribute('role', 'group');
    wrap.setAttribute('aria-label', 'Suggested questions');

    suggestions.slice(0, max).forEach((item) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'pa-suggestion';
      btn.textContent = item.label;
      btn.addEventListener('click', () => handleUserTurn(item.label, item.topicId));
      wrap.appendChild(btn);
    });

    row.appendChild(wrap);
    scrollToBottom();
  }

  function showUserMessage(text) {
    const row = createMessageRow('user');
    const bubble = createBubble(row, 'user');
    bubble.textContent = text;
    scrollToBottom();
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function typeAssistantMessage(text) {
    const row = createMessageRow('assistant');
    const bubble = createBubble(row, 'assistant');
    bubble.classList.add('pa-bubble--typing');

    if (reducedMotion) {
      bubble.classList.remove('pa-bubble--typing');
      bubble.innerHTML = formatResponse(text);
      scrollToBottom();
      return row;
    }

    let index = 0;
    while (index < text.length) {
      index = Math.min(index + TYPE_CHUNK, text.length);
      bubble.innerHTML = formatResponse(text.slice(0, index));
      scrollToBottom();
      await sleep(TYPE_SPEED_MS);
    }

    bubble.classList.remove('pa-bubble--typing');
    bubble.innerHTML = formatResponse(text);
    scrollToBottom();
    return row;
  }

  async function respondWithTopic(topicId) {
    const payload = getTopicPayload(topicId);
    const row = await typeAssistantMessage(payload.response);
    const limit = payload.suggestionLimit ?? 3;
    renderSuggestions(row, payload.suggestions, limit);
  }

  async function handleUserTurn(label, explicitTopicId) {
    if (isBusy) return;

    const displayText = label.trim();
    if (!displayText) return;

    setBusy(true);
    showUserMessage(displayText);

    const topicId = explicitTopicId || findTopicId(displayText);
    await respondWithTopic(topicId);

    setBusy(false);
    if (isOpen) inputEl.focus();
  }

  async function showWelcome() {
    setBusy(true);
    const welcome = knowledge.welcome;
    const row = await typeAssistantMessage(welcome.message);
    renderSuggestions(row, welcome.suggestions);
    setBusy(false);
  }

  async function ensureStarted() {
    if (hasStarted) return;
    hasStarted = true;

    try {
      const res = await fetch(KB_URL);
      if (!res.ok) throw new Error('Failed to load knowledge base');
      knowledge = await res.json();
      await showWelcome();
    } catch (err) {
      console.error('[Portfolio Assistant]', err);
      const row = createMessageRow('assistant');
      const bubble = createBubble(row, 'assistant');
      bubble.textContent =
        'Welcome! Ask about Gaurav\'s experience, projects, or design process.';
    }
  }

  function openModal() {
    if (isOpen) return;
    isOpen = true;
    scrollY = window.scrollY;

    modalEl.classList.add('is-open');
    modalEl.setAttribute('aria-hidden', 'false');
    fabEl.setAttribute('aria-expanded', 'true');
    document.body.classList.add('pa-modal-open');

    ensureStarted().then(() => {
      if (isOpen) inputEl.focus();
    });
  }

  function closeModal() {
    if (!isOpen) return;
    isOpen = false;

    modalEl.classList.remove('is-open');
    modalEl.setAttribute('aria-hidden', 'true');
    fabEl.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('pa-modal-open');
    fabEl.focus();
  }

  fabEl.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdropEl) backdropEl.addEventListener('click', closeModal);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen) closeModal();
  });

  formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = inputEl.value.trim();
    if (!value) return;
    inputEl.value = '';
    handleUserTurn(value);
  });
})();
