/*
Using Built-in Function

let numbers = [10, 45, 20, 80, 30];

let largest = Math.max(...numbers);
console.log(largest);
*/

let numbers = [12, 55, 8, 90, 34, 67];
let largest = numbers[0];

for ( let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log("Largest number =", largest);
