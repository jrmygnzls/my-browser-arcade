# My Browser Arcade

A collection of standalone browser games published with GitHub Pages.

## Included games

- Endless Sudoku
- Chess Arena (computer opponents and online multiplayer)
- Nightfall: Endless Hunt
- Mazebound: Ancients Defense

## Publish the site

1. Download and extract [My Browser Arcade GitHub Pages ZIP](https://github.com/jrmygnzls/my-browser-arcade/blob/main/My_Browser_Arcade_Package_Fresh.zip).
2. Open this repository on GitHub and choose **Add file → Upload files**.
3. Open the extracted `My_Browser_Arcade` folder on your computer and upload its contents (not the outer folder and not only the ZIP).
4. Commit the upload to the `main` branch.
5. Open **Settings → Pages** and set the source to **GitHub Actions**.
6. Open **Actions** and check that **Deploy My Browser Arcade** completes successfully.

Your website address will be:

https://jrmygnzls.github.io/my-browser-arcade/

The first deployment can take several minutes.

## Add, update, or remove games

The homepage reads its cards from `games.js`.

- **Add:** create a folder under `games/<game-id>/`, put the game's `index.html` there, then add a matching object to `games.js`.
- **Update:** replace that game's `index.html` and commit the change.
- **Remove:** remove its object from `games.js` and delete its folder.

The included `README.md` and `ADD_REMOVE_GAMES.md` contain the detailed instructions. The Pages workflow expands the compressed backup copies in `games/*/index.html.gz.b64` during deployment.

## Notes

- The games are standalone HTML files; no build framework is needed.
- Sudoku, Nightfall, and Mazebound are designed to run offline after loading.
- Chess single-player works offline. Online multiplayer requires internet access.
- This repository is public. Do not commit passwords, API keys, or private information.
