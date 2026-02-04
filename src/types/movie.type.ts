export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

export interface MovieProps {
  results: Movie[];
  movies: Movie[];
}
export interface TopRatedProps {
  movies: Movie[];
}
