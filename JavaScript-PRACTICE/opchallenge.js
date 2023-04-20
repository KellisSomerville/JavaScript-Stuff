// Parentheses: ()
// Exponentiation: **
// Multiplication and Division: * /
// Addition and Subtraction: + -
// READS: = (left to right)
// Using the above rules, we can solve the problems. Your task it to solve the logic to get the output below:
var x = 3,
  y = 4,
  z = 5;

var a = y * z + x;
var b = x * 5 + y * z;
var c = x * y - z;
var d = (x * z + y) / x;
var e = (x + 7) / (y * z);

console.log(a); // Output: 23
console.log(b); // Output: 35
console.log(c); // Output: 7
console.log(d); // Output: 6.3333...
console.log(e); // Output: 0.5
