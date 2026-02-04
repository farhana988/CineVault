import MovieCard from "@/components/cards/MovieCard";
import SectionHeader from "@/components/shared/SectionHeader";
import { getMoviesByGenre } from "@/helper/getMoviesByGenre";
import { Bookmark } from "lucide-react";

const Popular = async () => {
  const moviesByGenre = await getMoviesByGenre();

  return (
    <>
      <SectionHeader
        title="Popular Movies"
        subtitle="Discover what’s trending and most watched right now"
      />
      {moviesByGenre.map(({ genre, movies }) => (
        <section key={genre.id}>
          <div className="flex items-center mb-7 gap-0 relative">
            <Bookmark
              size={40}
              className="absolute top-0 -left-2 text-primary fill-primary stroke-primary"
            />

            <h2 className="relative left-5 top-1 px-3 text-xl font-semibold rounded-r-xl border-t-2 border-primary/80 ">
              {genre.name}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                posterPath={movie.poster_path}
                rating={movie.vote_average}
                releaseDate={movie.release_date}
              />
            ))}
          </div>
        </section>
      ))}
    </>
  );
};

export default Popular;
