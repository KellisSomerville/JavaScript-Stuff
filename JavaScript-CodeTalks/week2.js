// CODE TALKS: JAVASCRIPT WEEK 2
//---------- Create a function that finds the highest number in an array

function findMax(ar) { // Function that finds highest number in an array
  var max = ar[0]; // Highest number will equal the first index (0) in an array

  // For loop is implemented
  for (var i = 0; i < ar.length; i++) { // i is set to 0, every iteration checks if the value in the next index is higher than the previous index
    if (ar[i] > max) { // Checks if i is greater than the value currently contained in the variable
      max = ar[i]; // highest number equals to the 
    }
  }

  return max; // Returns the highest number in the an array
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1]; // Random array is created
var max = findMax(ar); // highest number e will be the result of the function 
console.log("Max: ", max); // Prints: 90

