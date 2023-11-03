const lines = ['B000'];

const checknum = lines[0].split('').slice(1,4).map(Number);
//checknum[0] === checknum[1] === checknum[2]では結果が返せない!!
checknum[0] === checknum[1] && checknum[1] === checknum[2] ? console.log('Yes') : console.log('No');
