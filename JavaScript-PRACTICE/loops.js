// // Array of zoo animals
// var zooAnimals = ["Tiger", "Elephant", "Rhino", "Panda"];

// // Loop that goes through the array to print out each animal
// for (var i = 0; i < zooAnimals.length; i++) {
//   console.log(zooAnimals[i]);
// }

// //===========================================================

// // Loop from 0-4
// for (var i = 0; i < 5; i++) {
//   console.log("I Am Number" + " " + i + ".");

//   // Equivalent

//   // console.log("I am 0");
//   // console.log("I am 1");
//   // console.log("I am 2");
//   // console.log("I am 3");
//   // console.log("I am 4");
// }

// // This is our starting myFarm array
// var myFarm = ["goat", "cow", "horse", "bull", "chicken"];

// // Created a variable to hold your ARRAY LENGTH
// var arrayLength = myFarm.length;

// // Looping through our myFarm array
// for (var j = 0; j < arrayLength; j++) {
//   // Console out the farm animal in the current index
//   console.log(myFarm[j]);

//   // The first character in the current farm but with the animals that start with the letter "c" or "o"
//   if (myFarm[j].charAt(0) === "c" || myFarm[j].charAt(0) === "o") {
//     console.log(myFarm[j]);
//   }
// }

// Arrays can store functions and then we can loop through functions
function sayHello() {
  console.log("Hello!");
}

function askAnything() {
  console.log("How you been my guy?");
}

function sayGoodbye() {
  console.log("Bye, have a great time!");
}

var greetings = (sayHello, askAnything, sayGoodbye);

for (var k = 0; k < greetings.length; k++) {
  greetings[k]();
}

// Looping through objects
let animeChars = [
  { name: "Killua", age: 14 },
  { name: "Gon", age: 14 },
  { name: "Leorio", age: 19 },
  { name: "Kurapika", age: 17 },
  { name: "Luffy", age: 18 },
  { name: "Sanji", age: 21 },
];

function defeatGoku(array) {
    for (var l = 0; l < array.length; l++) {
        if (array[l].age >= 18) {
            console.log(`${array[l].name} can defeat Goku easily.`);
        } else {
            console.log(`${array[l].name} can't defeat Goku easily.`)
        }
    }
}

defeatGoku(animeChars);