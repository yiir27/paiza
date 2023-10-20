const lines = ['3 4','2','1'];

// const [ , area] = lines[0].split(' ').map(Number);
// const widthArr = lines.slice(1).map(Number);
const [ , area, ...widthArr] = lines.join(' ').split(' ').map(Number);
const culcurate = (a, arr) => {
    let sum = 0;
    arr.forEach((num) => {
        sum += (a - num);
    })
    return sum;
}
console.log(area*(area + culcurate(area, widthArr)));
// console.log(widthArr);""