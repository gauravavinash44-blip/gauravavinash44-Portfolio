#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
# shellcheck source=ensure-node.sh
source "$ROOT/scripts/ensure-node.sh"

if [[ ! -d node_modules ]]; then
  echo "→ Installing dependencies (first run)…"
  npm install
fi

echo ""
echo "→ Preview: http://127.0.0.1:5173"
echo "  Keep this terminal open. Ctrl+C to stop."
echo ""

exec npm run dev -- --host 127.0.0.1 --open
