const lines = [
    '5 18 1000',
    '12 21 3000'
]
//shougokun
// 二次元配列にする[ [ 5, 18, 1000 ], [ 12, 21, 3000 ] ]
// const array = lines.map((str) => str.split(' ').map(Number));
//{ width: 12, height: 21, price: 3000 }
// const sheet1 = {
//     width:  array[0][0],
//     height: array[0][1],
//     price:  array[0][2]
// }
// const sheet2 = {
//     width:  array[1][0],
//     height: array[1][1],
//     price:  array[1][2]
// }
// const comparePrice = (obj1, obj2) => {
//     let result1 = obj1.price / (obj1.width * obj1.height);
//     let result2 = obj2.price / (obj2.width * obj2.height);
//     if(result1 < result2) {
//         return Object.values(obj1).join(' ');
//     } else if (result1 > result2) {
//         return Object.values(obj2).join(' ');
//     } else {
//         return 'DRAW';
//     }
// }
// console.log(comparePrice(sheet1, sheet2));

suusan
const data = lines.map((str) => str.split(' ').map(Number));
面積あたりの価格を比較する
const comparePrice = matrix => {
    const seatDataA = matrix[0][2] / matrix[0][1] / matrix[0][0];
    const seatDataB = matrix[1][2] / matrix[1][1] / matrix[1][0];
    if(seatDataA === seatDataB) {
        console.log('DRAW');
    } else if (seatDataA < seatDataB) {
        console.log(matrix[0].join(' '));
    } else {
        console.log(matrix[1].join(' '));
    }
};
comparePrice(data);

//shinnjisan
//closeコードが発生したときに起こる
// ...
// reader.on('close',() => {
//     const sheetData = lines.map(el => el.split(' ').map(Number))
//     const sheets = new Sheets(sheetData)
//     sheets.showMinUnitPriceOne()
// });
// class Sheet {
//     constructor([x, y, price]) {
//         this._x = x
//         this._y = y
//         this._price = price
//     }
//     // getterは使うべきではない、という話もあるので、初めは全て普通のメソッドで書くことをお勧めしておきます。
//     get unitPrice() {
//         return this._price/(this.x * this._y)
//     }

//     get raw() {
//         return `${this._x} ${this._y} ${this._price}` 
//     }
// }
// class Sheets {
//     constructor(sheetData) {
//         this._sheets = sheetData.map(sheetDatum => new Sheet(sheetDatum))
//     }
//     get unitPrices() {
//         return this._sheets.map(sheet => sheet.unitPrice)
//     }
//     get minUnitPrice() {
//         return Math.min(...this.unitPrice)
//     }
//     get filtered() {
//         return this._sheets.filter(sheet => sheet.unitPrice === this.minUnitPrice)
//     }
//     get result() {
//         return this.filtered.length === 1 ? this.filtered[0].raw : "DRAW"
//     }
//     showMinUnitPriceOne() {
//         console.log(this.result)
//     }
// }