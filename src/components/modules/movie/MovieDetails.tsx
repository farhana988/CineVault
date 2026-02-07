import Image from "next/image";
import { Clock, DollarSign, Globe, CheckCircle, Star } from "lucide-react";
import { Genre, MovieDetailsProps } from "@/types/movie.type";

const MovieDetails = ({ movie }: MovieDetailsProps) => {
  const {
    title,
    poster_path,
    tagline,
    release_date,
    vote_average,
    vote_count,
    overview,
    genres,
    runtime,
    budget,
    status,
    original_language,
    production_countries,
    spoken_languages,
  } = movie;
  return (
    <div className="">
      <div className="grid md:grid-cols-3 gap-6 xl:gap-10  bg-opacity-70 overflow-hidden">
        {/* Poster */}
        <div className="relative">
          <Image
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            width={400}
            height={600}
            className="rounded-xl transform hover:scale-105 transition duration-500"
          />
        </div>

        {/* Movie Info */}
        <div className="md:col-span-2 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl xl:text-5xl font-bold mb-2">{title}</h1>
            {tagline && (
              <p className="italic text-muted-foreground mb-4">{tagline}</p>
            )}

            <div className="flex items-center gap-6 mb-4 flex-wrap">
              <div className=" flex items-center gap-2 flex-wrap">
                <h2 className="font-semibold opacity-80 "> Release: </h2>
                <p className="flex flex-wrap gap-2 text-muted-foreground ">
                  {release_date}
                </p>
              </div>
              {/* Rating */}
              <div className="flex items-center gap-2 text-yellow-400 font-semibold">
                <Star className="w-5 h-5 fill-primary" />
                <span>{vote_average.toFixed(1)}</span>
                <span className="text-muted-foreground text-sm">
                  ({vote_count} votes)
                </span>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {overview}
            </p>

            {/* Genres */}
            <div className="flex flex-wrap gap-2 mb-6">
              {genres?.map((genre: Genre) => (
                <span
                  key={genre.id}
                  className="px-3 py-1 text-xs bg-primary text-black rounded-full font-semibold hover:bg-yellow-500/50 transition"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            {/* Runtime & Budget & Revenue */}
            <div className="flex flex-wrap gap-2 xl:gap-6 text-muted-foreground mb-6 items-center">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-primary" /> {runtime} min
              </span>

              {budget && (
                <span className="flex items-center gap-1">
                  <DollarSign className="w-4 h-4 text-green-400" /> $
                  {budget.toLocaleString()}
                </span>
              )}

              {status && (
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-400" /> {status}
                </span>
              )}

              {original_language && (
                <span className="flex items-center gap-1">
                  <Globe className="w-4 h-4 text-purple-400" />{" "}
                  {original_language.toUpperCase()}
                </span>
              )}
            </div>

            {/* Countries */}

            <div className="mb-4 flex items-center gap-2 flex-wrap">
              <h2 className="font-semibold opacity-80">Countries:</h2>
              <div className="flex flex-wrap gap-2 text-muted-foreground">
                {production_countries?.map((country) => (
                  <span key={country.iso_3166_1}>{country.name}</span>
                ))}
              </div>
            </div>

            <div className="mb-4 flex items-center gap-2 flex-wrap">
              <h2 className="font-semibold opacity-80">Languages:</h2>
              <div className="flex flex-wrap gap-2 text-muted-foreground">
                {spoken_languages?.map((lang) => (
                  <span key={lang.iso_639_1}>{lang.english_name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
