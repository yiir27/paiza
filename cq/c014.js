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