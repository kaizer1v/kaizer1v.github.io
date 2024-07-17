---
title: Covid19bharat.org
publishDate: 01 Dec 2021
description: Collating India's covid19 cases, everyday on a single platform
year: 2021
tags: abc, xyz, something-else
thumbnail: covid19bharatorg.png
---

The onset of the pandemic had one major problem (along with many others along the way), that it was really really hard to keep track of the situation of the pandemic — The goal of such a platform was to have this information; simply put — accessible.

_This case study focuses on a high level overview about the process undertaken to overcome the problem from a design point of view._

## The Problem

In 2019, when the pandemic was becoming widespread in India, various sources started sharing information about the number of cases via social media platform and news publisher websites. Most of these were either journalists or verified government sources. The information was scattered, unstructured and not translated into English.

..image here...

Needless to say, such information was highly critical to keep track of the rise and fall of cases, tracking deaths and confirmed cases as well as the rate of vaccination of citizens — for all 756 districts across India.

## Representation of the Data

The structure of the information for covid19 case details had 4 data points to it.

1. Confirmed
2. Active
3. Deceased
4. Recovered

These 4 data points were critical to be shown for anyone to monitor and track covid19 ([reference link](https://www.cdc.gov/coronavirus/2019-ncov/science/about-epidemiology/monitoring-and-tracking.html)). **So, how could this be represented?**

We started with a simple state-level choropleth map of India to show the geographical spread of the virus. Over time, it became apparent that this was not the best representation of ground reality. A choropleth is inherently biased to give importance to larger regions in a map. For example, Delhi which was contributing lots of cases to the nation-wide tally was barely noticeable in the map. Also, while the virus was initially concentrated only in large cities within a state, there was no way to convey this information on a state-level map. Thus, a bubble for every district, where the size would represent the number or cases — was clearly conveying the situation as-is.

...image...

We wanted users to access the above 4 data points as a filter to view the situation from different dimensions/perspectives. This determined the top-most point of the hierarchical structure of the case data to be represented. A delta value for each of these 4 data points helped anyone learn whether it was a good or a bad day along with an overall trend from the beginning of the pandemic.

...image...

At a time of social media when covid data could be contentious, for designing such a platform, ensuring 100% transparency and openness was vital. After all, DataKind was the archetype of open source and open data for social good.

[[Top]](#top)

## Diving Deeper

> As a media giant, it’s good to understand the situation across India, but as a concerned citizen locked down at home, I am more concerned about the situation around me.

## Other Interesting Stuff

As an experiment —we also tried to visualise the cluster of spread of cases (from person to person). Unfortunately, this data point was no longer available after a point of time.

## My role

My role over the time changed from being a design volunteer among 300+ others, to front-end volunteer as well as handling operations to being a lead who transitioned this project into DataKind’s arsenal (where I also act as a chapter leader) where I worked and collaborated with the India’s leading Data Journalist and a team of 20 volunteers who helped maintain the platform even today.



## Future

I am also leading the conversation with IBM research labs who were interested in contributing to this open data set — to show information as insights ([link](https://covid19bharat.org/analysis))for more frequent consumers like institutions and building models for recommendations.

...image...