import Image from "next/image";
import { Star } from "lucide-react";
import { MovieCardProps } from "@/types/movie.type";

const MovieCard = ({
  title,
  posterPath,
  rating,
  releaseDate,
  onClick,
}: MovieCardProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-card rounded-lg overflow-hidden shadow-md shadow-primary/10 max-h-80
      hover:shadow-lg hover:scale-[1.03] transition-transform cursor-pointer relative"
    >
      {/* Rating badge */}
      <div className="absolute top-1 left-1 z-10">
        <div className="relative w-10 h-10 flex items-center justify-center">
          <Star
            size={40}
            className="absolute inset-0 text-primary fill-primary stroke-primary"
          />
          <span className="relative text-xs font-bold text-black">
            {rating.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Poster */}
      <div className="relative w-full h-56.25">
        <Image
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Info */}
      <div className="p-3">
        <h3 className="text-sm font-semibold line-clamp-2">{title}</h3>

        {releaseDate && (
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {new Date(releaseDate).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
