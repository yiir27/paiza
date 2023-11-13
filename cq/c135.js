//suusan
// const nums = lines.flatMap((str) =>  str.split(' ').map(Number));
    
// const result = array => {
//      return array[2] * array[0] * (1 - array[1] * 0.01) * Math.floor(array[3]/array[0]) + array[3] % array[0] * array[2];
//     //   return  array[3] % array[0] * array[2] + (1 - array[1] * 0.01) * array[2] * Math.floor(array[3]/array[0])* array[0];
// };
    
// console.log(Math.floor(result(nums)));

//shougokun
  // 分割代入の関数
//   const toArray = array => array.flatMap((item) => item.split(" ").map(Number));
  
//   // [4, 60, 100, 10]
//   const[discountCount, discountRate, price, quantity] = toArray(lines);
  
//   // 割引後の合計価格求める関数
//   const getTotalDiscountedPrice = (discountCount, discountRate, price, quantity) => {
//       return Math.floor(price * discountCount * (1 - discountRate / 100) * Math.floor(quantity / discountCount));
//   }
//   // 割引前の合計価格求める関数
//   const getTotalOriginalPrice = (discountCount, discountRate, price, quantity) => {
//       return Math.floor((quantity % discountCount) * price);
//   }
  
//   const totalDiscountedPrice = getTotalDiscountedPrice(discountCount, discountRate, price, quantity);
//   const totalOriginalPrice = getTotalOriginalPrice(discountCount, discountRate, price, quantity);
// ​
//   // 合計価格求める関数
//   const getTotalPrice = (totalDPrice, totalOPrice) => totalDPrice + totalOPrice;
// ​
//   // 出力
//   console.log(getTotalPrice(totalDiscountedPrice, totalOriginalPrice));

//keiji
// M:割引の条件となる同時購入の数 D:割引率
// P:購入する商品の価格 N:個数
// const [M, D, P, N] = lines.flatMap(str => str.split(' ').map(Number));

// console.log(Math.floor((N % M * P) + P * (100 - D) / 100 * (N - (N % M))));