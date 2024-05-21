
let number = 153;
let sum = 0;
let temp = number;

while(temp > 0){
    let digit = temp % 10;
    sum += digit * digit * digit;
    // console.log(sum);
    temp = Math.floor(temp / 10);
}

if(number == sum){
    console.log(number + " is a armstrong number")
}else{
    console.log(number +" is not a armstrong number");
}

// program to check an Armstrong number of three digits

// let sum = 0;
// const number = 153

// // create a temporary variable
// let temp = number;
// while (temp > 0) {
//     // finding the one's digit
//     let remainder = temp % 10;

//     sum += remainder * remainder * remainder;

//     // removing last digit from the number
//     temp = Math.floor(temp / 10); // convert float into integer
// }
// // check the condition
// if (sum == number) {
//     console.log(`${number} is an Armstrong number`);
// }
// else {
//     console.log(`${number} is not an Armstrong number.`);
// }