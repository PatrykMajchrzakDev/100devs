//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function MakeNewChar(name, gender, specialAbility, finisherQuote) {
  this.name = name;
  this.gender = gender;
  this.specialAbility = specialAbility;
  this.finisherQuote = finisherQuote;

  this.useSpecialAbility = function () {
    console.log(`Im using: ${this.specialAbility}`);
  };

  this.tellFinisherQuote = function () {
    console.log(this.finisherQuote);
  };
  this.tellName = function () {
    console.log(`My name is ${this.name}`);
  };
}

let subZero = new MakeNewChar("Sub Zero", "Male", "Ollie", "Imma beast!");
