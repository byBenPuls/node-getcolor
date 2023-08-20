
class Color {constructor(name, code) {this.name = name; this.code = code;}}

const colors = [
    new Color('brightred', '#E74C3C'),
    new Color('soothingpurple', '#9B59B6'),
    new Color('skyblue', '#5DADE2'),
    new Color('leafygreen', '#48C9B0'),
    new Color('sunkissedyellow', '#F4D03F'),
    new Color('groovygray', '#D7DBDD'),
    new Color('white', '#FFFFFF'),
    new Color('red', '#FF0000'),
    new Color('yellow', '#ffef00'),
    new Color('black', '#000000'),
    new Color('yandex', '#FFCC00'),
    new Color('air-force-blue', '#5d8aa8'),
    new Color('amethyst', '#9966cc'),
    new Color('android-green', '#a4c639'),
    new Color('anti-flash-white', '#f2f3f4'),
    new Color('ao', '#008000'),
    new Color('apple-green', '#8db600'),
    new Color('apricot', '#fbceb1'),
    new Color('army-green', '#4b5320'),
    new Color('aquamarine', '#7fffd4'),
    new Color('aqua', '#00ffff'),
    new Color('auburn', '#a52a2a'),
    new Color('aureolin', '#fdee00'),
    new Color('awesome', '#ff2052'),
    new Color('azure', '#007fff'),
    new Color('blue', '#0000ff'),
    new Color('blue-green', '#0d98ba'),
    new Color('bright-green', '#66ff00'),
    new Color('bright-pink', '#ff007f'),
    new Color('bright-turquoise', '#08e8de'),
    new Color('brown', '#a52a2a'),
    new Color('cg-blue', '#007aa5'),
    new Color('cg-red', '#e03c31'),
    new Color('cadet', '#536872'),
    new Color('cadmium-green', '#006b3c'),
    new Color('cadmium-orange', '#ed872d'),
    new Color('cadmium-red', '#e30022'),
    new Color('cadmium-yellow', '#fff600'),
    new Color('canary-yellow', '#ffef00'),
    new Color('capri', '#00bfff'),
    new Color('carrot-orange', '#ed9121'),
    new Color('celadon', '#ace1af'),
    new Color('charcoal', '#36454f')
];

const nameColors = require('./resources/names.json');
const hexColors = require('./resources/hex.json');
const rgbColor = require('./resources/rgb.json');

exports.getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
};
exports.getHexColor = (colour) => {
    const hex = colour.toLowerCase();
    return nameColors[hex];
};
exports.getNameColor = (colour) => {
    const name = colour.toLowerCase();
    return hexColors[name];
};

exports.getRGBColor = (colour) => {
    const rgb = colour.toLowerCase();
    return rgbColor[rgb];
};
exports.colors = colors;


// created by Ben Puls
// links: https://www.npmjs.com/package/node-getcolor | https://github.com/byBenPuls/node-getcolor
// testing
