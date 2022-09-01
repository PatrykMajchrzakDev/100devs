//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let movies = ["Avatar", "John Wick", "Grandfather"];
movies.forEach((movie) => console.log(movie));

//Create and array of numbers
let arrOfNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Return a new array of numbers that includes every even number from the previous Arrays
let evenNums = [];
arrOfNums.map((item) => (item % 2 === 0 ? evenNums.push(item) : null));
console.log(evenNums);
//OOOOOOOORRRR
let evenNumbers = (arr) => arr.filter((num) => num % 2 === 0);

//Create a function that takes in an array of numbers
function nums(arr) {
  let arr = arr.sort((a, b) => a - b);
  console.log(arr);
  //Alert the sum of the second lowest and the second highest number
  alert(arr[1] + arr[arr.length - 2]);
}
