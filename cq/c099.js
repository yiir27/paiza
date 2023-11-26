// const lines = ['3 4','2','1'];

// // const [ , area] = lines[0].split(' ').map(Number);
// // const widthArr = lines.slice(1).map(Number);
// const [ , area, ...widthArr] = lines.join(' ').split(' ').map(Number);
// const culcurate = (a, arr) => {
//     let sum = 0;
//     arr.forEach((num) => {
//         sum += (a - num);
//     })
//     return sum;
// }
// console.log(area*(area + culcurate(area, widthArr)));
// // console.log(widthArr);""

// //suusan
//  //折り紙の枚数と、一辺の長さ
//  const[totalOrigami,sideLength] = lines[0].split(' ').map(Number);
//  //残りの数字を足すと、重なる部分になる
// const overlapArea = lines.slice(1).map(Number).reduce((sum,element) => sum + element,0);
  
//  //計算式
// const getSize = (totalOrigami,sideLength,overlapArea) => sideLength * (totalOrigami * sideLength - overlapArea);
    
// console.log(getSize(totalOrigami,sideLength,overlapArea));

// //shougokun
// const [paperCount, length] = lines[0].split(" ").map(Number);
// const dataArray = lines.slice(1).map(Number);

// // 重なる長さを求める関数
// const calc = array => array.reduce((acc,  curr) => acc + curr, 0);

// // 面積計算関数
// const calcArea = (count, len, datas) => (count * len - calc(dataArray) ) * len;

// // 出力
// console.log(calcArea(paperCount, length, dataArray));