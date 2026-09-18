---
layout: default
title: Projects
permalink: /projects/
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
