function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Target found
        } else if (arr[mid] < target) {
            left = mid + 1; // Discard left half
        } else {
            right = mid - 1; // Discard right half
        }
    }

    return -1; // Target not found
}

// Sample input
const input = "5 7 1 3 5 7 13";
const [N, target, ...arr] = input.split(" ").map(Number);

// Call the binary search function
const result = binarySearch(arr, target);

// Output the result
console.log(result);
