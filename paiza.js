// const lines = ["pizza", "paiza", "aizu", "ai", "sai"];
const lines = ["pizza", "study", "frog", "ai"];


const extractLog = ([,word, ...logs]) => logs.filter(log => log.includes(word))
console.log(!!extractLog(lines));
console.log(extractLog(lines).join("\n") || "None")