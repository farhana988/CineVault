"use client";

import { useState } from "react";
import { Movie } from "@/types/movie.type";
import { getRecentlyViewedMovies } from "@/helper/getRecentlyViewedMovies";
import MovieCard from "@/components/cards/MovieCard";

const RecentlyViewedMovies = () => {
  const [movies] = useState<Movie[]>(() => getRecentlyViewedMovies());
  return (
    <div>
      {movies.length === 0 ? (
        <div className="p-4 text-center text-muted-foreground">
          You haven’t viewed any movies yet.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {movies.map((movie, i) => (
            <MovieCard
              key={i}
              id={movie.id}
              title={movie.title}
              posterPath={movie.poster_path}
              rating={movie.vote_average}
              releaseDate={movie.release_date}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentlyViewedMovies;
