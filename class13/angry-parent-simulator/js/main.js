// document.querySelector('#yell').addEventListener('click', run)

// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value

//   // document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName

//   //Add what you should be doing - conditionals go here

//   document.querySelector('#placeToYell').innerText = `${fName} ${fMidName} ${lMidName} ${lName}`
// }

// // const synth = window.speechSynthesis;
// // document.querySelector('#yell').addEventListener('click', run)
// //
// // function run() {
// //   const fName = document.querySelector('#firstName').value
// //   const fMidName = document.querySelector('#firstMiddle').value
// //   const lMidName = document.querySelector('#lastMiddle').value
// //   const lName = document.querySelector('#lastName').value
// //
// //   const yellText =  `${fName} ${fMidName} ${lMidName} ${lName}`
// //
// //   document.querySelector('#placeToYell').innerText = yellText
// //
// //   let yellThis = new SpeechSynthesisUtterance(yellText);
// //
// //   synth.speak(yellThis);
// // }

//Click event on button
document.querySelector('#yell').addEventListener('click', showAllNames)


function showAllNames(){
  //Get all names from inputs
  const firstName = document.querySelector('#firstName').value
  const firstMiddle = document.querySelector('#firstMiddle').value
  const lastMiddle = document.querySelector('#lastMiddle').value
  const lastName = document.querySelector('#lastName').value
  //Put all names into h2
  document.querySelector('#placeToYell').innerText = `${firstName} ${firstMiddle} ${lastMiddle} ${lastName}`
}