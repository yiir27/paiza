const lines = ['5 2 4']; 
//mycode + chappi
// const [persons, X, Y] = lines[0].split(' ').map(Number);
// const choice = (num, numX, numY) => {
//     let results = '';
//     for(let i = 1; i <= num; i++){
//         if (i % numX === 0 && i % numY === 0){
//             console.log('AB');
//         } else if (i % numX === 0) {
//             console.log('A');
//         } else if (i % numY === 0) {
//             console.log('B')
//         } else {
//             console.log('N');
//         }
//     }
//     return results;
// }
// console.log(choice(persons, X, Y));

//chappi
const [persons, X, Y] = lines[0].split(' ').map(Number);

const choice = (num, numX, numY) => 
    Array.from({ length: num }, (_, i) => 
        (i + 1) % numX === 0 && (i + 1) % numY === 0 ? 'AB' :
        (i + 1) % numX === 0 ? 'A' :
        (i + 1) % numY === 0 ? 'B' : 'N'
    );

console.log(choice(persons, X, Y));