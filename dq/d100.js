const lines = ['ruby_python-java-php_phe'];
//mycode NG?
// const word = lines[0];
// const checkWord = (word, symbol) => {
//     let sum = 0;
//     word.split('').forEach(char => {
//         if(char === symbol) {
//             sum += 1;
//         }
//     })
//     return sum;
// }
// const hyphenCount = checkWord(word, '-');
// const underscoreCount = checkWord(word, '_');

// if(hyphenCount <= underscoreCount) {
//     console.log(word.replace(/-/g,'_'));
// } else {
//     console.log(lines[0].replace(/_/g,'-'));
// }


//mycode 0K
const words = lines[0].split('');
const checkWord = (words, symbol) => {
    let sum = 0;
    words.forEach(word => {
        word === symbol ? sum += 1 : sum;
    })
    return sum;
}
checkWord(words, '-') < checkWord(words, '_') ? console.log(lines[0].replace(/-/g,'_')) :
checkWord(words, '-') === checkWord(words, '_') ? console.log(lines[0].replace(/-/g,'_')) : console.log(lines[0].replace(/_/g,'-'));
