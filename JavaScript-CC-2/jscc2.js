// Function that removes negative numbers from an array

let numbsArray = [1, -9, 3, -7, -4, 2, -3, 8, -6]; // Array of random numbers
function removeNegativeNumbers(numbsArray) { // Function that removes negative numbers
  return numbsArray.filter(function (positiveNumber) { // Filters numbers from the array
    return positiveNumber > -1; // Returns numbers that are greater than -1
  });
}

let filteredArray = removeNegativeNumbers(numbsArray); // The filtered array is what we got from the function

console.log(filteredArray); 
