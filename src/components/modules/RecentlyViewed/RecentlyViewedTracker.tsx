"use client";

import { useEffect } from "react";
import { Movie, RecentlyViewedMoviesProps } from "@/types/movie.type";

const STORAGE_KEY = "recently_viewed_movies";
const MAX_ITEMS = 10;

const RecentlyViewedTracker = ({ movie }: RecentlyViewedMoviesProps) => {
  useEffect(() => {
    if (!movie) return;

    const stored = localStorage.getItem(STORAGE_KEY);
    let movies: Movie[] = stored ? JSON.parse(stored) : [];

    movies = movies.filter((m) => m.id !== movie.id);

    movies.unshift({
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
    });

    movies = movies.slice(0, MAX_ITEMS);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
  }, [movie]);

  return null;
};

export default RecentlyViewedTracker;
