d3.select('#circle_transition_1')
  .on('click', function(d) {
    d3.select(this).transition()
      .attr('fill', 'red')
  })



d3.select('#circle_transition_2').select('circle')
  .on('click', function(d) {
    var t_ease = d3.transition()
      .duration(750)
      .ease(d3.easeCircle);

    d3.select(this).transition(t_ease)
      .attr('cx', 600)
  })

