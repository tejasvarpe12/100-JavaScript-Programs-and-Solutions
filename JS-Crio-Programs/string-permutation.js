function stringPermutation(n, s, arr) {
    // Initialize an array to hold the rearranged characters
    let result = new Array(n);
    
    // Apply the permutation
    for (let i = 0; i < n; i++) {
        // The new position for the current character is arr[i] - 1
        // because array indices are 0-based and the permutation indices are 1-based
        result[arr[i] - 1] = s[i];
    }
    
    // Join the array to form the resulting string
    return result.join('');
}

// Example usage
const n = 4;
const s = 'abcd';
const arr = [2, 4, 3, 1];
const result = stringPermutation(n, s, arr);
console.log(result);  // Output: dacb



// Sample Input 1
// 4

// abcd

// 2 4 3 1

// Sample Output 1
// dacb

// Explanation
// According to the permutation 'a' goes to position 2, 'b' to 4, 'c' to 3, 'd' to 1. So we get the new string as "dacb".