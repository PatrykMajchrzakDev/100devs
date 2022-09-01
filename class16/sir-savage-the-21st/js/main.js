//Create a function that has a loop that prints '21' 21 times to the console and then call that function
function addToDOM(){
    for(let i = 1; i < 22; i++){
        document.querySelector('h2').innerText += '\n 21' 
    }

}
//Bonus can you make it print '21' 21 times to the dom?
addToDOM()