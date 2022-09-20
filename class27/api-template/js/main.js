//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const date = document.querySelector("input").value;
  const url = `https://api.nasa.gov/planetary/apod?api_key=phhwH6nBcfs5kHQZVIgQBcEIUcYSOwpgGRcDc3eK&date=${date}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      if (data.media_type === "image") {
        document.querySelector("h3").innerText = data.explanation;
      } else if (data.media_type === "video") {
        document.querySelector("iframe").src = data.url;
      }
      console.log(data);
      document.querySelector("img").src = data.hdurl;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
