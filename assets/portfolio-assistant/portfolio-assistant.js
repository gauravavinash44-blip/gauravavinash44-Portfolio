(function () {
  const KB_URL = './assets/portfolio-assistant/knowledge-base.json?v=5';
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
  const speakerBtn = document.getElementById('paSpeaker');
  const speakerMutedIcon = speakerBtn && speakerBtn.querySelector('.pa-speaker-icon--muted');
  const speakerOnIcon = speakerBtn && speakerBtn.querySelector('.pa-speaker-icon--on');

  if (!fabEl || !modalEl || !messagesEl || !formEl || !inputEl) return;

  let knowledge = null;
  let isBusy = false;
  let isOpen = false;
  let hasStarted = false;
  let scrollY = 0;
  let reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  /* Always start muted — only speak after the user unmutes */
  let voiceUnmuted = false;
  let lastSpokenText = '';
  let lastAudioUrl = '';
  let activeAudio = null;
  let preferredVoice = null;

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

  /* Plain text for TTS — strip markdown and soften list cadence */
  function speechText(text) {
    return String(text || '')
      .replace(/\*\*(.+?)\*\*/g, '$1')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
      .replace(/[→•▪︎]/g, '. ')
      .replace(/^\s*[-–—]\s*/gm, '')
      .replace(/\n{2,}/g, '. ')
      .replace(/\n/g, '. ')
      .replace(/\s*([:;])\s*/g, '. ')
      .replace(/\s{2,}/g, ' ')
      .replace(/(\.)\1+/g, '.')
      .replace(/\s+\./g, '.')
      .replace(/\.\s*\./g, '.')
      .trim();
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

  function stopSpeech() {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    if (activeAudio) {
      activeAudio.pause();
      activeAudio.currentTime = 0;
      activeAudio = null;
    }
  }

  function scoreVoice(voice) {
    const name = (voice.name || '') + ' ' + (voice.lang || '');
    let score = 0;
    if (/en[-_]?us/i.test(name)) score += 40;
    else if (/en[-_]?gb/i.test(name)) score += 28;
    else if (/^en/i.test(voice.lang || '')) score += 18;
    if (/neural|natural|premium|enhanced|studio|online \(natural\)/i.test(name)) score += 55;
    if (/google/i.test(name)) score += 30;
    if (/microsoft (aria|jenny|guy|sara|sonia)/i.test(name)) score += 35;
    if (/samantha|karen|moira|daniel|alex|zoe|ava/i.test(name)) score += 25;
    if (/compact|eloquence|whisper|robot|novelty/i.test(name)) score -= 40;
    if (voice.localService === false) score += 12; /* remote/cloud voices often sound better */
    return score;
  }

  function pickPreferredVoice() {
    if (!window.speechSynthesis) return null;
    const voices = window.speechSynthesis.getVoices();
    if (!voices.length) return null;

    return voices.slice().sort((a, b) => scoreVoice(b) - scoreVoice(a))[0] || null;
  }

  function speakBrowser(text) {
    if (!window.speechSynthesis || !text) return;

    stopSpeech();
    /* Chrome sometimes needs a tiny cancel/resume kick for reliable start */
    window.speechSynthesis.cancel();

    const utter = new SpeechSynthesisUtterance(text);
    if (!preferredVoice) preferredVoice = pickPreferredVoice();
    if (preferredVoice) utter.voice = preferredVoice;
    /* Slightly slower + softer pitch reads less robotic than default */
    utter.rate = 0.92;
    utter.pitch = 0.95;
    utter.volume = 1;
    utter.lang = (preferredVoice && preferredVoice.lang) || 'en-US';
    window.speechSynthesis.speak(utter);
  }

  function speakAudio(url) {
    stopSpeech();
    const audio = new Audio(url);
    activeAudio = audio;
    audio.play().catch((err) => {
      console.warn('[Portfolio Assistant] audio play failed, falling back to browser voice', err);
      speakBrowser(lastSpokenText);
    });
  }

  function rememberSpeech(text, audioUrl) {
    lastSpokenText = speechText(text);
    lastAudioUrl = audioUrl || '';
  }

  function speakReply(text, audioUrl) {
    rememberSpeech(text, audioUrl);
    if (!voiceUnmuted || !lastSpokenText) return;

    /* Optional per-topic clip (your cloned voice later): payload.audio */
    if (lastAudioUrl) {
      speakAudio(lastAudioUrl);
      return;
    }
    speakBrowser(lastSpokenText);
  }

  function updateSpeakerUi() {
    if (!speakerBtn) return;
    speakerBtn.setAttribute('aria-pressed', voiceUnmuted ? 'true' : 'false');
    speakerBtn.setAttribute(
      'aria-label',
      voiceUnmuted ? 'Mute voice narration' : 'Unmute voice narration'
    );
    speakerBtn.title = voiceUnmuted ? 'Voice narration on' : 'Voice narration (muted)';
    if (speakerMutedIcon) speakerMutedIcon.hidden = voiceUnmuted;
    if (speakerOnIcon) speakerOnIcon.hidden = !voiceUnmuted;
  }

  function muteVoice(options) {
    const speakLast = !!(options && options.speakLast);
    voiceUnmuted = false;
    stopSpeech();
    updateSpeakerUi();
    if (speakLast) { /* no-op: muted */ }
  }

  function unmuteVoice() {
    voiceUnmuted = true;
    updateSpeakerUi();
    /* User gesture: only now start narration for the latest reply */
    if (lastSpokenText) {
      if (lastAudioUrl) speakAudio(lastAudioUrl);
      else speakBrowser(lastSpokenText);
    }
  }

  function setVoiceUnmuted(next) {
    if (next) unmuteVoice();
    else muteVoice();
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
    stopSpeech();
    const payload = getTopicPayload(topicId);
    const row = await typeAssistantMessage(payload.response);
    speakReply(payload.response, payload.audio || '');
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
    /* Remember text for later unmute — do not speak until user opts in */
    rememberSpeech(welcome.message, welcome.audio || '');
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
      rememberSpeech(bubble.textContent, '');
    }
  }

  function openModal() {
    if (isOpen) return;
    isOpen = true;
    scrollY = window.scrollY;

    /* Never auto-speak on open — user must unmute */
    muteVoice();

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
    muteVoice();

    modalEl.classList.remove('is-open');
    modalEl.setAttribute('aria-hidden', 'true');
    fabEl.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('pa-modal-open');
    fabEl.focus();
  }

  updateSpeakerUi();

  try {
    localStorage.removeItem('pa-voice-unmuted');
  } catch (_) { /* ignore */ }

  if (speakerBtn) {
    speakerBtn.addEventListener('click', () => setVoiceUnmuted(!voiceUnmuted));
  }

  if (window.speechSynthesis) {
    window.speechSynthesis.addEventListener('voiceschanged', () => {
      preferredVoice = pickPreferredVoice();
    });
    preferredVoice = pickPreferredVoice();
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
