var num1 = 1;
var num2 = 2;

// Show how or what the conditional looks like and works
if (num1 === num2) {
  console.log(true);
} else {
  console.log(false);
}

var num3 = 3;

if (num1 + num2 === num3) {
  console.log(true);
} else {
  console.log(false);
}

// Displays a message in our console
if (num1 + num2 === num3) {
  console.log(`${num1} + ${num2} = ${num3} is` + true);
} else {
  console.log(`${num1} + ${num2} = ${num3} is` + false);
}

// Grade examples with functions

function checkGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(checkGrade(85));
console.log(checkGrade(99));
console.log(checkGrade(50));

// Ternerary Version of grades
function convertGrade(numGrade) {
  return numGrade >= 90
    ? "A"
    : numGrade >= 80
    ? "B"
    : numGrade >= 70
    ? "C"
    : numGrade >= 60
    ? "D"
    : "F";
}

console.log(convertGrade(75));
console.log(convertGrade(82));
console.log(convertGrade(56));

// palindrome example
function isPalindrome(str) {
  return str.toLowerCase() === str.toLowerCase().split("").reverse().join("")
    ? "Palindrome."
    : "Not a palindrome.";
}

console.log(isPalindrome("racecar")); // Output: Palindrome.
console.log(isPalindrome("hello")); // Output: Not a palindrome.
console.log(isPalindrome("A man a plan a canal Panama")); // Output: Palindrome.