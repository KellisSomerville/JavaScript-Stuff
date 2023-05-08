// Entry Level Scope;

//This variable is in our global scope
var exposed = "This string is visible eveywhere";

function firstFunction(message) {
  // Inside first function, I can see both exposed and // message
  console.log(message + exposed);
}
firstFunction("Oh snap!" + " ");
console.log(message); // This can only be accessed in our function

function secondFunction(exposed) {
    // Second function *should* be able to see the exposed
    // Variable declared above, but we've "shadowed" it!
    console.log(exposed);
}
secondFunction("This isn't what I thought I wrote...");
// Finally, keep in mind that we can use that variable but can change the outcome 

// Keep in mind that using "return" lets us give something back to whomever called the function
function thirdFunction(message) {
    return message + exposed;
}

// Try to do thing this way, instead of using console.log inside of functions
var message = thirdFunction("Oh my!" + " ");
console.log(message);

// // Advanced scope
// var name = "Luffy";
// var age = 19;
// var languages = ["English", "Spanish", "Japanese"];

// function firstFunction(message) {
//     console.log(message + " " + name + " " + "is" + " " + age + ".")
// }
// firstFunction("Oh my!");

// function secondFunction(name) {
//     console.log(name + " " + "is" + " " + age + " " + "years old.");
// }
// secondFunction("Mario");

// function thirdFunction(age) {
//     return name + " " + "is" + " " + age + " " + "years old.";
// }
// console.log(thirdFunction(100))

// // CHALLENGE
// var person = {
//   firstName: "Kellis",
//   lastName: "Somerville",
//   fullName: function () {
//     console.log(this.firstName + " " + this.lastName);
//   },
// };

// person.fullName();
