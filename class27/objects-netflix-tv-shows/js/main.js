//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixTVShow {
  constructor(name, genre, topActors, isWeeklyTopTen) {
    this.name = name;
    this.genre = genre;
    this.topActors = topActors;
    this.isWeeklyTopTen = isWeeklyTopTen;
  }
  play() {
    console.log("Play the movie");
  }
  stop() {
    console.log("Stop the movie");
  }
  rewind() {
    console.log("Rewind the movie");
  }
}

let theOffice = new NetflixTVShow(
  "The Office",
  "Comedy",
  ["Dwight", "Michael", "Jim", "Pam"],
  true
);
