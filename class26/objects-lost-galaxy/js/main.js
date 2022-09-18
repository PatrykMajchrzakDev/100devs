//Create a pizza object that has four properties and three methods

let pizza = {};

pizza.hasToppings = true;
pizza.size = "30cm";
pizza.pieces = 6;
pizza.madeBy = "Dominos";

pizza.addToppings = function (topping) {
  console.log(`Added: ${topping} topping`);
};

pizza.addSouce = function (sauce) {
  console.log(`Added: ${sauce} topping`);
};

pizza.deliveryTime = function (time) {
  console.log(`Estimated delivery time ${time} minutes`);
};
