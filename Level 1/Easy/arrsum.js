/*
Using reduce()

let numbers = [10, 20, 30, 40, 50];

let sum = numbers.reduce((total, current) => {
    return total + current;
}, 0);

console.log(sum);
*/

let numbers = [10, 20, 30, 40, 50];
let sum = 0;

for ( let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}

console.log("Array =", numbers);
console.log("Sum of Array =", sum);