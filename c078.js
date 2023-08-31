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