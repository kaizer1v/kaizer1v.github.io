---
id: 2
title: Visual Inspection in Manufacturing
publishDate: 01 Dec 2021
description: Quality inspection for Digital manufacturing on cloud
year: 2021
tags: ui-design, user-research, ux-design
thumbnail: visual-inspection.jpg
direct_link: https://medium.com/@kaizer1v/visual-inspection-in-manufacturing-c8564400006c
---

Visual inspection helps reduce human errors in the process of testing and maintaining manufacturing quality.

> There was a wall at Schüco’s factory shopfloor, in Bielefeld Germany where they had hung defective parts labelled with a price tag to remind the workers everyday how much a defect costs to them.


This was one such experience that helped me learn about how quality control as a process is pivotal to manufacturers and SAP’s customers. I had the opportunity to conduct user research with customers and end users for Visual Inspections. The learnings from the research helped me design a unique solution for the users.

## Key learnings

* An operator takes about 20–30 seconds to record an inspection. They wanted it to be even faster
* They configured the system in a way to enable any device to assist them for input (QR code scanner, keyboard only or touch devices)


## Working towards better usability

During the research, we observed how operators detect defects and how they record them within the SAP system. Every defect needs to be recorded no matter how miniscule. Some defects aren’t even visible to the naked eye. Even a defect thinner than your hair produces a risk of a [Zeiss’s Lithographic printing lens](https://www.zeiss.com/semiconductor-manufacturing-technology/home.html).

> How might we enable the user to detect these defects and enable them to decide what to do with the part as fast as possible?

Here’s an overview of how the process on the shopfloor looks like

## Machine learning assisting humans

The critical decision of whether a part contains any defects is assisted by a machine learning model. The operator’s role shifts towards approving or rejecting the model’s prediction rather than rely on their intuition and past experience. This is a great shift towards automating the inspection process.

## Key considerations for this design

* Allow a user to spot a defect faster
* Allow a user to ‘log’ defects (aka non-conformances) — Either approve it or reject it
* Allow user to decide what to do with the part

## The devil is in the details - Annotations

I extended the design to define the specification of how annotations should visually appear when showing annotations

## The impact

Needless to say, the cost of quality is very high for a manufacturer. This reminds me a quote that the user had to say when we tested this tool with them

> “Looks really cool, This is exactly what we want.”

_Which is a pretty satisfying feedback for a designer :)_

-----

_Interested in knowing more about the usability tests I preformed or even how I helped data scientists and engineers train image detection models and evaluate these results? Don’t hesitate to get in touch with me — would be happy to converse more about at length over a chat or call. 👍_
