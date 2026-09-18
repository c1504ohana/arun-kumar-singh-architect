# Architect Portfolio Website — Design

**Date:** 2026-09-18
**For:** Arun Kumar Singh (architect)
**Built by:** Amit Kumar (son)

## Goal

A free-forever, low-maintenance static portfolio website for Arun Kumar Singh, hosted on GitHub Pages, with a custom domain added once purchased. Content (new projects) should be addable without touching layout code.

## Hosting & Repo

- Public GitHub repository under the `c1504ohana` GitHub account.
- Repo name: `arun-kumar-singh-architect`.
- Public visibility is required for free GitHub Pages on a personal (non-Pro) account. No sensitive data lives in the repo — only content meant to be publicly viewable.
- GitHub Pages builds the site natively from Jekyll on every push to `main` — no GitHub Actions workflow needed.
- Live URL initially: `https://c1504ohana.github.io/arun-kumar-singh-architect/`.
- Custom domain: not yet purchased. Once bought (~$10-15/yr for a `.com` via Cloudflare Registrar or Namecheap), add a `CNAME` file to the repo root and point DNS (A/ALIAS or CNAME record depending on registrar) at GitHub Pages. GitHub auto-provisions a free SSL certificate for the custom domain. This is a follow-up step, not part of initial build.

## Tech Stack

- **Jekyll** (GitHub Pages' native static site generator). No local Ruby/Jekyll install is required to ship — GitHub builds it server-side on push — but installing Jekyll locally is useful for previewing changes before pushing (optional, documented in README).
- Plain CSS (no framework/build step) for styling.
- Google Fonts: "Playfair Display" (headings) + "Inter" (body), loaded via `<link>` tag.

## Site Structure

```
/
├── _config.yml
├── _layouts/
│   └── default.html       # shared page shell: <head>, nav, footer
├── _includes/
│   ├── nav.html
│   └── footer.html
├── _projects/              # one .md file per project (collection)
│   ├── project-1.md
│   └── ...
├── assets/
│   ├── css/style.css
│   └── images/
├── index.md                # Home
├── projects.md             # Projects listing (loops over _projects collection)
├── about.md                # About
├── contact.md              # Contact
└── README.md                # how to add a project, how to preview locally
```

## Pages

### Home (`index.md`)
- Full-bleed hero photo (a signature building), with firm/name and tagline overlaid or immediately below.
- Teaser strip below the hero showing 3 recent projects (image + title), each linking to its project detail page.
- Layout matches the approved "Full-Bleed Hero" mockup.

### Projects (`projects.md`)
- Grid of all entries in the `_projects` collection (image thumbnail + title + year).
- Each project links to its own detail page rendered via a `project` layout (photo(s), description, year, location).

### About (`about.md`)
- Portrait photo + bio text for Arun Kumar Singh.

### Contact (`contact.md`)
- A `mailto:aks78800@gmail.com` link. No form, no backend, no third-party service.

### Adding a new project (ongoing maintenance)
- Create a new Markdown file in `_projects/` with front matter (`title`, `year`, `location`, `image`, `description`).
- Commit and push. GitHub Pages rebuilds automatically; no template/code changes needed.

## Visual Style — "Warm Minimal"

- Background: off-white `#f5f1ea`
- Text: charcoal `#3a3a36`
- Accent (links, hover states, buttons): muted gold `#c9a876`
- Headings: "Playfair Display" (serif)
- Body: "Inter" (sans-serif), falls back to system sans-serif

## Error Handling / Edge Cases

- Missing project image: layout should degrade gracefully (skip image block rather than showing a broken image icon) — handled with a simple Liquid `{% if %}` check in the project card include.
- No contact form, so no form-validation or spam-handling surface to build.

## Testing / Verification

- No automated tests — this is static content.
- Verification is manual: after each push, confirm the GitHub Pages build succeeded (repo's "Actions"/"Pages" build status) and view the live URL to confirm the page renders as expected.
- Optional local preview via `bundle exec jekyll serve` before pushing, documented in README for whoever maintains the site later.

## Explicitly Out of Scope

- Contact form / backend of any kind.
- CMS or admin UI for editing content (edits are direct Markdown file changes).
- Custom domain purchase/DNS wiring (tracked as a follow-up once a domain is chosen).
- Analytics/tracking.
