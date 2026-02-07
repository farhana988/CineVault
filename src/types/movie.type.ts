export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genre_ids?: number[];
  popularity?: number;
  overview?: string;
  tagline?: string;
  vote_count?: number;
  runtime?: number;
  budget?: number;
  revenue?: number;
  status?: string;
  original_language?: string;
  genres?: Genre[];
  production_countries?: ProductionCountry[];
  spoken_languages?: SpokenLanguage[];
}
export interface SearchMoviesResponse {
  results: Movie[];
}
export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  iso_639_1: string;
  english_name: string;
  name: string;
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
export interface MovieDetailsProps {
  movie: Movie;
}
export interface RecentlyViewedMoviesProps {
  movie: Movie;
}
export interface SimilarMovieProps {
  similar: Movie[];
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
