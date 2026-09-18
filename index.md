---
layout: default
title: Home
---

<section class="home-hero">
  <div class="home-hero__inner page-width">
    <div class="home-hero__copy">
      <p class="eyebrow">Architecture &middot; Planning &middot; Interiors</p>
      <h1>Spaces shaped for <em>how life unfolds.</em></h1>
      <p class="home-hero__lead">
        Context-aware architecture for homes, institutions, and communities
        across Bihar and Telangana.
      </p>
      <div class="home-hero__actions">
        <a class="button button--primary" href="{{ '/projects/' | relative_url }}">Explore selected work</a>
        <a class="text-link" href="{{ '/about/' | relative_url }}">Meet the practice <span aria-hidden="true">&rarr;</span></a>
      </div>
    </div>
    <div class="architectural-study" aria-label="Abstract architectural composition">
      <span class="architectural-study__grid"></span>
      <span class="architectural-study__sun"></span>
      <span class="architectural-study__building architectural-study__building--one"></span>
      <span class="architectural-study__building architectural-study__building--two"></span>
      <span class="architectural-study__building architectural-study__building--three"></span>
      <span class="architectural-study__line"></span>
      <span class="architectural-study__note">Form / Function / Context</span>
      <span class="architectural-study__index">01</span>
    </div>
  </div>
</section>

<section class="practice-strip">
  <div class="practice-strip__inner page-width">
    <div class="practice-strip__intro">
      <p class="eyebrow">Established practice</p>
      <p>From first sketch to final detail, every project balances clarity, utility, and a lasting sense of place.</p>
    </div>
    <div class="practice-strip__stat">
      <strong>100<span>+</span></strong>
      <p>Residential projects delivered</p>
    </div>
    <div class="practice-strip__stat">
      <strong>02</strong>
      <p>Studios in Patna &amp; Hyderabad</p>
    </div>
    <div class="practice-strip__stat practice-strip__stat--registration">
      <strong>CA/81/6231</strong>
      <p>Council of Architecture</p>
    </div>
  </div>
</section>

<section class="section page-width">
  <div class="section-heading">
    <div>
      <p class="eyebrow">Selected work</p>
      <h2>Built around people<br>and place.</h2>
    </div>
    <a class="text-link" href="{{ '/projects/' | relative_url }}">View all projects <span aria-hidden="true">&rarr;</span></a>
  </div>
  <div class="project-grid project-grid--featured">
    {% assign featured_projects = site.projects | where: "featured", true %}
    {% for project in featured_projects %}
      {% include project-card.html project=project index=forloop.index0 %}
    {% endfor %}
  </div>
</section>

<section class="studio-statement">
  <div class="studio-statement__inner page-width">
    <p class="eyebrow eyebrow--light">A considered approach</p>
    <blockquote>
      Good architecture does more than occupy land.
      It creates <em>belonging.</em>
    </blockquote>
    <div class="studio-statement__detail">
      <span class="studio-statement__rule"></span>
      <p>
        Led by Arun Kumar Singh, the practice works across residential,
        educational, healthcare, cultural, and township projects&mdash;bringing
        local understanding and technical rigor to every scale.
      </p>
    </div>
  </div>
</section>

<section class="architecture-principles page-width">
  <div class="architecture-principles__intro">
    <div>
      <p class="eyebrow">Architecture, considered</p>
      <h2>Design begins before<br>the first line is drawn.</h2>
    </div>
    <div class="architecture-principles__copy">
      <p>
        Architecture is the careful shaping of space around people&mdash;how
        they arrive, move, gather, work, rest, and adapt over time.
      </p>
      <p>
        In the climates of Bihar and Telangana, good design must also work
        with sunlight, shade, ventilation, monsoon rain, local materials,
        and the realities of construction. These practical decisions are
        what make a building comfortable, efficient, and enduring.
      </p>
    </div>
  </div>
  <div class="architecture-principles__grid">
    <article>
      <span>01</span>
      <h3>Climate &amp; light</h3>
      <p>Orientation, shading, daylight, and natural ventilation are considered from the earliest plans.</p>
    </article>
    <article>
      <span>02</span>
      <h3>Flow &amp; function</h3>
      <p>Clear circulation and well-proportioned rooms make spaces intuitive, useful, and easy to inhabit.</p>
    </article>
    <article>
      <span>03</span>
      <h3>Material &amp; longevity</h3>
      <p>Durable materials and buildable details help architecture age well and remain practical to maintain.</p>
    </article>
  </div>
</section>

<section class="section page-width">
  <div class="section-heading section-heading--services">
    <div>
      <p class="eyebrow">Our expertise</p>
      <h2>One practice.<br>Every project stage.</h2>
    </div>
    <p>
      A joined-up design service, from early feasibility and planning
      through interiors, engineering coordination, and delivery.
    </p>
  </div>
  <div class="services-list">
    <article class="service-item">
      <span>01</span>
      <h3>Architecture</h3>
      <p>Residential, institutional, cultural, and commercial design from concept to completion.</p>
    </article>
    <article class="service-item">
      <span>02</span>
      <h3>Interior Design</h3>
      <p>Thoughtful residential, workplace, and commercial interiors shaped around daily use.</p>
    </article>
    <article class="service-item">
      <span>03</span>
      <h3>Town Planning</h3>
      <p>Clear, connected masterplans and layouts for larger communities and developments.</p>
    </article>
    <article class="service-item">
      <span>04</span>
      <h3>Engineering Consultancy</h3>
      <p>Practical structural and technical coordination for confident project delivery.</p>
    </article>
  </div>
</section>

<section class="home-contact page-width">
  <div>
    <p class="eyebrow">Patna &middot; Hyderabad</p>
    <h2>Planning something<br>worth building?</h2>
  </div>
  <div class="home-contact__action">
    <p>Tell us about your site, your ambitions, and the way you want the space to work.</p>
    <a class="button button--dark" href="{{ '/contact/' | relative_url }}">Discuss your project</a>
  </div>
</section>
