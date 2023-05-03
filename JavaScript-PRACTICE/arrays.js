// Array of zoo animals
let zooAnimals = ["Zebra", "Rhino", "Giraffe", "Owl", "Monkey"];
console.log(zooAnimals.length); // Prints the amount of items in the array
console.log(zooAnimals[1]); // Prints Rhino, Arrays start at 0
console.log(zooAnimals[5]); // Prints undefined, index doesn't exist in the array

let animals = ["Parrot", "Cat", "Dog"];
console.log(animals.length);
console.log(animals[1]);
console.log(animals.length - 1); // Subtracts the number of items in the array
console.log(Boolean(animals[0] == "Fox"));

console.log(animals.indexOf("Anything"));
console.log(animals.indexOf("Dog"));

// ARRAY CHALLENGE #1
let myColors = ["Purple", "Blue", "Black", "Cyan"];

console.log(myColors);
console.log(
  myColors[0] + " " + myColors[1] + " " + myColors[2] + " " + myColors[3]
);

// ARRAY CHALLENGE #2
let podArray = ["Lucy", "Tyler", "Jimmy", "Bam", "Max"];

if (podArray.includes("Lucy") == true) {
  console.log("Lucy is the POD leader.");
} else {
  console.log("Lucy is not the POD leader.");
}

// ARRAY CHALLENGE #3
let myPod = ["James", "Mike", "Melody", "Shane", "Tori"];

if (myPod.indexOf("Tori") !== -1) {
  myPod.pop();
  console.log(myPod);
} else {
  console.log("R2Hs Pods Rock!");
}

// ARRAY CHALLENGE #4
let myGroup = [
  "Kellis",
  "Curry",
  "Thompson",
  "Green",
  "Wiggins",
  "Looney",
  "Payton",
  "Poole",
  "DiVincenzo",
  "Kuminga",
  "Moody",
  "Iguodala",
  "Green",
  "Baldwin Jr.",
  "Lamb",
];
let warriorsRoster = myGroup.length - 1;
console.log(
  myGroup[0] + " " + "has" + " " + myGroup.length + " " + "people in his pod."
);
console.log(
  "The Warriors currently have" +
    " " +
    warriorsRoster +
    " " +
    "players on their roster currently."
);
