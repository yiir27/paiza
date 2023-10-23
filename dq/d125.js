const lines = ['5','12','7','51','15','50'];

//mycode
// const days = Number(lines[0]);
// const dayWalking = lines.slice(1).map(Number);
// let allDayswalking = 0;
// dayWalking.forEach(sum => allDayswalking += sum );
// console.log(Math.floor(allDayswalking/days));

//chappi
const days = Number(lines[0]);
//acc->累積値 val->呼び出された数値
const totalWalking = lines.slice(1).map(Number).reduce((acc,val)=> acc + val, 0);
console.log(Math.floor(totalWalking / days));