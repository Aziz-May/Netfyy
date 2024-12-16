/*const fetchMovies = async () => {
  const apiKey = "1c95d4ba57e8bf4eaf5ebf00624c39be";
  const baseUrl = "https://api.themoviedb.org/3/discover/movie";
  let allMovies = [];

  try {
    for (let page = 1; page <= 10; page++) { // Adjust the page limit as needed
      const response = await fetch(`${baseUrl}?api_key=${apiKey}&page=${page}`);
      const data = await response.json();
      allMovies = allMovies.concat(data.results);
    }

    // Filter the movies to include only required attributes
    const filteredMovies = allMovies.map((movie) => ({
      title: movie.title,
      image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      genre: movie.genre_ids.join(", "), // Replace with actual genre names if needed
      review: movie.vote_average,
      releaseDate: movie.release_date,
      duration: `${Math.floor(movie.popularity / 10)} mins`, // Example duration logic
      trailer: `https://www.youtube.com/results?search_query=${encodeURIComponent(movie.title)}+trailer`,
    }));

    console.log(filteredMovies); // Contains all filtered movies
    return filteredMovies;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};

fetchMovies();
*/
/*const fetchMoviesWithDuration = async () => {
  const apiKey = "1c95d4ba57e8bf4eaf5ebf00624c39be";
  const baseUrl = "https://api.themoviedb.org/3/discover/movie";
  let allMovies = [];

  try {
    for (let page = 1; page <= 2; page++) { // Adjust the page limit as needed
      const response = await fetch(`${baseUrl}?api_key=${apiKey}&page=${page}`);
      const data = await response.json();
      allMovies = allMovies.concat(data.results);
    }

    // Fetch runtime for each movie
    const moviesWithRuntime = await Promise.all(
      allMovies.map(async (movie) => {
        const movieDetailsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}`
        );
        const movieDetails = await movieDetailsResponse.json();

        return {
          title: movie.title,
          image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          genre: movie.genre_ids.join(", "), // Replace with actual genre names if needed
          review: movie.vote_average,
          releaseDate: movie.release_date,
          duration: `${movieDetails.runtime} mins`, // Fetch runtime here
          trailer: `https://www.youtube.com/results?search_query=${encodeURIComponent(movie.title)}+trailer`,
        };
      })
    );

    console.log(moviesWithRuntime); // Contains movies with runtime included
    return moviesWithRuntime;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};

fetchMoviesWithDuration();*/


import { promises as fs } from 'fs';
import fetch from 'node-fetch';

const BASE_URL = 'https://spotify23.p.rapidapi.com/search/';
const API_KEY = 'bca306fd6dmsh461d2c1feca7895p1449fejsn5d93ff4f377e'; // Replace with your API key

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'spotify23.p.rapidapi.com',
    },
};

const fetchTrackDetails = async () => {
    let allTracks = [];
    const offsetValues = [0, 100, 200, 300]; // To get 400 tracks

    try {
        for (const offset of offsetValues) {
            const url = `${BASE_URL}?q=track&type=track&offset=${offset}&limit=100`;
            
            console.log(`Sending request to: ${url}`); // Log URL for debugging
            const response = await fetch(url, options);
            
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            const tracks = result.tracks.items;
            
            allTracks = allTracks.concat(tracks);
            console.log(`Fetched ${tracks.length} tracks at offset ${offset}`);
        }

        // Write tracks to a JSON file
        await fs.writeFile('spotify_tracks.json', JSON.stringify(allTracks, null, 2));
        console.log(`Successfully saved ${allTracks.length} tracks to spotify_tracks.json`);

        return allTracks;
    } catch (error) {
        console.error('Error fetching track details:', error);
    }
};

fetchTrackDetails();