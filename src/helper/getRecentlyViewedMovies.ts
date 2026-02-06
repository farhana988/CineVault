import { Movie } from "@/types/movie.type";

const STORAGE_KEY = "recently_viewed_movies";

export const getRecentlyViewedMovies = (): Movie[] => {
  if (typeof window === "undefined") return [];

  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};
