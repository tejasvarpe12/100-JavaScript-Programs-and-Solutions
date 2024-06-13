
// method 1 example 1-----------------------------------
// Example usage:
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ];

let len = matrix.length; // The size of the matrix
let primaryDiagonalSum = 0;
let secondaryDiagonalSum = 0;

for (let i = 0; i < len; i++) {
    primaryDiagonalSum += matrix[i][i];
    secondaryDiagonalSum += matrix[i][len - 1 - i];
}

console.log(primaryDiagonalSum); //15
console.log(secondaryDiagonalSum); //15

//method 2-----------------------------------------------

// Example usage:
const mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let n = mat.length; // Size of the matrix
let sum = 0;

for (let i = 0; i < n; i++) {
    // Add the primary diagonal element
    sum += mat[i][i];
    
    // Add the secondary diagonal element
    if (i !== n - 1 - i) {
        sum += mat[i][n - 1 - i];
    }
}

console.log(sum); // Output: 25

