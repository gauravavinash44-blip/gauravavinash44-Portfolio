(() => {
  const KEY = "resonance_proto_v1";

  const SONGS = [
    {
      id: "there-she-goes",
      title: "There She Goes",
      artist: "The La's",
      duration: 175,
      art: "linear-gradient(135deg,#1a1a1a 0%,#5a4a3a 45%,#c4a882 100%)",
      moments: [
        { at: 0.28, label: "Your moment", strong: true, kind: "personal" },
        { at: 0.62, label: "2.5K listeners started here", strong: false, kind: "popular" },
        { at: 0.78, label: "Most replayed", strong: false, kind: "popular" },
      ],
    },
    {
      id: "all-black",
      title: "All Black",
      artist: "Apart Collective",
      duration: 198,
      art: "linear-gradient(160deg,#0d0d0d,#1db95433 40%,#222 100%)",
      moments: [
        { at: 0.18, label: "Popular moment", strong: false, kind: "popular" },
        { at: 0.48, label: "Your moment", strong: true, kind: "personal" },
        { at: 0.72, label: "Most replayed", strong: false, kind: "popular" },
      ],
    },
    {
      id: "night-drive",
      title: "Night Drive",
      artist: "City Lights",
      duration: 210,
      art: "linear-gradient(145deg,#101828,#3b1f4a 55%,#0b1020)",
      moments: [
        { at: 0.35, label: "Explore the song", strong: false, kind: "explore" },
        { at: 0.55, label: "Your moment", strong: true, kind: "personal" },
      ],
    },
    {
      id: "echo",
      title: "Echo",
      artist: "Samira Hadid",
      duration: 186,
      art: "linear-gradient(180deg,#111,#444 40%,#888)",
      moments: [
        { at: 0.4, label: "Your moment", strong: true, kind: "personal" },
        { at: 0.68, label: "Popular moment", strong: false, kind: "popular" },
      ],
    },
  ];

  const PREFS = [
    "The beat to hit",
    "A lyric I love",
    "A vocal moment",
    "The drop / beat switch",
    "A melody or instrumental",
    "The build-up",
    "That one part I always replay",
  ];

  const defaultState = () => ({
    homeEduSeen: false,
    npCoachSeen: false,
    prefsSeen: false,
    resonanceOn: false,
    skipCount: 0,
    songIndex: 0,
    prefs: [],
  });

  function load() {
    try {
      return { ...defaultState(), ...JSON.parse(sessionStorage.getItem(KEY) || "{}") };
    } catch {
      return defaultState();
    }
  }

  function save(s) {
    sessionStorage.setItem(KEY, JSON.stringify(s));
  }

  const state = load();
  let screen = "splash";
  let playing = false;
  let position = 0;
  let raf = null;
  let lastTick = 0;
  let tipTimer = null;

  const el = {
    phone: document.getElementById("rs-phone"),
    splash: document.getElementById("rs-splash"),
    home: document.getElementById("rs-home"),
    np: document.getElementById("rs-np"),
    backdrop: document.getElementById("rs-backdrop"),
    sheetEdu: document.getElementById("rs-sheet-edu"),
    sheetPref: document.getElementById("rs-sheet-pref"),
    sheetSkip: document.getElementById("rs-sheet-skip"),
    coach: document.getElementById("rs-coach"),
    toast: document.getElementById("rs-toast"),
    status: document.getElementById("rs-status"),
    resBtn: document.getElementById("rs-res-btn"),
    resIcon: document.getElementById("rs-res-icon"),
    markers: document.getElementById("rs-markers"),
    fill: document.getElementById("rs-fill"),
    knob: document.getElementById("rs-knob"),
    timeCur: document.getElementById("rs-time-cur"),
    timeLeft: document.getElementById("rs-time-left"),
    npTitle: document.getElementById("rs-np-title"),
    npArtist: document.getElementById("rs-np-artist"),
    npArt: document.getElementById("rs-np-art"),
    npContext: document.getElementById("rs-np-context"),
    playMain: document.getElementById("rs-play-main"),
    mini: document.getElementById("rs-mini"),
    miniArt: document.getElementById("rs-mini-art"),
    miniTitle: document.getElementById("rs-mini-title"),
    miniArtist: document.getElementById("rs-mini-artist"),
    prefGrid: document.getElementById("rs-pref-grid"),
    tip: document.getElementById("rs-marker-tip"),
  };

  function song() {
    return SONGS[state.songIndex % SONGS.length];
  }

  function fmt(sec) {
    const s = Math.max(0, Math.floor(sec));
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  }

  function setScreen(name) {
    screen = name;
    el.splash.classList.toggle("is-active", name === "splash");
    el.home.classList.toggle("is-active", name === "home");
    el.np.classList.toggle("is-active", name === "np");
    el.mini.classList.toggle("rs-hidden", name === "splash" || name === "np" || !playing);
    document.querySelectorAll(".rs-tab").forEach((t) => {
      t.classList.toggle("is-on", t.dataset.tab === "home" && name === "home");
    });
  }

  function openSheet(which) {
    el.backdrop.classList.add("is-on");
    el.sheetEdu.classList.toggle("is-on", which === "edu");
    el.sheetPref.classList.toggle("is-on", which === "pref");
    el.sheetSkip.classList.toggle("is-on", which === "skip");
  }

  function closeSheets() {
    el.backdrop.classList.remove("is-on");
    el.sheetEdu.classList.remove("is-on");
    el.sheetPref.classList.remove("is-on");
    el.sheetSkip.classList.remove("is-on");
  }

  function personalStart() {
    return state.resonanceOn && (state.prefs.length > 0 || state.prefsSeen);
  }

  function statusCopy() {
    if (!state.resonanceOn) return "";
    if (personalStart()) return "Playing from your moment";
    return "Playing from Resonance";
  }

  function updateResIcon(animate) {
    const on = state.resonanceOn;
    el.resIcon.classList.toggle("is-active", on);
    el.resBtn.setAttribute("aria-pressed", on ? "true" : "false");
    if (animate && on) {
      el.resIcon.classList.add("is-animating");
      setTimeout(() => el.resIcon.classList.remove("is-animating"), 520);
    }
  }

  function renderMarkers() {
    const s = song();
    el.markers.innerHTML = "";
    if (!state.resonanceOn) return;
    s.moments.forEach((m) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "rs-marker" + (m.strong ? " is-strong" : "");
      btn.style.left = `${m.at * 100}%`;
      btn.setAttribute("aria-label", m.label);
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        seekTo(m.at * s.duration);
        showTip(m.label, m.at * 100);
      });
      el.markers.appendChild(btn);
    });
  }

  function showTip(text, pct) {
    el.tip.textContent = text;
    el.tip.style.left = `${pct}%`;
    el.tip.classList.add("is-show");
    clearTimeout(tipTimer);
    tipTimer = setTimeout(() => el.tip.classList.remove("is-show"), 1800);
  }

  function paintProgress() {
    const s = song();
    const pct = (position / s.duration) * 100;
    el.fill.style.width = `${pct}%`;
    el.knob.style.left = `${pct}%`;
    el.timeCur.textContent = fmt(position);
    el.timeLeft.textContent = `-${fmt(s.duration - position)}`;
  }

  function tick(ts) {
    if (!playing) return;
    if (!lastTick) lastTick = ts;
    const dt = (ts - lastTick) / 1000;
    lastTick = ts;
    position += dt;
    const s = song();
    if (position >= s.duration) {
      position = 0;
      nextSong(false);
    }
    paintProgress();
    raf = requestAnimationFrame(tick);
  }

  function setPlaying(on) {
    playing = on;
    el.playMain.innerHTML = on
      ? `<svg viewBox="0 0 24 24" width="28" height="28"><rect x="6" y="5" width="4" height="14" fill="currentColor"/><rect x="14" y="5" width="4" height="14" fill="currentColor"/></svg>`
      : `<svg viewBox="0 0 24 24" width="28" height="28"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>`;
    cancelAnimationFrame(raf);
    lastTick = 0;
    if (on) raf = requestAnimationFrame(tick);
    if (screen === "home") el.mini.classList.toggle("rs-hidden", !on);
  }

  function seekTo(sec) {
    position = Math.max(0, Math.min(song().duration - 0.5, sec));
    paintProgress();
  }

  function applySongUI() {
    const s = song();
    el.npTitle.textContent = s.title;
    el.npArtist.textContent = s.artist;
    el.npArt.style.backgroundImage = s.art;
    el.npContext.textContent = s.artist;
    el.miniTitle.textContent = s.title;
    el.miniArtist.textContent = s.artist;
    el.miniArt.style.backgroundImage = s.art;
    el.status.textContent = statusCopy();
    el.status.classList.toggle("is-on", state.resonanceOn);
    updateResIcon(false);
    renderMarkers();
    paintProgress();
  }

  function startAtResonanceMoment() {
    const s = song();
    if (!state.resonanceOn) {
      position = 0;
      return;
    }
    const personal = s.moments.find((m) => m.kind === "personal") || s.moments[0];
    position = (personal?.at || 0.28) * s.duration;
  }

  function openNowPlaying(fromHome) {
    applySongUI();
    setScreen("np");
    if (!playing) setPlaying(true);
    if (!state.npCoachSeen) {
      el.coach.classList.remove("rs-hidden");
    }
  }

  function playSong(index, { fromBeginning = false } = {}) {
    state.songIndex = index;
    save(state);
    if (fromBeginning || !state.resonanceOn) position = 0;
    else startAtResonanceMoment();
    applySongUI();
    setPlaying(true);
    openNowPlaying(true);
  }

  function nextSong(userSkip) {
    if (userSkip && !state.resonanceOn) {
      state.skipCount += 1;
      save(state);
      if (state.skipCount >= 3 && state.homeEduSeen) {
        openSheet("skip");
        state.skipCount = 0;
        save(state);
      }
    }
    state.songIndex = (state.songIndex + 1) % SONGS.length;
    save(state);
    if (state.resonanceOn) startAtResonanceMoment();
    else position = 0;
    applySongUI();
    if (!playing) setPlaying(true);
  }

  function prevSong() {
    state.songIndex = (state.songIndex - 1 + SONGS.length) % SONGS.length;
    save(state);
    position = 0;
    applySongUI();
  }

  function toggleResonance() {
    const turningOn = !state.resonanceOn;
    state.resonanceOn = turningOn;
    save(state);
    updateResIcon(turningOn);
    el.status.textContent = statusCopy();
    el.status.classList.toggle("is-on", turningOn);
    renderMarkers();
    if (turningOn) {
      startAtResonanceMoment();
      paintProgress();
      if (!state.prefsSeen) {
        setTimeout(() => openSheet("pref"), 420);
      }
    }
  }

  function buildPrefs() {
    el.prefGrid.innerHTML = "";
    PREFS.forEach((label) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "rs-pref" + (state.prefs.includes(label) ? " is-on" : "");
      b.textContent = label;
      b.addEventListener("click", () => {
        if (state.prefs.includes(label)) {
          state.prefs = state.prefs.filter((p) => p !== label);
        } else {
          state.prefs = [...state.prefs, label];
        }
        b.classList.toggle("is-on");
        save(state);
      });
      el.prefGrid.appendChild(b);
    });
  }

  function buildHome() {
    const grid = document.getElementById("rs-recent-grid");
    const shelf = document.getElementById("rs-shelf");
    grid.innerHTML = "";
    shelf.innerHTML = "";
    SONGS.forEach((s, i) => {
      const r = document.createElement("button");
      r.type = "button";
      r.className = "rs-recent";
      r.innerHTML = `<span class="rs-recent-art" style="background-image:${s.art}"></span><span>${s.title}</span>`;
      r.addEventListener("click", () => playSong(i, { fromBeginning: true }));
      grid.appendChild(r);

      const c = document.createElement("button");
      c.type = "button";
      c.className = "rs-shelf-card";
      c.innerHTML = `<div class="rs-shelf-art" style="background-image:${s.art}"></div><strong>${s.title}</strong><em>${s.artist}</em>`;
      c.addEventListener("click", () => playSong(i, { fromBeginning: true }));
      shelf.appendChild(c);
    });
  }

  // Wire events
  document.getElementById("rs-edu-gotit").addEventListener("click", () => {
    state.homeEduSeen = true;
    save(state);
    closeSheets();
  });

  document.getElementById("rs-pref-continue").addEventListener("click", () => {
    state.prefsSeen = true;
    save(state);
    closeSheets();
    el.status.textContent = statusCopy();
  });

  document.getElementById("rs-skip-try").addEventListener("click", () => {
    closeSheets();
    state.resonanceOn = true;
    save(state);
    updateResIcon(true);
    startAtResonanceMoment();
    applySongUI();
    openNowPlaying();
    if (!state.prefsSeen) setTimeout(() => openSheet("pref"), 500);
  });

  document.getElementById("rs-skip-notnow").addEventListener("click", () => {
    closeSheets();
  });

  el.backdrop.addEventListener("click", () => {
    if (el.sheetEdu.classList.contains("is-on")) return;
    closeSheets();
  });

  document.getElementById("rs-coach-gotit").addEventListener("click", () => {
    state.npCoachSeen = true;
    save(state);
    el.coach.classList.add("rs-hidden");
  });

  el.resBtn.addEventListener("click", toggleResonance);

  el.playMain.addEventListener("click", () => setPlaying(!playing));
  document.getElementById("rs-next").addEventListener("click", () => nextSong(true));
  document.getElementById("rs-prev").addEventListener("click", prevSong);
  document.getElementById("rs-np-close").addEventListener("click", () => {
    setScreen("home");
    el.coach.classList.add("rs-hidden");
  });
  el.mini.addEventListener("click", () => openNowPlaying());

  document.getElementById("rs-scrub-track").addEventListener("click", (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    seekTo(pct * song().duration);
  });

  document.getElementById("rs-reset").addEventListener("click", () => {
    Object.assign(state, defaultState());
    save(state);
    location.reload();
  });

  // Boot
  buildHome();
  buildPrefs();
  applySongUI();
  setScreen("splash");
  setTimeout(() => {
    setScreen("home");
    if (!state.homeEduSeen) openSheet("edu");
  }, 1400);
})();
