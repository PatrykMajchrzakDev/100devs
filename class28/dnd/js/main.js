//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value;
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      //code to remove li elements if there are any inside already
      let ul = document.querySelector("ul");
      while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
      }
      data.subclasses.forEach((subclass) => {
        //create li (child of ul element)
        const li = document.createElement("li");

        //assign value to the created li element
        li.textContent = subclass.name;

        //append the li element to ul
        document.querySelector("ul").appendChild(li);
      });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
