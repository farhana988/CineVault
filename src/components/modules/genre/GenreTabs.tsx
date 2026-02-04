"use client";

import MovieCard from "@/components/cards/MovieCard";
import { GenreTabsProps } from "@/types/movie.type";
import { Bookmark } from "lucide-react";
import { useState } from "react";

const GenreTabs = ({ moviesByGenre }: GenreTabsProps) => {
  const [selectedGenreId, setSelectedGenreId] = useState<number>(
    moviesByGenre[0]?.genre.id || 0,
  );

  const selectedGenre = moviesByGenre.find(
    (g) => g.genre.id === selectedGenreId,
  );
  return (
    <div className="flex flex-col md:flex-row gap-6 w-full">
      {/* Tabs */}
      <div
        className="shrink-0 w-full md:w-44 lg:w-48 xl:w-52 bg-muted dark:bg-muted/30 rounded-lg p-2 
      flex flex-row md:flex-col gap-2 md:h-150 overflow-scroll text-sm xl:text-base"
      >
        {moviesByGenre.map(({ genre }) => (
          <button
            key={genre.id}
            onClick={() => setSelectedGenreId(genre.id)}
            className={`flex items-center gap-2 px-3 py-0 md:py-1 rounded-lg font-medium transition-colors
          ${
            genre.id === selectedGenreId
              ? "bg-primary text-primary-foreground"
              : "text-foreground hover:bg-muted dark:hover:bg-muted/50"
          }`}
          >
            <Bookmark
              size={20}
              className={`${
                genre.id === selectedGenreId
                  ? "fill-black/70 stroke-black/70 text-black/70"
                  : "stroke-foreground dark:stroke-foreground"
              }`}
            />
            {genre.name}
          </button>
        ))}
      </div>

      {/* Movies  */}
      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {selectedGenre?.movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            rating={movie.vote_average}
            releaseDate={movie.release_date}
          />
        ))}

        {selectedGenre?.movies.length === 0 && (
          <p className="col-span-full text-center mt-4">
            No movies available for this genre.
          </p>
        )}
      </div>
    </div>
  );
};

export default GenreTabs;
