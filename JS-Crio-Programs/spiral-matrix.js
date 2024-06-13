function spiralOrder(matrix) {
    const result = [];
    if (!matrix || matrix.length === 0) {
        return result;
    }
    
    let rowStart = 0;
    let rowEnd = matrix.length - 1;
    let colStart = 0;
    let colEnd = matrix[0].length - 1;
    
    while (rowStart <= rowEnd && colStart <= colEnd) {
        // Traverse right
        for (let i = colStart; i <= colEnd; i++) {
            result.push(matrix[rowStart][i]);
        }
        rowStart++;
        
        // Traverse down
        for (let i = rowStart; i <= rowEnd; i++) {
            result.push(matrix[i][colEnd]);
        }
        colEnd--;
        
        // Traverse left
        if (rowStart <= rowEnd) {
            for (let i = colEnd; i >= colStart; i--) {
                result.push(matrix[rowEnd][i]);
            }
            rowEnd--;
        }
        
        // Traverse up
        if (colStart <= colEnd) {
            for (let i = rowEnd; i >= rowStart; i--) {
                result.push(matrix[i][colStart]);
            }
            colStart++;
        }
    }
    
    return result;
}

// Read input
const [M, N] = readline().split(' ').map(Number);
const matrix = [];
for (let i = 0; i < M; i++) {
    matrix.push(readline().split(' ').map(Number));
}

// Get the spiral order
const result = spiralOrder(matrix);

// Output the result
console.log(result.join(' '));
