// Musketeers
// Write a program that:

// Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
// Shows each array element using a for loop.
// Adds the "D'Artagnan" value to the array.
// Shows each array element using the forEach() method.
// Remove poor Aramis.
// Shows each array element using a for-of loop.
function musketeers() {
  let musketeers = ["Athos", "Porthos", "Aramis"];
  musketeers.push("D'Artagnan");
  musketeers.forEach((musketeer) => {
    console.log(musketeer);
  });
  musketeers.splice(musketeers.indexOf("Aramis"), 1);
  console.log(musketeers);
}

// Sum of values
// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).

// const values = [3, 11, 7, 2, 9, 10];

function showSumOfArray(array) {
  total = 0;
  array.forEach((number) => {
    total += number;
  });
  console.log(total);
}

// Array maximum
// Write a program that creates the following array, then calculates and shows the array's maximum value.

// const values = [3, 11, 7, 2, 9, 10];

function findMaxValue(array) {
  let result = array[0];
  array.forEach((num) => {
    num > result ? (result = num) : result;
  });
  console.log(result);
}

// List of words
// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".

function addWords() {
  let result = [];
  let word = prompt('Input any word. To stop type "stop"');
  while (word != "stop") {
    result.push(word);
    word = prompt('Any more words? If not type "stop"');
  }
  console.log(result);
}
