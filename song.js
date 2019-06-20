require("dotenv").config();
var Spotify = require('node-spotify-api')
var keys = require("./keys.js");

var spotify = new Spotify(keys);

function songQuery(songSearch) {
  spotify.search({ type: 'track', query: songSearch }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        for(var i = 0; i < data.tracks.items.length; i++) {
        var songData = [
          "SONG TITLE: " + data.tracks.items[i].name,
          "\nARTISTS: " + data.tracks.items[i].artists[0].name,
          "\nLINK: " + data.tracks.items[i].href,
          "\nALBUM: " + data.tracks.items[i].album.name,
          "\n------------------------------------"
        ]
        
        console.log(songData.join(" "))
      }
      //console.log(data.tracks.items[0].name);
      }); 
    };



module.exports = songQuery