// // VERY EASY
// let numb1 = 5;
// let numb2 = 10;

// function min (numb1, numb2) {
//     return Math.min(numb1, numb2); // Returns minimum from numb1 and num2 values
// }

// console.log(min (numb1, numb2));

// EASY


// MEDIUM
let insertMonthNum = prompt("Type A Number From 1-12 To Get The Month Back");

if (insertMonthNum >= 1 && insertMonthNum <= 12) {
  console.log("Valid Number!");
} else {
  alert("Invalid Number! Try Again!");
  window.location.reload();
}

if ((insertMonthNum == 1)) {
  console.log(
    "Month" + " " + insertMonthNum + " " + "of every year is Janurary."
  );
} else if ((insertMonthNum == 2)) {
  console.log(
    "Month" + " " + insertMonthNum + " " + "of every year is February."
  );
} else if ((insertMonthNum == 3)) {
  console.log("Month" + " " + insertMonthNum + " " + "of every year is March.");
} else if ((insertMonthNum == 4)) {
  console.log("Month" + " " + insertMonthNum + " " + "of every year is April.");
} else if ((insertMonthNum == 5)) {
  console.log("Month" + " " + insertMonthNum + " " + "of every year is May.");
} else if ((insertMonthNum == 6)) {
  console.log("Month" + " " + insertMonthNum + " " + "of every year is June.");
} else if ((insertMonthNum == 7)) {
  console.log("Month" + " " + insertMonthNum + " " + "of every year is July.");
} else if ((insertMonthNum == 8)) {
  console.log(
    "Month" + " " + insertMonthNum + " " + "of every year is August."
  );
} else if ((insertMonthNum == 9)) {
  console.log(
    "Month" + " " + insertMonthNum + " " + "of every year is September."
  );
} else if ((insertMonthNum == 10)) {
  console.log(
    "Month" + " " + insertMonthNum + " " + "of every year is October."
  );
} else if ((insertMonthNum == 11)) {
  console.log(
    "Month" + " " + insertMonthNum + " " + "of every year is November."
  );
} else if ((insertMonthNum == 12)) {
  console.log(
    "Month" + " " + insertMonthNum + " " + "of every year is December."
  );
}
