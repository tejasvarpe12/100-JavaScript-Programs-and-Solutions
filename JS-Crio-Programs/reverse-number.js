

let number = 123;
let revNumber = 0;

while(number>0){
    let digit = number % 10;
    revNumber = revNumber*10 + digit;
    number = Math.floor(number/10);   
}

console.log(revNumber);