---
title: Redesigning My Electricity Bill
categories: [design]
tags: [design, ui-design]
---

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

Let's look at how the bill flows; right from where it is printed, to the resident (bill address).

<br /><br /><br />
<div class="row">
  <div class="col-1 text-center h3"><i class="fas fa-building"></i></div>
  <div class="col-1 text-center h3"><i class="fas fa-long-arrow-alt-right"></i></div>
  <div class="col-1 text-center h3"><i class="fas fa-user-cog"></i></div>
  <div class="col-1 text-center h3"><i class="fas fa-long-arrow-alt-right"></i></div>
  <div class="col-1 text-center h3"><i class="fas fa-shuttle-van"></i></div>
  <div class="col-1 text-center h3"><i class="fas fa-long-arrow-alt-right"></i></div>
  <div class="col-1 text-center h3"><i class="fas fa-user-tag"></i></div>
  <div class="col-1 text-center h3"><i class="fas fa-long-arrow-alt-right"></i></div>
  <div class="col-1 text-center h3"><i class="fas fa-user-check"></i></div>
</div>
<div class="row">
  <div class="col-1 text-center">Bill Printing</div>
  <div class="col-1 text-center"></div>
  <div class="col-1 text-center">Bill Sorting</div>
  <div class="col-1 text-center"></div>
  <div class="col-1 text-center">Bulk Bill Delivery</div>
  <div class="col-1 text-center"></div>
  <div class="col-1 text-center">Middle Men</div>
  <div class="col-1 text-center"></div>
  <div class="col-1 text-center">Resident</div>
</div>
<br /><br /><br />


The goal of each of these users are a little different, let's see what their goals are.

### User 1 - The person who sorts the bills

In order to sort the bills fast, assuming that they do it manually, would be interested in the locality of the address or the connection number.


### User 2 - Delivery Man

The delivery person mainly focuses on the delivery of the bill at the right address. Also, since these personnels are regular delivery personnels, their **addresses** and routes are already known to them. They group the bills based on the apartment names and deliver in bulk.


### User 3 - Middle Man

These personnels are usually like apartment security guards, neighbours or who are in direct contact with the delivery personnels and collect the bill from them in bulk. They then destribute and deliver it to the door step of the resident


### User 4 - Resident

The final user would be the resident who is mostly concerned with information concerned with the amount due and the due date. They also sometimes refer to the account number when dealing with either the website or customer care.


## Current Bill

This is what the current bill looks like.

<figure class="row justify-content-center figure text-center">
  <img src="/assets/images/bill_original.png" class="border figure-img img-fluid rounded" alt="electricity bill">
</figure>

<h2 class="h2">Proposed Redesign</h2>

Considering the above factors and a bit of research, here is the proposed redesign of the electricity bill.

<figure class="row justify-content-center figure text-center">
  <img src="/assets/images/bill_redesign_full.png" class="border figure-img img-fluid rounded" alt="electricity bill redesigned">
</figure>

<h3 class="h3">Minimal Version</h3>

**What the minimal bill redesign addresses**

* Promotes digital payment option with PayTM or BEC app
* Reduces paper size
* Removal of secondary information like kilo-watt rates and total amount breakdown
* Changes hierarchy of information from usage point of view for all users involved (top to bottom)

<figure class="row justify-content-center figure text-center">
  <img src="/assets/images/bill_redesign_minimal.png" class="border figure-img img-fluid rounded" alt="electricity bill redesigned minimal">
</figure>

Would love to have comments, critic or suggestions on this proposal.







