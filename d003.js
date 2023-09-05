const lines = [
    '4'
];
// //shogosancode
// const calculateMultiple = (n, number) => {
//     //mapで全要素に与えられた数字を掛け合わせて新しく配列作成
//     const newArray = numbers.map((value) => value * n);
//     //joinを使うと配列の全要素をスペースをあけた連結した文字列にできる
//     return newArray.join(' ');
// }

// const inputNum = lines[0];
// const array = [1,2,3,4,5,6,7,8,9];
// console.log(calculateMultiple(inputNum,array));

// //suusancode
// const n = lines[0];
// const timesResult = [];
// for(let i = 0; i <= 9; i++) {
//     timesResult.push(n * i);
// }
// console.log(timesResult.join(' '));
// // 関数化
// function calculateTimesResult(n) {
//     const timesResult = [];
//     for(let i = 0; i <= 9; i++) {
//         timesResult.push(n * i);
//     }
//     return timesResult;
// }
// const n = lines[0];
// const result = calculateTimesResult(n);
// console.log(result.join(' '));

// shinnjisancode1
//_は必要のない第１引数を受け止めるために/+は文字列を数値に強制的に変換
console.log([...Array(9)].map((_, i)=> +lines[0]*(i+1)).join(' '));
// shinnjisancode２
//{length: 9}は連番の生成
console.log(Array.from({length: 9},(_ ,i) => +lines[0] * (i + 1).join(" ")));
// shinnjisancode３
//定数
const NUM_REPRATS = 9;
const SEPERATOR = ' ';
//関数
const generateArray = (n, times) => new Array(times).fill(n);
const multiplyWithIndex = (Number, index) => Number * (index + 1);
const convertArray2Str = (numbers, seperator) => numbers.join(seperator);;
//実行
const numbers = generateArray(+lines[0],NUM_REPRATS);
const multiplied = numbers.map(multiplyWithIndex);
const result = convertArray2Str(multiplied, SEPERATOR);

console.log(result);