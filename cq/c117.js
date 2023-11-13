const lines =[
    '3 3',
    '1000 1000 50',
    '25',
    '80',
    '500'
]

//suusan
    //値をそれぞれ使える形にする
    //計算式に当てはめて、結果を配列にする
    //閉店する店をカウントする（結果が０より小さければ＋１する）
    
//     const[storesAndMonths,pays,...sales ] = lines;
//     // 3 3    1000 1000 50    [ '25', '80', '500' ]
//     const storesAndMonthsArray = storesAndMonths.split(' ').map(Number);
//     // [3, 3]
//     const paysArray = pays.split(' ').map(Number);
//     // [1000, 1000, 50]
//     const salesCupCount = sales.map(Number);
//     // [25, 80, 500]
    
//     const calculateNetProfit = (sales,storesAndMonths,pays) => sales.map((num)=>{
//       return  pays[2]*num - pays[0] - pays[1]*storesAndMonths[1];
//     });
//     //[-2750, 21000, 0] 
    
 
//     const checkNegativeNetProfit = profit => {
//         let closedStoreCount = 0;
//         for(i=0; i<profit.length; i++){
//             if(profit[i] < 0){
//                 closedStoreCount ++;
//             }
//         }
//         return closedStoreCount;
//     };
// ​
// const closedStoreCount = checkNegativeNetProfit(calculateNetProfit(salesCupCount, storesAndMonthsArray, paysArray));
// ​
// console.log(closedStoreCount);

//shogokun
// input取り出し
// [3, 3]
// const [stores, businessMonths] = lines[0].split(" ").map(Number);
// // [1000, 1000, 50]
// const [constructionCost, laborCost, ramenProfit] = lines[1].split(" ").map(Number);
// // [25, 80, 500]
// const ramenSalesCount = [...lines.slice(2).map(Number)]; // ラーメンの売れた個数の配列を作成
// ​
// const calcProfit = (count, profit, months, cCost, lCost) => count * ramenProfit - cCost - lCost * months;
// const profitArray = ramenSalesCount.map((ramenCount) => calcProfit(ramenCount, ramenProfit, businessMonths, constructionCost, laborCost));
  
// // 出力
// // 利益がマイナスのものをフィルタリングして配列を作成し、その長さが閉店数となる
// console.log(profitArray.filter((storeProfit) => storeProfit<0).length);

//keiji
// 建設費用(A) + 人件費(B) * 営業期間(M) > ラーメン1杯あたりの利益(C) * 販売数(salesNumbersの要素)
// const getNumOfRestaurantClosed = (A, B, C, M, array) => array.filter((n) => A + B * M > C * n).length;
// ​
// ​
// const [N, M] = lines[0].split(" ").map(Number);
// const [A, B, C] = lines[1].split(" ").map(Number);
// const salesNumbers = lines.slice(2).map(Number);
// ​
// console.log(getNumOfRestaurantClosed(A, B, C, M, salesNumbers));


