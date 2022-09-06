//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function MakeChar(name, spec, gender, numOfLimbs) {
  this.name = name;
  this.specialization = spec;
  this.gender = gender;
  this.numberOfLimbs = numOfLimbs;
  this.specialAbility = function () {
    console.log("Doing ulti");
  };
  this.yell = function () {
    console.log("RAWWWWR");
  };
  this.jump = function () {
    console.log("Jumping");
  };
}

let char1 = new MakeChar("Patryk", "melee", "male", 4);

console.log(char1);
