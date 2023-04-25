// METHODS ==========================

// Filter Method
let numbers = [1, 2, 3, 4, 5, 6];

function filterEvenNumbers(numbers) {
  return numbers.filter(function (number) {
    return number % 2 === 0;
  });
}

let evenNumbers = filterEvenNumbers(numbers);

console.log(evenNumbers);

// Map Method
let numbers2 = [1, 2, 3, 4, 5];

function doubleNumbers(numbers) {
  return numbers.map(function (number) {
    return number * 2;
  });
}

console.log(doubleNumbers(numbers2));
// Output: [2, 4, 6, 8, 10]

// Sort Method
let unsortedNumbers = [4, 2, 8, 1, 5];

function sortNumbers(numbers) {
  return numbers.sort(function (a, b) {
    return a - b;
  });
}

console.log(sortNumbers(unsortedNumbers));
// Output: [1, 2, 4, 5 , 8]

// Arrow Functions

// Regular Function
var createGreeting = function (message, name) {
  return message + "," + " " + name + ".";
};

// Arrow Function
var createGreeting = (message, name) => {
  return message + "," + " " + name + ".";
};

// If the arrow function body only contains one expression, we can ommit the curly braces and auto return
var crateGreeting = (message, name) => message + "," + " " + name + ".";

// If an arrow function only has one parameter, we can ommit the parenthises () around the single parameter
var greet = (greeting) => console.log(greeting);

var greeting = createGreeting("Wassup", "Kellis");

greet(greeting);