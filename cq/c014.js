const lines= [
    '4 2',
    '6 6 6',
    '4 6 4',
    '6 1 1',
    '4 4 4',
];

const [boxNumber, ballRadius] = lines[0].split(" ").map(Number);
//[6,6,6],[4,6,4]と分割
const boxes = lines.slice(1).map(boxSize => boxSize.split(" ").map(Number));

let fittingBoxIndices = []
boxes.forEach((boxes, ballRadius) => boxes.filter((boxSize,index) => {ballRadius <= Math.min(...boxSize)
{fittingBoxIndices.push(index + 1)}}));


console.log(fittingBoxIndices);

//keiji
const getResultArray = (arrays, r) => {
    newArray = [];
    arrays.forEach((array, i) => {
        if (Math.min(...array) >= r * 2) {
            newArray.push(i + 1)
        }
    })
    return newArray;
};

const [n, r] = lines[0].split(' ').map(Number);

const boxSizes = lines.slice(1).map(str => str.split(' ').map(Number));

console.log([...getResultArray(boxSizes, r)].join('\n'));

// //suusan
// //半径を取り出す　radius 2
// const [dataLength,radius] = lines[0].split(' ').map(Number);
// //箱の情報[ [ 6, 6, 6 ], [ 4, 6, 4 ], [ 6, 1, 1 ], [ 4, 4, 4 ] ]
// const boxSizes = lines.slice(1).map(str => str.split(' ').map(Number));
// ​
// ​
// let filterIndex = [];
// const checkBoxSize = (matrix,radius) => matrix.filter((subarray,index) => {
//          if(subarray[0] >= radius*2 && subarray[1] >= radius *2 && subarray[2] >= radius*2){
//        filterIndex.push(index + 1);
//        }
//     });
    
// //実行
// checkBoxSize(boxSizes,radius);
// filterIndex.forEach((item)=>console.log(item));

// //shougokun
// const [, r] = lines[0].split(" ").map(Number)
// const boxSizeArray = lines.slice(1).map((size => size.split(" ").map(Number)))
// ​
// const isFitInBox = (sizeArray) => {
//     sizeArray.forEach((size, index) => {
//         if(size[0] >= r*2 && size[1] >= r*2 && size[2] >= r*2) {
//             console.log(index + 1);
//         }
//     })
// }
// ​
// // isじゃない方がよかったね
// isFitInBox(boxSizeArray);


