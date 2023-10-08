const lines = ['2 3 5'];

//suusan
const dolls = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
//[2,3,5]
const dollPosition = lines[0].split(' ').map(Number);
//sliceの引数を変えたかった
const result = (data, position) => position.map((num, i) => {
    if(i === 0) {
        console.log(data.slice(0, position[i]).join(""));
    } else if (i === 1){
        console.log(data.slice(position[i - 1],(position[i - 1] + position[i])).join(""));
    } else {
        console.log(data.slice((position[i - 2] + position[i - 1])).join(""));
    }
});
result(dolls, dollPosition);

//関数の部分、リファクタ後
const displayDollsByPosition = (dolls, positions) => {
    let start = 0;
    positions.forEach(position => {
        const end = start + position;
        console.log(dolls.slice(start, end).join(""));
        start = end;
    })
}
// console.log(dollPosition);