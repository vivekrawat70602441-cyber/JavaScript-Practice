/*
Using for loop

let str = "javascript";
let count = 0;

for (let i = 0; i < str.length; i++) {
    if (
        str[i] === "a" ||
        str[i] === "e" ||
        str[i] === "i" ||
        str[i] === "o" ||
        str[i] === "u"
    ) {
        count++;
    }
}

console.log("Number of vowels =", count);
*/


/*
Using Built-in Methods

let str = "javascript";

let vowels = str.match(/[aeiou]/gi);

let count = vowels ? vowels.length : 0;

console.log("Number of vowels =", count);
*/

let str = "javascript";
let count = 0;

for (let char of str) {
    if ("aeiou".includes(char.toLowerCase())) {
        count++;
    }
}

console.log(count);