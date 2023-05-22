let coins1 = [1, 2, 5]; // 1st number array
let coins2 = [2]; // 2nd number array

// ATTEMPT #1
// function fewestNumber(arr, result) {

//     for (let i = 0; i < arr.length; i++) {
//         sum = (arr[2] * arr[1]) + arr[0]
//         if (result === sum) {
//             return arr.length;
//             } else {
//             return -1
//             }
//         }
//     }

function fewestNumber(coins, amount) {
  let arr = new Array(amount + 1).fill(Infinity); // New array made to store minimum # of coins
  arr[0] = 0; // Set the new array to 0 because no coins can make up 0

  for (let i = 1; i <= amount; i++) {
    // for loop loops from 1 to amount
    for (let j = 0; j < coins.length; j++) {
      // for loop loops throught coins array
      if (coins[j] <= i) {
        arr[i] = Math.min(arr[i], arr[i - coins[j]] + 1);
        // if the statement is met, arr[i] is updated with least amount of coins needed to reach the amount. +1 is used to account for using the current coin
      }
    }
  }
  return arr[amount] === Infinity ? -1 : arr[amount]; // if the amount is infinity, it returns a -1 and if not, it returns the array amount
}

console.log(fewestNumber(coins1, 11)); // output: 3
console.log(fewestNumber(coins2, 3)); // output: -1
