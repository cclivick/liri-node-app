var Spotify = require('node-spotify-api')
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

spotify.search({ type: 'track', query: songSearch }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });

module.exports = Spotify