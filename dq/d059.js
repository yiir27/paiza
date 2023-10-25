const lines = ["J J"];

//mycode
// const cards = lines[0].split(' ');
// const check1 = cards[0] === "J";
// const check2 = cards[1] === "J";
// check1 && check2 ? console.log("J","Q") : console.log(...cards);

//chappi
const cards = lines[0].split(' ');
console.log(cards[0] === "J" && cards[1] === "J" ? "J Q" : cards.join(' '));
