# Enclosed Frames

Experimental photo booth studio, Los Angeles. Static site (no build step).

Preview locally: `python3 -m http.server 8000`, then open http://localhost:8000

## Deploy

- Cloudflare Workers Builds (connected to GitHub) runs `npx wrangler deploy` on every push.
- Config lives in `wrangler.jsonc`: a static-assets-only Worker named `enclosed-frames`, no build step.
- Static files are served straight from the repo root (`assets.directory: "./"`); unknown paths return a 404.
- `.assetsignore` keeps internal files out of the upload (`CLAUDE.md`, `README.md`, `tools/`, `Test`, `wrangler.jsonc`, dotfiles such as `.git`). Add any new internal file there.
- The production branch set in Cloudflare must contain the site (index.html, styles.css, main.js, js/, assets/, wrangler.jsonc, .assetsignore).
- Check locally without logging in: `npx wrangler@4 deploy --dry-run`.
