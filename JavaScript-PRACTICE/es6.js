var person = {
  name: "Kellis",
  saySomething: function () {
    console.log(this.name + " is cooking something special.");
    setTimeout(function () {
      console.log(this.name + "!");
    }, 4000);
  },
};

person.saySomething();

// Section - Avoid using arrow functions with onjects
var dog = {
  name: "Gojo",
  sound: "Woof!",
  makeSound: () => console.log(this.sound),
  readTag: () => console.log("The dog tag reads: " + this.name + "."),
};

dog.makeSound();
dog.readTag();

// Truthy and Falsy
console.log(true || true);
console.log(true && false);
console.log(0 && "lmfao");
console.log(false || "IDK MY BFF NAMI!");
// Numbers < Strings < Booleans

//2
const likesVeggies = false;
const meal = likesVeggies ? "Veggie Stir Fry" : "Cheeseburger";

console.log(meal);

//3
const feelingWell = false;
const goingOutTonight = feelingWell
  ? (goingOutTonight = feelingWell)
  : "Not tonight, Gotta work on the project.";

console.log(goingOutTonight);
