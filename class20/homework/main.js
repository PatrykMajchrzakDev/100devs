// Coding time!
// Adding character experience
// Improve our example RPG program to add an experience property named xp to the character. Its initial value is 0. Experience must appear in character description.

// // TODO: create the character object here
aurora = {
  name: "Aurora",
  health: 150,
  strength: 25,
  xp: 0,
  describe() {
    return `${this.name} has ${this.health} health, ${this.strength} strength and ${this.xp} xp points`;
  },
};

// // Aurora is harmed by an arrow
aurora.health -= 20;

// // Aurora equips a strength necklace
aurora.strength += 10;

// // Aurora learn a new skill
aurora.xp += 15;

// console.log(aurora.describe());
console.log(aurora.describe());

// Modeling a dog
// Complete the following program to add the dog object definition.

// TODO: create the dog object here
dog = {
  name: "Emi",
  species: "Border Collie",
  size: "medium",
  bark() {
    return "Woooof";
  },
};
console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size} size`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);
// Execution result

// Modeling a circle
// Complete the following program to add the circle object definition. Its radius value is input by the user.

const r = Number(prompt("Enter the circle radius:"));

// // TODO: create the circle object here
circle = {
  circumference(r) {
    return 2 * Math.PI * r;
  },
  area(r) {
    return Math.PI * r * r;
  },
};
console.log(`Its circumference is ${circle.circumference(r)}`);
console.log(`Its area is ${circle.area(r)}`);

// Modeling a bank account
// Write a program that creates an account object with the following characteristics:

// A name property set to "Alex".
// A balance property set to 0.
// A credit method adding the (positive or negative) value passed as an argument to the account balance.
// A describe method returning the account description.
// Use this object to show its description, crediting 250, debiting 80, then show its description again.

account = {
  name: "Alex",
  balance: 0,
  credit(value) {
    this.balance += value;
  },
  describe() {
    return `${account.name} has ${account.balance}$ on his/her account.`;
  },
};
