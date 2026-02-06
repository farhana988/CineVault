import { WatchLaterMovie } from "@/types/movie.type";

const STORAGE_KEY = "watch-later-movies";

export const getWatchLaterMovies = (): WatchLaterMovie[] => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const toggleWatchLaterMovie = (movie: WatchLaterMovie): boolean => {
  const movies = getWatchLaterMovies();
  const exists = movies.some((m) => m.id === movie.id);

  let updatedMovies: WatchLaterMovie[];
  let added: boolean;

  if (exists) {
    updatedMovies = movies.filter((m) => m.id !== movie.id);
    added = false;
  } else {
    updatedMovies = [...movies, movie];
    added = true;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedMovies));

  window.dispatchEvent(new Event("watch-later-updated"));

  return added;
};

export const isMovieWatchLater = (id: number): boolean => {
  const movies = getWatchLaterMovies();
  return movies.some((m) => m.id === id);
};
