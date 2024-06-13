function findLongestWord(str) {
    // Split the string into an array of words
    const words = str.split(' ');

    // Initialize variables to keep track of the longest word
    let longestWord = '';

    // Iterate through the array to find the longest word
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

// Sample input
const inputStr = "The quick brown fox jumps over the lazy dog";

// Find and output the longest word
const longestWord = findLongestWord(inputStr);
console.log(longestWord);
