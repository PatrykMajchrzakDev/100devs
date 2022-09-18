//Create a constructor with 4 properties and 3 methods

function PizzaConstructor(madeBy, size, toppings, pieces) {
  this.madeBy = madeBy;
  this.size = size;
  this.toppings = toppings;
  this.pieces = pieces;

  this.addTopping = function (topping) {
    console.log(`Added: ${topping} topping`);
  };
  this.deliveryTime = function (time) {
    console.log(`Time to deliver ${time} minutes`);
  };

  this.addSouce = function (sauce) {
    console.log(`Added ${sauce} sauce`);
  };
}

let pizza = new PizzaConstructor(
  "Dominos",
  "large",
  ["cheese", "tomato", "ham"],
  6
);

class PizzaClass {
  constructor(madeBy, size, toppings, pieces) {
    this.madeBy = madeBy;
    this.size = size;
    this.toppings = toppings;
    this.pieces = pieces;

    this.addTopping = function (topping) {
      console.log(`Added: ${topping} topping`);
    };
    this.deliveryTime = function (time) {
      console.log(`Time to deliver ${time} minutes`);
    };

    this.addSouce = function (sauce) {
      console.log(`Added ${sauce} sauce`);
    };
  }
}
