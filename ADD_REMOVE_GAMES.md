# Add / remove games

- Add: package a standalone HTML file with `python tools/package_game.py <id> <file.html>`, then add its card to `games.js` and commit both.
- Update: package the replacement HTML using the same ID, then commit the replacement `.gz.b64` file.
- Remove: remove the card from `games.js`, delete `games/<id>/index.html.gz.b64`, and commit.

The GitHub Pages workflow automatically expands each `index.html.gz.b64` into a normal `index.html` during deployment.
