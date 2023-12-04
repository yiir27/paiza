const lines = ['100', '2', '5'];

//mycode
const [capital, price, risingPrice] = lines.map(Number);
const unitPrice = Math.floor(capital / price);
const stockPrice = unitPrice * price;
const totalProfit = unitPrice * risingPrice;
console.log(totalProfit - stockPrice);

//chappi
// const [capital, price, risingPrice] = lines.map(Number);
// console.log(Math.floor(capital / price) * (risingPrice - price));