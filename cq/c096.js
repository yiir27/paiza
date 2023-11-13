const lines= [
    '2',
    '16 19',
    '14 17',
]

// const member = lines[0];
// const dayArray
// //全員の共通の休みの日を表す配列を初期化
// //keyメゾット新しい配列の次の要素に順にアクセスできるもの
// let commonDays = [...Array(31).key()].map(idx => idx + 1);


// console.log(commonDays);

//shougokun
// 休みが取れる最初と最後の日から連続した配列を作る、メンバー全員分を一次元配列にいれる
  // 一次元配列 [22, 23, 17, 18, 19, 20, 14, 15, 16, 17, 18, 19]
  // 3人の日程が上の配列に格納されている
  // 配列の中の数字で、一番多く登場する回数がメンバーの数と同じであれば、全員の予定が合う
  
//   const [member, ...restDuration] = lines;
//   let count = {};
  
//   // 各メンバーの休暇期間を表す、二次元配列が作られる[ [ 22, 23 ], [ 17, 20 ], [ 14, 19 ] ]
//   const holidayArray = restDuration.map((day) => day.split(" ").map(Number));
// ​
//   // 最初と最後の日から連続した配列をつくる [ [ 22, 23 ], [ 17, 18, 19, 20 ], [ 14, 15, 16, 17, 18, 19 ] ]
//   const holidays = holidayArray.map((date, i) => ([...Array(date[1] - date[0] + 1)].map((_, i) => i + date[0])));
  
//   // ２次元配列を１次元配列に変換 [22, 23, 17, 18, 19, 20, 14, 15, 16, 17, 18, 19]
//   const flatHolidays  = holidays.flatMap((a) => a);
// ​
//   // 最初と最後の日にちから連続した配列を作成する
//   // const holidays = dayArray.map((date, i) => generateDayArray(date, i));
//   flatHolidays.forEach((i) => {
//       count[i] = (count[i] || 0) + 1;
//   });
  
//   //{'14': 1, '15': 1, '16': 1, '17': 2, '18': 2, '19': 2, '20': 1, '22': 1, '23': 1}
//   // console.log(count);
  
//   // [1, 1, 1, 2, 2, 2, 1, 1, 1]
// //   console.log(Object.values(count));
//   console.log(Math.max(...Object.values(count)) === Number(member) ? "OK" : "NG");

//suusan
//       //   人数2    [ 16, 19, 14, 17 ]
//       　const member = parseInt(lines[0]);
//       const dayArray = lines.slice(1).flatMap((nums) =>  nums.split(' ').map(Number));
   
    
//     // [16,17,18,19]
//       const makeArray = (a,b) => {
//         array1 = [];
//       for(let i=a; i<b+1; i++ ){
//           array1.push(i);
//       }  
//       return array1;
//     };
    
    
    
//     //[16,17,18,19,14,15,16,17]
//      const allDay = array => {
//          allDayArray = [];
//     for(let i=0; i<array.length; i+=2){
//         allDayArray.push(...makeArray(array[i],array[i+1]));
//      }
//      return allDayArray;
//     };
    
   
//     // 真似した
//     const check = array => {
//          let count = {};
//         for (let i = 0; i < array.length; i++) {
//         let elm = array[i];
//         count[elm] = (count[elm] || 0) + 1;
//           }
//           return count;
//     };
    
//     // console.log(check(allDay(dayArray)));
    
// 　　const values = Object.values(check(allDay(dayArray)));
// ​
// ​
// if (values.includes(member)) {
//   console.log('OK');
// } else {
//   console.log('NG');
// } 

//keiijii
//[14, 19] を [14,15,16,17,18,19]にする関数
// const createArray = (start, end) => {
//     return Array.from({ length: end - start + 1 }, (_, i) => i + start);
// }
// ​
// ​
// const isCommonDate = (...arrays) => {
//     const newArrays = arrays.map(array => createArray(array[0], array[1]))
// ​
//     // 最初の配列の各要素に対して、他の全ての配列にその要素が存在するかをチェック
//     return newArrays[0].some(element =>
//         newArrays.every(newArray => newArray.includes(element))
//     );
// }
// ​
// ​
// // ーーーーーー↓出力↓ーーーーーー
// const N = parseInt(lines[0]);
// ​
// const dayOffArray = lines.slice(1).map(str => str.split(' ').map(Number));
// ​
// console.log(isCommonDate(...dayOffArray) ? 'OK' : 'NG');