# My Browser Arcade

A collection of standalone browser games published with GitHub Pages.

## Games

- **Endless Sudoku** — endless randomized Sudoku puzzles.
- **Chess Arena** — computer opponents and online multiplayer room codes.
- **Nightfall: Endless Hunt** — endless survival roguelite.
- **Mazebound: Ancients Defense** — maze-building tower defense.

## Admin page

Open `/admin/` on the published site. It is not linked from the public homepage. To unlock it, create a fine-grained personal access token for **only this repository** with **Contents: Read and write** permission. The panel verifies that the GitHub account is `jrmygnzls` and has repository administrator access.

The token is held in page memory only; it is not saved in local storage or written to the repository. Lock the admin panel when finished. Since GitHub Pages is static hosting, the admin page's HTML source and URL remain public; only the management operations are protected by GitHub account and repository permissions. For server-level page privacy, use an authenticated backend or access-proxy service.

## Publish

This repository deploys automatically with GitHub Actions whenever changes are committed to `main`.

1. Open **Settings → Pages** and choose **GitHub Actions** as the source if it is not already selected.
2. Open the **Actions** tab and check the latest **Deploy My Browser Arcade** run.
3. Visit: https://jrmygnzls.github.io/my-browser-arcade/

## Add a game manually

1. Create a folder under `games/`, for example `games/my-game/`.
2. Put the standalone game file there as `index.html`.
3. Add a matching entry to `games.js` inside `window.ARCADE_GAMES`, with `href: "./games/my-game/index.html"`.
4. Commit the changes to `main`. GitHub Actions publishes it automatically.

You can also add, edit, replace, or remove games from the Admin page after unlocking it.

## Notes

- This is a static site; no build framework or backend is required.
- Sudoku, Nightfall, and Mazebound work offline after loading. Chess single-player works offline; online multiplayer requires internet access.
- This repository is public. Do not commit passwords, API keys, or personal access tokens.
