const lines = ['3', 'cartoy plamodel gameconsole'];

const record = Number(lines[0]);
const presents = lines[1].split(' ');

record === 1 ? console.log(presents[0]) :
record === 2 ? console.log(presents[1]) : console.log(presents[2]);



// console.log(presents);