const lines = ['Noda F']

const [name, gender] = lines[0].split(' ');
gender === 'F' ? console.log('Hi, Ms. '+ name) : console.log('Hi, Mr. '+ name);
