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
      {% if project.year %}<p>{{ project.year }}</p>{% endif %}
    </a>
  {% endfor %}
  </div>
</section>
