/*let number = 5;
let factorial = 1;

for( let i = 1; i<=number; i++) {
    factorial = factorial * i;
}

console.log("Factorial of 5 =", factorial);
*/

// Using Function

function factorial(number) {
   let result = 1;

   for ( let i = 1; i<=number; i++) {
      result = result * i;
   }
   return result;
}

console.log(factorial(5));