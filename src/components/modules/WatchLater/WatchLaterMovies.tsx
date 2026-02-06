"use client";

import MovieCard from "@/components/cards/MovieCard";
import { useWatchLaterMovies } from "@/components/hooks/useWatchLaterMovies";
const WatchLaterMovies = () => {
  const { movies } = useWatchLaterMovies();
  return (
    <div>
      {movies.length === 0 ? (
        <div className="p-4 text-center text-muted-foreground">
          No movies in your Watch Later list.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {movies.map((movie, i) => (
            <MovieCard
              key={i}
              id={movie.id}
              title={movie.title}
              posterPath={movie.posterPath}
              rating={movie.rating}
              releaseDate={movie.releaseDate}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchLaterMovies;
