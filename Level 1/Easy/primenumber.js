/*
Using for Loop

let number = 7;
let isPrime = true;

if (number <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log("Prime Number");
} else {
    console.log("Not a Prime Number");
}
*/

let number = 7;
let isPrime = true;

if (number <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(isPrime ? "Prime Number" : "Not a Prime Number");