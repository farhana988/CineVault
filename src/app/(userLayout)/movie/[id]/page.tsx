import MovieDetails from "@/components/modules/movie/MovieDetails";
import SimilarMovies from "@/components/modules/movie/SimilarMovies";
import RecentlyViewedTracker from "@/components/modules/RecentlyViewed/RecentlyViewedTracker";
import { tmdbFetch } from "@/lib/tmdb";
import { Movie, MovieProps } from "@/types/movie.type";

export const generateStaticParams = async () => {
  const topMovies = await tmdbFetch<{ results: Movie[] }>("/movie/top_rated");
  return topMovies.results.slice(0, 15).map((movie) => ({
    id: String(movie.id),
  }));
};

const MovieDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const movie = await tmdbFetch<Movie>(`/movie/${id}`);
  const similar = await tmdbFetch<MovieProps>(`/movie/${id}/similar`);

  return (
    <div className="space-y-16">
      <RecentlyViewedTracker movie={movie} />
      <MovieDetails movie={movie} />
      <SimilarMovies similar={similar.results} />
    </div>
  );
};

export default MovieDetailsPage;
