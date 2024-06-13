function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let writeIndex = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[writeIndex] = nums[i];
            writeIndex++;
        }
    }
    
    return writeIndex;
}

// Sample input
const nums = [1, 1, 2, 2, 3, 4, 4, 5];

// Remove duplicates
const newLength = removeDuplicates(nums);

// Output the result
console.log(nums.slice(0, newLength));  // Prints the array without duplicates
console.log(newLength);  // Prints the length of the array without duplicates


let arr = [1,2,2,3,4,5];

let newArr = [...new Set(arr)];

console.log(newArr);

