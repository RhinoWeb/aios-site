# AIOS Knowledge Base — ai.ryanshaw.xyz

The public AIOS wiki: an open handbook for building AI-native organizations.
Dependency-free static site — no build step, no server, no packages.

## Files

- `index.html` — site shell, header, navigation, search modal, layout, and domain metadata.
- `styles.css` — responsive visual system and print styles.
- `app.js` — all page content, hash routing, search, table of contents, and related pages.
- `CNAME` — GitHub Pages custom domain (`ai.ryanshaw.xyz`).
- `robots.txt` / `sitemap.xml` — crawl policy and sitemap.
- `404.html` — redirects unknown paths back to the app (routing is hash-based).

## Review locally

Open `index.html` directly in a browser, or serve the folder with any static server.
Useful routes: `#/welcome`, `#/manifesto`, `#/architecture-overview`, `#/installation-method`, `#/community`. Press `/` to search.

## Deployment

GitHub Pages from the `main` branch (same pattern as `mission-control-site`).
DNS: `ai` CNAME → `rhinoweb.github.io` at the `ryanshaw.xyz` DNS host (GoDaddy).

## Content rules

Public scope only: philosophy, principles, organization design, AI workforce,
work systems, knowledge architecture, platform architecture, installation
method, founder playbook, build-in-public record, and community.

Never publish: credentials or secrets, private customer or partner data,
financials, proprietary internal workflows, or private source code.

## Editing

All content lives in `app.js` as one object per page (`P.<id> = makePage(...)`).
Add a page by creating a `makePage` entry and listing its id in `sections`.
Every navigation link must resolve to a real page; search indexes every page
automatically.

CTAs currently point to `improveddigital@gmail.com`. Replace the community
CTA with the real Skool URL when the community launches.
