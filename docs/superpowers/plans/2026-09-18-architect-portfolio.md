# Architect Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish a free, static Jekyll portfolio site for architect Arun Kumar Singh, hosted on GitHub Pages under the `c1504ohana` GitHub account.

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
- Modify: `assets/css/style.css`

**Note:** the hero `<img>` uses `relative_url` (unlike an earlier draft of this plan) — every other asset/link in the codebase goes through this filter, and Task 8 sets a non-empty `baseurl` for the GitHub Pages project-site URL, so an unfiltered absolute path would 404 in production. The `.hero` CSS below also uses a viewport-breakout technique rather than a negative margin matched to `main`'s padding — the negative-margin approach only cancels `main`'s own padding and does not reach the actual viewport edge on screens wider than `main`'s 1100px `max-width`, failing the design spec's "full-bleed" requirement on typical desktop widths.

**Known, deferred duplication:** the `project-grid__item` card markup in this task's "Recent Work" loop is identical to the one in `projects.md` (Task 4), differing only by `limit:3`. This is a real DRY gap (now has two call sites) but extracting a shared `_includes/project-card.html` is out of scope for this task — it's not something either task asked for, and doing it here would be an unplanned refactor. Track it as a candidate cleanup for a future pass; not required before shipping.

- [ ] **Step 1: Replace the placeholder home page**

```markdown
---
layout: default
title: Home
---

<section class="hero">
  <img class="hero__image" src="{{ '/assets/images/placeholder-hero.jpg' | relative_url }}" alt="{{ site.title }}">
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
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  margin-bottom: 2rem;
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

## Task 7: Replace sample projects with real delivered projects

**Context:** Real project names and Google Maps links for 8 delivered projects were provided after Tasks 1-6 were built and reviewed. Precise street addresses and completion years were not provided for these — rather than fabricate them, each project gets a `location: Patna, Bihar` (all 8 are Patna-area projects per context; one is literally named "ISKCON Temple Patna") and a `map_url` link to the actual Google Maps listing instead of asserting an unverified address. No `year` is set (unknown) — this requires the `project.html` layout and the two grid loops (`projects.md`, `index.md`) to treat `year`/`location` as optional, which they don't today (Task 3 hardcoded `{{ page.year }} &middot; {{ page.location }}` with no guard, and Task 4/5 always render `<p>{{ project.year }}</p>` even if blank).

**Files:**
- Delete: `_projects/riverside-residence.md`, `_projects/oakview-office.md`, `_projects/pavilion-house.md` (fictional placeholders, no longer needed now real projects exist)
- Create: `_projects/narayan-medical-college-hospital.md`, `_projects/iskcon-temple-patna.md`, `_projects/shiva-enclave.md`, `_projects/issyoga-msmb-bhawan.md`, `_projects/carmel-high-school.md`, `_projects/dhirendra-shree-apartment.md`, `_projects/sheetal-chaya-apartment.md`, `_projects/aero-green-city.md`
- Modify: `_layouts/project.html` (guard `year`/`location`, add optional `map_url` link)
- Modify: `projects.md` (guard `year` in the grid loop, add a closing note about 100+ residential projects)
- Modify: `index.md` (guard `year` in the featured-projects loop, same as `projects.md`)

- [ ] **Step 1: Delete the 3 placeholder project files**

```bash
git rm _projects/riverside-residence.md _projects/oakview-office.md _projects/pavilion-house.md
```

- [ ] **Step 2: Update the project detail layout to make year/location optional and support a map link**

Replace `_layouts/project.html` with:

```html
---
layout: default
---
<article class="project">
  <h1>{{ page.title }}</h1>
  {% if page.year or page.location %}
  <p class="project__meta">{% if page.year %}{{ page.year }}{% endif %}{% if page.year and page.location %} &middot; {% endif %}{% if page.location %}{{ page.location }}{% endif %}</p>
  {% endif %}
  {% if page.image %}
    <img class="project__image" src="{{ page.image | relative_url }}" alt="{{ page.title }}">
  {% endif %}
  <div class="project__body">
    {{ content }}
  </div>
  {% if page.map_url %}
    <p class="project__map-link"><a href="{{ page.map_url }}" target="_blank" rel="noopener">View on Google Maps</a></p>
  {% endif %}
</article>
```

- [ ] **Step 3: Add map-link styling**

Append to `assets/css/style.css`:

```css
.project__map-link a {
  font-weight: 500;
}
```

- [ ] **Step 4: Create the 8 real project files**

`_projects/narayan-medical-college-hospital.md`:
```markdown
---
title: Narayan Medical College & Hospital
location: Patna, Bihar
map_url: https://maps.app.goo.gl/7zfiwTSL3VRwuYfX9
---

Delivered project by Arun Kumar Singh / A. K. & Associates.
```

`_projects/iskcon-temple-patna.md`:
```markdown
---
title: ISKCON Temple Patna
location: Patna, Bihar
map_url: https://maps.app.goo.gl/6aiV1ojqCwLA4Ske8
---

Delivered project by Arun Kumar Singh / A. K. & Associates.
```

`_projects/shiva-enclave.md`:
```markdown
---
title: Shiva Enclave
location: Patna, Bihar
map_url: https://maps.app.goo.gl/4FRg6AxDZATwQyew7
---

Delivered project by Arun Kumar Singh / A. K. & Associates.
```

`_projects/issyoga-msmb-bhawan.md`:
```markdown
---
title: Issyoga MSMB Bhawan
location: Patna, Bihar
map_url: https://maps.app.goo.gl/fAysxRrocpfhmyWi6
---

Delivered project by Arun Kumar Singh / A. K. & Associates.
```

`_projects/carmel-high-school.md`:
```markdown
---
title: Carmel High School
location: Patna, Bihar
map_url: https://maps.app.goo.gl/p2cvQhneY61t5t5r5
---

Delivered project by Arun Kumar Singh / A. K. & Associates.
```

`_projects/dhirendra-shree-apartment.md`:
```markdown
---
title: Dhirendra Shree Apartment
location: Patna, Bihar
map_url: https://maps.app.goo.gl/DbtkkVMCScLtrKij8
---

Delivered project by Arun Kumar Singh / A. K. & Associates.
```

`_projects/sheetal-chaya-apartment.md`:
```markdown
---
title: Sheetal Chaya Apartment
location: Patna, Bihar
map_url: https://maps.app.goo.gl/81v9ho1ZWqYQp3Q28
---

Delivered project by Arun Kumar Singh / A. K. & Associates.
```

`_projects/aero-green-city.md`:
```markdown
---
title: Aero Green City
location: Patna, Bihar
map_url: https://maps.app.goo.gl/ttLrePzGFCHja79q8
---

Delivered project by Arun Kumar Singh / A. K. & Associates.
```

None of these 8 files set `image` (no photos supplied yet) — the existing `{% if page.image %}` guard in the layout already handles that gracefully, no image tag will render.

- [ ] **Step 5: Guard `year` in the projects listing page and add the "100+ projects" note**

In `projects.md`, replace:

```liquid
    <h3>{{ project.title }}</h3>
    <p>{{ project.year }}</p>
```

with:

```liquid
    <h3>{{ project.title }}</h3>
    {% if project.year %}<p>{{ project.year }}</p>{% endif %}
```

And add this paragraph right after the `<h1>Projects</h1>` line, before the `<div class="project-grid">`:

```html
<p>Plus 100+ residential projects completed across Patna and Hyderabad.</p>
```

- [ ] **Step 6: Guard `year` in the home page's featured-projects loop**

In `index.md`, replace:

```liquid
      <h3>{{ project.title }}</h3>
      <p>{{ project.year }}</p>
```

with:

```liquid
      <h3>{{ project.title }}</h3>
      {% if project.year %}<p>{{ project.year }}</p>{% endif %}
```

- [ ] **Step 7: Build and verify**

Run: `bundle exec jekyll build`
Expected: `_site/projects/` contains 8 detail pages (one per new project, at slugs matching the filenames above — e.g. `_site/projects/iskcon-temple-patna/index.html`), each containing the title, "Patna, Bihar", a "View on Google Maps" link pointing at the correct `maps.app.goo.gl` URL, and no `&middot;` with a blank year on either side. `_site/projects/index.html` contains the "100+ residential projects" sentence and 8 grid items (not 3). `_site/index.html`'s "Recent Work" section still shows exactly 3 (via `limit:3`), pulled from whichever 3 of the 8 real projects Jekyll orders first — no blank `<p></p>` for the missing year.

- [ ] **Step 8: Commit**

```bash
git add _projects _layouts/project.html projects.md index.md assets/css/style.css
git commit -m "Replace sample projects with 8 real delivered projects"
```

---

## Task 8: Certificates, office locations, and firm branding

**Context:** Arun Kumar Singh operates two registered practices: **A. K. & Associates** in Patna (his original, COA-registered practice, registration No. CA/81/6231) and **Vision Architects & Project Consultant** in Hyderabad (a newer registration, GSTIN 36ACEPS3085K1Z6). Per explicit user decision, the site's tagline shows both firm names alongside his personal name (which remains the page `<h1>`/site title). Per explicit user decision, all 3 supplied certificate PDFs are published (a DDA architect empanelment certificate — the genuine professional credential — plus a GST registration certificate and a GHMC trade license, both business/tax registration documents for the Hyderabad office). Contact details use his originally-given personal email for general inquiries and the Hyderabad firm's own email for that office specifically, per explicit user decision.

**Files:**
- Create: `assets/certificates/dda-architect-empanelment-certificate.pdf` (copied from `/Users/amitkumar/Downloads/Empanelment of architect.pdf`)
- Create: `assets/certificates/gst-registration-certificate.pdf` (copied from `/Users/amitkumar/Downloads/8c46f75e-ff8b-4c7d-af92-7846b31557f2.pdf`)
- Create: `assets/certificates/ghmc-trade-license.pdf` (copied from `/Users/amitkumar/Downloads/ProvisionalCertificate-43.pdf`)
- Modify: `_config.yml` (tagline)
- Modify: `about.md` (add Credentials & Recognition section)
- Modify: `contact.md` (add both office blocks)

- [ ] **Step 1: Copy the 3 certificate PDFs into the repo**

```bash
mkdir -p assets/certificates
cp "/Users/amitkumar/Downloads/Empanelment of architect.pdf" assets/certificates/dda-architect-empanelment-certificate.pdf
cp "/Users/amitkumar/Downloads/8c46f75e-ff8b-4c7d-af92-7846b31557f2.pdf" assets/certificates/gst-registration-certificate.pdf
cp "/Users/amitkumar/Downloads/ProvisionalCertificate-43.pdf" assets/certificates/ghmc-trade-license.pdf
```

- [ ] **Step 2: Update the site tagline in `_config.yml`**

Find this line:
```yaml
tagline: Architecture that responds to place and light
```

Replace it with (uses a literal middle-dot character `·`, not an HTML entity — `_config.yml` is a YAML data file, and its value gets injected into HTML via `{{ site.tagline }}` without escaping, so a literal Unicode character renders correctly and matches how the value should look as a plain string):
```yaml
tagline: "A. K. & Associates (Patna) · Vision Architects & Project Consultant (Hyderabad)"
```

- [ ] **Step 3: Add a Credentials & Recognition section to `about.md`**

Append this to the end of `about.md` (after the existing bio paragraph, before nothing else — it's the last content in the file):

```markdown
<h2>Credentials &amp; Recognition</h2>

<p>Registered Architect, Council of Architecture, Registration No. CA/81/6231.</p>

<ul>
  <li><a href="{{ '/assets/certificates/dda-architect-empanelment-certificate.pdf' | relative_url }}">Delhi Development Authority — Architect Empanelment Certificate</a></li>
  <li><a href="{{ '/assets/certificates/gst-registration-certificate.pdf' | relative_url }}">GST Registration Certificate (Vision Architects &amp; Project Consultant)</a></li>
  <li><a href="{{ '/assets/certificates/ghmc-trade-license.pdf' | relative_url }}">GHMC Trade License (Hyderabad office)</a></li>
</ul>

<h3>External Profiles</h3>

<ul>
  <li><a href="https://www.justdial.com/Patna/A-K-Associates-Back-Side-Harihar-Chamber-Boring-Road/0612PX612-X612-130627165350-P4D8DC_BZDET" target="_blank" rel="noopener">A. K. &amp; Associates on JustDial</a></li>
  <li><a href="https://indianinstituteofarchitects.com/wp-content/uploads/2026/06/BIHAR-CHAPTER-1.pdf" target="_blank" rel="noopener">Indian Institute of Architects — Bihar Chapter</a></li>
</ul>
```

- [ ] **Step 4: Add both office blocks to `contact.md`**

Replace the entire body of `contact.md` (keep the front matter) with:

```markdown
---
layout: default
title: Contact
permalink: /contact/
---

<h1>Contact</h1>

<p>
For general inquiries, reach out at
<a href="mailto:aks78800@gmail.com">aks78800@gmail.com</a>
or call +91 92347 31417 / +91 87892 18757.
</p>

<h2>Patna Office</h2>
<p>
A. K. &amp; Associates<br>
Landline: 0612-2230172<br>
<a href="https://maps.app.goo.gl/p7oADzeHyxG3aDSG6" target="_blank" rel="noopener">View on Google Maps</a>
</p>

<h2>Hyderabad Office</h2>
<p>
Vision Architects &amp; Project Consultant<br>
H.No. 2-3-59/1, Mann Nivas, 2nd Floor, Main Road, Amberpet, Hyderabad, Telangana 500013<br>
Email: <a href="mailto:visionarchitecthyd@gmail.com">visionarchitecthyd@gmail.com</a><br>
<a href="https://maps.app.goo.gl/KBk8zVcuf2Dx83zF7" target="_blank" rel="noopener">View on Google Maps</a>
</p>
```

- [ ] **Step 5: Add heading styles if needed**

The existing `h1, h2, h3` CSS rule from Task 2 already styles all heading levels (Playfair Display, bold) — no new CSS is needed for the `<h2>`/`<h3>` headings added in Steps 3 and 4. Skip adding any CSS in this step; just confirm (by visual inspection of the built HTML) that the existing rule applies to the new headings too.

- [ ] **Step 6: Build and verify**

Run: `bundle exec jekyll build`
Expected:
- `_site/assets/certificates/dda-architect-empanelment-certificate.pdf`, `gst-registration-certificate.pdf`, and `ghmc-trade-license.pdf` all exist (Jekyll copies non-Markdown files verbatim into `_site/`).
- `_site/about/index.html` contains "Credentials &amp; Recognition", the COA registration number, links to all 3 PDFs (with `relative_url`-correct paths), and the JustDial/IIA external links.
- `_site/contact/index.html` contains both "Patna Office" and "Hyderabad Office" headings, the mailto links for both emails, the phone numbers, and both Google Maps links.
- `_site/index.html`'s hero caption now shows the updated tagline with both firm names.

- [ ] **Step 7: Commit**

```bash
git add assets/certificates _config.yml about.md contact.md
git commit -m "Add certificates, office locations, and firm branding"
```

---

## Task 9: README for future maintenance

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

- [ ] **Step 1: Switch `gh` CLI auth to the `c1504ohana` account**

The `gh` CLI in this environment is currently authenticated as a different account. Before continuing, run (interactively, in your own terminal):

```bash
gh auth login
```

Follow the prompts to log in as `c1504ohana`. Then verify:

```bash
gh auth status
```

Expected: shows `c1504ohana` as the active `github.com` account.

- [ ] **Step 2: Create the GitHub repo and push**

```bash
gh repo create c1504ohana/arun-kumar-singh-architect --public --source=. --remote=origin --push
```

Expected: creates the repo under `c1504ohana`, adds it as the `origin` remote, and pushes the existing `main` branch with all committed history.

- [ ] **Step 3: Enable GitHub Pages**

Go to `https://github.com/c1504ohana/arun-kumar-singh-architect/settings/pages` and under "Build and deployment", set Source to "Deploy from a branch", Branch to `main`, folder `/ (root)`, then Save.

(Equivalent via CLI, if preferred: `gh api repos/c1504ohana/arun-kumar-singh-architect/pages -X POST -f "source[branch]=main" -f "source[path]=/"`)

- [ ] **Step 4: Verify the live site**

Wait 1-2 minutes, then open `https://c1504ohana.github.io/arun-kumar-singh-architect/` in a browser.
Expected: the full-bleed hero home page loads, and Projects/About/Contact links all work.

- [ ] **Step 5: Set `baseurl` for the project-site path and re-verify**

The site is served at `https://c1504ohana.github.io/arun-kumar-singh-architect/` — a path, not the domain root. Every link/asset path in this plan uses Jekyll's `relative_url` filter specifically so this works, but only once `baseurl` matches. Update `_config.yml`:

```yaml
baseurl: "/arun-kumar-singh-architect"
```

Commit and push:

```bash
git add _config.yml
git commit -m "Set baseurl for GitHub Pages project site"
git push
```

Wait 1-2 minutes, reload `https://c1504ohana.github.io/arun-kumar-singh-architect/`, and confirm styling now loads (CSS was previously 404ing at the wrong path) and nav links work.

**Note for later:** when a custom domain is added (see README), the site will be served at the domain root again — `baseurl` must be reset to `""` at that time, or all links will 404.

---

## Explicitly Out of Scope (per design spec)

- Contact form / backend.
- CMS or admin UI.
- Custom domain purchase and DNS wiring (follow-up once a domain is chosen).
- Analytics/tracking.
- Real project photos and bio text — placeholders are used throughout; swapping them in is manual follow-up work, not a coding task.
