import RecentlyViewedTracker from "@/components/modules/RecentlyViewed/RecentlyViewedTracker";
import { tmdbFetch } from "@/lib/tmdb";
import { Movie } from "@/types/movie.type";
import Image from "next/image";

const MovieDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const movie = await tmdbFetch<Movie>(`/movie/${id}`);
  console.log(movie);
  return (
    <div className="">
      <RecentlyViewedTracker movie={movie} />
      <div className="grid md:grid-cols-3 gap-8">
        {/* Poster */}
        <div>
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={400}
            height={600}
            className="rounded-lg"
          />
        </div>

        {/* Info */}
        <div className="md:col-span-2 space-y-4">
          <h1 className="text-3xl font-bold">{movie.title}</h1>

          <p className="text-gray-400">Release: {movie.release_date}</p>

          <p className="text-yellow-400 font-semibold">
            ⭐ {movie.vote_average.toFixed(1)}
          </p>

          <p className="text-sm leading-relaxed text-gray-200">
            {movie.overview}
          </p>

          {/* Genres */}
          <div className="flex flex-wrap gap-2">
            {movie.genres.map((genre: any) => (
              <span
                key={genre.id}
                className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full"
              >
                {genre.name}
              </span>
            ))}
          </div>

          <p className="text-sm text-gray-400">Runtime: {movie.runtime} min</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
