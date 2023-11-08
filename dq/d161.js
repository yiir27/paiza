const lines = ['100','1','2','3','4','5','6','7'];
const [full, ...precipitations] = lines.map(Number);
const totalprecipitation = (precipitations) => {
    let sum = 0;
    precipitations.forEach(precipitation => {
        //precipitation += sumだとエラーになる その変更された値は何も計算に使われず、次のループには影響を与えませんし、sum の値も増加しない
        sum += precipitation;
    });
    return sum;
}
full <= totalprecipitation(precipitations) ? console.log(full) : console.log(totalprecipitation(precipitations));
