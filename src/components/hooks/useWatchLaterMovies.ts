import { useEffect, useState, useCallback } from "react";
import {
  getWatchLaterMovies,
  isMovieWatchLater,
  toggleWatchLaterMovie,
} from "@/helper/watchLater";
import { WatchLaterMovie, MovieCardProps } from "@/types/movie.type";
import { toast } from "sonner";

export const useWatchLaterMovies = () => {
  const [movies, setMovies] = useState<WatchLaterMovie[]>([]);

  const loadMovies = useCallback(() => {
    setTimeout(() => {
      const savedMovies = getWatchLaterMovies();
      setMovies(savedMovies);
    }, 0);
  }, []);

  useEffect(() => {
    loadMovies();

    const handleUpdate = () => loadMovies();
    window.addEventListener("watch-later-updated", handleUpdate);

    return () => {
      window.removeEventListener("watch-later-updated", handleUpdate);
    };
  }, [loadMovies]);

  const toggleMovie = (movie: MovieCardProps) => {
    const added = toggleWatchLaterMovie(movie);
    loadMovies();

    toast.success(
      added
        ? `${movie.title} successfully added to Watch Later!`
        : `${movie.title} removed from Watch Later!`,
    );

    window.dispatchEvent(new Event("watch-later-updated"));

    return added;
  };

  const checkMovie = (id: number) => isMovieWatchLater(id);

  return { movies, toggleMovie, checkMovie };
};
