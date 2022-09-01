//Create a function that grabs the number of snacks from the input and tells you to stop that many times
document.querySelector('#help').addEventListener('click', help)

function help(){
    let numOfSnacks = Number(document.querySelector('#snackForm').value)
    document.querySelector('#stops').innerText = ""

    for(i = 1; i <= numOfSnacks; i++){
            document.querySelector('#stops').innerText += ' Stop snacking!'
    }
}