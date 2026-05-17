# Misc

Non-frontend assets: original resume PDF, scripts, deployment notes.

## Files
- `../Sourav Resume.pdf` — source resume.
- Future: deploy scripts, server configs, analytics setup.

## Deployment notes (for 23sou.xyz)

Site is static after `npm run build` → `frontend/dist/`. Deployment options:

- **Vercel/Netlify**: connect repo, set root = `frontend/`, build = `npm run build`, output = `dist`. Add custom domain `23sou.xyz` in dashboard; update DNS A/CNAME at registrar.
- **GitHub Pages**: push repo, build via Actions, set CNAME = `23sou.xyz`. Point DNS A records to `185.199.108–111.153`.
- **VPS**: scp `dist/` to server, serve via nginx, point DNS A record to server IP, run certbot.
