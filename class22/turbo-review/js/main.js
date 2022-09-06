// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = "  mojito ala blah blah   ";
favDrink.trim();
console.log(favDrink);

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let randomWords = "banana, unicorn, tv, apple, monitor";
console.log(randomWords.includes("apple"));
//OR
console.log(randomWords.search("apple"));
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
  let random = Math.random().toFixed(1) * 100;
  if (random < 33) {
    return "rock";
  } else if (random < 66) {
    return "paper";
  } else {
    return "scissors";
  }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function rPSGame(pick) {
  let bot = rockPaperScissors();
  console.log(`Your choice: ${pick} \n Bot choice: ${bot}`);
  if (
    (pick === "rock" && bot === "scissors") ||
    (pick === "paper" && bot === "rock") ||
    (pick === "scissors" && bot === "paper")
  ) {
    console.log("You win");
  } else if (pick === bot) {
    console.log("You lose");
  } else console.log("Tie");
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playMultipleTimes(arr) {
  arr.forEach((item) => rPSGame(item));
}

playMultipleTimes(["rock", "paper", "scissors", "paper", "rock"]);
