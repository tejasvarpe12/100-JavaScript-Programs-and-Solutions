function removeDuplicatesFromString(str) {
    // Convert the string to a Set to remove duplicates
    const uniqueChars = new Set(str);
    
    // Convert the Set back to a string
    return Array.from(uniqueChars).join('');
}

// Sample input
const inputStr = "aabbccddeeff";

// Remove duplicates
const result = removeDuplicatesFromString(inputStr);

// Output the result
console.log(result);  // "abcdef"
