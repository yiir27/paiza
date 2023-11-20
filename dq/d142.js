const lines = ['7 2 3'];

const [Trees, everyOtherDeco, Lights] = lines[0].split(' ').map(Number);
const TotalLights = Math.ceil(Trees / everyOtherDeco) * Lights;
console.log(TotalLights);