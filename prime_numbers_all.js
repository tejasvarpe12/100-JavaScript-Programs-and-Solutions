
function IsPrime(number){
    let isPrime = true;
    for(let i=2; i<number; i++){
        if(number % i == 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime) return true;
    else return false;
}

let number = 9;
let count = 0;
for(let i=2; i<=number; i++){
    if(IsPrime(i)){
        // count++;
        console.log(i);
    }
}
// console.log(count);