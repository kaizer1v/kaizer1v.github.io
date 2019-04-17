---
layout: post
title: d3 Transitions
foo: bar
---

*a peep into d3v4 transitions and how they work*

-----
<!--more-->

{{ site | json }}

<link rel="stylesheet" type="text/css" href="{{ site.baseurl }}/assets/css/d3_transitions.css">

Here's a simple circle inside an svg. Go ahead and click on the circle.

<svg id="circle_transition_1">
  <circle cx="50" cy="50" r="50" fill="steelblue"></circle>
</svg>

Transitions work on selections i.e. on the `d3.select('circle')` like objects. The above transition is triggered on the `click` event like

```js
d3.select('#circle_transition_1')
  .append('circle')
  .attr('cx', 50)
  .attr('cy', 50)
  .attr('r', 50)
  .attr('fill', 'steelblue')
  .on('click', function(d) {
    d3.select(this).transition()
      .attr('fill', 'red')
  })
```

You can even create a transition object and apply it to selections like

```js
// create a transition
var t_ease = d3.transition()
  .duration(750)
  .ease(d3.easeCircle);

// use the transition
d3.select('circle')
  .transition(t_ease)
  .attr('cx', 600);
```

<svg id="circle_transition_2">
  <circle cx="50" cy="50" r="50" fill="steelblue"></circle>
</svg>

## References

- [d3 transition documentation](https://github.com/d3/d3-transition)

<script type="text/javascript" src="{{ site.baseurl }}/assets/js/d3_transitions.js"></script>