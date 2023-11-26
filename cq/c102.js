const lines = ['6','12','14','15','26','27','28','5','12','13','14','15','27'];

//mycode + chappi + keijii
const lives = lines.map(Number);
//A,Bライブ日程
const totalLiveA = lives.slice(1,lives[0]+1)
const totalLiveB = lives.slice(lives[0]+2);
//同日ライブ日程
const sameDays = totalLiveA.filter(item=>totalLiveB.includes(item));

let calendar = Array(31).fill('x');

totalLiveA.forEach(date => calendar[date - 1] = 'A');
totalLiveB.forEach(date => calendar[date - 1] = 'B');
sameDays.forEach((date, index) => {
    calendar[date - 1] = index % 2 === 0 ? 'A' : 'B';
}) 
console.log(calendar)






//keiji
// // Aのライブ日数とBのライブ日数を取得
// const M = parseInt(lines[0], 10);
// const N = parseInt(lines[M + 1], 10);

// // AとBのライブ日程を取得
// const aLiveDates = lines.slice(1, M + 1).map(Number);
// const bLiveDates = lines.slice(M + 2, M + N + 2).map(Number);

// // 31日間の各日にどのバンドのライブがあるかを管理する配列
// let calendar = Array(31).fill('x');

// // AとBのライブ日程をカレンダーに反映
// aLiveDates.forEach(date => calendar[date - 1] = 'A');
// bLiveDates.forEach(date => {
//     if (calendar[date - 1] === 'A') {
//         calendar[date - 1] = 'AB';
//     } else {
//         calendar[date - 1] = 'B';
//     }
// });

// // ライブが被っている日について、交互にどのバンドのライブに行くかを判断
// let lastBand = '';
// calendar = calendar.map(day => {
//     if (day === 'AB') {
//         lastBand = lastBand === 'A' ? 'B' : 'A';
//         return lastBand;
//     }
//     return day;
// });

// // 結果を出力
// calendar.forEach(day => console.log(day));

//shougokun
// const num = Number(lines[0]);
// const scheduleA = lines.slice(1, num+ 1).map(Number);
// const scheduleB = lines.slice(num +2).map(Number);

// // 予定が被ったあとのライブの予定を切り替えるフラグ
// let switchLive = true;

// for(let i = 1; i <= 31; i++) {
//     // 予定が被ってる日
//     if(scheduleA.includes(i) && scheduleB.includes(i) ) {
//         switchLive === true ?  console.log("A") : console.log("B");
//         switchLive = !switchLive;
//     } else if(scheduleA.includes(i)) {
//         console.log("A");
//     } else if(scheduleB.includes(i)) {
//         console.log("B");
//     } else {
//         console.log("x");
//     }
// }