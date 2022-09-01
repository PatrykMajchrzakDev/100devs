// Improved hello
// Complete the following program so that it asks the user for his first and last names, then show the result of the sayHello() function.

// Say hello to the user
function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}

// const firstName = prompt("Whats your first name?");
// const lastName = prompt("Whats your last name?");

// console.log(sayHello(firstName, lastName));

// // TODO: ask user for first and last name
// // TODO: call sayHello() and show its result

// =========================2================================

// Number squaring
// Complete the following program so that the square1() and square2() functions work properly.

// // Square the given number x
function square1() {
  for (let i = 0; i < 11; i++) {
    if (i === 0) {
      console.log(1);
    } else {
      console.log(Math.pow(i, 2));
    }
  }
}

// Square the given number x
const square2 = (x) => {
  console.log(Math.pow(x, 2));
};

// console.log(square1(0)); // Must show 0
// console.log(square1(2)); // Must show 4
// console.log(square1(5)); // Must show 25

// console.log(square2(0)); // Must show 0
// console.log(square2(2)); // Must show 4
// console.log(square2(5)); // Must show 25
// When it's done, update the program so that it shows the square of every number between 0 and 10.

// Writing 10 dumb calls to square() is forbidden! You know how to repeat statements, don't you? ;)

// Minimum of two numbers
// Let's pretend the JavaScript Math.min() function doesn't exist. Complete the following program so that the min() function returns the minimum of its two received numbers.

// // TODO: write the min() function
let min = (num1, num2) => {
  return Math.min(num1, num2);
};

// console.log(min(4.5, 5)); // Must show 4.5
// console.log(min(19, 9));  // Must show 9
// console.log(min(1, 1));   // Must show 1

// Calculator
// Complete the following program so that it offers the four basic arithmetical operations: addition, subtraction, multiplication and division. You can use either a function declaration or a function expression.

function calculate(num1, operation, num2) {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Infinity";
      } else {
        return num1 / num2;
      }
    default:
      return "Wrong operation";
  }
}

// console.log(calculate(4, "+", 6));  // Must show 10
// console.log(calculate(4, "-", 6));  // Must show -2
// console.log(calculate(2, "*", 0));  // Must show 0
// console.log(calculate(12, "/", 0)); // Must show Infinity

// Circumference and area of a circle
// Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.

// Here are some tips for solving this exercise:

// Circumference and area calculation formulas should be part of your secondary school memories... Or a Google click away :)
// The value of number π (Pi) is obtained with Math.PI in JavaScript.
// You might want to use the exponentiation operator ** to perform computations.
// console.log(2 ** 3); // 8: 2 * 2 * 2
// console.log(3 ** 2); // 9: 3 * 3

function calcCircleCircumAndArea(r) {
  let circuference = (r) => {
    return 2 * Math.PI * r;
  };

  let area = (r) => {
    return Math.PI * r * r;
  };

  console.log(`Circumference: ${circuference(r)} and Area: ${area(r)}`);
}

// Looping a triangle
// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

function makeTriangle() {
  let sharp = "";
  for (let i = 0; i < 7; i++) {
    if (sharp.length < 7) {
      sharp += "#";
    }
    console.log(sharp);
  }
}

// Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

// function chessPattern() {
//   let rows = prompt("Give number of rows: ");
//   let columns = prompt("Give number of colums: ");
//   rows = rows / 2;
//   columns = columns / 2;
//   let pattern = "";
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < columns + 1; j++) {
//       if (j < columns) {
//         pattern += " #";
//       } else {
//         pattern += "\n";
//       }
//     }
//     for (let k = 0; k < columns + 1; k++) {
//       if (k < columns) {
//         pattern += "# ";
//       } else {
//         pattern += "\n";
//       }
//     }
//   }

//   console.log(pattern);
// }

// Recursion
// We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

// Zero is even.

// One is odd.

// For any other number N, its evenness is the same as N - 2.

// Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

// // Your code here.

// console.log(isEven(50));
// // → true
// console.log(isEven(75));
// // → false
// console.log(isEven(-1));
// // → ??

function isEven(number) {
  if (number === 0) {
    return true;
  } else if (number === 1) {
    return false;
  } else {
    return isEven((number -= 2));
  }
}

// Bean counting
// You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

// // Your code here.

// console.log(countBs("BBC"));
// // → 2

function countBs(word) {
  let quantityOfBs = 0;
  for (let i = 0; i <= word.length; i++) {
    if (word[i] === "B") {
      quantityOfBs++;
    }
  }
  console.log(quantityOfBs);
}

function countChar(word, char) {
  let quantityOfChars = 0;
  for (let i = 0; i <= word.length; i++) {
    if (word[i] === char) {
      quantityOfChars++;
    }
  }
  console.log(quantityOfChars);
}
