/*
Using Built-in Methods

let number = 12345;

let reversed = number.toString().split("").reverse().join("");

console.log(reversed);
*/


let number = 12345;
let reversed = 0;

while (number > 0) {
    let digit = number % 10;

    reversed = reversed * 10 + digit;

    number = Math.floor(number / 10);
}

console.log(reversed);