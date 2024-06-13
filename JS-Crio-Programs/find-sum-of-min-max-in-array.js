function sumOfMinAndMax(arr) {
    let min = Infinity;
    let max = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return min + max;
}

// Example usage:
const n = 5;
const arr = [-2, 1, -4, 5, 3];
console.log(sumOfMinAndMax(arr)); // Output: 1
