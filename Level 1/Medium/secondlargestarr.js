/*
Using Built-in Methods

let numbers = [10, 25, 8, 90, 34, 67];

let uniqueNumbers = [...new Set(numbers)];

uniqueNumbers.sort((a, b) => b - a);

let secondLargest = uniqueNumbers[1];

console.log("Second largest =", secondLargest);
*/


let numbers = [10, 20, 8, 90, 34, 67];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] > largest) {
        secondLargest = largest;
        largest = numbers[i];
    }
    else if (
        numbers[i] > secondLargest &&
        numbers[i] !== largest
    ){
        secondLargest = numbers[i];
    }
}

if (secondLargest === -Infinity) {
    console.log("Second largest number does not exist");
} else {
    console.log("Second largest =", secondLargest);
}