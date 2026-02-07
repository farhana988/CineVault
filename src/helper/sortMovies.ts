import { Movie, MovieSortOption, SortOrder } from "@/types/movie.type";

export const sortMovies = (
  movies: Movie[],
  sortBy: MovieSortOption,
  order: SortOrder,
): Movie[] => {
  return [...movies].sort((a, b) => {
    let valueA: number | string;
    let valueB: number | string;

    switch (sortBy) {
      case "release_date":
        valueA = new Date(a.release_date).getTime();
        valueB = new Date(b.release_date).getTime();
        break;

      case "vote_average":
        valueA = a.vote_average;
        valueB = b.vote_average;
        break;

      case "title":
        valueA = a.title.toLowerCase();
        valueB = b.title.toLowerCase();
        break;

      default:
        valueA = a.popularity ?? 0;
        valueB = b.popularity ?? 0;
    }

    if (valueA < valueB) return order === "asc" ? -1 : 1;
    if (valueA > valueB) return order === "asc" ? 1 : -1;
    return 0;
  });
};
