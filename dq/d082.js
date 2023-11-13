const lines = ['paiza','application'];

//mycode
// const firstCheckWord = lines[0].slice(-1);
// const SecondCheckWord = lines[1].slice(0,1);
// const LastLetter = lines[1].slice(-1);
// if(firstCheckWord === SecondCheckWord){
//     LastLetter === 'n' ? console.log('NG') : console.log('OK');
// } else {
//     console.log('NG');
// }

//chappi
const firstCheckWord = lines[0].slice(-1);
const secondCheckWord = lines[1].slice(0,1);
const lastLetter = lines[1].slice(-1);
console.log(firstCheckWord === secondCheckWord && lastLetter !== 'n' ? 'OK' : 'NG');