
const lines = ['11111111111']
const numberArr = lines[0].split('').map(Number);
const count = (numberArr) => {
    let sum = 0;
    numberArr.forEach((num) => {
        sum += num;
    })
    return sum;
}
count(numberArr) >= 11 ? console.log('OK') : console.log (11 - count(numberArr));
