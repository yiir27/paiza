const lines = ["1 1 1 1 6"];

// 文字列を分割し、文字列の配列に
const numbersArray = lines[0].split(' ').map(Number);
//配列を＋して合計数を出す
const totalnum = numbersArray.reduce((cumulativeTotal, currentValue) => cumulativeTotal + currentValue);
//合計数の下一桁を取り出す
const lastDigitAsString = totalnum.toString().slice(-1);
console.log(lastDigitAsString);
