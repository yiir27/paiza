const lines = ['1 7'];

const number = lines[0].split(' ').map(Number);
let sum = 0;
number.forEach(num => sum += num);
sum < 16 ? console.log('HIT') : console.log('STAND');