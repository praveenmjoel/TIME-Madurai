#!/usr/bin/env bash
# Batch-import all AIMCAT JSON files from a folder.
# Usage: bash import-aimcat-batch.sh ~/Downloads
#
# It skips files that don't match the aimcat_*.json naming pattern.

DIR="${1:-$HOME/Downloads}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OK=0; FAIL=0; SKIP=0

for f in "$DIR"/aimcat_*.json; do
  [ -f "$f" ] || continue
  echo "──────────────────────────────────────"
  echo "Importing: $(basename "$f")"
  if node "$SCRIPT_DIR/import-aimcat.js" "$f"; then
    ((OK++))
  else
    echo "❌ Failed: $(basename "$f")"
    ((FAIL++))
  fi
done

echo ""
echo "══════════════════════════════════════"
echo "Done.  ✅ $OK imported   ❌ $FAIL failed   ⏭ $SKIP skipped"
