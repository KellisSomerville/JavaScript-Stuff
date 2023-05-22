let numsArray = [4, 5, 6, 7, 0, 1, 2]; // random array of numbers

function targetFinder(numbers, target) {
  // function made with parameters consisting of numbers and the target

  for (let i = 0; i < numsArray.length; i++) {
    // for loop ran to iterate through array
    if (numbers[i] === target) {
      // if the target is equal to the number iterated, it returns the index, if not it returns -1
      return i;
    }
  }
  return -1;
}

console.log(targetFinder(numsArray, 0)); // output: 4
console.log(targetFinder(numsArray, 3)); // output: -1
