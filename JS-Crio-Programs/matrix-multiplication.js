function matrixMultiplication(n1, m1, n2, m2, grid1, grid2) {
    // Initialize the result matrix with zeros
    const result = Array.from({ length: n1 }, () => Array(m2).fill(0));
    
    // Perform matrix multiplication
    for (let i = 0; i < n1; i++) {
        for (let j = 0; j < m2; j++) {
            for (let k = 0; k < m1; k++) {
                result[i][j] += grid1[i][k] * grid2[k][j];
            }
        }
    }
    
    return result;
}

// Example usage
const n1 = 2, m1 = 2, n2 = 2, m2 = 5;
const grid1 = [
    [1, 4],
    [5, 9]
];
const grid2 = [
    [1, 2, 8, 8, 4],
    [3, 3, 6, 5, 2]
];

const result = matrixMultiplication(n1, m1, n2, m2, grid1, grid2);

// Print the result
result.forEach(row => console.log(row.join(' ')));
// Expected Output:
// 13 14 32 28 12
// 32 37 94 85 38
