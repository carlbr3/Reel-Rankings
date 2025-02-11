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

  export default function HomePage() {
    const [movie, setMovie] = useState<Movie | null>(null);
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


