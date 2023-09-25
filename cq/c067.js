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