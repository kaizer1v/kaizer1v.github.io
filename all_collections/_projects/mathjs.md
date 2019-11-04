---
title: MathJS
desc: A Javascript library for simple mathematical operations
link: https://kaizer1v.github.io/mathjs
thumbnail:
tags: [Javascript]

banner: |
  <div class="jumbotron jumbotron-fluid" style="background: #0B9EF9;">
    <?xml version="1.0" encoding="UTF-8"?>
    <svg width="600px" height="350px" viewBox="0 0 600 350" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <!-- Generator: Sketch 54.1 (76490) - https://sketchapp.com -->
      <title>mathjs-logo</title>
      <desc>Created with Sketch.</desc>
      <g id="mathjs-logo" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <rect fill="#0B9EF9" x="0" y="0" width="600" height="350"></rect>
        <text id="infa-components" font-family="SpaceMono-Regular, Space Mono" font-size="40" font-weight="normal" fill="#373737">
          <tspan x="116" y="186">infa-components</tspan>
        </text>
        <text id="A-light-weight-desig" font-family="SpaceMono-Regular, Space Mono" font-size="12" font-weight="normal" fill="#373737">
          <tspan x="197" y="205">A light weight design system</tspan>
        </text>
      </g>
    </svg>
  </div>

intro: |

  <h3>The Challenge</h3>

  When I used to work on data visualisations using `d3.js` library, I found myself performing quite a few data filtering and data operations on the javascript end, this was primarily due to the gap between the data being returned from the API or the backend, and the format of data in which the d3 chart required, with respect to the structure of the JSON object or Array.

  There were quite a few repeated operations I performed on an occassional basis like taking intersections of two columns of data in order to find the commonalities on a graph using an interaction. Similarly, there were times when I simply wanted to provide the statistical mean and median of a data set.

  These are some of the basic functions provided into the library I wrote.

  This library has been written in plain javascript / ES6 with no dependencies in order to make it run faster. It was also a test of writing pure operational javascript.

  I used a library called [rollup.js](https://rollupjs.org/guide/en/) which helped me divide every function as a separate module, for ease of code maintainence as well as for ease of extensibility, which also helped compile the library into a single file, easily installable via NPM.

  <div class="row justify-content-center">
    <figure class="figure">
      <img src="/assets/images/mathjs-project-ss-1.jpg" class="figure-img img-fluid rounded" alt="..." style="height: 400px">
      <figcaption class="figure-caption text-center">MathJS Documentation</figcaption>
    </figure>
  </div>

  <h3> Usage </h3>

  **Trying to flatten an array**

  ```javascript
  MJ.arrayFlatten([1, 2, [3, 4, [5, 6], [7]], [8, 9]])
  // [1, 2, 3, 4, 5, 6, 7, 8, 9]
  ```

  **Find difference between two arrays**

  ```javascript
  MJ.arrayDiff([1, 2, 3, 4], [1, 4, 2])
  // [3]
  MJ.arrayDiff([1, 423, 64], [1, 64, 23, 521, 423])
  // [] since there are no elements on the left which are NOT present on the right
  ```

  You can find out more about the other basic functionalities in the [documentation page](http://kaizer1v.github.io/mathjs/).

  This library is also published on [NPM](https://www.npmjs.com/package/simplemathjs) and can be installed via the node package manager

---