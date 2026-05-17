# Systematic Agent — standalone case study (Vite + React)

Figma reference: https://www.figma.com/design/Mxe41CWO5ROsv5uYFG6xi4/Systematic-Agent--Copy-

**Status:** Linked from the main portfolio (`index.html`, work section, case studies grid). Production build lives in `dist/`. After editing source, run `npm run build` and commit `dist/` for deployment.

**Portfolio links:** `./systematic-agent-case-study/dist/index.html`

### Review checklist

- [ ] Hero: purple gradient, typing subtitle, search demo
- [ ] Navigation: scroll progress, section anchors, sticky nav
- [ ] All sections in order (Intro → Reflection)
- [ ] Animations: scroll reveals, chat typing, before/after
- [ ] Responsive: mobile, tablet, desktop

Run locally as its own app (see below).

### Quick preview (recommended)

`ERR_CONNECTION_REFUSED` means the dev server is not running. Start it once and keep the terminal open:

```bash
cd systematic-agent-case-study
bash scripts/preview.sh
```

The first run downloads Node + npm into `.node-tools` (no system install required), installs dependencies, then serves at **http://127.0.0.1:5173**.

### Cursor: Run Task

1. **Terminal → Run Task…** → **Systematic Agent: npm install** (first time only).
2. **Run Task…** → **Systematic Agent: dev server (preview)** — leave that terminal open.

### If you already have Node.js installed

```bash
cd systematic-agent-case-study
npm install
npm run dev
```

Then open **http://127.0.0.1:5173** (include `http://`, not `https://`).

## “Safari can’t connect to localhost:5173”

That only happens when **no dev server is listening** on that port. Fix it like this:

1. **Use Terminal** (or Cursor’s integrated terminal — same folder must be active).
2. **Install deps once** — this folder needs a `node_modules` directory (`npm install` creates it).
3. **Start Vite** and **leave that terminal tab open**:

   ```bash
   cd /Users/gauravaviansh44gmail.com/Desktop/protfolio/systematic-agent-case-study
   npm install
   npm run dev
   ```

4. In Safari open **`http://127.0.0.1:5173`** (recommended) or **`http://localhost:5173`** — include **`http://`**, not `https://`.

If `npm install` fails with **`command not found: npm`**, install [Node.js LTS](https://nodejs.org/), then reopen the terminal and repeat step 3.

While `npm run dev` is running, the terminal shows something like `Local: http://localhost:5173/` — use that exact URL if the port differs.
  