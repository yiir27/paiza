const lines = ['13','0','15','30','89','100','30'];
const rainydays = lines.map(num => Number(num));
const goOutsides = rainydays.filter(num => num <= 30);
console.log(goOutsides.length);