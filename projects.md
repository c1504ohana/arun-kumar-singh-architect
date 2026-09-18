---
layout: default
title: Projects
permalink: /projects/
---

<h1>Projects</h1>

<p>Plus 100+ residential projects completed across Patna and Hyderabad.</p>

<div class="project-grid">
{% for project in site.projects %}
  {% include project-card.html project=project index=forloop.index0 %}
{% endfor %}
</div>
