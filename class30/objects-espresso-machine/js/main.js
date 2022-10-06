//Create an espresso machine class that makes machines with 4 properties and 3 methods
class EspressoMachine {
  constructor(color, brand, size, quanityOfDifferentCoffees) {
    this.color = color;
    this.brand = brand;
    this.size = size;
    this.quanityOfDifferentCoffes = quanityOfDifferentCoffees;
  }
  makeCoffee() {
    console.log("Make coffee");
  }
  frothMilk() {
    console.log("Frothing milk");
  }
  changeAmountOfBeans() {
    console.log("Change the amount");
  }
}
