---
title: Designing with Conscience
publishDate: 01 Dec 2025
description:  Journey into relational ethics at SAP’s "Impulse Design 2025" event
---

When SAP invited us to explore the theme “Ethics Engine: What moral imperatives should drive ethical design decisions?” at the Design Impulse event, we knew this wasn’t going to be a typical design sprint. The challenge was ambitious: How do we design systems that are not just functional or efficient but fundamentally fair, inclusive, and morally grounded?

This question pushed us beyond UX conventions into philosophical territory. And yet, it felt timely and necessary given the role AI now plays in shaping everyday human experiences


## The Theme: Ethics Engine

The event asked us to imagine an engine for ethics a way to make moral reasoning part of design, not an afterthought.

Instead of optimising for speed, conversion, or engagement, what would it mean to optimise for fairness, care, and long-term wellbeing?

> What should the morality of future systems look like? And who gets to decide?

## Diving Into Ethics: Where Traditional Approaches Fall Short

Our brainstorming began with traditional ethical frameworks—utilitarianism, deontology, virtue ethics. But theere were problems we saw:

- They centre only human perspectives
- They assume fixed truths, not the evolving realities of modern systems
- They struggle with distributed, multi-actor environments like AI
- They fail to include nature, materials, culture, data, or ecology as participants
- They do not account for power or the unequal impacts of design decisions

So we asked a provocative question: 

> What would ethics look like if non-humans had a voice in the room?

This led us toward relational ethics — a school of thought that focuses not on rules, but on the relationships between humans, technologies, and the world around them

**Why relational ethics felt right**

- It is dynamic, not prescriptive
- It treats morality as something that emerges from interactions
- It acknowledges interdependence: human ↔ AI ↔ material ↔ culture ↔ environment
- It allows multiple truths and multiple forms of intelligence
- It makes ethics participatory, almost democratic

We realised we didn’t need an ethics engine. We needed an "Ethics Council"


## Introducing Our Fictional AI Product: Council Orbit

To give form to this idea, we designed a fictional product called Council Orbit—a speculative AI artefact that thinks slower, listens deeper, and deliberates with multiple actors before answering.

**The core idea**

This **Council Orbit** is not a chatbot. It is a relational negotiation space where different “spirits” (Institution, Ecology & Culture, AI Engineer, Material, Post-War Memory, etc.) debate and converge into a moral standpoint
 
**Why slow?**
In a world where everything is expected to function fast and "how quick can one ..." has become a comparitive metric, we wanted to consciously step back from this notion of generating and responding quickly
- Because ethics needs slowness
- Because speed flattens nuance
- Because moral questions deserve reflection, not instant output

**How Council Orbit works**

1. A user gives a prompt
2. The product internally summons its “council” of human and non-human voices
3. Each spirit responds based on their lived truth
4. The system carefully weighs their perspectives
5. It outputs a just and moral response, not just an efficient one

<ul class="collage">
  <li><img src="../../../assets/reflections/ai-ethics-00-council-orbit.png" alt="..." loading="lazy"></li>
  <!-- <li><img src="../../../assets/reflections/ai-ethics-00-council-orbit-2.png" alt="..." loading="lazy"></li> -->
  <li><img src="../../../assets/reflections/ai-ethics-01-council-orbit.png" alt="..." loading="lazy"></li>
</ul>

The product became our lens for exploring ethical futures

## The Studio Ghibli Question: Can AI Imitate Without Exploiting?

Through the lens of the ethical council, we wanted to question pressing ethical questions with respect to AI. What if someone asks Council Orbit to generate an image “in the style of Studio Ghibli”?

This question isn’t hypothetical. It’s happening everywhere. When Miyazaki once watched AI mimic human creativity, his reaction was clear:

> “This is an insult to life itself”

So we fed the Ghibli prompt into our fictional system. What happened next?

Council Orbit didn’t just produce an image. It produced a conversation, a negotiation

- Spirit of Institution demanded attribution, royalties, and recognition
- Spirit of Ecology & Culture warned against capturing everything—some stories must breathe
- Spirit of Material reminded us of the human hand behind every frame
- Spirit of AI Engineer balanced transparency with computational feasibility

And together, they concluded:

**A fair system requires two outcomes: attribution, royalties, encoded ancestries**

Here, embed your YouTube link to the conversation:

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ut-xkMBbfe4?si=k5BO2rMpc-MzyMuM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## The Second Question: What About Ethical Image Labelling?

As a 2nd exhibit, we then turned to the politics of datasets. What if images were labelled not by engineers alone, but by non-human actors too?

We tested this with powerful examples, including the image of Jallianwala Bagh, and later, a google street view of a market in India.

Council Orbit asked:

> What should we remember to be labelled for training models and what should we forget? Who might be harmed by over-labelling? Who might be erased by under-labelling?

Watch how the conversation unfolds from the voices of the coucil and see the solution that they derive to answer the question the ethics of image labelling

Council Orbit became a tool for ethical annotation — a voice for the unseen actors inside images

<iframe width="560" height="315" src="https://www.youtube.com/embed/oAmu0OAA440?si=9MuayBXPVfAXggbp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Closing Thoughts: Designing for a Future That Listens

What began as a design prompt turned into a meditation on morality itself

We didn’t just design an object. We designed a possibility: A world where AI sits at a table, not as a master or a servant, but as one actor among many — guided by ecology, history, culture, and materiality

A world where ethics is slow, relational, and collectively shaped

A world where technology does not erase context but honours it

And maybe, through projects like this, we are learning to design systems that don’t just think — but care



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