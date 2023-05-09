// Easy (1)
let randomNumArray = [2, 4, 7, 11, 15, 16];
let randomNumArrayEvens = randomNumArray.filter(function (n) {
  // filter applied
  return n % 2 == 0; // returns numbers that don't have a remainder
});
let randomNumArrayOdds = randomNumArray.filter(function (n) {
  // filter applied
  return n % 2 >= 1; // returns numbers that di have a remainder
});
console.log("Even Numbers: " + randomNumArrayEvens);
console.log("Odd Numbers: " + randomNumArrayOdds);

// Easy (2)
let randomNumArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let randomNumArrayPrimes = randomNumArray2.filter(function (n) {
  // filter applied
  for (let i = 2; n > i; i++) {
    // for loop ran to check if each number in an array can only be divided within itself
    if (n % i == 0) {
      return false;
    } else return n > 1;
  }
});
console.log("Prime Numbers: " + randomNumArrayPrimes);

// Medium (1)
function vowelChecker(x) {
  if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u") {
    // if statement ran to equal a string to a vowel
    console.log(x + " is a vowel."); // prints the result if it's a vowel
  } else {
    console.log(x + " is not a vowel."); // prints result if it isn't a vowel
  }
}
vowelChecker("e");

// Medium (2)
function anagramFinder(a, b) {
  if (a.length !== b.length) {
    // if statemtent comes out false if length of 2 strings are different
    console.log(false);
  } else if (a.split("").sort().join("") === b.split("").sort().join("")) {
    // split, sort, and join are used to detect same characters in a string
    console.log(true); // boolean returns boolean statements if 2 strings are anagrams
  } else {
    console.log(false);
  }
}
anagramFinder("silent", "listen");

// Medium (3)
function gcdChecker(x, y) {
  for (
    let i = 1;
    i <= x && i <= y;
    i++ // for loop ran to find largest number both can be divided by
  )
    if (x % i == 0 && y % i == 0) {
      // checks to make sure that no remainders are found within the divisor and parematers
      divisor = i;
    }
  console.log(divisor);
}
gcdChecker(336, 360);

// Medium (4)
let car = {
  // object created
  make: "Altima",
  model: "Nissan",
  year: "2013",
  mileage: 95000,
  color: "Silver",

  driveToWork: () => {
    // method that adds 33 to the current mileage
    console.log(`Old Mileage: ${car.mileage}`);
    car.mileage = car.mileage + 33;
    console.log(`New Mileage: ${car.mileage}`);
  },
  driveAroundTheWorld: () => {
    // method that adds 24000 tot the current mileage
    console.log(`Old Mileage: ${car.mileage}`);
    car.mileage = car.mileage + 24000;
    console.log(`New Mileage: ${car.mileage}`);
  },
  runErrands: () => {
    // method that adds 30 to the current mileage
    console.log(`Old Mileage: ${car.mileage}`);
    car.mileage = car.mileage + 30;
    console.log(`New Mileage: ${car.mileage}`);
  },
};

car.driveToWork();
car.driveAroundTheWorld();
car.runErrands();

// Hard (1)


function matchingBrackets(str) {
  let array = [];

  let open = { // open brackets are defined
    "(": ")",
    "[": "]",
    "{": "}",
  };

  let closed = { // closed brackets are defined 
    "}": true,
    ")": true,
    "]": true,
  };

  for (let s = 0; s < str.length; s++) { // for loop is ran ro check characters in the string
    let char = str[s];

    if (open[char]) { 
      array.push(char); // pushes the character from the open variable
    } else if (closed[char]) {
      if (open[array.pop()] !== char) { // returns false if the character doesn't equal to any character in the open variable
        return (false);
      }
    }
  }
  return array.length === 0;
}

console.log(matchingBrackets("(hello)"));
console.log(matchingBrackets("(hello]"));