const lines = ['tamago'];
// const removeChars = (str, charsToRemove) => {
//     const regex = new RegExp(`[${charsToRemove}]`, 'g');
//     return str.replace(regex, '');
// }
// console.log(removeChars(lines[0], 'aiueo'));

// const removeChars = (str, charsToRemove) => {
//     return charsToRemove.split('').reduce((acc, charsToRemove)=>{
//         return acc.split(charsToRemove).join('');
//     },str);
// }
// console.log(removeChars(lines[0], 'aiueo'));

const removeChars = (str, charsToRemove) => {
    return str.split('').filter(char => !charsToRemove.includes(char)).join('');
}
console.log(removeChars(lines[0], 'aiueo'));
