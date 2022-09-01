// Carousel
// Write a program that launches a carousel for 10 turns, showing the turn number each time.

// When it's done, improve it so that the number of turns is given by the user.

function carousel(spins){
    for(let i=1; i <= spins; i++){
        console.log(`Turn ${i}`)
    }
}


// Parity
// Check the following program that shows even numbers (divisible by 2) between 1 and 10.
// Improve the program so that it also shows odd numbers. Improve it again to replace the initial number 1 by a number given by the user.
function checkNumbers(n){
    for (let i = n; i <= 10; i++) {
        if (i % 2 === 0) {
          console.log(`${i} is even`);
        } else if(i % 2 === 1){
            console.log(`${i} is odd`)
        }
    }

}


// Input validation
// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

// When you are done with the above, improve the program so that the terminating number is between 50 and 100.
function findNumber(){
    num = prompt('Give me a number')
    while(num > 50 && num > 100){
        num = prompt('Number was wrong. Give me another')
    }
}



// Multiplication table
// Write a program that asks the user for a number, then shows the multiplication table for this number.

// When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).

function multiplicationTable(num){
    for(i = 1; i <= 9; i++){
        console.log(`${num} * ${i} = ${num * i}`)
    }
}



// FizzBuzz
// Write a program that shows all numbers between 1 and 100 with the following exceptions:
// It shows "Fizz" instead if the number is divisible by 3.
// It shows "Buzz" instead if the number is divisible by 5 and not by 3.
// When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.

function fizzbuzz(){
    for(i = 1; i <= 10; i++){
        if(i % 3 === 0){
            console.log('Fizz')
        } else if(i % 5 === 0 && i % 3 === 1){
            console.log('Buzz')
        } else {
            console.log('FizzBuzz')
        }
    }
}