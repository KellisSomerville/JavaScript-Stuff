// Functions

// Create a function called Adder, which is going to take 3 arguments
function adder(x, y, z) {
  return x + y + z; // Created a function named Adder with parameters x, y, z
}

function multiplier(a, b, c) {
  return a * b * c; // Created a function named multiplier that returns multiplied output
}

console.log(adder(3, 4, 5));
console.log(multiplier(4, 9, 3));

// Create a function called isString that takes 3 arguments (x, y, z)
function isString(x, y, z) {
  // isString checks if each argument is a string using Typeof
  // If each argument is a string it will note that

  if (typeof x === "string" && typeof y === "string" && typeof z === "string") {
    console.log("They're all strings, chief.");
  } else {
    console.log("They're all not strings, chief.");
  }
  // If any of them aren't a string, it will note that
}

isString("Luffy", "Zoro", "Sanji");
isString(10, "Going Merry", "1000 Sunny");

// Vowel checker example
function vowelChecker(x) {
  // vowelChecker will grab the first letter (character)...
  var firstChar = x.toLowerCase().charAt(0);

  // Then check if that first letter is a vowel
  if (
    firstChar === "a" ||
    firstChar === "e" ||
    firstChar === "i" ||
    firstChar === "o" ||
    firstChar === "u"
  ) {
    console.log("The first letter is a vowel, chief.");
  } else {
    console.log("The first letter is whatever the C word is for a non-vowel.");
  }
}

vowelChecker("Nah");
vowelChecker("INCOMING!");