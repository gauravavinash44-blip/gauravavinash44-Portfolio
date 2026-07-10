(function () {
  const KB_URL = './assets/portfolio-assistant/knowledge-base.json';
  const TYPE_SPEED_MS = 14;
  const TYPE_CHUNK = 2;

  const messagesEl = document.getElementById('paMessages');
  const formEl = document.getElementById('paForm');
  const inputEl = document.getElementById('paInput');
  const sendBtn = document.querySelector('.pa-send');

  if (!messagesEl || !formEl || !inputEl) return;

  let knowledge = null;
  let isBusy = false;
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
    html = html.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2">$1</a>'
    );

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

    for (const [id, topic] of Object.entries(topics)) {
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

  function renderSuggestions(row, suggestions) {
    if (!suggestions || !suggestions.length) return;

    const wrap = document.createElement('div');
    wrap.className = 'pa-suggestions';
    wrap.setAttribute('role', 'group');
    wrap.setAttribute('aria-label', 'Suggested questions');

    suggestions.slice(0, 3).forEach((item) => {
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
    renderSuggestions(row, payload.suggestions);
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
    inputEl.focus();
  }

  async function showWelcome() {
    setBusy(true);
    const welcome = knowledge.welcome;
    const row = await typeAssistantMessage(welcome.message);
    renderSuggestions(row, welcome.suggestions);
    setBusy(false);
  }

  async function init() {
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

    formEl.addEventListener('submit', (event) => {
      event.preventDefault();
      const value = inputEl.value.trim();
      if (!value) return;
      inputEl.value = '';
      handleUserTurn(value);
    });
  }

  init();
})();
