import TopRated from "@/components/modules/home/TopRated";
import { tmdbFetch } from "@/lib/tmdb";
import { MovieProps } from "@/types/movie.type";

const HomePage = async () => {
  const data = await tmdbFetch<MovieProps>("/movie/top_rated");
  return (
    <>
      <TopRated movies={data.results} />
    </>
  );
};

export default HomePage;
