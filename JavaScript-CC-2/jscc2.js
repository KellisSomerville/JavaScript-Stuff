// Function that removes negative numbers from an array

let randomNumbsArray = [1, -9, 3, -7, -4, 2, -3, 8, -6]; // Random array of numbers
let negativeNumbsRemoved = randomNumbsArray.filter(removeNegativeNumbs); // Applies the function by filtering out numbers greater than 0

function removeNegativeNumbs(numbers) {
    return numbers > 0; // Returns numbers in the array that are greater than 0
}

console.log(randomNumbsArray); // Logs the original array
console.log("New Array:" + " " + negativeNumbsRemoved); // Logs the array without the negative numbers