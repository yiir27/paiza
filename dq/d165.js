const lines = ['2020'];

const numbers = lines[0].split('').map(Number);
//mycode
// numbers[0] === numbers[1] | numbers[0] === numbers[2] | numbers[0] === numbers[3] ? console.log('NG') :
// numbers[1] === numbers[2] | numbers[1] === numbers[3] ? console.log('NG') :
// numbers[3] === numbers[4] ? console.log('NG') : console.log('OK');

//chappi
//Setオブジェクトを作成,重複を許さないため、重複する要素は自動的に除外されます。
const uniqueNumbers = new Set(numbers);
//Setオブジェクトのサイズ（ユニークな要素の数）と元の配列の長さを比較します。サイズが等しければ、すべての要素がユニークであるため'OK'を出力し、そうでなければ'NG'を出力します。
console.log(uniqueNumbers.size === numbers.length ? 'OK' : 'NG');