const lines = ['100paiza'];
//数値を抽出 \dは数値を表している,+は1回以上の繰り返しを意味します
console.log(Number(lines[0].match(/\d+/g)));
//アルファベットを抽出（[a-zA-Z]は小文字と大文字を意味し、+は1回以上の繰り返しを意味します）
// console.log(lines[0].match(/[a-zA-Z]+/g));

//100