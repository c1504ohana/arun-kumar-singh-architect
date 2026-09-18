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

<section class="home-intro">
  <p class="home-intro__lead">
    Arun Kumar Singh brings decades of architectural practice to residential,
    institutional, and commercial projects across Bihar and Telangana — from
    concept through construction.
  </p>

  <div class="stats">
    <div class="stats__item">
      <div class="stats__number">100+</div>
      <div class="stats__label">Residential Projects</div>
    </div>
    <div class="stats__item">
      <div class="stats__number">2</div>
      <div class="stats__label">Offices — Patna &amp; Hyderabad</div>
    </div>
    <div class="stats__item">
      <div class="stats__number">CA/81/6231</div>
      <div class="stats__label">Council of Architecture Registration</div>
    </div>
  </div>

  <div class="home-intro__cta">
    <a class="button button--primary" href="{{ '/projects/' | relative_url }}">View Projects</a>
    <a class="button button--secondary" href="{{ '/contact/' | relative_url }}">Get in Touch</a>
  </div>
</section>

<section class="home-services">
  <h2 class="section-label">What We Do</h2>
  <div class="services-grid">
    <div class="services-grid__item">
      <h3>Architecture</h3>
      <p>Residential &amp; commercial design, from concept to completion.</p>
    </div>
    <div class="services-grid__item">
      <h3>Interior Design</h3>
      <p>Residential, commercial, and office interiors.</p>
    </div>
    <div class="services-grid__item">
      <h3>Town Planning</h3>
      <p>Layout and planning for larger developments.</p>
    </div>
    <div class="services-grid__item">
      <h3>Engineering Consultancy</h3>
      <p>Structural and engineering support.</p>
    </div>
    <div class="services-grid__item">
      <h3>Valuation</h3>
      <p>Property valuation services.</p>
    </div>
  </div>
</section>
