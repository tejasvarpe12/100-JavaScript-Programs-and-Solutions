function setZeroes(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    
    // Sets to keep track of which rows and columns should be zeroed
    let rowsToZero = new Set();
    let colsToZero = new Set();
    
    // First pass to find all zeros
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                rowsToZero.add(i);
                colsToZero.add(j);
            }
        }
    }
    
    // Second pass to set the rows and columns to zero
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (rowsToZero.has(i) || colsToZero.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
    
    return matrix;
}

// Read input
const input = `3 3
1 1 1
1 0 1
1 1 1`;

const lines = input.split('\n');
const [m, n] = lines[0].split(' ').map(Number);
const matrix = lines.slice(1, m + 1).map(line => line.split(' ').map(Number));

// Apply the setZeroes function
const resultMatrix = setZeroes(matrix);

// Print the result
for (const row of resultMatrix) {
    console.log(row.join(' '));
}
