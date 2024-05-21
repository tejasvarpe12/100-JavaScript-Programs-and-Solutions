
let number = 5;
let first = 0;
let second = 1;
let fib = 0;

for(let i=0; i<=number; i++){
    
    console.log(fib);
    fib = first + second;
    first = second;
    second = fib;

}