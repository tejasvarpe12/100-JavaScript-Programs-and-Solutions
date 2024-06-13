function validAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    const charCount = {};
    
    // Count frequency of characters in s
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Decrement frequency of characters in t
    for (let char of t) {
        if (!charCount[char]) {
            return false; // If a character in t is not present in s, it's not an anagram
        }
        charCount[char]--;
    }
    
    // Check if all characters have zero frequency
    for (let char in charCount) {
        if (charCount[char] !== 0) {
            return false;
        }
    }
    
    return true;
}

function main() {
    let s = 'anagram';
    let t = 'nagaram';
    if (validAnagram(s, t)) {
        console.log("true");
    } else {
        console.log("false");
    }
}

main();
