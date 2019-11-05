---
title: Informatica Design System

tags: [UI Library, Prototyping]

carousel_images: [infa-design-system-01.png, infa-design-system-02.png]

demo: https://github.com/kaizer1v/infa-components

thumbnail: infa-components-logo.svg

challenge: To reduce the time in building and evaluating designs and help integrate updates in the designs faster with the engineering team.

role: |
  * Design and build a design system
  * Product prototyping
  * Conduct user validation & feedback and update the design
  * Build prototyping process within the design team

impact: Increased prototyping process speed by 2x. Were able to test and iterate in half the time using the HTML/CSS and interactive design system.

team: Vivek Shrinivasan & Senior UX Designers

banner_image: infa-components-usage.gif

content_body: |
  As part of the design team at Informatica, we wanted to introduce rapid prototyping as a practice to build and test interfaces with our customers, first hand. For the team, having a skilled programmer in the team added the benefit of being able to build these prototypes in a much more interactive way.

  In order to do this, I conducted a very basic research by interviewing some of the UI developers and how they build the interface for the enterprise products. It turned out that they used a front end library of components equipped with 

  * Interactions and animations as well as it's own CSS for visual design.
  * This was a library written in Java programming language and required a lot of setting up in order to be used.
  * The component library also had many dependencies which was a challenge to get hold of, especially for a prototype.
  * Time consuming communications between developer and a designer

  The current prototyping tests were being conducted as the following
 
  After iterating multiple times with the developer in order to build the prototype, it would be ready for the first round of review from the customer i.e. the end user.

  The feedback from the end user is gathered and then reviewed upon once again. It became increasingly difficult to iterate through multiple versions of prototypes.

  ## The Solution

  A <a href="https://kaizer1v.github.io/infa-components" target="_blank">light weight design system</a> which enabled to build and iterate over prototypes faster, which would look exactly like the end product.

  ### Approach

  Having a light weight design system would help benefit a few things like

  * I was able to match the design that a senior designer had built and match it against the exact component required for it. This also contained the required interactions built into the component
  * It also eliminated the depedencies required to setup on a non-developer's machine, with an easy to follow guide with minimal javascript library requirements.
  * Since the library was a javascript library, experimenting with updates in the interactions and components was very easy, since there were visualisations involved.

  Taking into the consideration the visual design elements, I built a design system, quite similar to bootstrap using jQuery, HTML & CSS. Some of the key things that the system had to replicate were

  1. Visual Design Elements - The typography, colours and icons as well as layouts
  2. Components & Atoms - Components consisted of elements which were re-used or sometimes even combined together to form more complex components. These ranged from simple input boxes to trees and accordians
  3. Language - The flow of interactions as well as the language used within the products
  4. Interactions - The interactions at multiple levels among simple and complex components

  ### Usage

  You can view the actual demo <a href="https://kaizer1v.github.io/profiling/" target="_blank">here</a> and <a href="https://kaizer1v.github.io/profiling/page2.html" target="_blank">here</a> respectively.

  Using the design system we were successfully able to iterate through building prptotypes at 2x speed and tested them with end users, who didn't even realise they were interacting with a prototype instead of an actual end product.

  The products tested were Data Profiling & Data Validation Objects.

solution: |
  Thus, came the light weight component library for building rapid prototypes. 
---