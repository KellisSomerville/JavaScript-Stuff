let randomArray = ["One", 2, "Three", 4, "Five"];
// INDEX # ======  0      1   2       3   4

// INDEX VALUES
console.log(randomArray[0]); // Prints "One"
console.log(randomArray[3]); // Prints 4

// METHODS
console.log(randomArray.shift()); // Prints "One"
console.log(randomArray.pop()); // Prints "Five"
console.log(randomArray.indexOf("One")); // Prints 0 
console.log(randomArray.indexOf("Six")); // Prints -1