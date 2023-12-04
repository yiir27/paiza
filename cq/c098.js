const lines = ['3','10','5','8','3','1 3 5','3 2 3','2 1 10'];

//keijiicode
const N = parseInt(lines[0]);
const haveballs = lines.slice(1, N + 1).map(Number);
const M = parseInt(lines[N + 1]);
const passInfo = lines.slice(N + 2).map(item => item.split(' ').map(Number));

const passingBall = (haveballs, M, passInfo) => {
    const balls = [...haveballs];
    for(let i = 0; i < M; i++) {
        const [from, to, count] = passInfo[i];
        // 宣言した個数か、持ってる全てのボールをパス
        const passedBalls = Math.min(balls[from - 1],count);
        balls[from - 1] -= passedBalls;
        balls[to - 1] += passedBalls;
    }
    return balls;
}
const printOutput = balls => balls.forEach(count => console.log(count));
const output = passingBall(haveballs, M, passInfo);
printOutput(output);
