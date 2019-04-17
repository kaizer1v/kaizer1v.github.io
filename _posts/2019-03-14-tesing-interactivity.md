---
layout: post
title: Visualisation on github pages
---

_First functional d3 bar graph_

-----
<!--more-->

<link rel="stylesheet" type="text/css" href="{{ site.baseurl }}/assets/css/custom.css">

_Yeeeehawwww_

This is my first post on github pages containing a visualisation, with some basic interactivity. This visualisation has been picked up from [here](https://bl.ocks.org/d3noob/bdf28027e0ce70bd132edc64f1dd7ea4) - using d3, version 4.

This post is an example of showing that attaching custom javascript and css along with linking to some base data file, it is possible to host an interactive widget onto github pages.

<div class="svg_container"></div>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/d3-tip/0.9.1/d3-tip.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/custom.js"></script>