/*
Using filter()

let numbers = [10, 20, 10, 30, 20, 40, 50];

let uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers);
*/


/*
Using filter()

let numbers = [10, 20, 10, 30, 20, 40, 50];

let uniqueNumbers = numbers.filter((value, index) => {
    return numbers.indexOf(value) === index;
});

console.log(uniqueNumbers);
*/


let numbers = [10, 20, 10, 30, 20, 40, 50];

let uniqueNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (!uniqueNumbers.includes(numbers[i])) {
        uniqueNumbers.push(numbers[i]);
    }
}

console.log(uniqueNumbers);