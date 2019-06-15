var axios = require("axios")

function Movie() {
    this.findMovie = function(movSearch) {
        axios.get("http://www.omdbapi.com/?apikey=trilogy&t=" + movSearch)
        .then(function(response) {
        var movData = [
            "Title: " + response.data.Title,
            "\nRelease: " + response.data.Year,
            "\nRating: " + response.data.Rated,
            "\nRotten Tomatoes Score: " + response.data.Ratings[1].value,
            "\nProduced In: " + response.data.Country,
            "\nLanguage: " + response.data.Language,
            "\nPlot: " + response.data.Plot,
            "\nActors: " + response.data.Actors,
            "\n----------------------------------------------"
        ]
        // console.log(response);
        console.log(movData.join(""));
        })
    }
}


module.exports = Movie;