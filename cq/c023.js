const lines= [
    '1 2 3 4 5 6',
    '3',
    '1 5 4 2 3 6',
    '4 6 4',
    '9 6 2 7 1 5',
    '32 9 87 33 41 60',
];

const winnigNumbers = lines[0].split(" ").map(Number);
//購入したくじの数をparseIntで文字列から整数にしてくれる
const N = parseInt(lines[1]);
//配列の２段目と３段目の間をスライスそれ以降を文字列から数字に変換
const selectedNumbers = lines.slice(2).map(str => str.split(" ").map(Number));
for(let i = 0; i < N; i++ ){
    const ticket = selectedNumbers[i];
    let matchCount = 0;
    ticket.forEach((num) => {
        //includes->特定の要素が配列に含まれているかどうかを true または false で返します。
        if(winnigNumbers.includes(num)){
            matchCount++
        }
    })
    console.log(matchCount)
};

//shinnjiさんコード
// const count = (lots, winNo) => lots.map(lot => 
//     lot.reduce((a, n) => a + winNo.includes(n),0));

// const [winNo,, ...lots] = lines.map(el => el.split(" ").map(Number));
// console.log(count(lots, winNo).join("\n"));

// //suusan
// // [ 1, 2, 3, 4, 5, 6 ]
// const winningNumbers = lines[0].split(' ').map(Number);
    
// // [ [ 1, 5, 4, 2, 3, 6 ], [ 9, 6, 2, 7, 1, 5 ]...
// const userSelectedNumbers = lines.slice(2).map(str => str.split(' ').map(Number));

// //配列を２つ渡して、値が含まれているチェック、trueかfalseにして返す
// // [ [ true, true, true, true, true, true ]...
// const isWinningNumber = (matrix,winningNumbers) => matrix.map((subarray) => 
//     subarray.map((num) => 
//        winningNumbers.includes(num)
//     )
// );

// //trueとfalseの数を数える
// //[6,4,0]
// const calculateWinningCount = (matrix) => matrix.map((subarray) =>{
//     const trueCount = subarray.filter((boolean) => boolean === true).length;
// return trueCount;
// });

// //実行
// const result = calculateWinningCount(isWinningNumber(userSelectedNumbers,winningNumbers));
// result.forEach((item) => console.log(item));

// //shougokun
//   // [1, 2, 3, 4, 5, 6]
//   const winningNumbers = lines[0].split(" ").map(Number);
//   // [ [1, 5, 4, 2, 3, 6], [9, 6, 2, 7, 1, 5], [32, 9, 87, 33, 41, 60] ]
//   const paiza6Lotteries = lines.slice(2).map((lotter)=> lotter.split(" ").map(Number));
//   let winningCountArray = [];
  
//   const checkWinNumber = (winNums, lotteries) => {
//       lotteries.forEach((winNums, lotteries) => {
//           // 配列同士の共通する要素だけ取り出してwinningCountArrayに入れる
//           winningCountArray = winNums.filter(lotteries => winningNumbers.indexOf(lotteries) !== -1);
//           console.log(winningCountArray.length);
//       });
//   };
  
//   checkWinNumber(winningNumbers, paiza6Lotteries);

//   //keiji
//   // 当選番号を取得し、数値の配列に変換
// const winNums = lines[0].split(' ').map(Number);
// ​
// // 購入したくじの数（N）とくじの数字を取得
// const N = parseInt(lines[1]);
// const boughtTickets = lines.slice(2).map(str => str.split(' ').map(Number));
// ​
// // 各くじについて、当選番号と一致する数字の数を求める
// for (let i = 0; i < N; i++) {
//     const ticket = boughtTickets[i];
//     let matchCount = 0;
//     ticket.forEach(num => {
//         if (winNums.includes(num)) {
//             matchCount++;
//         }
//     })
//     console.log(matchCount);
// }
