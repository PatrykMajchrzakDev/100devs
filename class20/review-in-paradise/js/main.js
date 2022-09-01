// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood;
favFood = "burger";
// alert(favFood);

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let secChar = "something";
// alert(secChar[1]);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function mathStuff(n1, n2, n3) {
  alert((n1 / n2) * n3);
}
// mathStuff(1, 2, 3);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeNum(num) {
  console.log(Math.cbrt(num));
}
cubeNum(5);

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function monthChooser(month) {
  if (month === "June" || month === "July" || month === "August") {
    alert("YAY");
  } else {
    alert("Booo");
  }
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function loopNum(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 5 !== 0) {
      console.log(i);
    }
  }
}
