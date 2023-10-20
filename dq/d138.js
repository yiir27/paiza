const lines = [
    '3 5',
    'abc',
    'def',
    'hij',
    'klm',
    'nop'
]

const [count, charaLines] = lines[0].split(' ').map(Number);
const [...characters] = lines.slice(1);
const checkword = (arr) => {
    return arr.join('\n');
}
console.log(checkword(characters));
