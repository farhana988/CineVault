export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genre_ids?: number[];
  popularity?: number;
}
export type MovieCardProps = {
  id: number;
  title: string;
  posterPath: string;
  rating: number;
  releaseDate?: string;
  onClick?: () => void;
  isWatchLater?: boolean;
  onToggleWatchLater?: () => void;
};
export interface MovieProps {
  results: Movie[];
}
export interface TopRatedProps {
  movies: Movie[];
}
export interface RecentlyViewedMoviesProps {
  movie: Movie;
}
export interface Genre {
  id: number;
  name: string;
}

export interface MoviesByGenre {
  genre: Genre;
  movies: Movie[];
}
export interface GenreTabsProps {
  moviesByGenre: MoviesByGenre[];
}

export interface PopularProps {
  moviesByGenre: MoviesByGenre[];
}
export type MovieSortOption =
  | "popularity"
  | "release_date"
  | "vote_average"
  | "title";

export type SortOrder = "asc" | "desc";
