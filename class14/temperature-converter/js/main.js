//Write your pseduo code first! 



// Add input form
//Add button to convert
// Add html to show actual temp



//Listen for event button click
document.querySelector('#convertButton').addEventListener('click', convertTemp)

//convert via function 
function convertTemp(){
    let temperature = document.querySelector('#temp').value

    //Make math
    temperature = temperature * 1.8 + 32
    
    //Show
    document.querySelector('h2').innerText = temperature
}
