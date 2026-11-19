/*
Built-in methods

let str1 = "listen";
let str2 = "silent";

let sorted1 = str1.split("").sort().join("");
let sorted2 = str2.split("").sort().join("");

if (sorted1 === sorted2) {
    console.log("Anagrams");
} else {
    console.log("Not Anagrams");
}
*/

let str1 = "listen";
let str2 = "silent";

if (str1.length !== str2.length) {
    console.log("Not Anagrams");
} else {
    let frequency = {};

    for (let char of str1) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    for (let char of str2) {
        frequency[char] = (frequency[char] || 0) - 1;
    }

    let isAnagram = true;

    for (let char in frequency) {
        if (frequency[char]!== 0) {
            isAnagram = false;
            break;
        }
    }

    console.log(isAnagram ? "Anagrams" : "Not Anagrams");
}