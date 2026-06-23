---
title: Blog
layout: base
eleventyExcludeFromCollections: false
tags: topnav
eleventyNavigation:
  key: Blog
  order: 4
pagination:
  data: collections.blog
  size: 6
  reverse: true
  alias: posts
---

# Blog

{% include "components/blogList.html" %}
