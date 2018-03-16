---
layout: post
title: Javascript Events
---

*What to do when an event occurs*

-----

Javascript events are very much like real life events. For example, when the power cuts
off, you light the candles (*in the dark*). In this case, your event was `power-cut`
and the action you took was `light the candles`.

## Javascript Events

```javascript
var event = new Event('power-cut')

// define the action you want to take when event occurs (known as listeners)
document.addEventListener('power-cut', function(e) {
  console.log('light the candles');
}, false)


// explicitely cut the power
document.dispatchEvent(event)
```

## Custom Data

The way to pass in custom data into the event is something like

```javascript

// pass in your data into an object with a key called `detail`
document.dispatchEvent('power-cut', { detail: {'at': '12:30 P.M.'} })

// event listener
document.addEventListener('power-cut', function(evt) {
  console.log('There was a power cut at around', evt.detail.at);
  // There was a power cut at around 12.30 P.M.
})
```

#### References

- [MDN Events](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events)
