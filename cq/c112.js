const lines = [
'3',
'7 5 12',
'10 6 20',
'12 3 8'
]
//shinnjisan
// const times = lines.slice(1).map(days => days.split(' ').map(Number));
// const spend = ([leave, flight, arrive]) => leave + flight + 24 - arrive;
// //...arrayは配列内の要素を展開
// const getShortest = array => Math.min(...array.map(spend));
// const getLongest = array => Math.max(...array.map(spend));
// console.log(getShortest(times));
// console.log(getLongest(times));

//shougokun
// const times = lines.slice(1).map(el => el.split(' ').map(Number));
// const getTime = (array) => array.map((ele) => {
//     let result = 0;
//     const [leave, flight, arrive] = [...ele];
//     return leave + flight + 24 - arrive;
// });

// const checkTime = (array) => {
//     console.log(Math.min(...array));
//     console.log(Math.max(...array));
// }

// checkTime(getTime(times));

//suusan
const times = lines.slice(1).map(el => el.split(' ').map(Number));
const clacDayTime = matrix => matrix.map((array) => array[0] + array[1] + 24 - array[2]);
const result = clacDayTime(times);

console.log(Math.min(...result));
console.log(Math.max(...result));