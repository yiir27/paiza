// //suusan
// const data = lines.slice(1).map(str => str.split(' ').map(Number));
    
// const check2colors = matrix => matrix.map((subArray) =>  subArray.map(num => num > 127 ? 1 : 0 ));

// check2colors(data).forEach((item) => console.log(item.join(' ')));

// //shougokun
//   // [ [ 128, 127 ], [ 127, 128 ], [ 128, 127 ] ]
//   const pixelValues = lines.slice(1).map((num) => num.split(' ').map(Number));
  
//   const convertToBinary = (pixelValues) => {
//       return pixelValues.map((values) => values.map((value) => value >= 128 ? 1 : 0));
//   };
  
//   // [ [ 1, 0 ], [ 0, 1 ], [ 1, 0 ] ]
//   // console.log(convertToBinary(pixelValues));
//   convertToBinary(pixelValues).forEach((result)=> console.log(...result));

// //keiji
// const convertToBinaryImage = (arrays) => arrays.map(array => array.map(num => num >= 128 ? 1 : 0));
// ​
// const convertArrayToSpaceSeparatedString = (arrays) => arrays.map(array => array.join(' '));
// ​
// const [height, width] = lines[0].split(' ').map(Number);
// const pixelVals = lines.slice(1).map(str => str.split(' ').map(Number));
// const binaryImage = convertToBinaryImage(pixelVals);
// const result = convertArrayToSpaceSeparatedString(binaryImage);
// ​
// console.log(result.join('\n'));
