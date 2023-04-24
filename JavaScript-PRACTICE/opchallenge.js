// // Thursday 1st Coding Challenge
// // Parentheses: ()
// // Exponentiation: **
// // Multiplication and Division: * /
// // Addition and Subtraction: + -
// // READS: = (left to right)
// // Using the above rules, we can solve the problems. Your task it to solve the logic to get the output below:
// var x = 3,
//   y = 4,
//   z = 5;

// var a = y * z + x;
// var b = (x * z) + (y * z);
// var c = x * y - z;
// var d = (x * z + y) / x;
// var e = (z - x) / y;

// console.log(a); // Output: 23
// console.log(b); // Output: 35
// console.log(c); // Output: 7
// console.log(d); // Output: 6.3333...
// console.log(e); // Output: 0.5

// Thursday 2nd Coding Challenge
let johnWeight1 = 92;
let johnHeight1 = 1.95;
let markWeight1 = 78;
let markHeight1 = 1.69;

let johnWeight2 = 85;
let johnHeight2 = 1.76;
let markWeight2 = 95;
let markHeight2 = 1.88;

let johnBmi1 = johnWeight1 / johnHeight1 ** 2;
let markBmi1 = markWeight1 / markHeight1 ** 2;

let johnBmi2 = johnWeight2 / johnHeight2 ** 2;
let markBmi2 = markWeight2 / markHeight2 ** 2;

if (johnBmi1 > markBmi1) {
  console.log(
    "John's BMI",
    johnBmi1,
    "is higher than Mark's BMI",
    markBmi1,
    "from Data 1."
  );
} else {
  console.log(
    "Mark's BMI",
    markBmi1,
    "is higher than John's BMI",
    johnBmi1,
    "from Data 1."
  );
}

if (johnBmi2 > markBmi2) {
  console.log(
    "John's BMI",
    johnBmi2,
    "is higher than Mark's BMI",
    markBmi2,
    "from Data 2."
  );
} else {
  console.log(
    "Mark's BMI",
    markBmi2,
    "is higher than John's BMI",
    johnBmi2,
    "from Data 2."
  );
}
