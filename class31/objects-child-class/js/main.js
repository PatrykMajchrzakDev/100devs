//Create an a class and extend it - Can be anything you would like it to be!

class Animal {
  constructor(name, numOfLegs) {
    this.name = name;
    this.numOfLegs = numOfLegs;
  }
  speak() {
    console.log(`This animal speaks like this: ${speak}`);
  }
}

class Cow extends Animal {
  constructor(name, numOfLegs, breed) {
    this.breed = breed;
    super(name, numOfLegs);
  }
}

let milka = new Cow("Milka", 4, "polska");
