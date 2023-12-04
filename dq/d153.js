const lines = [200, 100, 300];

const comparisonNumber = lines[0].split(' ').map(Number);
const MAX = Math.max(...comparisonNumber);
const Min = Math.min(...comparisonNumber);
let result = 0;
comparisonNumber.forEach(num => {
   (MAX === num && Min === num) || (MAX !== num && Min !== num) ? result += num : 0;
})
console.log(result);
