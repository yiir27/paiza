const lines = ['nnyynnyyynnnn'];
const checkWord = lines[0].split('');
//arr.filterで条件を満たす新しい配列を生成
const result = checkWord.filter(str => str === 'y');
//arrにlengthをつけることで配列内の要素の数を返す
console.log(result.length);