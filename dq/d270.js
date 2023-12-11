const lines = ['15 90'];
const [age, weight] = lines[0].split('').map(Number);
age <= 15 && weight > 60 ? console.log('Yes') : console.log('No');