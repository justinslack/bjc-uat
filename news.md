---
layout: single-page
title: BJC News and Media
description: Read the latest news and media releases from the Budget Justice Coalition
---

<div class="component-wrapper latest-news">
  <div class="content-container">
    <header class="header-cta">
      <h2 class="section-header">Latest news</h2>
    </header>
  </div>

<div class="component-wrapper">
  <div class="content-container">
    <section class="two-column-grid">
      {% for post in site.media reversed%}
      <article class="grid-item news-item">
        <figure class="grid-item-figure">
          <a href="{{ post.url }}">
            <img src="{{ post.thumbnail }}" alt="{{ post.alt }}" loading="lazy">
          </a>
        </figure>
        <div class="grid-content">
          <time datetime="2019-09-19">{{ post.date | date_to_long_string }}</time>
          <h2 class="grid-item-header">{{ post.title }}</h2>
          <p class="grid-item-text">{{ post.excerpt | remove: '<p>' | remove: '</p>' }}</p>
          <a href="{{ post.url }}" class="read-more">
            Read more
            <svg class="read-more-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="8" viewBox="0 0 20 8">
            <g fill="#E05363" fill-rule="evenodd">
              <rect width="14.545" height="1.6" y="3.2"/>
              <polygon points="14.546 0 20 4 14.547 7.999"/>
            </g>
          </svg>        
          </a>
        </div>
      </article>
      {% endfor %}
    </section>
  </div>
</div>
