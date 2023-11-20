const lines = ['paiza', 'coding', 'programming'];

// const checkWords = lines.map(word => word.split(''));
// const wordCount = (checkWord) => {
//     let sum = 0;
//     checkWord.forEach(word => {
//         sum += (word = 1);
//     })
//     return sum;
// }
// console.log(Math.max(wordCount(checkWords[0]),wordCount(checkWords[1]),wordCount(checkWords[2])));


//chappi
const wordCount = word => word.length;
const maxWordCount = Math.max(...lines.map(wordCount));
console.log(maxWordCount);
