

let n = 10;
let count = 0;

function isPrime(n){
    for(let i=2; i<n; i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}

for(let i=2; i<n; i++){
    if(isPrime(i)){
        count++;
        // console.log(i);
    }
}

console.log(count);