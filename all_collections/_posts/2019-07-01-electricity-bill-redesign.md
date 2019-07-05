---
layout: post
title: Redesigning My Electricity Bill
categories: [javascript]
tags: [code, tutorial, d3]
comments: true
---

_save paper_

-----
<!--more-->

Here's what my electricity looks like. Infact, all of Bangalore's electricity might look the same. Although it provides all the required information that I need to know from a bill, I thought of making it a little more efficient considering the following factors

* Information hierarchy
* Paper print efficiency
* Discarding unwanted information
* Language


## What does one want to know from their electricity bill?

1. The amount due
2. The due date
3. The period billed for
4. Breakdown for the total amount
5. Payment


## Who actually uses the bill printout?

* The person who sorts the bills and allots the bills based on the locality
* The delivery person who actually delivers the printout
* The third party person who reads the address
* The resident

Each user focuses on different parts of the bill for their importance.

### User 1 - The person who sorts the bills

In order to sort the bills fast, assuming that they do it manually, would be interested in the locality of the address or the connection number.


### User 2 - Delivery

The delivery person mainly focuses on the delivery of the bill at the right address. Also, since these personnels are regular delivery personnels, their **addresses** and routes are already known to them. They group the bills based on the apartment names and deliver in bulk.


### User 3 - Middle Man

These personnels are usually like apartment security guards, neighbours or who are in direct contact with the delivery personnels and collect the bill from them in bulk. They then destribute and deliver it to the door step of the resident


### User 4 - Resident

The final user would be the resident who is mostly concerned with information concerned with the amount due and the due date. They also sometimes refer to the account number when dealing with either the website or customer care.


## Current Bill

This is what the current bill looks like.


## Proposed redesign

Considering the above factors and a bit of research, here is the proposed redesign of the electricity bill.


Would love to have comments, critic or suggestions on this proposal.







