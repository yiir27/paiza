const lines = ['6','4 5 2 3 6 1']

// for文
// const dice = Number(lines[0]);
// const diceAllNumber = lines[1].split(' ').map(Number);
// const calculation = (a, b) => {
//     let sum = 0;
//     for(let i = 0; i < a; i++){
//         //b[i]はbのi番目
//         sum += b[i];
//     }
//     return sum;
// }
// console.log(calculation(dice, diceAllNumber));

// forEach文
const dice = Number(lines[0]);
const diceAllNumber = lines[1].split(' ').map(Number);
const calculate = (a, b) => {
    let sum = 0;
    b.forEach((diceValue) => {
        sum += diceValue;
    });
    return sum;
}
console.log(calculate(dice, diceAllNumber));
