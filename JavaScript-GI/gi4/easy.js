function arrAverage(arr) {
  // function that finds the average in an array
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    // for loop runs through each number in the array
    sum += arr[i]; // sum adds each number in the array after looping
  }
  return sum / arr.length; // takes the sum of the array and divides it by the length of the array
}
console.log(arrAverage([1, 4, 7])); // output: 4
console.log(arrAverage([10, 5])); // output: 7.5
console.log(arrAverage([1.5, 3, 2.5, 1])); // output: 2
