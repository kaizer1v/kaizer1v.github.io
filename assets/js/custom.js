var data_file = '../../../../assets/data/sales.csv';

// Set tooltips
var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    // console.log(d.sales);
    return "<strong class='details'>"+ d.salesperson +": </strong><span class='details-red'>" + d.sales + "<br></span>";
  })

// set the dimensions and margins of the graph
var margin = { top: 20, right: 20, bottom: 30, left: 40 },
  width = 600 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

// set the ranges
var x = d3.scaleBand()
  .range([0, width])
  .padding(0.1);
var y = d3.scaleLinear()
  .range([height, 0]);

// append the svg object to the body of the page
// append a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select(".svg_container").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");

svg.call(tip);

// get the data
d3.csv(data_file).then(function(data, error) {
  if (error) throw error;

  // format the data
  data.forEach(function(d) {
    d.sales = +d.sales;
  });

  // Scale the range of the data in the domains
  x.domain(data.map(function(d) { return d.salesperson; }));
  y.domain([0, d3.max(data, function(d) { return d.sales; })]);

  // append the rectangles for the bar chart
  svg.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function(d) { return x(d.salesperson); })
    .attr("width", x.bandwidth())
    .attr("y", function(d) { return y(d.sales); })
    .attr("height", function(d) { return height - y(d.sales); })
    .on('mouseover',function(d){
      tip.show(d, this);

      d3.select(this)
        .style("opacity", 0.5)
        .style("stroke-width", 3);
    })
    .on('mouseout', function(d) {
      tip.hide(d, this);

      d3.select(this)
        .style("opacity", 1)
        .style("stroke-width", 1);
    });

  // add the x Axis
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // add the y Axis
  svg.append("g")
    .call(d3.axisLeft(y));

});