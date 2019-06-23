# SIRI-style Node Application

This is a node command-line application that can achieve the following functions:

## concert-this

Users can look up concerts for artists of their choice. Typing "node liri concert-this [artist]" into the command line will provide a list of all available concert data (specifically the data of each concert, its location, and the name of the venue). This feature uses the Bands in Town API.

### Example

![liri-concert-gif](https://user-images.githubusercontent.com/46388110/59980161-94d43600-95b7-11e9-9763-cc0cca17928a.gif)

## movie-this

Users can look up information on movies of their choice. Typing "node liri movie-this [movie title]" into the command line will provide users with the following info on that movie:
  - Title of the movie.
  - Year the movie came out.
  - IMDB Rating of the movie.
  - Rotten Tomatoes Rating of the movie.
  - Country where the movie was produced.
  - Language of the movie.
  - Plot of the movie.
  - Actors in the movie.
  
 This feature fetches data from the OMDB API.
 
 ### Example
 
 ![liri-movie-gif](https://user-images.githubusercontent.com/46388110/59980307-90a91800-95b9-11e9-94f2-9db09a63f50d.gif)

## spotify-this-song

Users can look up information on a song of their choice. Typing "node liri spotify-this-song [song title]" into the command line will provide users with:

  - The artist's name.
  - The name of the album the song is found on.
  - A link to the song on spotify.
 
This feature utilizes Spotify's API to fetch song data. A personal Spotify API key is required for this application to work for other developers.

### Example

![liri-spotify-gif](https://user-images.githubusercontent.com/46388110/59980490-51c89180-95bc-11e9-8172-36b7d32dc7fe.gif)


NOTE: Axios NPM package used for API calls.

