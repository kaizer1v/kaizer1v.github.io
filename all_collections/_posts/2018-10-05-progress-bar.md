---
title: Page Progress Bar
categories: [design]
tags: [ui-design, interactions]
---

We'll try to build something like this.

<iframe
  src="{{ site.baseurl }}/recipes/progress-bar.html"
  sandbox="allow-same-origin allow-scripts"
  onload="this.style.height='300px';">
</iframe>

<!-- <iframe
  src="https://carbon.now.sh/embed/?bg=rgba(29%2C97%2C154%2C1)&t=duotone-dark&wt=none&l=javascript&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false"
  style="transform:scale(0.7); width:1024px; height:473px; border:0; overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe> -->

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

This should have the effect of the progress should look like