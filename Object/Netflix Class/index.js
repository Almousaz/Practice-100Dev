//  create a JavaScript class for a Netflix TV show with a constructor that initializes four properties and includes three methods

class MakeNetflixShowClass {
  constructor(title, genre, seasons, rating) {
    this.title = title;
    this.genre = genre;
    this.seasons = seasons;
    this.rating = rating;
  }
  play() {
    console.log("Playing ...");
  }
  stop() {
    console.log("Stopping ...");
  }
  saveToList() {
    console.log("Saved To List");
  }
}
let bridgerton = new MakeNetflixShowClass("Bridgerton", "Romance", 14, "99%");

console.log(bridgerton);

class NetflixShow {
  constructor(title, genre, seasons, rating) {
    this.title = title; // Title of the show
    this.genre = genre; // Genre of the show (e.g., drama, comedy)
    this.seasons = seasons; // Number of seasons
    this.rating = rating; // Show rating (out of 10, for example)
  }

  // Method to display show details
  showDetails() {
    console.log(`Title: ${this.title}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Seasons: ${this.seasons}`);
    console.log(`Rating: ${this.rating}/10`);
  }

  // Method to rate the show
  updateRating(newRating) {
    this.rating = newRating;
    console.log(`${this.title} rating updated to ${this.rating}/10`);
  }

  // Method to add a new season
  addSeason() {
    this.seasons += 1;
    console.log(
      `New season added! ${this.title} now has ${this.seasons} seasons.`
    );
  }
}

// Example usage:
const strangerThings = new NetflixShow(
  "Stranger Things",
  "Science Fiction",
  4,
  8.9
);
//   strangerThings.showDetails();         // Display show details
//   strangerThings.updateRating(9.1);     // Update rating to 9.1
//   strangerThings.addSeason();           // Add a new season (now 5 seasons)

console.log(strangerThings);

let breakingBad = new NetflixShow("Breaking Bad", "Drama", 8, 9.5);
console.log(breakingBad);
