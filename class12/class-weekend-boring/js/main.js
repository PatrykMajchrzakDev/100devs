document.querySelector('#check').addEventListener('click', checkDay)

function checkDay(){
  
  let day = document.querySelector('#day').value.toLowerCase()
  if (day === 'wtorek' || day === 'czwartek'){
    alert('Its time for LEON!')
  } else if (day === 'sobota' || day === 'niedziela'){
    alert("It's weekend time!")
  } else {
    console.log("It's boring day :(")
  }
  document.querySelector('#placeToSee').innerHTML = day
}