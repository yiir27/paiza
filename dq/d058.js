const lines = ['1 1 1'];
const counts = lines[0].split(' ').map(Number);

//mycode
// const visitation = (count, word) => {
//     let str = '';
//     for(let i = 0; i < count; i++) {
//         str += word;
//     }
//     return str;
// }
// console.log(visitation(counts[0], 'A')+visitation(counts[1], 'B')+visitation(counts[2], 'A'));

//chappi
const repeatedA = 'A'.repeat(counts[0]);
const repeatedB = 'B'.repeat(counts[1]);
const repeatedC = 'A'.repeat(counts[2]);
console.log(repeatedA+repeatedB+repeatedC);