//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function evenNumsArray(arr) {
  let arrayOfEvenNums = [];
  arr.forEach((num) => {
    if (num % 2 === 0) {
      arrayOfEvenNums.push(num);
    }
  });
  console.log(arrayOfEvenNums);
}

evenNumsArray([1, 2, 3, 4, 5, 6, 7]);

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNums = arr.map((num) => {
  return num % 2 === 0;
});
