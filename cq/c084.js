const lines = [
    'paiza'
];

//suusancode
// const text = lines[0];
// const symbol = "+";
// const wordCount = String(text).length;

// const flame = symbol.repeat(wordCount + 2);
// const squareFlame = `${flame}\n${symbol}${text}${symbol}\n${flame}`;

// console.log(squareFlame);

//shogokuncode
// const createBorder = (text) => {
//     const borderLength = text.length + 2;
//     const border = "+".repeat(borderLength);
//     const symbol = "+";
//     return `${border}\n${symbol}${text}${symbol}\n${border}`
// }

// const text = lines[0];
// console.log(createBorder(text));

//shinjisancode
//定数
const SYMBOL = "+";
const SORROUND_LAYERS = 1;
//関数
const decorateCharsRow = (symbol, chars, layers) =>
symbol.repeat(layers) + chars + symbol.repeat(layers);
const decorateOutsideRow = (symbol, chars, layers) =>
symbol.repeat(chars.length + 2 * layers);
const isMiddleRow = (i, layers) => i === layers;
const generateEachRow = (symbol, chars) => layers =>
(_, i) => isMiddleRow(i, layers)
? decorateCharsRow(symbol, chars, layers) : decorateOutsideRow(symbol, chars, layers);
const sorround = (func, layers) => [...Array(2*layers + 1)].map(func(layers)).join("\n");

//実行
const generateEachRowByPlus = generateEachRow(SYMBOL, lines[0]);
console.log(sorround(generateEachRowByPlus,SORROUND_LAYERS));