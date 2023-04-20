var greet = "Good Morning";
var year = 2023;

var yearString = year.toString(); // converts values into a string
var x = 5; // number datatype
var y = "C13"; // string

console.log(greet + year); // output: Hello2023
console.log(x); // output: 5
console.log(y); // output: C13

var greeting = "Hello, Kellis!";
console.log(greeting);

var age = 22;
console.log("My Age is", age)

var isStudent = true;
console.log("Is Kellis an Apprentice?", isStudent);

var result = null;
console.log("The Score Is:", result);

var Name;
console.log("Employee Full Name: ", Name);

let firstName = "John";
let lastName = "Doe";
let name1 = firstName + " " + lastName
console.log("Full Name:", name1);

let num1 = 10; // Number datatype
let num2 = 5; // Number datatype

let sum = num1 + num2;
console.log("Sum:", sum);

let difference = num1 - num2;
console.log("Difference:", difference);

let product = num1 * num2;
console.log("Product:", product);

let quotient = num1 / num2;
console.log("Quotient:", quotient);

var myAge = 18;
let isAdult = myAge >= 18;
let canDrink = isAdult && age >= 21;
let canVote = isAdult && age >= 18;

console.log("My Age Is", age);
console.log("Am I a grown ass man?", isAdult);
console.log("Can I sip fr? ", canDrink);
console.log("Can I deadass vote?", canVote);

var student2 = {
  firstName: "John",
  lastName: "Doe",
  gradeLevel: 12,
};

var student3 = {
  firstName: "Kellis",
  lastName: "Somerville",
  gradeLevel: 11,
};

console.log(student2);
console.log(student3);

alert("Hello, mf!");
var visitorName = prompt("What is your name, mf?");
var visitorFavoriteAnime = prompt("What is your favorite anime. mf?");

document.write(
  "Hello " +
    visitorName +
    "!" + " " + 
    visitorFavoriteAnime +
    " is a really good anime!"
);

console.log("Program donezo");

