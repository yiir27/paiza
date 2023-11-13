//keiji
// 路線(キー)とその路線の駅1から各駅へ料金の配列(バリュー)のオブジェクトを作って返す関数
// 

//shinnjisann
// const calcFare = (table, now, old = initialPosition) => {
// 	return Math.abs(table[now[0]][old[1]] - table[now[0]][now[1]])
// }
// ​
// const sumFares = (table, route) => {
// 	return route.reduce((acc, position, i) => {
// 		return acc + calcFare(table, position, route[i-1])
// 	}, 0)
// }
// ​
// const [N, _] = lines[0].split(" ").map(Number)
// const fareTable = lines.slice(1, N + 1).map(el => el.split(' ').map(Number))
// const route = lines.slice(N+2).map(el => el.split(' ').map(e => +e - 1))
// const initialPosition = [0, 0];
// ​
// console.log(sumFares(fareTable, route));