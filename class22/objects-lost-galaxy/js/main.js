//Create a mouse object that has four properties and three methods
let mouse = {};

mouse.color = "Black";
mouse.hasLED = true;
mouse.type = "Normal";
mouse.brand = "Logitech";

mouse.changeLEDColor = function (color) {
  console.log(`LED color changed to ${color}`);
};

mouse.leftClick = function () {
  console.log("click");
};

mouse.rightClick = function () {
  console.log("Right button used");
};
