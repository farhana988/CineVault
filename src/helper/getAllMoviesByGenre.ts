import { tmdbFetch } from "@/lib/tmdb";
import { Genre, Movie, MoviesByGenre } from "@/types/movie.type";

export const getallMoviesByGenre = async (): Promise<MoviesByGenre[]> => {
  const allMovieData = await tmdbFetch<{ results: Movie[] }>("/discover/movie");
  const genreData = await tmdbFetch<{ genres: Genre[] }>("/genre/movie/list");

  const genres = genreData.genres;
  const movies = allMovieData.results;
  // console.log(movies);
  const allMoviesByGenre: MoviesByGenre[] = genres.map((genre) => {
    const filtered = movies
      .filter(
        (movie) =>
          Array.isArray(movie.genre_ids) && movie.genre_ids.includes(genre.id),
      )
      .sort((a, b) => (b.popularity ?? 0) - (a.popularity ?? 0));
    return { genre, movies: filtered };
  });

  return allMoviesByGenre;
};
