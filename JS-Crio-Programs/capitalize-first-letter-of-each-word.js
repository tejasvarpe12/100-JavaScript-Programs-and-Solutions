//method 1
let str = "tejas kisan varpe";

let newStr = str.split(" ");

for(let i=0; i<newStr.length; i++){
    newStr[i] = newStr[i].charAt(0).toUpperCase()+newStr[i].slice(1);
}
 
console.log(newStr.join(" "));

// method 2
let paragraph = "tejas kisan varpe";
let word = paragraph.split("");

  for(let i=0; i<=word.length-1; i++){
    
    if(word[i]==="." || word[i]===" "){
      continue;
    }

    if(word[i]===word[0] || word[i-1] === " "){
      word[i] = word[i].toUpperCase();
    }
  }

console.log(word.join(""));


//method 3
function longestSubstringWithoutRepeatingCharacter(s) {
    let maxLength = 0;
    let start = 0;
    let charIndexMap = {};

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];
        if (currentChar in charIndexMap && charIndexMap[currentChar] >= start) {
            // If the current character is already in the map and its index is greater than or equal to the start index,
            // move the start index to the next position after the last occurrence of the current character.
            start = charIndexMap[currentChar] + 1;
        }
        // Update the index of the current character in the map
        charIndexMap[currentChar] = end;
        // Update the maximum length of the substring without repeating characters
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Sample Input 1
console.log(longestSubstringWithoutRepeatingCharacter("aabcccbcb")); // Output: 3

// Sample Input 2
console.log(longestSubstringWithoutRepeatingCharacter("cdddddd")); // Output: 2
