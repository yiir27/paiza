const lines= [
    '5 110 120',
    '110',
    '100',
    '120',
    '130',
    '105',
];

//N=日数 buyPrice:この値段以下だと買うという株価 sellPrice:この値段以上だと売るという株価
const [N, buyPrice, sellPrice] = lines[0].split(' ').map(Number);
//最後の日以外の株価
const stockPriceArray = lines.slice(1, -1).map(Number);
//最後の日
const lastDayStockPrice = parseInt(lines.slice(-1)[0]);

let holdings = 0;
let currentProfit = 0;

stockPriceArray.forEach((num) => {
    if (num <= buyPrice) {
        holdings++;
        currentProfit -= num;
    } else if (num >= sellPrice){
        currentProfit += holdings * num;
        holdings = 0;
    }
});

currentProfit += holdings * lastDayStockPrice;

console.log(currentProfit);

//shougokun
// const [days, lowerPriceThreshold, upperPriceThreshold] = lines[0].split(" ").map(Number);
// const stockPriceChanges = [...lines.slice(1).map(Number)];


// let profit = 0;
// let stock = 0;

// const calculateProfit = (price, lowerThreshold, upperThreshold, i, day) => {
//     if(price <= lowerThreshold) {
//         if(i !== day-1) {
//           profit -= price;
// ​
//           stock++;
//         }
//         else {
//             profit = profit + price * stock;
//         }
//     }
//     if(price >= upperThreshold) {
//         if(i !== day-1) {
//         profit += price * stock
//         stock = 0;
//         }
//         else {
//             profit += price * stock;
//         }
//     }
//     return profit;
// }

// const profits = stockPriceChanges.map((stockPrice, index) => {
//     return calculateProfit(stockPrice, lowerPriceThreshold, upperPriceThreshold, index, days);
// })

// // 出力
// console.log(profits.slice(-1)[0]);

//keiji
// N:日数 buyPrice:この値段以下だと買うという株価 sellPrice:この値段以上だと売るという株価
// const [N, buyPrice, sellPrice] = lines[0].split(' ').map(Number);
// const stockPriceArray = lines.slice(1, -1).map(Number); // 最後の日の株価は別に取り扱うので除外
// const lastDayStockPrice = parseInt(lines.slice(-1)[0]); // 最後の日の株価
// ​
// let stockCount = 0;  // 所持株数
// let currentProfit = 0;  // 現在の損益
// ​
// stockPriceArray.forEach((num) => {
//     if (num <= buyPrice) {  // 購入条件
//         stockCount++;
//         currentProfit -= num;
//     } else if (num >= sellPrice) {  // 売却条件
//         currentProfit += stockCount * num;
//         stockCount = 0;
//     }
// });
// ​
// // N日目に持っている株をすべて売る
// currentProfit += stockCount * lastDayStockPrice;
// ​
// console.log(currentProfit);
