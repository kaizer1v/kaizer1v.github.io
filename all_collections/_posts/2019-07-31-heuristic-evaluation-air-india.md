---
title: Heuristic Evaluation - Air India
categories: [design]
tags: [design, ui-design]
---

The primary task to be evaluated is described as below

**Compare the process of buying a round-trip ticket on a website or app. I chose AirIndia to book a return flight from Bangalore to Bali, Indonesia, for the next weekend. I ofcourse stopped right before paying for the flights. For every violation I rated them based on the following score**

* 0 - don’t agree that this is a usability problem
* 1 - cosmetic problem
* 2 - minor usability problem
* 3 - major usability problem; important to fix
* 4 - usability catastrophe; imperative to fix

Here are some of the various violations I came across during the process.

The evaluation has been performed taking the 10 heuristic evaluation criteria described by Jacob Nielsen [over here](https://www.coursera.org/learn/human-computer-interaction/supplement/xDXpm/10-usability-heuristics).


## Violation 1
### Violates - Clean & Functional Design
#### Rating / 2 - Minor usability problem

Here, an average user lands on airindia’s website primarily to book flight tickets, which is 90% of the user’s primary task. Here the option of booking a flight isn’t very obvious from the screenshot 1.1. Assuming that I don’t already have booked flight, I wouldn’t know that the “Book a Flight” is actually under the “Manage your Trip” menu option as shown in the screenshot 1.2.

<figure class="row justify-content-center figure text-center">
  <img src="https://lh3.googleusercontent.com/Pe4UaRPsJszFcUJzDAmMg6diHtn9vTG49c1DOpW9DuWocU4YXBU2WNWZRvPNDXezcbDvVh1Xs-viJHrwB9VFqfUFRQqs0qByTLh06zuW-mEZBSzvGy_ezY0-AvidDfbTXTHvuapb" class="figure-img img-fluid rounded col-6" alt="Screenshot 1.1">
</figure>
<i class="text-italic text-center d-block">Screenshot 1.1</i>

<figure class="row justify-content-center figure text-center">
  <img src="https://lh6.googleusercontent.com/iA5mP0LHznlqSasHQW19HyVaT6a79mt5JNLZOn5EkzLwW6Ff6uxkzZTffl10Y99p7Aog8-Jp_UTlAYjEZh_h6Nyc1P01e3ufi4EGtWNOaH-zW26iKtrPDgzndVxh8799q-isNQTQ" class="figure-img img-fluid rounded col-6" alt="Screenshot 1.2">
</figure>
<i class="text-italic text-center d-block">Screenshot 1.2</i>


## Violation 2
### Violates - Support Error Recovery (Feedback)]
#### Rating / 3 - Major usability problem; Important to fix

For people who live in India, might know that the city “Bangalore” has two names, the older english version “Bangalore” and the later Indian renamed version to “Bengaluru” (reference link). There are many people who still use the name “Bangalore” instead of the latter. Here, when I tried booking the ticket with the source city as “Bangalore”, it didn’t provide any recommendations for the alternative name. It alters the user only after I select all the other option and select “Book” button. This being an Indian airlines website, it is definitely important to fix.

<figure class="row justify-content-center figure text-center">
  <img src="https://lh5.googleusercontent.com/aFPrjTgUiCt7r7Q1nMwzStfKCfMd5Wx5MO7G1v_d9kId_4ZNyTDtzsLnhcpkXELIrnV5NFmWRdVgTq-3awHgv6zjPRQvgZv-VILNuAzuUzY2TGSpYfZZuvqhdHpbBgQHv8aZbUA9" class="figure-img img-fluid rounded col-6" alt="Screenshot 2.1">
</figure>
<i class="text-italic text-center d-block">Screenshot 2.1</i>



## Violation 3
### Violates - Prevent Errors (Feedback)
#### Rating / 4 - Usability catastrophe; Imperative to fix

Here, I tried booking the tickets to Bali, Indonesia - where I would love to visit. Here, the user is expected to know that there actually aren’t any AirIndia flights to this destination. Instead of saying “There are no flights to this destination”, it throws an error “Enter proper destination location” - which is confusing because it makes the user think that they made a spelling mistake. There’s no way the user knows there aren’t any flights to this destination.

<figure class="row justify-content-center figure text-center">
  <img src="https://lh6.googleusercontent.com/qFBL0g_W7h29TwT_Q-_zOaBBrFyAmsDhT_jKbUBB-K5cbJ7AN94qXnfPSSip5oAVaoW5gyhMjPCnxbNGq0JSNoNLS-5R-28JRFADVMSy" class="figure-img img-fluid rounded col-6" alt="Screenshot 3.1">
</figure>
<i class="text-italic text-center d-block">Screenshot 3.1</i>



## Violation 4
### Violates - Consistency (Understanding)
#### Rating / 4 - Usability catastrophe; Imperative to fix

If you compare the two screenshots (screenshot 4.1 and 4.2) - you would notice that the navigation and the menu options in 4.1 are on the top, laid out horizontally, where as in 4.2, the menu moves to the right hand side as well as some of the options remain on the top, which are completely different from those shown in the main page (4.1). This inconsistency in design confuses the user to checkout the other options which were previously available. There are also visual design elements like the menu background colours and banners which disappear in page 2 (4.2).

<figure class="row justify-content-center figure text-center">
  <img src="https://lh4.googleusercontent.com/NzJXPtGueStnJLK70juBDRdJU3P2RwAGLZr--aoZ1QwdFf2f1biIP_UIgdIx5t154BUBbDTODJrexEBeQm3krhqDBXje5fLMCbylzugp" class="figure-img img-fluid rounded col-6" alt="Screenshot 4.1">
</figure>
<i class="text-italic text-center d-block">Screenshot 4.1</i>



## Violation 5
### Violates - Flexibility (Action)
#### Rating / 4 - Usability catastrophe; Imperative to fix

Here when the user selects a particular from & to dates, based on their convenience, the system tells “No valid available flights could be found for your requirements” instead of allowing or suggesting me to flexibly pick a range of dates like a month or 2 months where it shows me the available flights to the destination selected. The system doesn’t provide any flexible date range selection options without producing errors.

<figure class="row justify-content-center figure text-center">
  <img src="https://lh5.googleusercontent.com/uxIXvbpkFHYwu1TbTS462vJ63_fxqKlN27fMa-QW1_B1oL071Uzlt81v7SsYx1TDwE1vgcszdrLOkjNkjbhXGaViZHBtVVFkswqBYcI1-uuF7cUfe0nsK_8hVEgnhpkPL8gsPZ_K" class="figure-img img-fluid rounded col-6" alt="Screenshot 5.1">
</figure>
<i class="text-italic text-center d-block">Screenshot 5.1</i>