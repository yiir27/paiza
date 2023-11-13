//keiji
// const getTotalExpense = (A, B, array) => {
//     let expenses = [];
// ​
//     for (let i = 0; i < array.length - 1; i++) {
// ​
//         let interval = array[i + 1][0] - array[i][1];
// ​
//         A * 2 > interval * B ? expenses.push(interval * B) : expenses.push(A * 2);
//     }
//     expenses.push(A * 2);
//     return expenses;
// }
// ​
// ​
// // A: 片道料金 B: ホテルの一泊料金 N: インターンシップの回数
// const [A, B, N] = lines[0].split(' ').map(Number);
// ​
// const internshipPeriod = lines.slice(1).map(str => str.split(' ').map(Number));
// ​
// console.log(getTotalExpense(A, B, internshipPeriod).reduce((acc, curr) => acc + curr, 0));

//suusann
    //200,300,3 と、[1,3,4,6,8,10]の配列を作る
//     const [travelExpense, oneNightStayExpense, days] = lines[0].split(' ').map(Number);
//     const dayArray = lines.slice(1).flatMap((nums) => {
//         const [start, end] =  nums.split(' ').map(Number);
//         return [start, end]; 
//     });
    
//     //インターンシップの間の日にちを計算して配列に入れる　　
// 	//[[2]-[1], [4]-[3], [6]-[5]]みたいな感じ   [1,2]になる
// 　　const getDurationOfInternship = array => {
//    　　　 const newArray = [];
//    　　　　 for(let i=0; i<array.length - 2; i+=2){
//     　　　　　  newArray.push(array[i+2]-array[i+1]);
//   　　　　　  }
//   　  return newArray;
// 　　};
// ​
//     //間の旅費（交通費とホテル代でどちらが安いか）を計算しつつ配列にする [300,400]
//     const getMidwayExpenses = (travelExpense,oneNightStayExpense,days) => days.map((day) => {
//            const midwayTravelExpense = travelExpense * 2;
//            const midwayStayExpense   = oneNightStayExpense * day;
//     　return midwayTravelExpense - midwayStayExpense > 0 ?  midwayStayExpense : midwayTravelExpense;
//    });
// ​
// 　　//初日と最終日分の交通費と足して合計を出す
//     const getAllExpenses = (travelExpense,midwayExpenses) =>
//     midwayExpenses.reduce((sum, element) => sum + element, travelExpense *2);
// ​
// 　　//出力
// 　　const midwayExpenses = getMidwayExpenses(travelExpense,oneNightStayExpense,getDurationOfInternship(dayArray));
// 　　const result = getAllExpenses(travelExpense,midwayExpenses);
    
//     console.log(result);

//shougokun
  // データ取り出し
  // インターンシップの間の日数分で旅費と宿泊費の比較を行い、安い方を選択する
  // 最初と最後の往復費用は計算しておく
  
//   let counts = [];
//   const [toravelCost, hotelCost, internshipCount] = lines[0].split(" ").map(Number);
//   // [3, 4, 6, 8]
//   const scheduleArray = (lines.slice(1).flatMap((schedule) => schedule.split(" ").map(Number))).slice(1,-1);
  
//   // 宿泊費と移動日を比較して安い方の数字で配列作成
//   const compareCost = (count, cost1, cost2) => count.map((num) => Math.min(num * cost2, cost1 * 2));
  
//   const calcCost = (array, tCost, hCost) => {
//       for(let i = 0; i < array.length/2; i++) {
//           counts.push(array[2 * i + 1] - array[2 * i]);
//       }
//       return tCost * 2 + compareCost(counts, tCost, hCost).reduce((acc, curr) => acc + curr, 0)
      
//   }
//   console.log(calcCost(scheduleArray, toravelCost, hotelCost));

//tubasasann
// <?php
// list($train, $hotel, $num) = explode(" ", trim(fgets(STDIN)));
// $days = [];
// ​
// for ($i = 0; $i < $num; $i++) {
//     list($start, $end) = explode(" ", trim(fgets(STDIN)));
//     $days[] = [$start, $end];
// }
// ​
// $total_money = 0;
// ​
// for ($i = 0; $i < $num - 1; $i++) {
//     $hotel_night = $days[$i + 1][0] - $days[$i][1];
// 	//if文を使わずにminを用いて小さい方を足していく
//     $total_money += min($train * 2, $hotel * $hotel_night);
// }
// ​
// echo $total_money + $train * 2;
// ?>