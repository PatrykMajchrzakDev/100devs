document.getElementById('purple').onclick = partyPurple

function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
  document.querySelector('body').style.color = 'white'

}


document.getElementById('green').onclick = partyGreen

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'white'
}


document.getElementById('blue').onclick = partyBlue

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
}


document.getElementById('red').onclick = partyRed

function partyRed() {
  document.querySelector('body').style.backgroundColor = 'red'
  document.querySelector('body').style.color = 'white'
}