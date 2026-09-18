# Arun Kumar Singh — Architecture Portfolio

Static site built with Jekyll, hosted free on GitHub Pages.

## Preview locally

This step is optional — you can also skip straight to editing files and
pushing to `main`; GitHub rebuilds the live site automatically either way.
If you do want to preview changes on your own machine first:

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000

## Add a new project

Create a new file in `_projects/`, e.g. `_projects/my-new-project.md`:

```markdown
---
title: My New Project
location: City, State
image: /assets/images/my-new-project.jpg
map_url: https://maps.app.goo.gl/your-link-here
---

Description of the project goes here.
```

`year`, `location`, `image`, and `map_url` are all optional — the layout only
renders what's present, so it's fine to leave any of them out if you don't
have the information. Add the referenced image to `assets/images/` if you
have one, then commit and push to `main`. GitHub Pages rebuilds the site
automatically within a minute or two.

## Replacing placeholder photos

The About page portrait is a real photo (`assets/images/arun-portrait.jpg`).
Still missing:
- `assets/images/placeholder-hero.jpg` (home page hero) — until a real photo
  is added, this image tag fails silently (no broken-image icon) rather than
  breaking the layout
- an `image:` field for each of the 8 real projects in `_projects/` (none have photos yet)

The bio paragraph in `about.md` is also still placeholder text and should be
replaced with a real bio before launch.

## Certificates

PDFs under `assets/certificates/` are linked from the About page's
"Credentials & Recognition" section. To add or replace one, drop the PDF in
that folder and update the corresponding link in `about.md`.

## Custom domain

Not yet configured. Once a domain is purchased, add a `CNAME` file to the repo
root containing the domain name, point the registrar's DNS at GitHub Pages,
and reset `baseurl: ""` in `_config.yml` (it's currently set to
`/arun-kumar-singh-architect` for the github.io project-page URL — a custom
domain serves from the root, so the old baseurl would break every link).
