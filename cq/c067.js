const lines = ["3 44", "4 2 6"]

//値を一つ一つ取り出せるようにする、数値に変換する
const [lineCountAndDecimalNumber, ...places] = lines;
const [lineCount, decimalNumber] = lineCountAndDecimalNumber.split(' ').map(Number);
const placeArray = places.map(Number);

//２進数に変換、値を一つ一つに分けて、数値に変換、配列の順番を逆にする
const convertToBinary = decimalNumber => decimalNumber.toString(2).split('').map(Number).reverse();
//対応した値を探す関数
const getlocationValue = (position,binaryArray) => position.map((value)=>{
     return binaryArray[value - 1];
  });

getlocationValue(placeArray,convertToBinary(decimalNumber)).forEach(item => console.log(item));

//shogokun
  // 分割代入で10進数と確認するbit情報を取り出す
  // 10進数を2進数に変換し、1文字ずつ分割して配列に入れる
  // bitは右端が0番目なので、配列のindex(左が0番目)と対応させるため配列の格納順を逆にする
  // 例えば4番目の桁は3bit目なので、配列のindex3の要素の数字を取得し出力させる。これをループの中でおこなう
  
//suusan
//値を一つ一つ取り出せるようにする、数値に変換する
// const [lineCountAndDecimalNumber,...places] = lines; 
// const [lineCount,decimalNumber] = lineCountAndDecimalNumber.split(' ').map(Number);
// const placeArray = places.map(Number);
// ​
// //２進数に変換、値を一つ一つに分けて、数値に変換、配列の順番を逆にする
// const convertToBinary = decimalNumber => decimalNumber.toString(2).split('').map(Number).reverse();

// //対応した値を探す関数
// const getlocationValue = (position,binaryArray) => position.map((value)=>{
// 　　 return binaryArray[value - 1];
// });
// ​
// getlocationValue(placeArray,convertToBinary(decimalNumber)).forEach(item => console.log(item));

//keiji

// 整数を2進数の文字列に変換する関数
// const toBinary = num => num.toString(2);
// ​
// // 与えられた2進数の文字列の右から指定された位置のビットを取得する関数
// const getNthBitFromRight = (binaryNumber, positionsFromRight) => {
//     return positionsFromRight.map(num => parseInt(binaryNumber[binaryNumber.length - num]));
// };
// ​
// ​
// ​
// // ーーーーーー↓出力↓ーーーーーー
// ​
// const [N, X] = lines[0].split(" ").map(Number);
// ​
// // 右から何番目をチェックしたいかを示す配列を作成
// const positionsFromRight = lines.slice(1).map(Number);
// ​
// // 指定されたビット位置の値を取得し、結果を改行で区切って出力
// console.log(getNthBitFromRight(toBinary(X), positionsFromRight).join('\n'));

//tubasasan
// <?php
// list($rength, $number) = explode(" ", trim(fgets(STDIN)));
// ​
// // 位置を読み込む
// $positions = [];
// for ($i = 0; $i < $rength; $i++) {
//     $positions[] = intval(trim(fgets(STDIN)));
// }
// ​
// // 数値を二進数に変換
// $binary = decbin($number);
// ​
// // 各指定位置のビットを一度に出力
// foreach ($positions as $pos) {
//     $bit = ($binary[strlen($binary) - $pos] === '1') ? 1 : 0;
//     echo $bit . PHP_EOL;
// }
// ​
// ?>