# Architect Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish a free, static Jekyll portfolio site for architect Arun Kumar Singh, hosted on GitHub Pages under the `karan-shergill` GitHub account.

**Architecture:** A Jekyll site with a shared layout (`_layouts/default.html`) wrapping four top-level pages (Home, Projects, About, Contact), plus a `_projects` collection where each Markdown file is one portfolio project. GitHub Pages builds the site natively from `main` on every push — no CI config, no backend, no database.

**Tech Stack:** Jekyll (via the `github-pages` gem, to match GitHub's build environment exactly), plain CSS, Google Fonts (Playfair Display + Inter), GitHub Pages hosting.

**Verification approach:** This is a static content site — per the design spec there are no automated tests. Each task's "verify" step means running `bundle exec jekyll build` and checking the generated `_site/` output (or `jekyll serve` and eyeballing in a browser), matching the design doc's manual-verification approach.

---

## Task 1: Jekyll project scaffold

**Files:**
- Create: `Gemfile`
- Create: `_config.yml`
- Create: `index.md` (placeholder, replaced fully in Task 5)

- [ ] **Step 1: Write the Gemfile**

```ruby
source "https://rubygems.org"
gem "github-pages", group: :jekyll_plugins
```

- [ ] **Step 2: Install gems**

Run: `bundle install`
Expected: creates `Gemfile.lock`, installs `github-pages`, `jekyll`, and dependencies with no errors.

- [ ] **Step 3: Write `_config.yml`**

```yaml
title: Arun Kumar Singh
tagline: Architecture that responds to place and light
email: aks78800@gmail.com
description: Portfolio of architect Arun Kumar Singh.
url: ""
baseurl: ""

collections:
  projects:
    output: true
    permalink: /projects/:path/

defaults:
  - scope:
      path: ""
      type: "projects"
    values:
      layout: "project"

markdown: kramdown
```

- [ ] **Step 4: Write placeholder `index.md`**

```markdown
---
layout: default
title: Home
---

# Site under construction
```

- [ ] **Step 5: Build and verify**

Run: `bundle exec jekyll build`
Expected: exits 0, creates `_site/index.html` containing "Site under construction". No layout exists yet, so Jekyll will use its built-in default — that's expected at this step.

- [ ] **Step 6: Commit**

```bash
git add Gemfile Gemfile.lock _config.yml index.md
git commit -m "Scaffold Jekyll site"
```

---

## Task 2: Shared layout, nav, footer, and styling

**Files:**
- Create: `_layouts/default.html`
- Create: `_includes/nav.html`
- Create: `_includes/footer.html`
- Create: `assets/css/style.css`

- [ ] **Step 1: Write the nav include**

```html
<!-- _includes/nav.html -->
<nav class="site-nav">
  <a class="site-nav__brand" href="{{ '/' | relative_url }}">Arun Kumar Singh</a>
  <div class="site-nav__links">
    <a href="{{ '/' | relative_url }}">Home</a>
    <a href="{{ '/projects/' | relative_url }}">Projects</a>
    <a href="{{ '/about/' | relative_url }}">About</a>
    <a href="{{ '/contact/' | relative_url }}">Contact</a>
  </div>
</nav>
```

- [ ] **Step 2: Write the footer include**

```html
<!-- _includes/footer.html -->
<footer class="site-footer">
  <p>&copy; {{ 'now' | date: "%Y" }} Arun Kumar Singh. All rights reserved.</p>
</footer>
```

- [ ] **Step 3: Write the default layout**

```html
<!-- _layouts/default.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ page.title }} | {{ site.title }}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="{{ '/assets/css/style.css' | relative_url }}">
</head>
<body>
  {% include nav.html %}
  <main>
    {{ content }}
  </main>
  {% include footer.html %}
</body>
</html>
```

- [ ] **Step 4: Write the stylesheet**

```css
/* assets/css/style.css */
:root {
  --color-bg: #f5f1ea;
  --color-text: #3a3a36;
  --color-accent: #c9a876;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  background: var(--color-bg);
  color: var(--color-text);
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.6;
}

h1, h2, h3 {
  font-family: "Playfair Display", Georgia, serif;
  font-weight: 700;
}

a {
  color: var(--color-accent);
}

.site-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
}

.site-nav__brand {
  font-family: "Playfair Display", serif;
  font-size: 1.25rem;
  text-decoration: none;
  color: var(--color-text);
}

.site-nav__links a {
  margin-left: 1.5rem;
  text-decoration: none;
  color: var(--color-text);
}

.site-nav__links a:hover {
  color: var(--color-accent);
}

main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem 3rem;
}

.site-footer {
  text-align: center;
  padding: 2rem;
  font-size: 0.875rem;
  color: var(--color-text);
  opacity: 0.7;
}
```

- [ ] **Step 5: Point `index.md` at the new layout**

Edit `index.md` front matter `layout: default` (already set in Task 1 — no change needed, just confirm).

- [ ] **Step 6: Build and verify**

Run: `bundle exec jekyll build`
Expected: `_site/index.html` now contains the `site-nav` and `site-footer` markup, and `_site/assets/css/style.css` exists.

- [ ] **Step 7: Commit**

```bash
git add _layouts _includes assets/css
git commit -m "Add shared layout, nav, footer, and Warm Minimal styling"
```

---

## Task 3: Projects collection and project detail layout

**Files:**
- Create: `_layouts/project.html`
- Create: `_projects/riverside-residence.md`
- Create: `_projects/oakview-office.md`
- Create: `_projects/pavilion-house.md`
- Create: `assets/images/.gitkeep`

- [ ] **Step 1: Write the project detail layout**

```html
<!-- _layouts/project.html -->
---
layout: default
---
<article class="project">
  <h1>{{ page.title }}</h1>
  <p class="project__meta">{{ page.year }} &middot; {{ page.location }}</p>
  {% if page.image %}
    <img class="project__image" src="{{ page.image | relative_url }}" alt="{{ page.title }}">
  {% endif %}
  <div class="project__body">
    {{ content }}
  </div>
</article>
```

- [ ] **Step 2: Create three sample project files**

```markdown
<!-- _projects/riverside-residence.md -->
---
title: Riverside Residence
year: 2023
location: Austin, TX
image: /assets/images/placeholder-project-1.jpg
---

PLACEHOLDER CONTENT — replace with real project description before launch.

A single-family residence sited along a riverbank, using a simple material palette to let the landscape lead.
```

```markdown
<!-- _projects/oakview-office.md -->
---
title: Oakview Office
year: 2022
location: Dallas, TX
image: /assets/images/placeholder-project-2.jpg
---

PLACEHOLDER CONTENT — replace with real project description before launch.

A small commercial office building organized around a central daylit atrium.
```

```markdown
<!-- _projects/pavilion-house.md -->
---
title: Pavilion House
year: 2021
location: Houston, TX
image: /assets/images/placeholder-project-3.jpg
---

PLACEHOLDER CONTENT — replace with real project description before launch.

A weekend retreat conceived as a series of connected pavilions framing views of the surrounding trees.
```

- [ ] **Step 3: Add placeholder image styling and keep the images directory tracked**

```css
/* append to assets/css/style.css */

.project__image {
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin: 1rem 0;
}

.project__meta {
  opacity: 0.7;
  margin-top: -0.5rem;
}
```

Create empty `assets/images/.gitkeep` (real photos get added here later; git doesn't track empty directories, so this keeps the folder present):

```bash
touch assets/images/.gitkeep
```

- [ ] **Step 4: Build and verify**

Run: `bundle exec jekyll build`
Expected: `_site/projects/riverside-residence/index.html`, `_site/projects/oakview-office/index.html`, and `_site/projects/pavilion-house/index.html` all exist and contain the project title, year, location, and body text. Image tags will point at files that don't exist yet — expected until real photos are added.

- [ ] **Step 5: Commit**

```bash
git add _layouts/project.html _projects assets/images/.gitkeep assets/css/style.css
git commit -m "Add projects collection with sample entries and detail layout"
```

---

## Task 4: Projects listing page

**Files:**
- Create: `projects.md`

- [ ] **Step 1: Write the listing page**

```markdown
---
layout: default
title: Projects
---

<h1>Projects</h1>

<div class="project-grid">
{% for project in site.projects %}
  <a class="project-grid__item" href="{{ project.url | relative_url }}">
    {% if project.image %}
      <img src="{{ project.image | relative_url }}" alt="{{ project.title }}">
    {% endif %}
    <h3>{{ project.title }}</h3>
    <p>{{ project.year }}</p>
  </a>
{% endfor %}
</div>
```

- [ ] **Step 2: Add grid styling**

```css
/* append to assets/css/style.css */

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.project-grid__item {
  text-decoration: none;
  color: var(--color-text);
}

.project-grid__item img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 4px;
}
```

- [ ] **Step 3: Build and verify**

Run: `bundle exec jekyll build`
Expected: `_site/projects/index.html` exists and contains three `project-grid__item` links, one per sample project, each pointing at its detail page URL.

- [ ] **Step 4: Commit**

```bash
git add projects.md assets/css/style.css
git commit -m "Add projects listing page"
```

---

## Task 5: Home page

**Files:**
- Modify: `index.md`

- [ ] **Step 1: Replace the placeholder home page**

```markdown
---
layout: default
title: Home
---

<section class="hero">
  <img class="hero__image" src="/assets/images/placeholder-hero.jpg" alt="{{ site.title }}">
  <div class="hero__caption">
    <h1>{{ site.title }}</h1>
    <p>{{ site.tagline }}</p>
  </div>
</section>

<section class="home-featured">
  <h2>Recent Work</h2>
  <div class="project-grid">
  {% for project in site.projects limit:3 %}
    <a class="project-grid__item" href="{{ project.url | relative_url }}">
      {% if project.image %}
        <img src="{{ project.image | relative_url }}" alt="{{ project.title }}">
      {% endif %}
      <h3>{{ project.title }}</h3>
      <p>{{ project.year }}</p>
    </a>
  {% endfor %}
  </div>
</section>
```

- [ ] **Step 2: Add hero styling**

```css
/* append to assets/css/style.css */

.hero {
  position: relative;
  margin: 0 -2rem 2rem;
}

.hero__image {
  width: 100%;
  height: 60vh;
  object-fit: cover;
  display: block;
}

.hero__caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(to top, rgba(58,58,54,0.7), transparent);
  color: #f5f1ea;
}

.hero__caption h1 {
  margin: 0 0 0.25rem;
  color: #f5f1ea;
}

.home-featured {
  margin-top: 2rem;
}
```

- [ ] **Step 3: Build and verify**

Run: `bundle exec jekyll build`
Expected: `_site/index.html` contains the `hero` section and a `home-featured` section listing exactly 3 projects (the `limit:3` Liquid filter caps it even though there are only 3 sample projects — confirms the filter works once real projects are added later).

- [ ] **Step 4: Commit**

```bash
git add index.md assets/css/style.css
git commit -m "Build home page with full-bleed hero and featured projects"
```

---

## Task 6: About and Contact pages

**Files:**
- Create: `about.md`
- Create: `contact.md`

**Note:** both files include an explicit `permalink:` in front matter. Without it, Jekyll builds a root-level page named `about.md` to `_site/about.html`, not `_site/about/index.html` — this was discovered and fixed the same way for `projects.md` in Task 4 (verified: `_config.yml` has no global page permalink style, only a collection-scoped one for `_projects`). Without this, the nav's `/about/` and `/contact/` links (from Task 2) would 404.

- [ ] **Step 1: Write the About page**

```markdown
---
layout: default
title: About
permalink: /about/
---

<h1>About</h1>

<img class="about__portrait" src="/assets/images/placeholder-portrait.jpg" alt="Arun Kumar Singh">

<p>
PLACEHOLDER CONTENT — replace with real bio before launch.
</p>

<p>
Arun Kumar Singh is an architect based in Texas, with a practice focused on
residential and small-scale commercial work that responds carefully to site,
light, and material.
</p>
```

- [ ] **Step 2: Write the Contact page**

```markdown
---
layout: default
title: Contact
permalink: /contact/
---

<h1>Contact</h1>

<p>
For inquiries, reach out at
<a href="mailto:aks78800@gmail.com">aks78800@gmail.com</a>.
</p>
```

- [ ] **Step 3: Add portrait styling**

```css
/* append to assets/css/style.css */

.about__portrait {
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 4px;
  float: left;
  margin: 0 1.5rem 1rem 0;
}
```

- [ ] **Step 4: Build and verify**

Run: `bundle exec jekyll build`
Expected: `_site/about/index.html` contains the bio text and portrait image tag; `_site/contact/index.html` contains a `mailto:aks78800@gmail.com` link.

- [ ] **Step 5: Commit**

```bash
git add about.md contact.md assets/css/style.css
git commit -m "Add About and Contact pages"
```

---

## Task 7: README for future maintenance

**Files:**
- Create: `README.md`

- [ ] **Step 1: Write the README**

```markdown
# Arun Kumar Singh — Architecture Portfolio

Static site built with Jekyll, hosted free on GitHub Pages.

## Preview locally

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
year: 2026
location: City, State
image: /assets/images/my-new-project.jpg
---

Description of the project goes here.
```

Add the referenced image to `assets/images/`, then commit and push to `main`.
GitHub Pages rebuilds the site automatically within a minute or two.

## Replacing placeholder content

Before launch, replace:
- `assets/images/placeholder-hero.jpg` and the 3 sample project images in `assets/images/`
- The bio text in `about.md`
- The 3 sample entries in `_projects/` (or keep them and add more)

## Custom domain

Not yet configured. Once a domain is purchased, add a `CNAME` file to the repo
root containing the domain name, point the registrar's DNS at GitHub Pages,
and reset `baseurl: ""` in `_config.yml` (it's currently set to
`/arun-kumar-singh-architect` for the github.io project-page URL — a custom
domain serves from the root, so the old baseurl would break every link).
```

- [ ] **Step 2: Commit**

```bash
git add README.md
git commit -m "Add README with maintenance instructions"
```

---

## Task 8: Publish to GitHub Pages

**Files:** none (repository and hosting configuration only)

- [ ] **Step 1: Switch `gh` CLI auth to the `karan-shergill` account**

The `gh` CLI in this environment is currently authenticated as a different account. Before continuing, run (interactively, in your own terminal):

```bash
gh auth login
```

Follow the prompts to log in as `karan-shergill`. Then verify:

```bash
gh auth status
```

Expected: shows `karan-shergill` as the active `github.com` account.

- [ ] **Step 2: Create the GitHub repo and push**

```bash
gh repo create karan-shergill/arun-kumar-singh-architect --public --source=. --remote=origin --push
```

Expected: creates the repo under `karan-shergill`, adds it as the `origin` remote, and pushes the existing `main` branch with all committed history.

- [ ] **Step 3: Enable GitHub Pages**

Go to `https://github.com/karan-shergill/arun-kumar-singh-architect/settings/pages` and under "Build and deployment", set Source to "Deploy from a branch", Branch to `main`, folder `/ (root)`, then Save.

(Equivalent via CLI, if preferred: `gh api repos/karan-shergill/arun-kumar-singh-architect/pages -X POST -f "source[branch]=main" -f "source[path]=/"`)

- [ ] **Step 4: Verify the live site**

Wait 1-2 minutes, then open `https://karan-shergill.github.io/arun-kumar-singh-architect/` in a browser.
Expected: the full-bleed hero home page loads, and Projects/About/Contact links all work.

- [ ] **Step 5: Set `baseurl` for the project-site path and re-verify**

The site is served at `https://karan-shergill.github.io/arun-kumar-singh-architect/` — a path, not the domain root. Every link/asset path in this plan uses Jekyll's `relative_url` filter specifically so this works, but only once `baseurl` matches. Update `_config.yml`:

```yaml
baseurl: "/arun-kumar-singh-architect"
```

Commit and push:

```bash
git add _config.yml
git commit -m "Set baseurl for GitHub Pages project site"
git push
```

Wait 1-2 minutes, reload `https://karan-shergill.github.io/arun-kumar-singh-architect/`, and confirm styling now loads (CSS was previously 404ing at the wrong path) and nav links work.

**Note for later:** when a custom domain is added (see README), the site will be served at the domain root again — `baseurl` must be reset to `""` at that time, or all links will 404.

---

## Explicitly Out of Scope (per design spec)

- Contact form / backend.
- CMS or admin UI.
- Custom domain purchase and DNS wiring (follow-up once a domain is chosen).
- Analytics/tracking.
- Real project photos and bio text — placeholders are used throughout; swapping them in is manual follow-up work, not a coding task.
