function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; // In case k is larger than n
    return arr.slice(n - k).concat(arr.slice(0, n - k));
}

// Example usage:
const n = 7;
const k = 3;
const arr = [1, 2, 3, 4, 5, 6, 7];
const rotatedArr = rotateArray(arr, k);
console.log(rotatedArr.join(' ')); // Output: 5 6 7 1 2 3 4
