/*
Built-in 

let str = "hello";
let frequency = new Map();

for (let char of str) {
    frequency.set(char, (frequency.get(char) || 0) + 1);
}

console.log(frequency);
*/

let str = "hello";
let frequency = {};

for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (frequency[char]) {
        frequency[char]++;
    } else {
        frequency[char] = 1;
    }
}

console.log(frequency);