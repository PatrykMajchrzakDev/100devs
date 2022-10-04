//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console.
function reverseList(arr) {
  return arr.reverse();
}
//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// function checkArrays(a, b) {
//   let sumOfA = 0;
//   let sumOfB = 0;
//   a.forEach((item) => {
//     sumOfA += item * item;
//   });

//   b.forEach((item) => {
//     sumOfB += item * item * item;
//   });
//   return sumOfA > sumOfB ? true : false;
// }

function checkArrays(a, b) {
  return (
    a.reduce(total, (curr) => total + curr ** 2, 0) >
    b.reduce(total, (curr) => total + curr ** 3, 0)
  );
}

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
// function checkMultipleOfItemIndex(arr) {
//   let result = [];
//   arr.forEach((item, index) => {
//     if (item % index === 0) {
//       result.push(item);
//     }
//   });
//   return result;
// }

function checkMultipleOfItemIndex(arr) {
  return arr.filter((item, index) => item % index === 0);
}

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

// function getSumOffArrayElements(arr) {
//   let total = 0;
//   arr.forEach((item) => {
//     total += Number(item);
//   });
//   return total;
// }

function getSumOffArrayElements(arr) {
  return arr.reduce((total, curr) => total + Number(curr), 0);
}
