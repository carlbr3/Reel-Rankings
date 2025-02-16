import Genre from "../components/Genre";

interface GenreType {
  id: number;
  name: string;
}

const Genres = () => {
  const mockGenres: GenreType[] = [
    { id: 28, name: "Action" },
    { id: 35, name: "Comedy" },
    { id: 18, name: "Drama" },
    { id: 27, name: "Horror" },
    { id: 878, name: "Science Fiction" },
    { id: 10749, name: "Romance" },
    { id: 53, name: "Thriller" },
    { id: 16, name: "Animation" },
  ];

  console.log("Genres page mockGenres:", mockGenres); // Debug log

  return (
    <div className="genres-page">
      <h1>Movie Genres</h1>
      <div className="genres-grid">
        {mockGenres.map(genre => {
          console.log("Mapping genre:", genre); // Debug log
          return (
            <Genre 
              key={genre.id}
              id={genre.id}
              name={genre.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Genres;
