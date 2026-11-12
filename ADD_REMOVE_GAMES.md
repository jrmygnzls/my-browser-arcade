# Add / update / remove games

## Easiest method: Arcade Admin

1. Open `https://jrmygnzls.github.io/my-browser-arcade/admin/`.
2. Unlock with a GitHub fine-grained token scoped only to `jrmygnzls/my-browser-arcade`, with Contents read/write permission.
3. Add, edit, replace, or remove games in the panel.
4. Lock the admin panel when finished.

The token stays in page memory only. Never commit it or send it in chat.

## Manual method

- **Add:** create `games/<game-id>/index.html`, then add a matching game object in `games.js`.
- **Update:** replace `games/<game-id>/index.html`.
- **Remove:** delete the matching game object from `games.js` and delete `games/<game-id>/`.

Commit to `main`; GitHub Actions republishes the website automatically.

## Security note

GitHub Pages is static hosting. The admin HTML and URL are public, but game-management actions require a token authenticated as the repository owner with admin permission. For the admin page itself to be server-private, use a backend or access-proxy service.
