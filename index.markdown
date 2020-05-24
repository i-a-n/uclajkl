---
layout: default
hero:
  image: http://localhost:4000/assets/uploads/once-again.jpg
  text: Hero text
  CTA: Click here
  CTA_link: https://google.com
news:
  title: News Article
  blurb: Some blurb goes here.
  URL: https://google.com
segment1:
  image:
  title:
  blurb:
  CTA:
  CTA_link:
segment2:
  image:
  title:
  blurb:
  CTA:
  CTA_link:
---

## top of page
- hero image: {{ page.hero.image }}
- hero text: {{ page.hero.text }}
- hero CTA: {{ page.hero.CTA }}
- hero CTA link: {{ page.hero.CTA_link }}

## three buckets
- random faculty member: {%- include bucket--random-faculty.html -%}
- latest event: {%- include bucket--latest-event.html -%}
- news title: {{ page.news.title }}
- news blurb: {{ page.news.blurb }}
- news URL: {{ page.news.URL }}

## dual segment
- segment1 image: {{ page.segment1.image }}
- segment1 title: {{ page.segment1.title }}
- segment1 blurb: {{ page.segment1.blurb }}
- segment1 CTA: {{ page.segment1.CTA }}
- segment1 CTA link: {{ page.segment1.CTA_link }}

- segment2 image: {{ page.segment2.image }}
- segment2 title: {{ page.segment2.title }}
- segment2 blurb: {{ page.segment2.blurb }}
- segment2 CTA: {{ page.segment2.CTA }}
- segment2 CTA link: {{ page.segment2.CTA_link }}
