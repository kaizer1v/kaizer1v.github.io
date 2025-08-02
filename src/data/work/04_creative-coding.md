---
id: 4
title: creative coding
publishDate: 01 Dec 2020
description: experiments in canvas, svg and p5
year: 2021
thumbnail: cc.gif
tags: coding, javascript
---

## The Grid

Exploring the flipboard effect inspired by airport terminals. This reads a bunch of inspiring quotes and displays it on a grid

The code for it is [here](https://github.com/kaizer1v/canvas/blob/main/the_grid.js).

![creative coding](../../../assets/work/cc.gif)


## Ink

Trying to simulate an 'ink blot on paper' on to a canvas. In the beginning, I tried to simulate a peak matrix with weighted numbers first, where each weight is a darker spot of ink than the lighter. The numbers incremented using a [logic](https://github.com/kaizer1v/canvas/blob/main/inking.js) based on it's neighbouring cells for controlling 'spreading' of the ink.

The final ink simulation is shown on the right.


<style>
  ul.collage {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin: 2vmin;
  }

    .collage > li {
      height: 40vh;
      flex-grow: 1;
      margin: 2vmin;
    }

  .collage > li:last-child {
    flex-grow: 10;
  }

  .collage img,
  .collage video {
    max-height: 100%;
    min-width: 100%;
    object-fit: cover;
    vertical-align: bottom;
    border-radius: 1vmin;
  }

  @media (max-aspect-ratio: 1/1) {
    .collage > li { height: 30vh; }
  }

  @media (max-height: 480px) {
    .collage > li {
      height: 80vh;
    }
  }

  // Smaller screens in portrait

  @media (max-aspect-ratio: 1/1) and (max-width: 480px) {
    ul.collage {
      flex-direction: row;
    }

    .collage > li {
      height: auto;
      width: 100%;
    }
    .collage img,
    .collage video {
      width: 100%;
      max-height: 75vh;
      min-width: 0;
    }
  }
</style>

<ul class="collage">
  <li>
    <video autoplay loop height="950">
      <source src="../../../assets/work/ink-1.webm" type="video/webm" loading="lazy" />
    </video>
  </li>
  <li>
    <video autoplay loop height="950">
      <source src="../../../assets/work/ink-2.webm" type="video/webm" loading="lazy" />
    </video>
  </li>
  <li></li>
</ul>

## Costs for War

As part of visualising a research paper on the efforts and costs incurred to define women safety in the US military, [shobhan](https://github.com/shobhan-ss) and built an interactive web page acting as a primer for the research paper showing the efforts taken by the military to reduce sexual assualt against women and the results of such efforts. Check out the [webpage here](https://vivekipedia.in/costs_of_war_brown_uni/)

<ul class="collage">
  <li>
    <video autoplay loop height="950">
      <source src="../../../assets/work/costs-of-war.webm" type="video/webm" loading="lazy" />
    </video>
  </li>
  <li></li>
</ul>