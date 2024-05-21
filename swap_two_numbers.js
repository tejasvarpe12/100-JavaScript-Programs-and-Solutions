const prompt = require('prompt-sync')();

let number1 = parseInt(prompt("Enter First Number: "));
let number2 = parseInt(prompt("Enter Second Number: "));

let temp = number1;
number1 = number2;
number2 = temp;

console.log("Numers after swapping \n" + "1st Number: " + number1 + " and 2nd Number:" + number2);