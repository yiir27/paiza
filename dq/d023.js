const lines = ['PAIZA'];
const separateWord = lines[0].split('');
const result = (separateWord) => {
    let sum = 0;
    separateWord.forEach((str) => {
    str === 'A' ?  sum += 1 : sum;
});
return sum;
}
console.log(result(separateWord));
