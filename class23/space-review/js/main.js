//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [1, 3, 2, 3, 4, 5, 6, 7, 8];
let total = arr.reduce((prev, curr) => prev + curr, 0);
console.log(total);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let squareNums = function (arr) {
  let total = arr.map((item) => {
    return item * item;
  });
  return total;
};
//Create a function that takes string
//Print the reverse of that string to the console
function revString(str) {
  return str.split("").reverse().join("");
  // let arrOfString = Array.from(str)
  // arrOfString.reverse.join()
}

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function checkPalindrome(str) {
  return str === revString(str);
}
