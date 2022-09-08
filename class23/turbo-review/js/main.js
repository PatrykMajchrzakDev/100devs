// *Variables*
// Declare a variable and assign it to a sentence as a string. Alert if the sentence is a question
let str = "This is?";
alert(str.endsWith("?"));

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let words = "tomato jr. dev programming crash course API jr. dev rubiksCube";
let replaceWord = words.replaceAll("jr. dev", "software engineer");
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
  let randomPick = Math.random();
  if (randomPick <= 0.33) {
    return "rock";
  } else if (randomPick <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function RPSPick(pick) {
  let bot = rockPaperScissors();
  console.log(`Bot rolled: ${bot}`);
  if (pick === bot) {
    return "It's a draw";
  } else if (
    (pick === "rock" && bot === "scissors") ||
    (pick === "paper" && bot === "rock") ||
    (pick === "scissors" && bot === "paper")
  ) {
    return "It's a win!";
  } else {
    return "It's a lose :(";
  }
}
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
