import Popular from "@/components/modules/home/Popular";
import TopRated from "@/components/modules/home/TopRated";
import { tmdbFetch } from "@/lib/tmdb";
import { MovieProps } from "@/types/movie.type";

const HomePage = async () => {
  const top_rated = await tmdbFetch<MovieProps>("/movie/top_rated");

  return (
    <>
      <TopRated movies={top_rated.results} />
      <Popular />
    </>
  );
};

export default HomePage;
