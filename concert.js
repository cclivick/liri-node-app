var axios = require("axios");
var moment = require("moment")

//function to create URL from bandsintown API
function Concert() {
    this.findshow = function(conSearch) {
        axios.get("https://rest.bandsintown.com/artists/" + conSearch + "/events?app_id=codingbootcamp")
        .then(function(response) {
            // console.log(response);
            for(var i = 0; i < response.data.length; i++) {
                var date = moment(response.data[i].datetime).format("MM-DD-YYYY");
                var conData = [
                    "Venue: " + response.data[i].venue.name,
                    "\nVenue Location: " + response.data[i].venue.city + ", " + response.data[i].venue.country,
                    "\nDate: " + date,
                    "\n-------------------------------------------"
                ]
                console.log(conData.join(" "));
            }
        })
    }
}


module.exports = Concert;