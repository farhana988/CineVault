import { Movie, SimilarMovieProps } from "@/types/movie.type";
import Image from "next/image";
import Link from "next/link";

const SimilarMovies = ({ similar }: SimilarMovieProps) => {
  return (
    <div>
      <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
        You May Also Like
      </h2>
      {similar.length === 0 ? (
        <div className="p-4 text-center text-muted-foreground">
          No similar movies found.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {similar.slice(0, 5).map((movie: Movie) => (
            <Link key={movie.id} href={`/movie/${movie.id}`}>
              <div className="relative aspect-2/3 rounded-lg overflow-hidden hover:scale-105 transition">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SimilarMovies;
