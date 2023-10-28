const lines = ['5', '8', '19', '25', '31'];

const days = lines.map(Number);
const intervalArray = [];
for(let i = 0; i < days.length; i++) {
    intervalArray.push(days[i] - days[i-1]);
}
const result = intervalArray.slice(1,5).join('\n');

console.log(result); 
