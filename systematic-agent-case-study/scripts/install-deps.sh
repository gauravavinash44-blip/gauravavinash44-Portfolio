#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
# shellcheck source=ensure-node.sh
source "$ROOT/scripts/ensure-node.sh"
echo "→ Installing dependencies…"
npm install
echo "→ Done. Run: bash scripts/preview.sh"
