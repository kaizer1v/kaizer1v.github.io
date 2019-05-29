# Javascript Notes

## Definitions

**Transpile**   - convert ES6 to standard JS (eg: babel, typescript, google traceur)
**Modularise**  - convert your code architecture into chunks (eg: rollup, webpack, browserify)
**Package**     - manage dependencies and package to publish it (eg: npm, yarn, bower)
**Lint**        - fixes syntax, style and type errors (eg: eslint, jshint, jslint)
**Test**        - helps you write test-cases for your code (eg: mocha, chai, karma, jasmine)
**Docs**        - helps you generate api/docs for your code (eg: jsdoc, esdoc)


## Array Functions

- `pop` - removes element from the **end**
- `push` - adds an element in the **end**
- `shift` - removes an element from the **beginning**
- `unshift` - adds an element in the **beginning**
- `splice` - (index, count, ...replace_with), also modifies the input arr
- `slice` - (start_index, end_index - 1), doesn't modify the input arr
- `indexOf` - checks if element, if so returns the index number of the first occurance or else a `-1`


## Difference Between Two Arrays

```javsacript
// difference between 2 arrays

function diffArray(arr1, arr2) {
  var newArr = [];
  arr1.forEach(function(item) {
    var ind = arr2.indexOf(item)
    if(ind === -1) {
      newArr.push(item)
    } else {
      arr2.splice(ind, 1)
    }
  })
  return newArr.concat(arr2);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```


## Eloquenty Javascript

- A [Web Worker](http://eloquentjavascript.net/15_event.html#h_nX2hsbjECC) is a feature provided in browsers for implying thread based processes

## Prototypal JS
- constructors & the `new` keyword
- inheritence
- `prototype` & `__proto__`
- `obj instanceof Cls`
- polymorphism


## Some Useful jQuery Plugins

1. [js pattners](https://github.com/shichuan/javascript-patterns/tree/master/jquery-plugin-patterns)
2. [stackoverflow question](https://stackoverflow.com/questions/16672589/jquery-plugin-create-custom-event)
3. [article](http://keith-wood.name/pluginFramework.html)


## RegEX Functions

- `.test` will tell if your expression `/pattern/` exists in a string. Like
`/coding/.test('i love javascript coding')`
- use the `i` flag to make it case-insensitive like `/coding/i`
- use the `g` flag to make it a global search `/coding/g` 
- `.match` _without the `g` flag_ on a string will return a regex object with index value. Like `'javascript coding is fun.'.match(/coding/)` will return `11`
- but using the `.match` _with_ the `g` flag will return an array of matched values. Like. `'Javascript coding is fun, so is python coding.'.match(/coding/)` will return
`['coding']`
- 
