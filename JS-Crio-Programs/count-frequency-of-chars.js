function findMaxOccurringCharacter(str) {
    const charCount = {};
    
    // Count the frequency of each character in the string
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    let maxChar = '';
    let maxCount = 0;

    // Iterate through the character counts to find the max occurring character
    for (let char in charCount) {
        if (charCount[char] > maxCount || (charCount[char] === maxCount && char < maxChar)) {
            maxCount = charCount[char];
            maxChar = char;
        }
    }
    
    return `${maxChar} ${maxCount}`;
}

// Example usage:
const input = "Statements are unique.";
console.log(findMaxOccurringCharacter(input)); // Output: e 4
