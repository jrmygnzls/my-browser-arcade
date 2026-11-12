# My Browser Arcade

A collection of standalone browser games published with GitHub Pages. The site is a static website; no backend or build framework is required.

## Included games

- **Endless Sudoku** — random endless Sudoku puzzles.
- **Chess Arena** — computer opponents and six-digit online multiplayer rooms. Single-player works locally; online rooms need internet and PeerJS signaling.
- **Nightfall: Endless Hunt** — endless survival roguelite.
- **Mazebound: Ancients Defense** — maze-building tower defense with unlockable towers.

## Publish

This repository includes a GitHub Actions workflow at `.github/workflows/pages.yml`. It prepares the site and deploys it to GitHub Pages whenever you push to `main`.

1. Open **Settings → Pages** in this repository.
2. Under **Build and deployment → Source**, select **GitHub Actions** if it is not already selected.
3. Open the **Actions** tab and confirm **Deploy My Browser Arcade** completes successfully.
4. Your site will be at `https://jrmygnzls.github.io/my-browser-arcade/`.

## Add a game

1. Save the new standalone game file as `index.html` inside a local folder, for example `new-game/index.html`.
2. From the repository root, package it:

   ```bash
   python tools/package_game.py new-game new-game/index.html
   ```

   This creates `games/new-game/index.html.gz.b64`. The deployment workflow expands it back to `games/new-game/index.html` on the published site.
3. Add an object to `games.js` inside `window.ARCADE_GAMES`:

   ```js
   {
     id: "new-game",
     title: "My New Game",
     genre: "Arcade",
     description: "A short description of the game.",
     href: "./games/new-game/index.html",
     icon: "★",
     theme: "nightfall",
     tags: ["Offline", "Arcade"]
   }
   ```
4. Commit and push the new `games/new-game/index.html.gz.b64` file and updated `games.js`. GitHub Actions will publish it automatically.

## Remove a game

1. Delete the game's object from `games.js`.
2. Delete its `games/<game-id>/index.html.gz.b64` file.
3. Commit and push. The game card and published game file will be removed on the next deployment.

## Update a game

Package the replacement HTML using the same game ID, then replace its existing `.gz.b64` file and commit it. Keep the ID and `href` unchanged.

## Notes

- `tools/package_game.py` uses only Python's standard library; no dependencies are required.
- `.nojekyll` tells GitHub Pages to serve static files directly.
- Do not put passwords, API keys, or private information in this public repository.
- Sudoku, Nightfall, and Mazebound work offline after loading. Chess single-player works offline; online multiplayer requires internet access.
