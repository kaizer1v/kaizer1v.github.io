---
title: 🦠 covid19bharat.org
publishDate: 30 Nov 2021
description: Collating everyday covid19 cases for India
---

On the onset of the announcement of covid19india.org shutting down it's operations, I, as a chapter leader for DataKind Bengaluru at the time, was helping scope a project with Development Data Lab on to help understand the norms for various castes and communities from pre-independence India ([Read about that over here](https://medium.com/datakind-bangalore/using-data-to-learn-about-pre-independence-india-167f61407c2)). covid19india.org was a massive success and the single source of truth for the entire country to track daily cases of the virus during the grimmest of times the world witnessed in the recent past. Running such a massive operation wasn't an easy feat and somehow, India's leading data journalist reached out to me with the recommendation of Development Data Labs on the evening when covid19india team decided to [sieze operations](https://twitter.com/covid19indiaorg/status/1455040584565940228). [Rukmini S](https://twitter.com/rukmini) was already involved in the previous initiative and knew of the operations caving in. The aim now was to continue the effort that the covid19india team had put all year, every-single-day round the clock to make available the truth of the situation about cases in India with the help of 100+ volunteers. The announcement was received by it's massive 128k number of followers on twitter.

At first, I asked myself - will I be able to bare this monumental responsibility of continuing to lead this effort? Am I even capable of doing this? What if I fail? At the same time, I felt compelled to be more resposible to carry the baton and continue the effort as an opportunity to make this vital statistics to people who depended on it. The expectations were overwhelming to say the least. Besides, I also felt hoping this effort won't be futile as the peak of the pandamic seemed to have been over (in Oct 2021 or so it seemed then) and top pharmas had formulated the vaccine and were going to be made available to the public. Will the platform die soon even if we put the effort as people won't be bothered to track the virus anymore? Instead they would now track vaccinations, which would be more critical - how do we tackle this?

Covid19India was an established brand at this point in time and their commendable crowdsourced tracker had a backing of dedicated and seasoned volunteers. Starting this all over again needed a voice that would be heard and couldn't have been started off without India's leading data journalist. And so it started off with a [tweet](https://twitter.com/Rukmini/status/1454651351468679176) and a [blog post announcement](https://medium.com/datakind-bangalore/announcing-covid19bharat-org-4141b1d8676f) to reach out for help. The response was surely overwhelming including some rockstars in the data visualisation community including [Gurman Bhatia](https://twitter.com/chartwaali), [Pratap Vardhan (also a colleague from Gramener)](https://twitter.com/pratapvardhan) and people from [Development Data Lab](https://www.devdatalab.org/team). I really envied working with them.

But the most curial question was yet to be answered - from a tech standpoint, how does all of this work? A month before Oct, 2021 I joined the telegram group of core volunteers who ran covid19india and got in touch with them to understand their operations and the platform architecture. To my surprise, DataKind wasn't the only one who were keen to continue, there were 6 - 7 different organisations keen on continuing this including IIT Hyderabad, Indian medical council, ISI Bangalore and a few others. Few of the organisations were terribly dependent on the data like IISc's reasearchers as well as Indian Mathematical Society. I could now feel the urgency and the pressure combined - feeling like I was being cooked like a Biryani over hot coal. I immediately recokned my very good colleague and an even better Data Scientist from Gramener, [Soumya Ranjan](https://www.linkedin.com/in/srmsoumya/) along with the core member from covid19india team to translate their architecture into an version that was comprehendible to me. This was critical for me to be able to lead and translate to other volunteers who would join in. This was intense python and react stuff that I had never confronted in my tech career, and always scared of it. But somehow I stuck through it to get the gist by asking novice questions. Once I did, I used my designing skills to make things simpler and drew it all out.

![Redefined the scraper architecture](../../assets/covid19bharat_scraper_architecture.png)

Over a course of the next few months, the first set of volunteers and I majorily re-wrote the architecture to build a command line tool, on top of which ran a chat bot written with Telegram API and later running a web application interface to help volunteers extract case data.

## Crucial Things

During this time, there were fairly new set of challenges

- Finding reliable set of sources that were publishing daily cases
- Monitor changes in the format of the published data source. At one point Odissa changed the table format in which they published daily cases and udpate the scraper codebase to be able to read the new data format
- Volunteers who promised to put the effort but weren't able to, someone had to pitch in
- Everyone weren't well versed with tech and the architecture, making them feel 

But slowly the team grew larger and we had dedicated members tracking specific states burning the midnight oil and adding the case numbers. Then the last wave of covid19 rised in India in Jan-Feb 2022. We also started tracking vaccinations and added a new stats on the dashboard. By this time, we had also partnered with IBM who started publishing insights on the case numbers on the platform.

And thus, we pursued this effort for another 15 months, until Jan 2023 by when covid19 was almost history and 85% of the country had been vaccinated with 2 shots. Tracking case numbers was trivial now and the number of daily viewers on the website plummetted too. Thus, on Jan 2023 we announced our [retirement of the exercise](https://medium.com/datakind-bangalore/bye-bye-covid19bharat-org-6178f3194a25).

## Things I learnt

> To communicate something really hard, first - you need to know the in-and-outs of it to make it simple enough

- The power of github actions + github pages
- react framework and writing components
- to write a command line app in python
- to write a telegram chat bot in pytyon
- using __ framework to read tabular images and convert to read-able data

Apart from the tech side of things I learned a lot about
- Reaching out and recruiting volunteers. Thanks to [Rukmini S](twitter.com/rukmini) who's twitter personality we used liberally to attract the best of people to join the effort
- Managing operations for volunteers (who is managing which state, handover or takeover when someone is unavailable or update the numbers when the calculations mismatched & this happened A LOT)

More than anything, trusting myself to be able to pull off this feat bolstered my confidence. Of course, none of this would have happened without an amazingly dedicated team of volunteers

> Lastly, it made me believe in myself and my capabilities. I deliberatly put my mind to this effort and I was able to pull off this feat, that is the learning i'll carry for a very long time to come