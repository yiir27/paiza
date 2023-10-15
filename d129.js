const lines = ['100 8 10'];
// mycode
// const [price, taxA, taxB] = lines[0].split(' ').map(Number);
// const tax = price * (taxA/100);
// const newtax = price * (taxB/100);
// console.log(newtax - tax)

//chappiii
const [price, taxA, taxB] = lines[0].split(' ').map(Number);
console.log(price * (taxB - taxA) / 100);
