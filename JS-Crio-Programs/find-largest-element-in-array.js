function findLargest(nums) {
    if (nums.length === 0) {
        throw new Error("Array is empty");
    }
    return Math.max(...nums);
}

// Sample input
const nums = [3, 5, 1, 2, 4];

// Find and output the largest element
try {
    const largest = findLargest(nums);
    console.log(largest);
} catch (error) {
    console.error(error.message);
}
