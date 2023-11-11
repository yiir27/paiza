const lines = ['4','y n','n y','n n','y y'];

//suusan
// const quizData = lines.slice(1);
// const checkQuizData = stringArray => {
//     return stringArray
//     .map((str, index) => {
//         const [first, second] = str.split(' ');
//         return first === 'y' && second === 'y' ? null : index + 1;
//     })
//     .filter(index => index !== null);
// }
// const result = checkQuizData(quizData);
// console.log(result.length);
// result.forEach(item => console.log(item));

//mycode すーさんコード参照
const answers = lines.map(el=>el.split(' '));
const separates = answers.slice(1);
const quizData = separates.map((separate, index) => {
    return separate.join('') !== 'yy' ? index + 1 : null;
}).filter(index => index !== null);

console.log(quizData.length);
quizData.forEach(item => console.log(item));

//maycode 結果NG
// const answers = lines.map(el=>el.split(' '));
// const questions = Number(lines[0]);
// const separates = answers.slice(1);
// let checkanswers = [];
// for(let i = 0; i < separates.length; i++ ){
//     checkanswers.push(separates[i].join(''));
// }
// const result = (checkanswers) => {
//     let sum = 0;
//     checkanswers.forEach((answer) => {
//         if(answer === 'yy'){
//             sum;
//         } else {
//             sum += 1;
//         }
//     })
//     return sum;
// }

// const number = result(checkanswers);
// let output = '';
// for(let i = 1; i<= number; i++){
//     output += i;
//     if (i < number) {
//         output += '\n';
//     }
// }
// console.log(result(checkanswers));
// console.log(output)