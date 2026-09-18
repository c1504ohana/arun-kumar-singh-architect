---
layout: default
title: Projects
permalink: /projects/
---

<header class="page-hero page-width">
  <p class="eyebrow">Selected portfolio</p>
  <div class="page-hero__grid">
    <h1>Work across<br><em>many scales.</em></h1>
    <p>
      Residential, educational, healthcare, institutional, and cultural work
      shaped by its purpose and place&mdash;plus more than 100 homes delivered
      across Patna and Hyderabad.
    </p>
  </div>
</header>

<section class="projects-index page-width">
  <div class="projects-index__bar">
    <p>Selected projects</p>
    <p>{{ site.projects | size }} featured here</p>
  </div>
  <div class="project-grid">
  {% for project in site.projects %}
    {% include project-card.html project=project index=forloop.index0 %}
  {% endfor %}
  </div>
</section>
