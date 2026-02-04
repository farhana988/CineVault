import { tmdbFetch } from "@/lib/tmdb";
import { Genre, Movie, MoviesByGenre } from "@/types/movie.type";

export const getMoviesByGenre = async (): Promise<MoviesByGenre[]> => {
  const popularData = await tmdbFetch<{ results: Movie[] }>("/movie/popular");
  const genreData = await tmdbFetch<{ genres: Genre[] }>("/genre/movie/list");

  const genres = genreData.genres;
  const movies = popularData.results;

  const moviesByGenre: MoviesByGenre[] = genres.map((genre) => {
    const filtered = movies
      .filter(
        (movie) =>
          Array.isArray(movie.genre_ids) && movie.genre_ids.includes(genre.id),
      )
      .sort((a, b) => (b.popularity ?? 0) - (a.popularity ?? 0))
      .slice(0, 5);

    return { genre, movies: filtered };
  });

  return moviesByGenre.filter((item) => item.movies.length > 0);
};
