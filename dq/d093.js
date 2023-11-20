const lines = ['4444'];

//mycode error
// const numbers = lines[0].split('').map(Number);
// const firstNumber = numbers[0];
// let correctNumber = 0;
// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] === firstNumber) {
//         correctNumber += 1;
//     }
// }
// correctNumber === 4 ? console.log(Number(lines[0])) : console.log('No');

//chappi
const numbers = lines[0].split('').map(Number);
const isFirstNumberSame  = numbers.every(num => num === numbers[0]);
console.log(isFirstNumberSame ? Number(lines[0]) : 'No');
