const lines =  ['Ilike'];
//NGcode
const regex = /[^i/I/l']/g
0 === lines[0].search(regex) ? console.log(lines[0]) : console.log('caution');

//chappi
const forbiddenCharacters = ['i','I','l'];
const containsForbiddenCharacter = lines[0].split('').some(char => forbiddenCharacters.includes(char));
if(!containsForbiddenCharacter) {
    console.log(lines[0]);
} else {
    console.log('caution');
}

//
const checkIandL = str =>{
    if(str.includes("I") || str.includes("l") ||  str.includes("i")){
        console.log("caution");
    }else{
        console.log(str);
    }
};
checkIandL(lines[0]);