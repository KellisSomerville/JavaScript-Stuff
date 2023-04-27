// let num1 = 9;

// if (num1 % 2 == 0) {
//     console.log("This number is even.");
// } else {
//     console.log("This number isn't even.");
// }

// var score = 90;
// var grade = score >= 60 ? "Passing" : score <= "Failing";

let askNumber = prompt("Please Enter A Number");

if (askNumber == 1 || askNumber == 2 || askNumber == 3) {
  console.log("CORRECT");
} else {
  console.log("ERROR");
}

if (askNumber > 0) {
  console.log("POSITIVE");
} else if (askNumber < 0) {
  console.log("NEGATIVE");
} else if (askNumber == 0) {
console.log("ZERO");
}