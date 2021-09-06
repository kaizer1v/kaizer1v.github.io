---
layout: post
title: Interface Styles
---

# Interface Styles

When creating an interaction model, there are various styles in which a user can interact with the system. These are

* Command line interfaces (to interact with the operating system eg: copy, move, list-files etc.)
* Menus (when there are various set of actions grouped under a title/category for ease of searching and finding)
* Natural Language (Eg: Alex requires a natural language to interact with)
* FAQs or Q&As (Eg: Quora or customer chat-bot or custore care toll free numbers)
* Point & Click (Eg: Wicom pen and pad, iPad with stencil to draw something etc.)
* 3D Interfaces (Eg: CAD softwares or VR experiences where there's a realtime input-output of the scenario/1st person game-play)

## Exercise

Let's take an example of a databse system and see how a user could interact with if they use different styles of interactions.

**GOAL: Which of these interfaces are harder to use and why?**

Before we state the answers, let's establish the system model of a database briefly

### System Model of a DB

* Databases are group of multiple tables
* Tables have
  - title + description
  - multiple columns with column types and column titles
* 2 or more tables can be linked with each other or have a relationship
* A user can add data to designed schema of the database into multiple tables

**Scenario**
_For both the examples below, let's consider the user is wanting to create a database for a list of four-wheelers, their price, technical specs and their milage details._

## Answers

### Eg 1 - DB Systems using a Natural Language interface

_USER: Hey DB, create a "CARS" table for me
DB: Alright, I have created a "CARS" table for you and it's empty, what columns would you like to add to it?
USER: Sure, I want you to add the following columns to it. Car name, manufacturer, price, mileage and technical specs
DB: Great, I've added the following columns to the cars table - car_name, car_manufacturer, car_price, car_mileage and car_tech_specs. Would you like to add data to it?
..._


This was an example of how a user could "create a table" using the natural language interface.

**Challenges / Possible Pain Points**
- Hard to visualise the structure a fully established database (with multiple tables linked with eachother)
- Hard and tedious to add multiple data entry values into the database (imagine more than 100 rows)
- Difficult to know the possibilities of actions that the user can perform on the database without a reference/manual/pre-determined
- Very hard error recovery since the user can't see the possibilities of manuvering around it nor can the system understand what the user is trying to speak (noise, language-issues, english-only, accent etc.)


### Eg 2 - DB Systems using a 3D interface

