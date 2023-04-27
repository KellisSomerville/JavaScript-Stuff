// LET vs. CONST 

// VAR is global and function scoped

// LET and CONST are both block and function scoped (introduced in 2015 with ES6)

// LET
let strawHat = "Sanji";
strawHat = "Zoro"; // Can be updated
console.log(strawHat); // Prints "Zoro"

let strawHat = "Sanji";
let strawHat = "Zoro"; 
console.log(strawHat); // strawHat as already been declared

let strawHat = "Sanji";

if (true) {
    let strawHat = "Zoro";
    console.log("Conditional Prints:" + " " + strawHat); // Prints "Zoro"
}
    console.log(strawHat); // Prints "Sanji"
    


// CONST
const strawHat = "Sanji";
strawHat = "Zoro";
console.log(strawHat); // strawHat is assigned to a constant variable

const strawHat = "Sanji";
const strawHat = "Zoro";
console.log(strawHat); //  Prints "Sanji"

if (true) {
    const strawHat = "Sanji";
    console.log(strawHat);
}