require("dotenv").config();
var Spotify = require('node-spotify-api')
var keys = require("./keys.js");

var spotify = new Spotify(keys);

function songQuery(songSearch) {
  spotify.search({ type: 'track', query: songSearch }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
      // for(var i = 0; i < data.tracks.items.length; i++) {
      // console.log(JSON.stringify(data.tracks.href.items[i]));
      // } 
      console.log(data.tracks.items);
      }); 
    };



module.exports = songQuery