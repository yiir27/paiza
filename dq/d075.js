const lines = ['1','3','2','5'];

const setArray = lines.map(Number);
const range = [1,2,3,4,5];

//出力４
const missingNumber = range.find(num => !setArray.includes(num));
console.log(missingNumber);

//出力[4]
// const missingNumber = range.find(num => !setArray.includes(num));
// console.log(missingNumber);