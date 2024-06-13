
//method 1
let array= [[0,1], [2,3], [4,5]];
let flattenedArray = array.reduce((prev , current) => prev.concat(current), []);
console.log(flattenedArray);


// method 2
let array2= [[0,1], [2,3], [4,5]];
console.log(array2.flat());


