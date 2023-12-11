const lines = ['pXaXiYzYaY'];

const magicWord = lines[0].split('');
//forEach
// let result = '';
// const decoding = magicWord.forEach((word, index) => {
//     if(index % 2 === 0) {
//         result += word;
//     }
// })
// console.log(result);

// filter
const decoding = magicWord.filter(( _, index) => index % 2 === 0);
console.log(decoding.join(''));