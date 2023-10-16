// const lines = ['Hanako','tarou'];
const lines = ['tarou','Hanako']
//my
const a = lines[0].length;
const b = lines[1].length;
if (a > b) {
    console.log(lines[1]);
} else if (a < b) {
    console.log(lines[0]);
}
//chappi
console.log(lines[lines[0].length > lines[1].length ? 1 : 0]);
