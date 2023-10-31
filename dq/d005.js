const lines = ['5 10']
const [startNum, step] = lines[0].split(' ').map(Number);
let currentValue = startNum;
let results = [];
for(let i = 0; i < 10; i++){
    results.push(currentValue);
    currentValue += step;
}
console.log(results.join(' '));