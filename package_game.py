#!/usr/bin/env python3
"""Compress a standalone game's index.html for the Arcade GitHub Pages workflow.

Usage:
  python tools/package_game.py sudoku path/to/game.html

Creates games/<game-id>/index.html.gz.b64. Add the game to games.js as usual.
"""
from __future__ import annotations
import argparse
import base64
import gzip
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("game_id", help="lowercase folder ID, e.g. my-game")
    parser.add_argument("html_file", type=Path, help="standalone HTML file to package")
    args = parser.parse_args()
    if not re.fullmatch(r"[a-z0-9-]+", args.game_id):
        parser.error("game_id must contain only lowercase letters, numbers, and hyphens")
    source = args.html_file.expanduser().resolve()
    if not source.is_file():
        parser.error(f"HTML file not found: {source}")
    data = source.read_bytes()
    compressed = gzip.compress(data, compresslevel=9, mtime=0)
    encoded = base64.b64encode(compressed).decode("ascii")
    target = ROOT / "games" / args.game_id / "index.html.gz.b64"
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(encoded + "\n", encoding="ascii")
    print(f"Packaged {source.name} -> {target.relative_to(ROOT)}")
    print(f"Original: {len(data):,} bytes | Packaged: {len(encoded):,} characters")


if __name__ == "__main__":
    main()
