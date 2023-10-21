const lines = ['012']

const number = lines[0].split('').map(Number);
let result = [];
number.forEach(num => {
            const char = num === 1 ? 'A' : num === 2 ? 'B' : 'C';
            result.push(char);
        });
console.log(result.join(''));
