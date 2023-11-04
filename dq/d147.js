const lines = ['20','12 13 14 15'];
const smallArea = Number(lines[0]);
const hights = lines[1].split(' ').map(Number);
console.log(smallArea*(Math.min(...hights)));
