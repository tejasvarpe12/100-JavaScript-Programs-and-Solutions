//method 1
let a1 = [1,2,3];
let a2 = [2,5,6];

//sample output: 1 2 2 3 5 6 

let resultArray = (a1.length + a2.length) ;
resultArray = a1.concat(a2);
console.log(resultArray.sort((a,b)=>a-b));

//method 2.........................

// Example usage
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
let mergedArray = [];
let i = 0;
let j = 0;

// Use two pointers to iterate over both arrays
while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
    } else {
        mergedArray.push(arr2[j]);
        j++;
    }
}

// Add remaining elements from arr1
while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
}

// Add remaining elements from arr2
while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
}

console.log(mergedArray);



