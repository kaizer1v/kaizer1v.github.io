---
layout: post
title: Page Progress Bar
categories: [design]
tags: [ui-design, interactions]
---

_A build-it-yourself progress bar in plain javascript and html_

-----
<!--more-->

A quick way to enhance the user experience when they are scrolling through a page is to show them how far or how long they have to go before they finish the article.

A good way to show that is to showthem via a progress bar like 

![hbs-progress-bar](/assets/progress-bar.gif)

## Javascript

It's pretty easy to add this to your website and here's a quick way to do it


Make sure your html like so

```html
<body>
  <div id="progress"></div>

  <!-- rest of the content below this line -->


  <!-- rest of the content above this line -->
<script type="text/javascript"></script>
</body>
```

and add some style in your style tag

```css
#progress {
  border-bottom: 2px solid blue;
  width: 0;
  position: fixed;
  top: 0; left: 0;
}
```

and add this code to your script section of the file

```javascript
// making a large enough content for you to scroll
document.body.appendChild(document.createTextNode(
  "supercalifragilisticexpialidocious ".repeat(1000))
);

// get the div element
let bar = document.querySelector("#progress");

// register scroll event
window.addEventListener("scroll", () => {
  let max = document.body.scrollHeight - innerHeight;

  // change width of the div as you scroll
  bar.style.width = `${(pageYOffset / max) * 100}%`;
});
```

This should have the effect of the progress as shown in the image above.