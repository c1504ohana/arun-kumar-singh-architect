---
layout: default
title: Home
---

<section class="hero">
  <div class="hero__inner">
    <h1>{{ site.title }}</h1>
    <p class="hero__tagline">{{ site.tagline }}</p>
  </div>
</section>

<section class="home-featured">
  <h2>Recent Work</h2>
  <div class="project-grid">
  {% assign featured_projects = site.projects | where: "featured", true %}
  {% for project in featured_projects limit:3 %}
    {% include project-card.html project=project index=forloop.index0 %}
  {% endfor %}
  </div>
</section>
