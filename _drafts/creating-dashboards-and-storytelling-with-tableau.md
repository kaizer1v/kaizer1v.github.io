# UC Davis Course - Creating Dashboards and Storyteling with Tableau

## Intro

### What is a story?

- Analytical visualisation is focused on allowing the user to develop their own insights and patterns, where as data stories takes the audience's attention to a particular pre-determined point or message.

> Most people know what a story is, until they sit down to write one. _Flannery O'Connor_

The 3 Cs of a story usually are

1. Context (setting up the intro and brief)
2. Challenge (a challenge / conflict / argument in the middle)
3. Conclusion (a final resolution)

> Data tells you what is happening, Stories tell you why it's happening


### But why stories?

Stories improves comprehension and recall. They also invoke empathy and emotion. They tend to engage a user's mind more than just facts and numbers like on a dashboard.

There are some negatives as well
- They can be false narratives
- They can also distort data with meaningless patterns
- There could be false conclusions drawn from patterns (depending on the narration)

Stories usually tend to concentrate on the meaningful aspects of the data and eliminate useless or misleading information.


### Role of a data story teller

Imagine you are an investigative journalist or a detective. Part of your job is sifting through mountains of data, finding relevant facts and then assembling those relevant facts into a **clear** , **compelling** and **accurate** account.

## Week 1 (W1)


### W1E1 - Who, What, Why and How

Some of the basic questions that need to be answered are the before diving into creating a data strory are the **WWWH**.

**Who**
- Intended audiences
- Stakeholders
- SME - Subject matter experts

**What** 
- What data is available

**Why**
- Define the goal of the story you are wanting to conveny.

**How**
- Whether it is a dashoard or a report or a story


An example of a data story could be, `How ice cream sales correlate with crime but doesn't cause it`. Remember, correlation doesn't really mean causation or explain **why** something happens. There's another variable that causes this misinterpretation - in this case the outdoor temprature causes rise in ice cream sales and it also causes people to be out on the streets, potentially increasing opportunities for crime.

This example could not necessarily be a good story, but the narration could be in such a way that the user might misinterpret it. Thus, narration is key to story telling and instead of framing the story yourself, you should reach out to your stakeholders.


### W1E2 - How can stakeholders help you frame your stories?

- Start with your stakeholders, or who ever you are buildling the viz for.
- Gather the source knowledge and domain knowledge
- Define how you describe features of a dataset
- Detail what data isn't available

Consider questions for a good starting point to be

- Which elements, details and results must the story include?
- What's the timeline?
- Goal of the datastory, in a summary
- Benchmarks to measure success

Once you understand prespective from stakeholder's point of view, now look into the audience's point of view


### W1E3 - Addressing your audience

Understand the audience from their point of view by asking

- Their reasons for viewing the story
- Their context of viewing
- Their level of understanding the subject
- Their intended takeaways

Also consider these points

- Choosing a visualisation based on the audience sophistication
- Segmenting the audience & distinguish them based on age, geography etc.

There are two ways of understanding the user better

**Quantative approach**
This approach appeals to mass rather than a selected group of people. Using a tool such as surveys helps you reach out to as many people as possible.

**Qualitative approach**
This approach includes personas which helps you segementise your audience into groups based on certain parameters such as geography, gender or age. It also helps you see big picture in terms of their expectations. The segementation also helps you see design from different perspectives.

Once you have generated the different personas, ensure each persona should focus on
list of their needs and goals along with their details of (why, how etc.)

Selecting and interviewing a candidate from each persona helps understand their requirements better. Here are some interviewing tips

- Ask open ended questions
- Ask about their needs, goals (for reading the story) and pain-points
- Ask about their understanding
- assess their domain knowledge
- assess how often will the story be referenced
- among whom will they share the story
- assess the context / platform on which they will view the stories

**Warning**
- Dont get into confirmation bias (i.e. _when you try to see the data from your point of view, you will look only for that, instead, see what the data has to say and leave your bias aside_)


### W1E4 - Finding the story (looking into the data)

The third perspective is the data perspective. Here are some key questions to assess before you begin with your story, from a data standpoint

- What types of data are going to be used?
- Quality and completeness of the data?
- Most relevant dimensions of the data for the story?
- Frequency / freshness of the data
- How will the data be framed in context to the story?
- What kind of decisions will come out of the data from your data story?
- Assess expressiveness and effectiveness
- Does the ppt style convey the meaning correctly?
- What data points to include and exlude?

> My dear Watson, how dangerous it is to reason from insufficient data - Sherlock

**NOTE** - insufficient data + emotion + bias = wrong interpretation

_see probability of having cancer section in the video to understand better_, but note that it is good to do some homework when understanding the story. Help the audience do some homework

> Any piece of evidence does not lie in isolation.

**Also keep in mind**

- Consider that some of the data might be irrevelant
- All data might not be available in the beginning to tell a true story
- Some data that _might_ seem irrelevant, but could be essential
- Some data that may seem true, but may not actually be true

_used binary tree chart - for exploring decision/options_


### W1E5 - Prioritising, Optimising and Designing your Data Story

Now that you have looked at the three perspectives, how do you prioritise your inputs? By this time you will have enough understanding about each perspective and would have collected enough information about your story. Remember, a designer's job is to align the **audience**, **stakeholders** and the **data** into a good data story.

Try finding answers to some of these points, which will help you align your inputs.

- Assess the most effective presentation of your story (What could be the best way of presenting the story?)
- Assess the purpose of your context (Why is such a story even required? How will it help the reader?)
- Is the **aim** to pursuade your conclusion? or is it to start an open-ended discussion? (_Note that it could be possible that the story is inconclusive_)
- What level of details do you want to see in the story?

Here are some **tips** that will help you pursuade the reader when you have a definitive conclusion in mind

- Have a well defined narrative in place
- Always back your arguments with definitive visualisations

Where as for an open ended narrative, you could

- Add more interactivity (for letting the viewer explore and draw their own conclusions)
- Enable comments to let the viewers tell what they see

> Keep it as simple as possible, not any simpler  - Albert Einstein


As an example, have a look at [this dashboard](https://www.tableau.com/solutions/gallery/tale-100-entrepreneurs) - which talks about the tale of 100 entrepreneurs based on how fast they reach their first $50m in revenue.


### W1E6 - Case Study: A tale of a 100 entrepreneurs

This case study will help analyse a case study with the 3Cs in mind. When you actually look at [the dashboard](https://www.tableau.com/solutions/gallery/tale-100-entrepreneurs) you will notice a few things, like

- Even though the title has the word _enterpreneurs_, the description has the dashboard shows a list of _companies_ and not the persons i.e. the enterpreneurs
- It focuses on the companies that reached their $50m in revenue the fastest, but when you look at the x-axis of the graph, it is marked at $100m
- It has a dropdown for filtering out based on the growth group. The names of the growth group weren't very evident, but I had to interpret what each name meant
- The [lecture](https://www.coursera.org/learn/dataviz-dashboards/lecture/xZ64h/case-study-the-tale-of-100-entrepreneurs-part-2) also looks into the part of how the data was consumed in generate two different stories

Once you have analysed and visualised the data, you will see a certain pattern in it, based on which you can frame the title of your story - in the form of a question.


### W2E1 - KPIs (Key Performance Indicators)

KPIs are metrics which allow you to measure against strategic goals. Well designed KPIs gives you clear understandings of current performance. If you were to breakdown the three components of KPI, they would be

**Key** - What are the `key` things to measure? These usually come from the strategic goals and priorities. Eg: If your goal is stated as "_We want to improve profits from last year._", then based on that, one of your **key** things to monitor would be the **profits**

**Performance** - Tracking your performance against the goals defined. Eg: Based on the example provided in the **key** section, your performance will be measured by observing the **profits** of your organisation. This could either be better, worse or the same as last year.

**Indicators** - You'll have to, in some way indicate how your performance is keeping up with the goal.

The three main components of a KPI should be
- It must be `key` i.e. of high importance based on priorities
- It must be quantifiable in order to be measurable
- It must have a measurable result

**NOTE** You need quantitative or calculated fields in order to come up with useful KPI.

The important thing to note here is that, your end users are interested in viewing  your KPIs is because that is what is meaningful to them. These KPIs are what helps them make decisions. Thus, as a designer, your job is to identify these KPIs from the data and display them graphically. 


### W2E3&4 - Creating KPI using Calculated Fields

### W2E5 - Thresholds and Alerts

These are important notifications that tell you that you need to look at what is going on. It is also important to get feedback on the KPIs designed from the stakeholders involved.

A threshold is nothing but a benchmark which is set, when the **KPI** hits a certain benchmark, then alter the user.

### W2E6 - Data Quality

It is about getting the data into a good shape, clean and machine readable format, in order to do data anlaysis.

### W3E1 - White Paper

The White Paper on [Must Dos of Marketing Dashboards](https://d3c33hcgiwev3.cloudfront.net/_5848e0522129c76574edfd65aba9b651_whitepaper_mustdosofmarketingdashboards_eng_3.pdf?Expires=1556409600&Signature=bfynoGkhMBuor4DFuafuFfu~bChyOqdSyOSCS1I1Uvc2D6bXPtsDeI8-Jv-QjmHB3YQ1w6sbwTqKnh4VvN8xvO1SDxUaPwX92kw0EHTpX0mCLEnolbHivwuOLYkM50Z7E1ZQW4GCVY7apiopGmQeNTPLN0hb4Ae5cuIN15wF4uA_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A)

Here's the brief

* Choose the metrics that matter, based on your objectives and goals
* How does your effort contribute to those objectives?
* Gather the data that shed light on these efforts that you are making towards contributing to your objectives
	- Always visualise this data so that it is transparent and clear
	- 
* Define some key metrics that measure these contributions
	- Note down some of the key conclusions and synthesis based on the data gathered and analysed
* Scale this measurement techniques on an on-going basis to get reports on a regular basis
	- Automate the process of analysis and visualisation. Eg: Generate dashboards
	- Always connect the automation with the live data so that its realtime


### W3E2 - Best Practices for Dashboard Designs

	
---

Finally here's a detailed case study with documents linked that will help implement the theory gathered into a practical story.

#### Case Study 1 - Supermarket Dataset

_Imagine you are an analyst working for the Super Store Corporation. Your boss Sylvia is the VP of Sales and she is conducting a review of the company discount policy. As research for her review, she has asked you to perform an exploratory analysis of the Super Store discount data. Specifically, Sylvia has asked you to investigate if there is a relationship between discounted sales and profit, and how much the company is profiting or losing based on discounted sales._

_She also wants to see if there are opportunities for efficiencies with respect to how discounts are handled. Perhaps certain customers are receiving more discounts than other customers. Perhaps certain product categories or product segments are receiving more discounts than others. Sylvia has given you wide latitude to explore this question however you see fit, and will ultimately make a recommendation to the board of directors based on your findings._

_Sylvia will have only 5-7 minutes to present to board members, and she knows that her board members don’t understand the minutiae of the business and prefer quickly hearing only the top-level facts. She also knows the room the presentation will be held in is large, meaning the visualization will be viewed from a great distance across the room. Please consult the Persona document included in this project for specific requirements of this audience._

Based on the above brief, we will first define a design checklist ([here's a template](https://bit.ly/2HX7hyV))

##### Design Checklist

WHO

- **Stakeholders**: VP of sales ([persona - Sylvia](https://bit.ly/2UbZl3r))

- **Audience**: Board of directors ([persona - Terrance](https://bit.ly/2KfBCen))

- **Subject Matter Experts**:

WHAT

- **Data Sources**: 4 years of sales data [link](https://bit.ly/2OFBp2o)

- **Data Quality**: It is understandable and machine readable

- **Data Timelines**: The data contains sales between **Jan 2011 to Dec 2014**

WHY

- **Business Case/Other Goals** (_The purpose of the story_): To find patterns in the discounts offered to various customers and product segments and conclude if discounted sales has an impact on profit/loss to make more nimble inventory and distribution decisions. If so, find opportunities to make the discount offerrings more efficient and bringing financial stability.

- **Intended Outcome** (_goals for outcome, define take-aways and next steps_): Improve the efficiency of discounts being offerend in order to increase profits.

HOW

- **Format(s)** (_infographic, narrated dashboard, ppt etc._): Presentation with visualisations and large annotations

- **Presentation Vehicle** (_tablet, phone, desktop etc._): Projector / large screen in the board room

#### KPI

Based on the above findings, we believe some of the important KPIs are the following

1. Original price vs Discounted Price
2. Product segments by Discounts offered
3. Product Category based on Profit / Loss after discounts


#### Narrative

TODO in Module 3

#### Final Deliverables

TODO in Module 4





---

## Links & Resources

* This recommended reading provides some scientific explanation for why and how humans make decisions for reasons other than pure logic and facts. Emotion, behavioral factors, and psychological factors also play an important role in decision making, and this article touches on why we believe that to be true. Dawes, Robyn M., [A Message From Psychologists to Economists: Mere Predictability Doesn’t Matter Like it Should (Without a Good Story Appended to it)](http://pages.ucsd.edu/~aronatas/project/academic/dawes%20on%20narratives.pdf), Journal of Economic Behavior & Organization Vol. 39 (1999) 29-40
* This article examines the intersection of emotion and storytelling in the context of human decision making. While this article focuses on the marketing context, much of the underlying information is true for storytelling across all disciplines. Luhn, Matthew, How to Put More Emotion in Storytelling: Digital Advertisers Have Forgotten How to Make People Feel Something, Advertising Age, 2016 - [How to put more emotion in storytelling](http://adage.com/article/digitalnext/put-emotion-storytelling/304463/)
* [Data Storytelling: Using Visualization to Share the Human Impact of Numbers](https://www.tableau.com/learn/whitepapers/data-storytelling-using-visualization-share-human-impact-numbers)
* [HBR - How to Tell a Story With Data](https://hbr.org/2013/04/how-to-tell-a-story-with-data)

