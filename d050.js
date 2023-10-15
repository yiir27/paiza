const lines = ['3 50'];   
const params = lines[0].split(' ').map(Number);
const wantball = (ballArray) => {
    let sum = 0;
    ballArray.forEach((num) => {
        if(5 < num) {
            sum += 5;
        } else {
            sum += num;
        }
    });
    return sum;
}
console.log(wantball(params));