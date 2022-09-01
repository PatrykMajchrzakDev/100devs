// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday;
favHoliday = "Christmas";
console.log(favHoliday.toUpperCase());
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let someVariable = "something";
console.log(someVariable.slice(-3));
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function subFiveNumsAndGetAbs(n1, n2, n3, n4, n5) {
  let total = 100;
  total -= n1 + n2 + n3 + n4 + n5;
  alert(Math.abs(total));
}
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function findLowestAndHighestNums(n1, n2, n3) {
  let arr = [n1, n2, n3];
  arr.sort((a, b) => {
    return a - b;
  });
  console.log(arr[0], arr[arr.length - 1]);
  //OR use Math.min() and Math.max()
}

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headOrTail() {
  let random = Math.random().toFixed(1) * 10;
  random < 5 ? console.log("heads") : console.log("tails");

  //OOOOOOR
}
const coinFlip = (_) => (Math.random() < 0.5 ? "heads" : "tails");
//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function clgHOT(x) {
  let i = 0;
  while (i < x) {
    console.log(coinFlip());
    i++;
  }
}
