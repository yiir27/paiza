// //シンジさん
// console.log(lines.slice(2).filter(el => !el.includes(lines[0])).join("\n") || "none")

// //shougokun
// // hatedNumber=4, roomNumbers = [ '101', '204', '301', '401', '501' ] 文字型
// const [hatedNumber,, ...roomNumbers] = lines.flatMap(el => el.split(' '));
  
// // [false, true, false, true, false] 嫌いな数字が含まれる= true
// const checkRoomNumber = (number, roomNumber) => roomNumber.map((rNum) => rNum.includes(number));


// const booleanArray = checkRoomNumber(hatedNumber, roomNumbers);
// //boolean配列に、嫌いな数字しかない場合
// if(booleanArray.includes(false) === false) {
//     console.log("none")
// }
// else {
//     booleanArray.forEach((boolean, i) => {
//       boolean === false ? console.log(roomNumbers[i]) : null;
//      });
// }

// //suusan
// const [unluckyNumber,roomCount,...roomNumbers]= lines;
//   const checkLuckyRoom = (unluckyNumber,roomNumbersArray) => roomNumbersArray.filter((room) => {
//         if(!room.match(unluckyNumber)){
//             return room;
//         }
//     });
// ​
//     const showResult = array => {
//     if(array.length !== 0){
//           array.forEach((item) =>console.log(item));
//     }else{
//           console.log('none');
//     }
// ​
//     };
// ​
//     checkedRooms = checkLuckyRoom(unluckyNumber,roomNumbers);
//     showResult(checkedRooms);