//suusan
//ハイフンをとって、一桁の値に分け、数値にする
    //０の場合は１２、それ以外は＋２を加えて、２倍する
    //上記の計算式で処理した新しい配列を作る
    //新しい配列の合計を出す
    
//     const phoneNumberArray = number => number.replace(/-/g, '').split('').map(Number);
//     // [ 9, 3, 1, 5, 3, 5, 7, 3, 9, 8]
    
//     const calculateDistances = array => array.map((num)=>{
//       return  num === 0 ? 12 *2 : (num + 2) * 2;
//     });
    
//     const totalDistance = array => array.reduce((sum,num)=> sum + num);
    
//   console.log(totalDistances(calculateDistances(phoneNumberArray(lines[0]))));
  
//keiji
//各数字とその数字からフックまでの距離のオブジェクトを作成し返す関数
// const getDistanceObj = () => {
//     obj = { 0: 12 };
//     for (let i = 1; i < 10; i++) {
//         obj[i] = i + 2;
//     }
//     return obj;
// }
// ​
// // 入力された電話番号の文字列から - を除き一文字ずつ要素にした配列を作成しその配列の要素を数値に変換したやつを返す関数
// const getPhoneNumberArray = (str) => str.replace(/-/g, '').split('').map(Number);
// ​
// ​
// // 総距離を計算して返す関数
// const getTotalDistance = (array, distanceObj) => array.reduce((acc, num) => acc + distanceObj[num] * 2, 0);
// ​
// ​
// ​
// // ーーーーーーーーーーー↓出力↓ーーーーーーーーーーーー
// console.log(getTotalDistance(getPhoneNumberArray(lines[0]), getDistanceObj()));

//shogokun
// const telephoneNumber = lines[0].replace(/-/g, "").split("").map(Number);
// ​
//     const numToDistance = (num) => {
//         if(num === 1) return 3 * 2;
//         if(num === 2) return 4 * 2;
//         if(num === 3) return 5 * 2;
//         if(num === 4) return 6 * 2;
//         if(num === 5) return 7 * 2;
//         if(num === 6) return 8 * 2;
//         if(num === 7) return 9 * 2;
//         if(num === 8) return 10 * 2;
//         if(num === 9) return 11 * 2;
//         if(num === 0) return 12 * 2;
//     }
    
//     const distanceArray = telephoneNumber.map(number => numToDistance(number))
    
//     const totalDistance = distanceArray.reduce((acc, curr) => acc + curr, 0);
//     console.log(totalDistance)