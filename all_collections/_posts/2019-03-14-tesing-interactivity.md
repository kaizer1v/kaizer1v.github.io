---
title: Visualisation on github pages
categories: [javascript]
tags: [code, d3, tutorial, note-to-self]
---

_Yeeeehawwww_

This is my first post on github pages containing a visualisation, with some basic interactivity. This visualisation has been picked up from [here](https://bl.ocks.org/d3noob/bdf28027e0ce70bd132edc64f1dd7ea4) - using d3, version 4.

This post is an example of showing that attaching custom javascript and css along with linking to some base data file, it is possible to host an interactive widget onto github pages.

<iframe
  src="{{ site.baseurl }}/recipes/testing-interactivity.html"
  sandbox="allow-same-origin allow-scripts"
  onload="this.style.height=this.contentDocument.documentElement.scrollHeight+50+'px';"
>
  </iframe>