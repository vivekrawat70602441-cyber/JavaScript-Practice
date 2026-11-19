/*
Using Built-In Functions

let numbers = [12, 55, 8, 90, 34, 67];

let smallest = Math.min(...numbers);

console.log("Smallest number =", smallest);
*/






let numbers = [12, 55, 8, 90, 34, 67];

let smallest = numbers[0];

for ( let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}
console.log("Smallest number =", smallest);
