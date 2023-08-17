# GetColor

### Installing:
* Using **npm**:

    `npm i node-getcolor`
* Connect this module in code, indicate module

    `const colors = require('node-getcolor');`
### How to write random color selection?
```javascript
const colors = require('node-getcolor');
const randomColor = colors.getRandomColor();

// Get name of color
console.log(randomColor.name);
// Console: celadon


// You can get code of color
console.log(randomColor.code);
// Console: #7fffd4


// Or all data
console.log(`Name: ${randomColor.name} | Code: ${randomColor.code}`);
// Console: Name: aquamarine | Code: #7fffd4
```

### How to choose a specific color?
```javascript
const colors = require('node-getcolor');

// Color name must be written in lower case
console.log(colors.getHexColor('lime'));
// Console: #7fffd4

// You can get name of color by HEX-code
console.log(colors.getNameColor('#ffffff'));
// Console: White

// Get color in RGB format
console.log(colors.getRGBColor('red'));
// Console: [ 255, 0, 0, 1 ]
```


### [Donate link](https://yoomoney.ru/transfer/quickpay?requestId=353336363035363832365f62313031313938616234313235363132636364346436393865336436376637623663383937656131) | [My GitHub](https://github.com/byBenPuls) | [NPM](https://www.npmjs.com/package/node-getcolor)


[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=byBenPuls&repo=node-getcolor)](https://github.com/byBenPuls/node-getcolor)
