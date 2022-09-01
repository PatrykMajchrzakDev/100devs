// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let boolValue = true;
alert(boolValue);

// Declare a variable, reassign it to your favorite color, and console log the value
let myColor = "blue";
myColor = "green";

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function mathSomething(nb1, nb2, nb3, nb4) {
  return (nb1 + nb2 + nb3) / nb4;
}

mathSomething(1, 2, 3, 4);

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function math2(a, b) {
  console.log(Math.pow(a, b));
}

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function condtionalFunc(var1, var2) {
  if (var1) {
    alert(var2);
  } else {
    console.log(var2);
  }
}

const alertOrLog = (boolVal, str) => (b ? alert(boolVal) : console.log(str));

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
function fizzbuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}
