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

## Adding project photography

The site uses an architectural graphic treatment whenever a project does not
have photography. To replace a graphic with a real project image, add the
image under `assets/images/` and set the project's `image:` front matter to
its path. The About page portrait is stored at
`assets/images/arun-portrait.jpg`.

The categorized project gallery is defined in `gallery.md`, with optimized
images stored under `assets/images/gallery/`.

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
