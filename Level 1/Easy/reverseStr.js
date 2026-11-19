
/* Built-In Functions
function reverseString(str) {
   return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
*/


function reverseString(str) {
   let result = "";
   for (let i = str.length-1; i >= 0; i--) {
      result = result + str[i];
   }
   return result;
}

console.log(reverseString("hello"));