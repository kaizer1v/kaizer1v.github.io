---
title: Heuristic Evaluation - IRCTC
categories: [design]
tags: [design, ui-design]
---

The primary task to be evaluated is described as below

**Compare the process of buying a round-trip ticket on a website or app. I chose IRCTC to book a return train ticket from Bangalore to Goa, for the next weekend. I ofcourse stopped right before paying for the ticket. For every violation I rated them based on the following score**

* 0 - don’t agree that this is a usability problem
* 1 - cosmetic problem
* 2 - minor usability problem
* 3 - major usability problem; important to fix
* 4 - usability catastrophe; imperative to fix

Here are some of the various violations I came across during the process.

The evaluation has been performed taking the 10 heuristic evaluation criteria described by Jacob Nielsen [over here](https://www.coursera.org/learn/human-computer-interaction/supplement/xDXpm/10-usability-heuristics).


## Violation 1
### Violates - Flexibility (Action)
#### Rating / 4 - Usability catastrophe; Imperative to fix

When booking the ticket, a user needs to enter their full name and other details before booking the ticket. Here, the text box when you need to passenger details asks for your full name, but allows only 16 characters to be entered. This is quite inflexible because people with longer names (like mine) wouldn’t be able to enter their full name at all. This usability issue is pretty imperative to fix because your name would be printed on the ticket which would be verified by a station master during your travel - which should match against your photo identity - this could cause trouble.

<figure class="row justify-content-center figure text-center">
  <img src="https://lh3.googleusercontent.com/vnyfCbNcw3gaFULsuR4KSAiuycblH9FohLstzbxyy33pZ4NVhbY8ucz8caOlHxpZZO4qD5DDXxf7ijQSaEjLnLKYTkmYHZlp9kIgg8Jqk4Qi-G7QDk9na3B0KDq3hLmphLvmRY4Z" class="figure-img img-fluid rounded" alt="Screenshot 1.1">
</figure>
<i class="text-italic text-center d-block">Screenshot 1.1</i>

## Violation 2
### Violates - Use Familiar Metaphor and Language (Understanding)
#### Rating / 4 - Usability catastrophe; Imperative to fix

When booking a train from Bangalore to Goa, the user is expected to know the railway station names of present in the city/state. When I tried booking a ticket to the state of Goa, from Bangalore, Karnataka, it only shows me the names of the station. Usually a user would enter the name of the popular destination like Goa (if you have visited India, you would know how famous Goa is). Here, the station “Vasco Da Gama” station is missing in the dropdown when you search for Goa, which is the central train station present in Goa.

<figure class="row justify-content-center figure text-center">
  <img src="https://lh6.googleusercontent.com/jIiAUCXBYOkznmPbnuNokNTJU2_fafMiq4vBFlI2hgk1U_8ertX3HV2xfZbnOoB_9n9Bg9IBL93ePSYKWfMjDZKoJe_HE9Ywk_LcOQ8j1MxCbPwbwt1bcSi9dS4K1aHvcgZKrtgW" class="figure-img img-fluid rounded" alt="Screenshot 2.1">
</figure>
<i class="text-italic text-center d-block">Screenshot 2.1</i>



## Violation 3
### Violates - Support Error Recovery (Feedback)
#### Rating / 2 - Minor usability problem

Here, the railway booking website allows the user to book a train ticket within the 48 hours of the departure time (called tatkal in Hindi). When the user accidentally selects a date beyond 48 hours of the departure time, it throws an error like in the screenshot. This usability could easily be solved by not allowing the user to select a date beyond 48 hours at all - thus making the user to put more effort in recovering from the error.

<figure class="row justify-content-center figure text-center">
  <img src="https://lh5.googleusercontent.com/95VjboMV7sCPZqGIS4oidomW2Ahc48raXhmTZFVligauyWTTRGu0PplWfiIubfDdGzDN3QJ44YEjVrL5lOTMtIoPcazcqoQO0MKZFBwl" class="figure-img img-fluid rounded" alt="Screenshot 3.1">
</figure>
<i class="text-italic text-center d-block">Screenshot 3.1</i>



## Violation 4
### Violates - Recognition over Recall (Action)
#### Rating / 2 - Minor usability problem

Here, instead of logging in multiple times and adding your passenger details every time, the website seems to maintain a saved passenger list, but from the interface, it nowhere allows you to add your passenger details to the list. The “+ Add Passenger” button in the bottom right corner intuitively doesn’t save it to the list, instead it actually produces one more row where you can add another passenger details. Ideally, it should save “save details to list” button which would avoid me entering the same details every time.

<figure class="row justify-content-center figure text-center">
  <img src="https://lh5.googleusercontent.com/RjDR1EojbtpyrY2wgDiVqu2Bd5VJVBbXMnn2MbrkmCmWsKEfiM2VGK5c3Mg6taDi3UdP5mI27pc4R-L9EEWVrK2vC2jCTC5j5t8BHbtatDka_hoKbFMuAZLwYy5Tlj9yyWH6c3QD" class="figure-img img-fluid rounded" alt="Screenshot 4.1">
</figure>
<i class="text-italic text-center d-block">Screenshot 4.1</i>



## Violation 5
### Violates - Use Familiar Metaphors & Language (Understanding)
#### Rating / 3 - Major usability problem; Important to fix

When booking train tickets, there are multiple statuses mentioned in the list of trains. There is also a small legend on the booking page (screenshot 5.1), where if you see the last two “Regret / WL” and “not available” isn’t very clear to the user as to the difference between the two.  As a new user, it would be quite confusing for them to understand how to proceed further.

<figure class="row justify-content-center figure text-center">
  <img src="https://lh3.googleusercontent.com/9oJmqD-Onx5ihLuN77_3E3mQEVI8-0QAjkdcs1SZDwWL8Zwza6-w6n3s25VPNmeKt4FvEE78oZdo_x1vG4SKbHS1CTwEXYlNWmOqbJXA" class="figure-img img-fluid rounded" alt="Screenshot 5.1">
</figure>
<i class="text-italic text-center d-block">Screenshot 5.1</i>