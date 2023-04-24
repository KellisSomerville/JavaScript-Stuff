// Assigning Variables
let a = 10;
let b = 5;

// Arithmetic Operators
console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Remainder

// Comparison Operators (Logs as a Boolean)
console.log(a > b); // Greater Than
console.log(a < b); // Less Than
console.log(a >= b); // Greater Than or Equal To
console.log(a <= b); // Less Than or Equal To
console.log(a == b); // Equality
console.log(a != b); // Ineuqality

// Logical Operators
console.log(a > b && b > 0); // And
console.log(a > b || a < 0); // Or
console.log(!(a > b)); // Not

// Logical Operator Example
let hasLicense = true;
let hasCar = false;
let canDrive = hasLicense && hasCar; // Logical And has a higher precedence than Logical Or

console.log(canDrive);

// Comparison Operators
let age = 25;
let isAdult = age >= 18;

console.log(isAdult);

// Modules Example
let x = 4;
let y = 22;

console.log(y % x);

// Increment and Decrement 
let counter = 0;
counter ++;

console.log(counter);

// Assignment Operator

let total = 10;
total += total;

console.log(total);