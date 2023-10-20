//chappi
const lines = ['15']
const time = Number(lines[0]);
//最大の整数
const days = Math.floor(time / 24);
const hours = time % 24;
const totaldays = hours > 0 ? days + 1 : days;
console.log(totaldays);
