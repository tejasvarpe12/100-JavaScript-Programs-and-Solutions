
// method 1 ---------------------------------------------------------------
let s = "A man, a plan, a canal: Panama"
s.trim();
const newStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
let left = 0;
let right = newStr.length-1;
let isPollindrome = true;
while(left < right){
    if(newStr[left] != newStr[right]){
        console.log("Not Pollindrome");
        isPollindrome = false;
        break;
    }
    left++;
    right--;
}
if(isPollindrome)
    console.log("Pollindrome");

