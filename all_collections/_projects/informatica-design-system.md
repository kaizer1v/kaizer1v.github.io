---
title: Informatica Design System
desc: Javascript, Components Library, Prototyping, jQuery, jQuery UI, Bootstrap Theme
link: https://github.com/kaizer1v/infa-components
thumbnail: infa-components-logo.svg

banner: |
  <div class="jumbotron jumbotron-fluid" style="background: #0B9EF9;">
    <figure class="row justify-content-center figure text-center">
      <img src="/assets/images/infa-components-logo.svg" class="figure-img img-fluid rounded" alt="permissions">
    </figure>
  </div>

intro: |
  As part of the design team at Informatica, we wanted to introduce rapid prototyping as a practice to build and test interfaces with our customers, first hand. For the team, having a skilled programmer in the team added the benefit of being able to build these prototypes in a much more interactive way.

  In order to do this, I conducted a very basic research by interviewing some of the UI developers and how they build the interface for the enterprise products. It turned out that they used a front end library of components equipped with 

  * Interactions and animations as well as it's own CSS for visual design.
  * This was a library written in Java programming language and required a lot of setting up in order to be used.
  * The component library also had many dependencies which was a challenge to get hold of, especially for a prototype.
  * Time consuming communications between developer and a designer

  ## The Challenge

  Current prototyping tests were being conducted as the following

  <!-- insert storyboard -->
  <figure class="row justify-content-center figure text-center">
    <img src="/assets/images/infa-design-system-01.png" class="figure-img img-fluid rounded" alt="permissions">
  </figure>

  After iterating multiple times with the developer in order to build the prototype, it would be ready for the first round of review from the customer i.e. the end user.

  <figure class="row justify-content-center figure text-center">
    <img src="/assets/images/infa-design-system-02.png" class="figure-img img-fluid rounded" alt="permissions">
  </figure>

  The feedback from the end user is gathered and then reviewed upon once again. It became increasingly difficult to iterate through multiple versions of prototypes.

  ## The Solution

  A <a href="https://kaizer1v.github.io/infa-components" target="_blank">light weight design system</a> which enabled to build and iterate over prototypes faster, which would look exactly like the end product.

  ### Approach

  Having a light weight design system would help benefit a few things like

  * I was able to match the design that a senior designer had built and match it against the exact component required for it. This also contained the required interactions built into the component
  * It also eliminated the depedencies required to setup on a non-developer's machine, with an easy to follow guide with minimal javascript library requirements.
  * Since the library was a javascript library, experimenting with updates in the interactions and components was very easy, since there were visualisations involved.

  ### Usage

  You can view the actual demo <a href="https://kaizer1v.github.io/profiling/" target="_blank">here</a> and <a href="https://kaizer1v.github.io/profiling/page2.html" target="_blank">here</a> respectively.

  <figure class="row justify-content-center figure text-center">
    <img src="/assets/images/infa-design-system-03.jpg" class="figure-img img-fluid rounded" alt="informatica data profiling">
  </figure>

  <figure class="row justify-content-center figure text-center">
    <img src="/assets/images/infa-design-system-04.jpg" class="figure-img img-fluid rounded" alt="informatica data profiling">
  </figure>

  Using the design system we successfully tested the data profiling, an enterprise informatica product, with end users.

solution: |
  Thus, came the light weight component library for building rapid prototypes. 
---