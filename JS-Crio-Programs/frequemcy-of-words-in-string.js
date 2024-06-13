function kMostFrequentWords(words, k) {
    // Count the frequency of each word
    const wordCounts = {};
    words.forEach(word => {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
    });

    // Sort the words based on their frequency and then alphabetically
    const sortedWords = Object.entries(wordCounts).sort((a, b) => {
        if (a[1] !== b[1]) {
            return b[1] - a[1];
        } else {
            return a[0].localeCompare(b[0]);
        }
    });

    // Print the first K most frequent words
    for (let i = 0; i < Math.min(k, sortedWords.length); i++) {
        console.log(sortedWords[i][0]);
    }
}

// Sample input
const N = 3;
const words = ['car', 'bus', 'car'];
const K = 2;

// Call the function
kMostFrequentWords(words, K);
