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


