require("dotenv").config();
var songQuery = require("./song.js")

var Concert = require("./concert.js")

var Movie = require("./movie.js")

var input = process.argv;

var search = input[2];

var conSearch = input.slice(3).join("")

var songSearch = input.slice(3).join(" ")

var movSearch = input.slice(3).join("+")

var concert = new Concert();

var movie = new Movie();

if(search === "concert-this") {
    concert.findshow(conSearch)
}
if(search === "spotify-this-song") {
    songQuery(songSearch)
}
if(search === "movie-this") {
    movie.findMovie(movSearch)
}

