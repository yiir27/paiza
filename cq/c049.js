const lines = ['3', '3', '1', '4'];
const stairs = lines.slice(1).map(Number);
const firstMoveStair = Math.abs(stairs[0] - 1);
let moveStairs = firstMoveStair;
for(let i = 1; i < stairs.length; i++){
    moveStairs += (Math.abs(stairs[i] - stairs[i - 1]));
}
console.log(moveStairs);
