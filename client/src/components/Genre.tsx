import { useNavigate } from "react-router-dom";

interface GenreProps {
  id: number;
  name: string;
}

const Genre: React.FC<GenreProps> = ({ id, name }) => {
  console.log("Genre component props:", { id, name }); // Debug log
  
  const navigate = useNavigate();

  const handleGenreClick = () => {
    navigate(`/movies/genre/${id}`);
  };

  // Mock data for the component itself
  const genreDetails = [{ id: id, name: name }];

  return (
    <div className="genres-container">
      {/* <h1>Movie Genres</h1> */}
      <div className="genre-grid">
        {genreDetails.map((genre: GenreProps) => (
          <button
            key={genre.id}
            className="genre-button"
            onClick={() => handleGenreClick()}
          >
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Genre;
