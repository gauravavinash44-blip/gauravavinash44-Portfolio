# Portfolio Loading Experience

Premium React loading screen for the portfolio homepage.

## Components

| File | Purpose |
|------|---------|
| `src/components/LoadingLogo.tsx` | Cursor-style dot + animated ring (the loader) |
| `src/components/LoadingText.tsx` | Philosophy lines with fade transitions |
| `src/components/LoadingProgress.tsx` | Optional 2px bottom bar (unused - ring is the loader) |
| `src/components/LoadingScreen.tsx` | Orchestrates timing, exit, and page handoff |

## Build

```bash
cd loading-experience
npm install
npm run build
```

Outputs:

- `dist/loading-screen.js`
- `dist/loading-screen.css`

The homepage (`index.html`) loads these files automatically.

## Replace the logo later

The logo is the cursor-style dot + ring in `LoadingLogo.tsx`. Adjust `SIZE`, `RING_RADIUS`, or `DOT_RADIUS` to tune scale.

## Timing

- ~900ms per philosophy line
- ~350ms fade between lines
- Total duration: ~4.1s (ring draw synced)

Adjust `HOLD_MS` and `FADE_MS` in `LoadingText.tsx`.
