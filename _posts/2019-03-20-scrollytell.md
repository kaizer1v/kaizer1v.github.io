---
layout: post
title: Sample scrollytell
---

*first scrolly-tell on github pages*

-----

<style type="text/css">

  .container {
    width: 890px;
  }

  .sections {
    position: relative;
    display: inline-block;
    width: 250px;
    top: 0px;
    z-index: 90;
    padding-bottom: 200px;
  }

  .step {
    margin-bottom: 400px;
  }

  .vis {
    display: inline-block;
    position: fixed;
    top: 160px;
    right: 50px;
    z-index: 1;
    margin-left: 0;
  }

</style>

<div class="container">
  <div class="sections">
    <div class='vis'>
      <svg></svg>
    </div>
    <section class="step">
      <div class="title"><h2>Begin</h2></div>
    </section>
    <section class="step">
      <div class="title"><h2>Move horizontally</h2></div>
        changes the `cx` position
    </section>
    <section class="step">
      <div class="title"><h2>Move vertically</h2></div>
      changes the `cy` position
    </section>
    <section class="step">
      <div class="title"><h2>Colour</h2></div>
        changes the colour to red.
    </section>
    <section class="step">
      <div class="title"><h2>Double Transition</h2></div>
        increases radius to 200 and move
        to co-ordinates (150, 150)
    </section>
  </div>
</div>


Thanks for scrolling. This was an experiment for publishing future data driven scrollytelling.

Yes, there are some bugs when you scroll too fast, it's WIP.


## References

- [d3-transition documentation](https://github.com/d3/d3-transition)
- [jim vallandingham's scroller](https://vallandingham.me/scroller.html)

<script type="text/javascript" src="{{ site.baseurl }}/assets/js/scroller.js"></script>
<script type="text/javascript">

  var sections = d3.selectAll('.step');
  var viz = d3.select('.vis');
  var sectionPositions = [];    // list of section title's `top` position
  var startPos, currentIndex = -1;
  var dispatch = d3.dispatch('active', 'progress');
  var activateFunctions = [];

  // gather all the section positions
  sections.each(function(d, i) {
    var top = this.getBoundingClientRect().top;
    if(i === 0) {
      startPos = top;
    }
    sectionPositions.push(top - startPos);
  })


  // detect the current position of the page
  d3.select(window)
    .on("scroll.scroller", position);

  function position() {
    var pos = window.pageYOffset - 10;
    var sectionIndex = d3.bisect(sectionPositions, pos);
    sectionIndex = Math.min(sections.size() - 1, sectionIndex);

    if(currentIndex !== sectionIndex) {
      // @v4 you now `.call` the dispatch callback
      dispatch.call('active', this, sectionIndex);
      currentIndex = sectionIndex;
    }

    console.log('title ' + (currentIndex + 1));

    // to track progress between two sections, will range between 0.0 - 1.0
    var prevIndex = Math.max(sectionIndex - 1, 0);
    var prevTop = sectionPositions[prevIndex];
    var progress = (pos - prevTop) / (sectionPositions[sectionIndex] - prevTop);
    // @v4 you now `.call` the dispatch callback
    dispatch.call('progress', this, currentIndex, progress);
  }

  // create a function on which you will enable the event registered
  function scroll() {}
  scroll.on = function(action, callback) {
    dispatch.on(action, callback);
  };

  // callback for the 'active' event
  scroll.on('active', function(ind) {
    // viz.html('title' + (ind + 1))
    console.log('title', (ind + 1))
    activateFunctions[ind]();
  })

  // callback for the 'progress' event
  scroll.on('progress', function(ind, pro) {
  })

  activateFunctions[0] = step0;
  activateFunctions[1] = step1;
  activateFunctions[2] = step2;
  activateFunctions[3] = step3;
  activateFunctions[4] = step4;

  /* BASE setup */

  var t = d3.transition()
    .duration(750)
    .ease(d3.easeCircle)
  var svg = d3.select('.vis svg');
  var width = 500;
  var height = 420;
  var margin = { top: 0, left: 20, bottom: 40, right: 10 };

  svg.attr('width', width + margin.left + margin.right);
  svg.attr('height', height + margin.top + margin.bottom);
  svg.append('g');

  g = svg.select('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  var circle = g.append('circle')
    .attr('cx', 50)
    .attr('cy', 100)
    .attr('r', 50)
    .attr('fill', 'steelblue')

  function step0() {
    console.log('step 0')
    circle.transition(t)
      .attr('cx', 50)

  }

  function step1() {
    console.log('step 1')
    circle.transition(t)
      .attr('cx', 300)
      .attr('cy', 100)
      .attr('r', 50)
      .attr('fill', 'steelblue')
  }
  function step2() {
    console.log('step 2')
    circle.transition(t)
      .attr('cx', 300)
      .attr('cy', 300)
      .attr('r', 50)
      .attr('fill', 'steelblue')
  }
  function step3() {
    console.log('step 3')
    circle.transition(t)
      .attr('cx', 300)
      .attr('cy', 300)
      .attr('r', 50)
      .attr('fill', 'red')
  }
  function step4() {
    console.log('step 4')
    circle.transition(t)
      .attr('cx', 150)
      .attr('cy', 150)
      .attr('r', 100)
      .attr('fill', 'red')
  }
</script>