// //shougokun
//   // oxと数字を照らし合わせたい
//   // パネルの状態の配列と、得点の配列を作成する
//   // パネルと得点、それぞれ1文字ずつの配列にする
//   // mapの中で1文字ずつパネルのステータスを見て、oなら得点、xなら0点を返す
//   const [rows, columns] = lines[0].split(" ").map(Number);
//   const panelStatusArray = lines.slice(1,rows + 1).join("").split("");
//   const pointArray = lines.slice(rows + 1).flatMap((str) => str.split(" ").map(Number));
  
//   // 関数
//   const getPointArray = (statuses, points) => points.map((point, i) => statuses[i] === "o" ? point : 0);
// ​
//   // 出力
//   console.log(getPointArray(panelStatusArray, pointArray).reduce((acc, curr) => acc + curr, 0));

//   //suusan
//   　　//パネルの縦の長さ
//   const [H, W] = lines[0].split(' ').map(Number);
//   //oxのデータ
//   const hitOrMiss = (data,length) => data.slice(1,length + 1);
//   //得点のデータ
//   const point = (data,length) => data.slice(length + 1, length * 2 +1);
//   //oxを['o', 'x', 'o', 'o'......]フラットにする
//   const flatDataA =   array => array.map((str) => str.split('')).flat(Infinity);
//   //得点をフラットにする
//   const flatDataB =   array => array.map((str) => str.split(' ')).flat(Infinity);
 
//   //二つの配列を比べる
//   const countPoint = (array1, array2) => array2.filter((num,index) => array1[index] === 'o');
  
//   //結果
//  const resultArray = countPoint(flatDataA(hitOrMiss(lines,H)),flatDataB(point(lines,H))).map(Number);
//  console.log(resultArray.reduce((acc, curr) => acc + curr, 0));
