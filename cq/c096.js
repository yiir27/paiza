const lines= [
    '2',
    '16 19',
    '14 17',
]

const member = lines[0];
const dayArray
//全員の共通の休みの日を表す配列を初期化
//keyメゾット新しい配列の次の要素に順にアクセスできるもの
let commonDays = [...Array(31).key()].map(idx => idx + 1);


console.log(commonDays);