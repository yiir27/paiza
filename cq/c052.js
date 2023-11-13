//mycode
 // 1行目の入力から解像度を読み取る
 const [H, W] = lines[0].split(' ').map(Number);
 // 2行目の入力からスクロール距離を読み取る
 const [dy, dx] = lines[1].split(' ').map(Number);
 // 計算する
 const pixelsToDraw = Math.abs(dx * H) + Math.abs(dy * W) - Math.abs(dx * dy);
 // 結果を出力する
 console.log(pixelsToDraw); 


//keiji
// const [[height, width], [dy, dx]] = lines.map(str => str.split(" ").map(Number));
// console.log((width * Math.abs(dy)) + (height * Math.abs(dx)) - (Math.abs(dx) * Math.abs(dy)));

//値を一つ一つに分けて、数値にする
 //（絶対値に変換して）計算式に当てはめる
  
//suusan
//  　　const newArray = array => array.map((str) =>{
//     return str.split(' ').map(Number);
//  });
 
// const calculatePixelCount = arrays => {
//   const heightAndWidth = arrays[0];
//   const [height, width] = heightAndWidth;
//   const yx = arrays[1];
//   const [y, x] = yx;
  
//  return height * Math.abs(x) + width * Math.abs(y) -  Math.abs(y) * Math.abs(x);
// };

// console.log(calculatePixelCount(newArray(lines)));
// });
// ​
// //リファクタ後
// const parseInput = inputArray => {
//  return inputArray.map(str => str.split(' ').map(Number));
// };
// ​
// const calculatePixelCount = arrays => {
//  const [heightAndWidth, yx] = arrays;
//  const [height, width] = heightAndWidth;
//  const [y, x] = yx;
// ​
//  return height * Math.abs(x) + width * Math.abs(y) - Math.abs(y) * Math.abs(x);
// };
// ​
// const parsedArrays = parseInput(lines);
// const pixelCount = calculatePixelCount(parsedArrays);
// ​
// console.log(pixelCount);

//shogokunn
// flatmapの書き方でリファクタしてもらうと↓
    // const [H, W, dy, dx] = lines.flatMap(graphicData => graphicData.split(" ").map(Number));
    // const [H, W, dy, dx] = [...lines[0].split(" ").map(Number), ...lines[1].split(" ").map(Number)]
    
    // const calculateRedrawPixels = (h, w, y, x) => {
    //     return h * Math.abs(x) + w * Math.abs(y) - Math.abs(x) * Math.abs(y);
    // }
    // console.log(calculateRedrawPixels(H, W, dy, dx));

//tubasasan
// <?php
// // 画面の解像度とスクロール距離を取得
// list($H, $W) = explode(" ", trim(fgets(STDIN)));
// list($dy, $dx) = explode(" ", trim(fgets(STDIN)));
// ​
// // 全体の面積から共通部分をひく
// $draw_pixels = ($H * $W) - (($H - abs($dy)) * ($W - abs($dx)));
// ​
// // 結果を出力
// echo $draw_pixels . PHP_EOL;
// ?>