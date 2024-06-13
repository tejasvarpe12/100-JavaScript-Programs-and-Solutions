// Function to find intersection of two arrays
function intersection(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    
    const intersectionSet = new Set();
    for (const num of set1) {
        if (set2.has(num)) {
            intersectionSet.add(num);
        }
    }
    
    return Array.from(intersectionSet);
}

// Read input
const [N, M] = readline().split(' ').map(Number);
const nums1 = readline().split(' ').map(Number);
const nums2 = readline().split(' ').map(Number);

// Find intersection
const result = intersection(nums1, nums2);

// Output the result
console.log(result.join(' '));
