function findMedian(nums) {
    // Sort the array in ascending order
    nums.sort((a, b) => a - b);
    
    const n = nums.length;
    if (n % 2 === 1) {
        // If the length is odd, return the middle element
        return nums[Math.floor(n / 2)];
    } else {
        // If the length is even, return the average of the two middle elements
        const mid1 = nums[Math.floor((n - 1) / 2)];
        const mid2 = nums[Math.floor(n / 2)];
        return (mid1 + mid2) / 2;
    }
}

// Sample input
const nums = [3, 5, 1, 2, 4];

// Find and output the median
const median = findMedian(nums);
console.log(median);
