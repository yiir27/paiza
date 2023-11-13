const lines = ['5 2 4']; 
//mycode + chappi
// const [persons, X, Y] = lines[0].split(' ').map(Number);
// const choice = (num, numX, numY) => {
//     let results = '';
//     for(let i = 1; i <= num; i++){
//         if (i % numX === 0 && i % numY === 0){
//             console.log('AB');
//         } else if (i % numX === 0) {
//             console.log('A');
//         } else if (i % numY === 0) {
//             console.log('B')
//         } else {
//             console.log('N');
//         }
//     }
//     return results;
// }
// console.log(choice(persons, X, Y));

//chappi
// const [persons, X, Y] = lines[0].split(' ').map(Number);

// const choice = (num, numX, numY) => 
//     Array.from({ length: num }, (_, i) => 
//         (i + 1) % numX === 0 && (i + 1) % numY === 0 ? 'AB' :
//         (i + 1) % numX === 0 ? 'A' :
//         (i + 1) % numY === 0 ? 'B' : 'N'
//     );

// console.log(choice(persons, X, Y));

//keiji
// わざわざ入力を受け取る関数を作成
// const getInput = () => [N, A, B] = lines[0].split(" ");
// ​
// // 応募者の配列を作成して返す関数
// const getApplicantArray = n => Array.from({ length: n }, (_, i) => i + 1);
// ​
// // 当選結果の配列を作成して返す関数
// const getResultArray = (array, a, b) => {
//     return array.map(val => {
//         if (val % a === 0 && val % b === 0) return "AB";
//         if (val % a === 0) return "A";
//         if (val % b === 0) return "B";
//         return "N";
//     });
// }
// ​
// 当選結果を出力する関数
// const printResult = array => array.forEach(element => console.log(element));
// ​
// ​
// // ----------↓出力↓------------
// ​
// [N, A, B] = getInput();
// printResult(getResultArray(getApplicantArray(N), A, B));

//suusan
//  　 lines[0]の値を分ける
// 　　元になる配列を作る、整数XとYを取り出す
//     indexを使い、割り算の余が出るか否かで条件分岐する
// 　　forEachで取り出す
​
 
//   const newLines = lines[0].split(' ');
//   const array = Array(Number(newLines[0])).fill('N');
//   const x = Number(newLines[1]);
//   const y = Number(newLines[2]);
 
//   const checkNumberXAndY = array.map((element,index) =>{
//     if((index + 1) % x === 0 && (index + 1)% y === 0){
//         return 'AB';
//     }else if((index + 1) % x === 0){
//         return 'A';
//     }else if((index + 1) % y === 0){
//         return 'B';
//     }else{
//         return element;
//     }
//   });
 
//  checkNumberXAndY.forEach((item) => console.log(item));

 //shogokun
 // 応募人数、整数x, y をとりだす
  // 応募人数分の配列を作る ex)4人の場合[1, 2, 3, 4]
  // 配列から1個ずつ取り出し、整数x, y で割り算する
  // 割り切れれば当選とする
//   const [num, x, y] = lines[0].split(" ").map(Number);
//   const applicants = [...Array(num)].map((_, i) => i + 1);
//   const announceApplicants = (applicants, x, y) => {
//       applicants.forEach((i) => {
//           console.log(
//              i % x === 0 && i % y === 0 ? "AB" 
//              : i % x === 0 ? "A" 
//              : i % y === 0 ? "B" 
//              : "N"
//           );
//       })
//   }
  
//   announceApplicants(applicants, x, y);
  
//   // リファクタリング
//   const [num, x, y] = lines[0].split(" ").map(Number);
//   const applicants = Array.from({ length: num }, (_, i) => i + 1);
// ​
//   const announceApplicantType = (i, x, y) => {
//     if (i % x === 0 && i % y === 0) {
//         return "AB";
//     } else if (i % x === 0) {
//         return "A";
//     } else if (i % y === 0) {
//         return "B";
//     } else {
//         return "N";
//     }
//   };

//   applicants.forEach((i) => {
//     console.log(announceApplicantType(i, x, y));
//   });

// //tubasasan php
// <?php
// list($applicant, $A, $B) = explode(" ", trim(fgets(STDIN)));

// for ($i = 1; $i <= $applicant; $i++) {
//     $output = "";

//     if ($i % $A === 0) {
//         $output .= "A";
//     }

//     if ($i % $B === 0) {
//         $output .= "B";
//     }

//     echo ($output !== "") ? $output : "N";
//     echo "\n";
// }
// ?>