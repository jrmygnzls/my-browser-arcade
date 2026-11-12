# Add / update / remove games

The homepage reads its game cards from `games.js`. Each game lives in its own folder under `games/`.

## Add a game

1. Create `games/<game-id>/`.
2. Put the standalone HTML game there as `index.html`.
3. Add one object to `window.ARCADE_GAMES` in `games.js`, using `./games/<game-id>/index.html` as its `href`.
4. Commit to `main`. GitHub Actions publishes it automatically.

## Update a game

Replace `games/<game-id>/index.html` with the new version. Keep the catalog ID and link unchanged.

## Remove a game

Remove its object from `games.js`, delete `games/<game-id>/`, and commit.

No other game folders or catalog entries need to change.
