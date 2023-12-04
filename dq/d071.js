const lines = ['20 50'];
const [temperature, humidity] = lines[0].split(' ').map(Number);
//気温が25℃以上または湿度が40%以下であるが、気温が25℃以上かつ湿度が40%以下ではない場合に "Yes"（干す）
((temperature >= 25 || humidity <= 40) && !(temperature >= 25 && humidity <= 40)) ? console.log('Yes') : console.log('No');
