// Function that removes spaces in a string
var str1 = "2003 1967 2000 1964"; // String contains random years
function spaceRemover(str1) {
  return str1.replaceAll(" ", ""); // Returns the removed space in between the random years
}
console.log(spaceRemover(str1)); // Logs the dates without any space between them

// Function that reuturns a boolean if a number is divisible by 10
var randomNum = 48; // Variable can be any random number
function quotientOf10(randomNum) {
  return Boolean(randomNum % 10 == 0); // Boolean checks if randomNum value can be divisble by 10
}
console.log(quotientOf10(randomNum)); // Logs the quiotentof10 function based on Boolean's result

// Function that returns the number of vowels in a string
var str2 = "adklejijeoemiduhjndjcho"; // String
function vowelCounter(str2) {
  return str2.match(/[aeoiu]/gi)?.length ?? 0; // Records and returns the amount of vowels found in the string
}
console.log(vowelCounter(str2)); // Logs the number of vowels contained in the string
