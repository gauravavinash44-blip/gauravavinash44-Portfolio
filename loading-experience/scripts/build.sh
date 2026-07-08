#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CASE_STUDY_ROOT="$(cd "$ROOT/../systematic-agent-case-study" && pwd)"
# shellcheck source=../systematic-agent-case-study/scripts/ensure-node.sh
source "$CASE_STUDY_ROOT/scripts/ensure-node.sh"
cd "$ROOT"
echo "→ Installing loading experience dependencies…"
npm install
echo "→ Building loading screen bundle…"
npm run build
echo "→ Done. Output: loading-experience/dist/"
