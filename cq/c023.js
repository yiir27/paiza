const lines= [
    '1 2 3 4 5 6',
    '3',
    '1 5 4 2 3 6',
    '4 6 4',
    '9 6 2 7 1 5',
    '32 9 87 33 41 60',
];

const winnigNumbers = lines[0].split(" ").map(Number);
//購入したくじの数をparseIntで文字列から整数にしてくれる
const N = parseInt(lines[1]);
//配列の２段目と３段目の間をスライスそれ以降を文字列から数字に変換
const selectedNumbers = lines.slice(2).map(str => str.split(" ").map(Number));
for(let i = 0; i < N; i++ ){
    const ticket = selectedNumbers[i];
    let matchCount = 0;
    ticket.forEach((num) => {
        //includes->特定の要素が配列に含まれているかどうかを true または false で返します。
        if(winnigNumbers.includes(num)){
            matchCount++
        }
    })
    console.log(matchCount)
};

//shinnjiさんコード
// const count = (lots, winNo) => lots.map(lot => 
//     lot.reduce((a, n) => a + winNo.includes(n),0));

// const [winNo,, ...lots] = lines.map(el => el.split(" ").map(Number));
// console.log(count(lots, winNo).join("\n"));

