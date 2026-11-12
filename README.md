# My Browser Arcade

A collection of standalone browser games published with GitHub Pages.

## Games

- **Endless Sudoku** — endless randomized Sudoku puzzles.
- **Chess Arena** — computer opponents and online multiplayer room codes.
- **Nightfall: Endless Hunt** — endless survival roguelite.
- **Mazebound: Ancients Defense** — maze-building tower defense.

## Publish

This repository deploys automatically with GitHub Actions whenever changes are committed to `main`.

1. Open **Settings → Pages** and choose **GitHub Actions** as the source if it is not already selected.
2. Open the **Actions** tab and check the latest **Deploy My Browser Arcade** run.
3. When it succeeds, visit: https://jrmygnzls.github.io/my-browser-arcade/

## Add a game

1. Create a folder under `games/`, for example `games/my-game/`.
2. Put the standalone game file in that folder and name it `index.html`.
3. Add a matching entry to `games.js` inside `window.ARCADE_GAMES`:

   ```js
   {
     id: "my-game",
     title: "My New Game",
     genre: "Arcade",
     description: "A short description of the game.",
     href: "./games/my-game/index.html",
     icon: "★",
     theme: "nightfall",
     tags: ["Offline", "Arcade"]
   }
   ```

4. Commit the changes to `main`. The site updates automatically.

## Update a game

Replace the relevant `games/<game-id>/index.html` file and commit the change. Keep its ID and `href` in `games.js` unchanged.

## Remove a game

Delete its entry from `games.js`, delete its `games/<game-id>/` folder, and commit the change.

## Notes

- This is a static site; no build framework or backend is required.
- Sudoku, Nightfall, and Mazebound work offline after loading. Chess single-player works offline; online multiplayer requires internet access.
- This repository is public. Do not commit passwords, API keys, or private information.
