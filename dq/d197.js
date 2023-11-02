const lines = [
    '1200'
];
//shogokuncode
//購入金額が1,000円以上か判定する関数
// const isPriceOver1000 = (price) => {
//     return price >= 1000;
// }

// //ポイント計算関数
// const calculatePoint = (price) => {
//     //三項演算子 condition ? exprIfTrue : exprIfFalse; 値が条件として使用される式 ? true : false;
//     const basePrice = isPriceOver1000(price) ? price : 0;
//     return Math.floor(basePrice * 0.1);
// }

// const purchasePrice = lines[0];

// console.log(calculatePoint(purchasePrice));

//shinjisancode1
//~~x(ビット演算子) = Math.floor(x)と同等の結果を返す場合が多い(ただしxが正の数の場合)
console.log(lines[0] >= 1000 ? ~~(lines[0] / 10) : 0);

//shinjisancode2
const POINT_RATES = [
    {rate: 0.1, lowerPurchasePrice: 1000},
    {rate: 0,   lowerPurchasePrice:    0},
]

const findPointRate = (price) => {
    return POINT_RATES.find(el => el.lowerPurchasePrice <= price).rate
}
const calculatePoint = (price, rate) => ~~(price * rate);

//実行
const purcasePrice = Number(lines[0]);
console.log(calculatePoint(purcasePrice,findPointRate(purcasePrice)));