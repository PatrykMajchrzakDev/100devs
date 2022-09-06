//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [1, 2, 3, 4, 5, 6, 7];
function sumItems(arr) {
  let start = 0;
  let total = arr.reduce((prev, curr) => prev + curr, start);
  console.log(total);
}
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squaredArrItems(arr) {
  let total = arr.map((item) => {
    return item * item;
  });
  console.log(total);
}

//Create a function that takes string
//Print the reverse of that string to the console
let str = "abcdefgh";
let arrStr = str.split("").reverse().join("");
console.log(arrStr);

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function checkPalindrome(str) {
  if (str === str.split("").reverse().join("")) {
    return true;
  }
  return false;
}
