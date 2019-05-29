Using categories and tags in my posts for the blog

Use this piece of code to iterate through the categories

```
{% for category in site.categories %}
  <h3>{{ category[0] }}</h3>
  <ul>
    {% for post in category[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}
```

Make sure you have added some tags and categories in the front matter like so, at the top of every post

```
---
layout: post
title: A Trip
categories: [blog, travel]
tags: [hot, summer]
---
```

[ref link](https://jekyllrb.com/docs/posts/)