import {useState, useEffect} from 'react';
// import Movie from '../interfaces/Movie';

interface Movie {
    title: string;
    year: string;
    genre: string;
    awards: string;
    director: string;
    plot: string;
    imdbID: string;
    poster: string;
    rating: string;
    runtime: string;
    actors: string;
    country: string;
    imDBRating: string;
    website: string;
  }

  const mockMovie: Movie = {
    title: "The Dark Knight",
    year: "2008",
    genre: "Action, Crime, Drama",
    awards: "Won 2 Oscars. Another 146 wins & 148 nominations.",
    director: 'Christopher Nolan',
    plot: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    imdbID: 'tt0468569',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2MzE@._V1_SX300.jpg',
    rating: '9.0',
    runtime: '2h 32min',
    actors: 'Christian Bale, Heath Ledger, Aaron Eckhart',
    country: 'USA',
    imDBRating: '8.4',
    website: 'https://www.imdb.com/title/tt0468569/'
  }

  export default function HomePage() {
    const [movie, setMovie] = useState<Movie | null>(mockMovie);
    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch("/api/movie/random");
                const data = await response.json();
                console.log("Fetched movie data:", data); 
                setMovie(data);
              } catch (error) {
                console.error("Error fetching random movie:", error);
              }
            };
            fetchMovie();
            }, []);

            useEffect(() => {
                console.log("Updated movie state:", movie); 
              }, [movie]);
                return (
                    <div>
                    <h1>Random Movie</h1>
                    {movie ? (
                        <div>
                        <h2>{movie.title}</h2>
                        <img src={movie.poster} alt={movie.title} />
                        <p>{movie.plot}</p>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                    </div>
                );
}


