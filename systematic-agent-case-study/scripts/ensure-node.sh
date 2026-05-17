#!/usr/bin/env bash
# Downloads a portable Node.js (with npm) when system npm is missing.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
NODE_VERSION="${NODE_VERSION:-v22.15.1}"
ARCH="$(uname -m)"
OS="$(uname -s)"

case "$OS-$ARCH" in
  Darwin-arm64) NODE_PKG="node-${NODE_VERSION}-darwin-arm64" ;;
  Darwin-x86_64) NODE_PKG="node-${NODE_VERSION}-darwin-x64" ;;
  Linux-x86_64) NODE_PKG="node-${NODE_VERSION}-linux-x64" ;;
  Linux-aarch64|Linux-arm64) NODE_PKG="node-${NODE_VERSION}-linux-arm64" ;;
  *)
    if command -v npm >/dev/null 2>&1; then
      return 0 2>/dev/null || exit 0
    fi
    echo "Unsupported platform: $OS $ARCH — install Node.js from https://nodejs.org/"
    exit 1
    ;;
esac

NODE_DIR="$ROOT/.node-tools"
NODE_BIN="$NODE_DIR/bin"

if [[ ! -x "$NODE_BIN/npm" ]]; then
  echo "→ Downloading Node.js ${NODE_VERSION} (includes npm)…"
  TMP="$(mktemp -d)"
  curl -fsSL "https://nodejs.org/dist/${NODE_VERSION}/${NODE_PKG}.tar.gz" -o "$TMP/node.tar.gz"
  rm -rf "$NODE_DIR"
  mkdir -p "$NODE_DIR"
  tar -xzf "$TMP/node.tar.gz" -C "$NODE_DIR" --strip-components=1
  rm -rf "$TMP"
  echo "→ Node ready at $NODE_DIR"
fi

export PATH="$NODE_BIN:$PATH"
