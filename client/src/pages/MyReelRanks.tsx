import { useEffect, useState } from "react";
import Ranking from "../components/Ranking";
import Error from "../pages/ErrorPage";

interface Movie {
  id: number;
  title: string;
  rating?: number;
  review?: string;
}

interface User {
  id: number;
  username: string;
  email: string;
  watchlist: Movie[];
  ratings: Movie[];
}

const MyReelRanking = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mockUser, setMockUser] = useState<User | null>(null);

  // Mock data
  const mockMovieData: Movie = {
    id: 1,
    title: "The Dark Knight",
    rating: 5,
    review: "Best superhero movie ever!",
  };

  const mockUserData: User = {
    id: 1,
    username: "MovieFan123",
    email: "moviefan@example.com",
    watchlist: [
      { id: 1, title: "The Dark Knight" },
      { id: 2, title: "Inception" },
    ],
    ratings: [
      { id: 1, title: "The Dark Knight", rating: 5 },
      { id: 2, title: "Inception", rating: 4 },
    ],
  };

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setSelectedMovie(mockMovieData);
        setMockUser(mockUserData);
      } catch (err) {
        console.error("Error fetching movie:", err);
        setError("Failed to load movie details");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, []);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error || !selectedMovie) {
    return (
      <Error
        title="Movie Not Found"
        message={error || "Unable to load movie details"}
        code={404}
      />
    );
  }

  return (
    <div className="reel-ranking-page">
      <h1>Rate & Review</h1>
      <Ranking movieTitle={selectedMovie.title} user={mockUser} />
    </div>
  );
};

export default MyReelRanking;
