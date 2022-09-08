//Create a dog object that has four properties and three methods

dog = {};

dog.breed = "Border Collie";
dog.name = "Emi";
dog.color = "White-Black";
dog.hasLongTail = true;

dog.bark = function () {
  console.log("woof");
};

dog.poop = function () {
  console.log("Awww shit");
};

dog.greet = function () {
  console.log("Wiggles tail");
};
