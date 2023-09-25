const lines = [
    '1 80 40'
];

const [m, p, q] = lines[0].split(" ").map(Number);

const fn = (i) => remainingAmount - remainingAmount * i / 100;

let remainingAmount = m;
remainingAmount = fn(p);
remainingAmount = fn(q);

console.log(remainingAmount);