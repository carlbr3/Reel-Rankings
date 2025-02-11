export interface Movie {
  title: string;
}
export interface Rating {
  source: string;
  value: string;
}

export interface TitleOMDBResponse {
  title: string;
  year: string;
  genre: string;
  director: string;
  actors: string;
  plot: string;
  awards: string;
  poster: string;
  ratings: Rating[];
  imdbRating: string;
  imdbID: string;
  website: string;
  response: string;
}