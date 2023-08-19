const colors = require("node-getcolor");
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
