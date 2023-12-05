const lines = ['paiza', 'i', '3'];
const checkWords = lines[0].includes(lines[1]);
const whatNumber = lines[0].indexOf(lines[1]) + 1;

if (checkWords) {
    whatNumber === parseInt(lines[2]) ? console.log('Yes') : console.log('No');
} else {
    console.log('No');
}
