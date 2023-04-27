// Activity 1:
// Create a `for` loop that adds numbers 1-10 to an array.
// While looping through to create this array, `console.log()` each element in the array
// Structure of a for loop:
// for ([initialExpression]; [condition]; [incrementExpression]) {}
// The increment expression can use ++ to add 1 to the numberIterator
const numbers = [];
for (let numberIterator = 1; numberIterator <= 10; numberIterator++) {
  console.log(numberIterator);
  numbers.push(numberIterator);
}
// Should print:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// Activity 2:
// Using the array created in activity 1, `console.log()` only the even numbers in the array.
// Hint: Arrays are zero-indexed (array index starts at `0`, instead of `1`)
for (let loopIterator = 0; loopIterator < numbers.length; loopIterator++) {
  // % is the modulo operator that divides the numbers and returns the remainder
  if (numbers[loopIterator] % 2 === 0) {
    console.log(numbers[loopIterator]);
  }
}
// Should print:
// 2
// 4
// 6
// 8
// 10
