// VERY EASY
let x = 6;
let y = 2;

console.log("The difference between", x, "and", y, "is", x - y);

// EASY
let personA = "Meruem";
let personB = "Gon";

console.log(
  "The name",
  personA,
  "is longer than",
  personB,
  "by",
  personA.trim().length - personB.trim().length,
  "characters."
);

MEDIUM
let speech = prompt("Type Anything");

if (speech == speech.toLowerCase()) {
  console.log("The User Whispered.");
  document.write("The User whispered.");
} else if (speech == speech.toUpperCase()) {
  console.log("The User Shouted.");
  document.write("The User shouted.");
} else {
  console.log("The User neither shouted or whispered.");
  document.write("The User neither shouted or whispered.");
}

// HARD
let a = 20;
let b = 10;

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

console.log(add(a, b));
console.log(subtract(a, b));
console.log(multiply(a, b));
console.log(divide(a, b));

// VERY HARD
let number1 = prompt("Enter Your First Number");
let operator = prompt("Enter Your Operation");
let number2 = prompt("Enter Your Second Number");

var result;
if (operator == "+") {
  result = Number(number1) + Number(number2);
  document.write(
    number1 + " " + operator + " " + number2 + " " + "=" + " " + result
  );
  console.log(result);
} else if (operator == "-") {
  result = Number(number1) - Number(number2);
  document.write(
    number1 + " " + operator + " " + number2 + " " + "=" + " " + result
  );
  console.log(result);
} else if (operator == "*") {
  result = Number(number1) * Number(number2);
  document.write(
    number1 + " " + operator + " " + number2 + " " + "=" + " " + result
  );
  console.log(result);
} else if (operator == "/") {
  result = Number(number1) / Number(number2);
  document.write(
    number1 + " " + operator + " " + number2 + " " + "=" + " " + result
  );
  console.log(result);
} else {
  alert("ERROR! Refresh To Try Again!");
}
