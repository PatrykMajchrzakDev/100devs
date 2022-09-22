//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);
document.querySelector("h1").innerText = localStorage.getItem("books");

function getFetch() {
  const choice = document.querySelector("input").value;
  console.log(choice);
  const url = `https://openlibrary.org/isbn/${choice}.json`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      // appendNewBookTitle(data);

      //If local storage is empty then create new and set the value as given title
      if (!localStorage.getItem("books")) {
        localStorage.setItem("books", data.title);

        //if its not empty then just add the book to last added book
      } else {
        let books = localStorage.getItem("books") + " ; " + data.title;
        localStorage.setItem("books", books);
      }

      //put the local storage books into h1
      document.querySelector("h1").innerText = localStorage.getItem("books");
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

// function appendNewBookTitle(title) {
//   //grab ul
//   let ul = document.querySelector("ul");

//   //create new li element
//   const li = document.createElement("li");

//   //assign title to the li element
//   li.textContent = title.title;

//   //append the li to ul element
//   ul.appendChild(li);
// }
