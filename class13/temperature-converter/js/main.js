//Write your pseduo code first! 


// my 2 mins
// Create a label, add ID to it.
// create a heading to show temp
// make new function in js
// make it so it takes formula 1F = 1.8C


// leons
// need a value of celcius
// convert from celsius to farenheit
// show temp



document.querySelector('#convertTempButton').addEventListener('click', convertTemp)


function convertTemp() {
    // need a value of celcius    
    let temperature = document.querySelector('#temperature').value

    // convert from celsius to farenheit    
    temperature = temperature * 1.8 + 32
    
    // show temp
    document.querySelector('#placeToYell').innerText = temperature
}