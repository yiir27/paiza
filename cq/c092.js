//shougokun
  // 信号機の方向の配列を作成する - A
  // それぞれのコンベアの部品の進行方向の配列を作成する - B
  // Aの配列をmapを使って進行方向を順番に取り出し、B の配列の先頭文字と一致するか確認する
  // 一致すれば、Bの配列の先頭文字を削除し、残った配列の要素の長さを数える。長さの配列を作成する
  // これを繰り返し、最後に残った2の配列の要素の最小値が残数となる
  
  // input 取り出し
//   const courseArray = [...lines[1]]; // [ 'R', 'R', 'L', 'F', 'L' ]
//   const partACourses = [...lines[2]]; // [ 'R', 'F', 'R' ]
//   const partBCourses = [...lines[3]]; // 
  
// //   const lengthB = partBCourses.length;
// ​
//   const countPart = (courseArray, partCourses) => {
//         const length = partCourses.length;
//       const counts = courseArray.map((course) => {
          
//           // courseArrayから取り出した進行方向と、パーツの進行方向の文字が一致するかチェック
//           // 一致すれば、パーツは進めるため、partCourseの先頭を削除
//           // 一致しない時は999を返す
//           if(course === partCourses[0]) {
//               partCourses.shift();
//               return partCourses.length;
//           }
//           return length;
//       })
//       return counts;
//   }
  
//   // 関数実行
//   // countA [ 2, 999, 999, 1, 999 ] 1が残ったパーツの数になる
// 　const countA = countPart(courseArray, partACourses);
// 　const countB = countPart(courseArray, partBCourses);
// ​
// 　console.log(Math.min(...countA), Math.min(...countB));

//keijii
// N:信号機のスケジュールの長さ A:ベルトコンベアAに乗っている部品の数 B:ベルトコンベアBに乗っている部品の数
// const [N, A, B] = lines[0].split(' ').map(Number);
// const [signalSchedule, conveyorA, conveyorB] = lines.slice(1);
// ​
// let remainingA = A;
// let remainingB = B;
// let indexA = 0;
// let indexB = 0;
// ​
// ​
// for (let i = 0; i < N; i++) {
//     const signal = signalSchedule[i];
// ​
//     if (indexA < A && conveyorA[indexA] === signal) {
//         remainingA--;
//         indexA++;
//     }
// ​
//     if (indexB < B && conveyorB[indexB] === signal) {
//         remainingB--;
//         indexB++;
//     }
// }
// ​
// console.log(`${remainingA} ${remainingB}`);

//shinnjisann
// reader.on('close', () => {
//     const piazaPlant = new Plant({
//         signal: new Signal(lines[1]),
//         combares: lines.slice(2).map(el => new Combare(el))
//     })
    
//     piazaPlant.showRemaining()
// });
// ​
// class Plant {
//     constructor({signal, combares}) {
//         this.signal = signal
//         this.combares = combares
//     }
    
//     run() {
//         this.signal
//             .directions
//             .reduce((acc, direction) => {
//                 return acc.map(combare => combare.move(direction))
//             }, this.combares)
//         this.signal.directions = []
//     }
    
//     get remaining() {
//         return this.combares.map(el => el.directions.length)
//     }
    
//     showRemainingLast() {
//         this.run()
//         console.log(this.remaining.join(" "))
//     }
    
// }
// ​
// class Signal {
//     constructor (str) {
//         this.directions = [...str]
//     }
// }
// ​
// class Combare {
//     constructor (str) {
//         this.directions = [...str]
//     }
    
//     move(signalDirection) {
//         if (signalDirection === this.directions[0] ) this.directions.shift()
//         return this
//     }
// }

