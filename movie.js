var axios = require("axios")

function Movie() {
    this.findMovie(function(movSearch) {
        axios.get("http://www.omdbapi.com/?apikey=trilogy&t=" + movSearch)
    }).then(function(response) {
        var movData = [
            "Title: " + response.Title,
            "\nRelease: " + response.Year,
            "\nRating: " + response.Rated,
            "\nRotten Tomatoes Score: " + response.Ratings[1].value,
            "\nProduced In: " + response.Country,
            "\nLanguage: " + response.Language,
            "\nPlot: " + response.Plot,
            "\nActors: " + response.Actors,
            "\n----------------------------------------------"
        ]
        console.log(movData.join(""))
    })
}

module.exports = Movie;