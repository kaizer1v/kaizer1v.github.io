---
title: My Uber Data Analysis
categories: [design]
tags: [design, ui-design]
---

<figure class="row justify-content-center figure text-center">
  <img src="https://images.unsplash.com/photo-1482029255085-35a4a48b7084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80" class="figure-img img-fluid rounded" alt="organised by colour">
</figure>

I got hold of my uber data, after finally figuring out how to. I performed some analysis on this and here's what I found

The data is from 2015 to 2019.

<h2>Key Insignts</h2>

<div class="row my-3">
  <ul class="list-group my-3 col-6">
    <li class="list-group-item d-flex justify-content-between align-items-center">
      Total Distance Travelled
      <h4><span class="badge badge-success badge-pill">4155 . 16 KM</span></h4>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      Total Spending
      <h4><span class="badge badge-success badge-pill">76,408</span></h4>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      Total Trips Completed
      <h4><span class="badge badge-success badge-pill">304</span></h4>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      Over The Course of
      <h4><span class="badge badge-success badge-pill">4 Years</span></h4>
    </li>
  </ul>

  <ul class="list-group my-3 col-6">
    <li class="list-group-item d-flex justify-content-between align-items-center">
      Kilometers per day
      <h4><span class="badge badge-success badge-pill">2 . 8 km / day</span></h4>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      Minutes per day
      <h4><span class="badge badge-success badge-pill">15 minutes / day</span></h4>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      Spending per day
      <h4><span class="badge badge-success badge-pill">52 . 33 INR / day</span></h4>
      <h4><span class="badge badge-success badge-pill">2 . 18 INR / minute</span></h4>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      Spending per kilometer (Per km rate)
      <h4><span class="badge badge-success badge-pill">18 . 39 INR / km</span></h4>
    </li>
  </ul>
</div>

* A total of `4155 km` is like driving from Bangalore to New Delhi & back.
* An average of `2.8 km / day` -- **WHAAAAAAAAAAAT**. _Did I mention, I actually work from home._ There have been times when I haven't stepped out of the house for 2 - 3 days because of work. Thanks to Amazon & Zomato.
* Also, the total hours I have spent in cabs is `18 hours & 38 minutes`, with the longest trip being a `1 Hour & 30 minutes` and the shortest being a `4 minute` ride, for 300 meters.


<h2>Other Insights</h2>

<h3>The number of cabs during the time of the week</h3>

<figure class="row justify-content-center figure text-center">
  <img src="/assets/images/number_of_cabs_during_the_week.svg" class="figure-img img-fluid rounded" alt="number of cabs during the time of the week">
</figure>

Looks like I usually travel during the weekends, which makes sense, because I work from home mostly.

<h3>Fares during the times of the week</h3>

<figure class="row justify-content-center figure text-center">
  <img src="/assets/images/avg_fare_during_week.svg" class="figure-img img-fluid rounded" alt="number of cabs during the time of the week">
</figure>

This looks pretty interesting to see, based on my cab usage that Thursdays are the cheapest, considering that I have taken about 33 cabs (_10.9 %_) on Thursdays which is more than 


<h2>Cancelled Trips</h2>

I was curious to know the wait time before I cancelled my trip. Unfortunately, you will be unable to calculate this from the given data points. But I do know that there were a total of `126 trips` that I cancelled. And about `23 trips` that the driver cancelled. There also were a total of `58 requests` that were unfulfilled i.e. when I never got a cab.


<h3>More Insights to Come</h3>

* Rates
  - monthly / weekly
  - pickup point / drop point
  - time of the day

- most areas I have visited (airport mostly)
- longest trip in km & time
- shortest trip in km & time
- best time to travel (wrt to time, money and speed)
- ever travelled with the same driver again?
- cancelled trips
- longest / shortest wait
- same destination & pickup but different distances
- highest per km rate & correlation with pickup time
- total cities
- total cab types (value counts)


<h2>Notes</h2>

https://www.google.com/maps/api/json?query=13.1996529,77.7077639
https://www.google.com/maps/search/?api=1&query=13.1996529,77.7077639


<h2>Download Your Rider Data</h2>

You can download your uber rider data from [their official website](https://help.uber.com/riders/article/download-your-data?nodeId=2c86900d-8408-4bac-b92a-956d793acd11&state=KR-A9h8u4EAh_8OfwOH0aWuf6VbQ1q7GaFnjbxRNJeM%3D&_csid=xjk63_bs0hM4P-s0C45SJw#_), in the **request your data section**