const lines = ['2'];

//sliceするには文字列に変える必要がある
const piString = Math.PI.toString();
console.log(piString.slice(0,(Number(lines[0])+2)));