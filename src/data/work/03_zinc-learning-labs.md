---
id: 3
title: Zinc learning labs
publishDate: 30 Nov 2021
description: Enhancing Ed-Tech Learning Experience — A Data-Driven Design Case Study
year: 2022
tags: product-design, gamification, ux-design
thumbnail: zll.webp
direct_link: https://medium.com/design-bootcamp/enhancing-ed-tech-learning-experience-c991676b744b
---

_Zinc Learning Labs is an NY based ed-tech startup that aims to solve for improving reading comprehension in students. The english literacy rate in the US is fairly low and ZLL started off with a mission to improve this. As part of their mission, they started personal tutoring students with a methodology that they built called ‘Zincing’ and ‘Tracking’. This was combined into a web based application aimed towards schools to be used by teachers as well as students to solve for the lack of reading comprehension and understanding the english language._

_The product had a suite of applications like ‘Vocab’ to help improve vocabulary, learning synonyms and antonyms using spaced repetition for effectiveness and ‘Ignition’ that combined the skills of ‘Zincing’ & ‘Tracking’._

Read on to know more…

## So, What is Ignition (the product)?

**Ignition** as an application is sold to schools where the teachers assign this app to students of middle school as part of their class exercises and curriculum. This app starts off by assessing the user’s current reading skill level (lexical level in US standards) and then provides personalised passages based on their reading & comprehending level score. The app aims to improve their current assessed level by taking them through a series passages focusing on 4 main skills


1. **Use Your Senses** — that focuses on pointing out sensory words
2. **Make It Real** — helping users associate abstract words to something they relate to
3. **Pronouns** — looking through the reader’s perspective
4. **Navigators** — inter-relating context using prononus to navigate the author’s journey

## The challenge with Ignition

ZLL (Zinc Learning Labs) wanted to improve and enhance the experience of Ignition usage in order to improve the following challenge.

Below are the two images of the data pipeline dashboard that show the completion rates from start to finish (Fig 1) in entirety and also showing the completion rates at different stages of Ignition sequentially (Fig 2)

<ul class="gallery">
  <li>
    <a href="/assets/work/zll/1_stats.webp" data-fancybox data-fancybox="gallery" data-caption="Stats">
      <img src="/assets/work/zll/1_stats.webp" alt="Stats" loading="lazy">
    </a>
  </li>
  <li>
    <a href="/assets/work/zll/2_stats.webp" data-fancybox data-fancybox="gallery" data-caption="Stats">
      <img src="/assets/work/zll/2_stats.webp" alt="Stats" loading="lazy">
    </a>
  </li>
  <li>
    <a href="/assets/work/zll/3_stats.webp" data-fancybox data-fancybox="gallery" data-caption="Stats">
      <img src="/assets/work/zll/3_stats.webp" alt="Stats" loading="lazy">
    </a>
  </li>

  <!--  Adding an empty <li> here so the final photo doesn't stretch like crazy. Try removing it and see what happens!  -->
  <li></li>
</ul>

<style>
ul.gallery {
  display: flex;
  flex-wrap: wrap;
  margin: 2vmin;
  list-style: none;
}

.gallery > li {
  /* height: 40vh; */
  height: 100%;
  flex-grow: 1;
  margin: 2vmin;
}

.gallery li:last-child {
  // There's no science in using "10" here. In all my testing, this delivered the best results.
  flex-grow: 10;
}

.gallery img {
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
  border-radius: 1vmin;
}


@media (max-aspect-ratio: 1/1) {
  .gallery li {
    height: 100%;
  }
}

@media (max-height: 480px) {
  .gallery li {
    height: 100%;
  }
}

// Smaller screens in portrait

@media (max-aspect-ratio: 1/1) and (max-width: 480px) {
  ul.gallery {
    flex-direction: row;
  }

  .gallery li {
    height: auto;
    width: 100%;
  }
  .gallery img {
    width: 100%;
    max-height: 75vh;
    min-width: 0;
  }
}
</style>


> The Aug 2022 decline caught our eye and we wanted to understand ‘why’ this was happening.


## Identifying the ‘Why’

At first, these numbers were surely indicating the drop in usage, but wasn’t indicating why this was happening. The first step as any designer would do — I decided to talk to the students themselves i.e. end users.

I structured, scheduled and conducted interviews with 11 students based on their usage and completion of Ignition and their reading levels in order to get their feedback and understand how they perceived the product.

While sorting their feedback, a pattern was visible which helped me categorise these into sections as seen below. The green-notes were positive feedback and the red-notes were negative feedback.

...images...


## Prioritising and ideating on identified challenges

While organising and looking into the feedback, I was able to identify many usability issues. We prioritised some of these based on how critical and easy they were and brainstormed on how we could solve them. What came out were ideas of which seemed pretty easy to implement. These interaction level changes would heed large impact from a usage point of view and provide information required by the students upfront, creating transparency between the system and the user’s mental model.

Here’s an example of the pain point we prioritised and a few ideas that came about during the brainstorming session.

...image...

Here’s an example of the pain point we prioritised and a few ideas that came about during the brainstorming session.

### Key Pain Point: Ignition was too long, felt exhausting. Just want to get it over with

> How might we communicate progress made and left on Ignition?

> How might we shorten the duration of Ignition?

**Some of the ideas that came about**

* ❤️ Visualise the progress and show them the end point — so they know how far there is to go
* ❤️️ Show them approx required time to complete each task/level
* ❤️ Introduce rewards for encouragement and stimulation

**Some other cool ideas that we thought we’ll look at later were**

* Introduce ‘Fast mode’, where they skip narration and allowing videos at 1.2x or 1.5x. Primarily for pro-students
* Allow them to plan their week with tasks/levels on a calendar

I started exploring themes making information and progress more transparent and helping user communicate their progress on Ignition

## The Change — Making information & progress clearly visible

We decided to prioritise on making information and Ignition progress more transparent. It also gave a clearer picture of the parts in Ignition.

> ⭐️ The progress communication wasn’t clear to the user before and thus, they weren’t able to anticipate the end of Ignition — making them feel it was too long and the time it would take for them to reach the end; thus, burning them out.️⭐️

This meant the user would know where they are in the system and help them find their way. This is a principle adapted from way finding as a design tool.

_Way finding provides cues to a user to be able to navigate based on their location in a system._

...image... (before / after)


To give you a sense of the difference made by the re-design.

* Made it visually appealing by differentiating sections and skills using colours and iconography
* Show them reading difficulty levels of passages on their progress
* Clearly show the change in reading levels (before & after Ignition)
* Allow them to jump across section introductions to help users get clear expectations of what is to come

...image... (before / after)

* Give a sense of where the user is when in-passage play
* Provide progress information about passages and respective difficulty levels
* Make it visually appealing

## Finally, the impact

After working on the design changes and building an interactive prototype, I again spoke to students whom I had reached out earlier as well as new students to get their first impression on the design changes. It turned out have a positive impact. Here’s what the users had to say about it

> “I love the colours and the map”

> “This looks so cool, I would love to use this”

### New usage graph shown below represents the improved completion rate (daily basis) for Aug 2023 versus the completion rates from the previous year (dotted line).

./..image... after graphs


## Closing thoughts

_Overall, it was very inspiring for me to hear from the users about how I could help enhance their learning experience on an app that they use almost on a daily basis. This was a huge win for me personally. As a designer, that’s what motivates and drives me to solve challenging problems. It was also a great experience working with a wonderful team at Zinc Learning Labs._

* _Fibinse Xavier — the data guy who helped track the metrics_
* _Karthik Chandrashekhariah — the product guy who trusted in my process and designs_
* _Kate — the marketing person who helped reach out to students_

