//Create a button that adds 1 to a botScore stored in localStorage

//On page load I set botScore to 0
if (!localStorage.getItem("botScore")) {
  localStorage.setItem("botScore", 0);
}

//Listen for click event on button
document.querySelector("button").addEventListener("click", addScore);

function addScore() {
  //Getting the score from the local storage
  let botScoreValue = Number(localStorage.getItem("botScore"));

  botScoreValue += 1;

  //Reasign botScore with new value to local storage
  localStorage.setItem("botScore", botScoreValue);
  score = document.querySelector("h2").innerText + 1;
}
