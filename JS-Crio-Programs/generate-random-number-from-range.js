function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Usage example
const min = 1;
const max = 10;
const randomNum = getRandomNumber(min, max);
console.log(randomNum);
