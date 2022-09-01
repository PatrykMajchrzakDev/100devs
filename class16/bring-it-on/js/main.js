// *Variables*
// Create a variable and console log the value
let someVariable = 1;
console.log(someVariable);
// Create a variable, add 10 to it, and alert the value
let num = 11;
num += 10;
alert(num);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subNums(a, b, c, d) {
  alert(a - b - c - d);
}
// Create a function that divides one number by another and returns the remainder
function getReminder(a, b) {
  return a % b;
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addNums(a, b) {
  if (a + b > 50) {
    alert("Jumanji");
  }
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplierNums(a, b, c) {
  result = a * b * c;
  if (result % 3 === 0) {
    alert("ZEBRA");
  }
}
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function logXTimes(word, num) {
  for (i = 1; i <= num; i++) {
    console.log(`${word}`);
  }
}
