/* Built-In Functions

let str = "Nitin";

let reverseStr = str.toLowerCase().split("").reverse().join("");
if (str === reverseStr) {
    console.log("String is Palindrome");
} else {
    console.log("String is not Palindrome");
}
*/


/*
Using for Loop (Without reverse)

let str = "nitin";
let reverseStr = "";

for (let i = str.length - 1; i>=0; i--) {
     reverseStr = reverseStr + str[i];
}


if (str === reverseStr) {
    console.log("String is Palindrome");
} else {
    console.log("String is not Palindrome");
}
*/


/*
Using Two Pointers

let str = "nitin";

let left = 0;
let right = str.length - 1;

let isPalindrome = true;

while (left < right) {
    if (str[left] !== str[right]) {
        isPalindrome = false;
        break;
    }
    left++;
    right--;
}

console.log(isPalindrome ? "Palindrome" : "Not Palindrome");
*/


// Recursion

function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    }

    if (str[0] !== str[str.length - 1]) {
        return false;
    }

    return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("nitin"));