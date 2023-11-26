// //suusan
// // ['1 1024', '11 2048', '21 4196' ] 
// const receiptData = lines.slice(1);
// ​
// // 日付と支払いを map して、各データごとのポイントを計算し、配列に格納
// // この時点ではデータは文字列型なので、支払いを計算に使用する際には Number() で数値に変換する
// //（しなくてもできてしまうが、明示的な変換が推奨されます）
// const calcPoint = (array) =>
//   array.map((data) => {
//     const [day, payment] = data.split(' ');
// ​
//     if (day.includes('5')) {
//       return Math.floor(Number(payment) * 0.05);
//     } else if (day.includes('3')) {
//       return Math.floor(Number(payment) * 0.03);
//     } else {
//       return Math.floor(Number(payment) * 0.01);
//     }
//   });
// ​
// // 配列の要素を合計
// const allPoints = array => array.reduce((sum, element) => sum + element, 0);
// ​
// console.log(allPoints(calcPoint(receiptData)));

// //shougokun
// const getPoint = (receipts) => receipts.map((data) => {
//     let rate = 0.01;
//     if (data[0].includes("3")) {
//         rate = 0.03;
//     } else if (data[0].includes("5")) {
//         rate = 0.05;
//     }

//     return Math.floor(rate * data[1]);
// });

// const receiptsData = lines.slice(1).map((i) => i.split(" "));
// console.log(getPoint(receiptsData).reduce((acc, curr) => acc + curr),0);

// //sakajirisennsei
// // ---------------------
// // クラス定義
// // ---------------------
    
// // レシートクラスの定義
// class Receipt {
//     constructor(date, purchasePrice){
//         this.date = date
//         this.purchasePrice = purchasePrice
//     }
    
//     static fromLine(line) {
//         const [date, purchasePrice] = line.split(' ').map(Number);
//         return new Receipt(date, purchasePrice);
//     }
// }
// ​
// // ポイントルールクラスの定義
// class PointRule {
//     constructor(name, condition, ratio){
//         this.name = name
//         this.condition = condition
//         this.ratio = ratio
//     }
// ​
//     get decimalRatio(){
//         return this.ratio / 100
//     }
    
//     appliesTo(date) {
//         return this.condition(date);
//     }
// ​
//     static dateIncludesDigit(date, digit) {
//         return date % 10 === digit || Math.floor(date / 10) === digit;
//     }
// }
// ​
// // ---------------------
// // グローバル変数・関数
// // ---------------------
    
// // ポイント付与条件をまとめたオブジェクト
// const pointRules = [
//     new PointRule('3がつく日', date => PointRule.dateIncludesDigit(date, 3), 3),
//     new PointRule('5がつく日', date => PointRule.dateIncludesDigit(date, 5), 5),
//     new PointRule('通常時', () => true, 1)
// ]
// ​
// // ポイントを計算
// const calculatePointsForReceipt = ({date, purchasePrice}) => {
//     const pointRule = pointRules.find(rule => rule.appliesTo(date))
//     return Math.floor(purchasePrice * pointRule.decimalRatio)
// }
// ​
// // レシートを基にポイントを集計
// const tallyPoint = receipts => receipts.reduce((totalPoints, receipt) => (
//     totalPoints + calculatePointsForReceipt(receipt)
// ), 0)
// ​
// // ---------------------
// // メイン処理
// // ---------------------
    
// // receipts: {date: number, purchasePrice: number}[]
// const receipts = lines.slice(1).map(Receipt.fromLine)
// const totalPoints = tallyPoint(receipts)
// ​
// console.log(totalPoints)