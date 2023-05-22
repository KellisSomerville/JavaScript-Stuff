// Write a JavaScript program to construct the following pattern, using a nested for loop.

// Output
// *
// * *
// * * *
// * * * *
// * * * * *

// FIRST ATTEMPT
let star = "*";
for (let i = 0; i < 1; i++) {
  console.log(star);
}
for (let i = 0; i < 2; i++) {
  console.log(star);
}
for (let i = 0; i < 3; i++) {
  console.log(star);
}
for (let i = 0; i < 4; i++) {
  console.log(star);
}
for (let i = 0; i < 5; i++) {
  console.log(star);
}

// =====================================================

// problem number 2: Write a JavaScript program to get integers in the range (x, y) using recursion.
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]

function range(x, y) {
  let result = [];
  for (let i = x + 1; i < y; i++) {
    //
    result.push(i);
  }
  return console.log(result);
}

range(2, 9);

let newarray = [];

function recursionFunc(x, y) {
  if (x < y - 1) {
    x += 1;
    newarray.push(x);
    recursionFunc(x, y);
  }
  return newarray;
}

console.log(recursionFunc(2, 9));

console.log(recursionFunc(1, 15));

// =====================================================

// Function that doubles numbers in an array if it's a multiple of 6, the triple the element
// Return a new array with the new numbers. Use a for loop to iterate through the array

// STEPS
// Function should take an array as an argument
// Create a for loop that iterates through the array
// Check to see if the number is a multiple of 6
// If not a multiple of 6, double each number as we come to it
// If multiple of 6, triple it
// Add number to the new array
// Return new array

function doubleOrNothing(arr) {
  let newArr = [];
  // for (where we start, where we stop or is it ture/false, how much we are increasing by)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 6 == 0) {
      newArr.push(arr[i] * 3);
    } else if (arr[i] % 6 !== 0) {
      newArr.push(arr[i] * 2);
    }
  }
  return newArr;
}

let randomArray = [6, 7, 12, 13, 18, 19, 24, 25];
console.log("Old Array: " + randomArray);
console.log("New Array: " + doubleOrNothing(randomArray));

// Find the Vowels
// Understanding the challenge
// A function that takes a string as argument and returns the number of vowels contained in that string.
// The vowels are “a”, “e”, “i”, “o”, “u”.

// =====================================================

// create a function that takes a string as an argument and determines whether a string is a palindrome
// output: if the palindrome is true or false (Boolean)
// palindrome is whether a string is the same forward and backward.

// =====================================================

//Write a JavaScript program to sort an array of JavaScript objects.
//Sample Object :
var library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

function sort(library) {
  let newlibrary = library.sort((a, b) => a.libraryID - b.libraryID);
  return newlibrary;
}
console.log(sort(library));

// Expected Output:
// [[object Object] {
//   author: "Walter Isaacson",
//   libraryID: 4264,
//   title: "Steve Jobs"
// }, [object Object] {
//   author: "Suzanne Collins",
//   libraryID: 3245,
//   title: "Mockingjay: The Final Book of The Hunger Games"
// }, [object Object] {
//   author: "The Road Ahead",
//   libraryID: 1254,
//   title: "Bill Gates"
// }]

// =====================================================

// (4) Given an array of numbers create a function that can be used as a call back for a filter method to create a new array of odd numbers
function oddNumbers(arr2) {
  let oddNumbersPlacement = [];

  for (i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 !== 0) {
      oddNumbersPlacement.push(arr2[i]);
    }
  }
  return oddNumbersPlacement; // Place return statement out of for loop so the loop can actually loop iterations
}

console.log(oddNumbers([1, 3, 4, 5, 7, 8, 9]));

// =====================================================

// Write a JavaScript program that returns a subset of a string.
// Sample Data: dog
// Expected Output: [“d”, “do”, “dog”, “o”, “og”, “g”]

// =====================================================

// Code Concept Questions:

// Q1: What will be the result of Op 1 in the following code (Have them explain their answer and walk you through the code)
// 3
// Q2: What will be the result of Op 2 in the following code (Have them explain their answer and walk you through the code)
// 20
// function divideByHalf(sum){
//    console.log(Math.floor(sum / 2));
//  }
//   function multiplyBy2(sum){
//    console.log(sum * 2);
//  }
//   function operationOnSum(num1,num2,operation){
//    var sum = num1 + num2;
//    operation(sum);
//  }
//  //Op 1
//  operationOnSum(3, 3, divideByHalf);
//  //op 2
//  operationOnSum(5, 5, multiplyBy2);

// =====================================================

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
let sheeps = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

function sheepCounter(list) {
  let sheepPresent = 0;
  let sheepAbsent = 0;

  for (let i = 0; i < list.length; i++) {
    if (list[i] === true) {
      sheepPresent++;
    } else {
      sheepAbsent++;
    }
  }
  return (
    "There are " +
    sheepPresent +
    " sheep present and " +
    sheepAbsent +
    " sheep absent on the list."
  );
}

console.log(sheepCounter(sheeps));

// =====================================================

// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// i.e.: friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

let friends = ["Ryan", "Kieran", "Jason", "Yous", "Zoro"];

function areFriends(friendList) {
  let realFriends = [];

  for (let i = 0; i < friendList.length; i++) {
    if (friendList[i].length === 4) {
      realFriends.push(friendList[i]);
    }
  }
  return realFriends;
}

console.log("My real friends are: " + areFriends(friends));

// =====================================================

// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5
