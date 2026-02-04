"use client";

import SectionHeader from "@/components/shared/SectionHeader";

import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TopRatedProps } from "@/types/movie.type";
import { Star } from "lucide-react";

const TopRated = ({ movies }: TopRatedProps) => {
  console.log(movies);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (nextButtonRef.current) {
        nextButtonRef.current.click();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SectionHeader
        title="Top Rated Movies"
        subtitle="Explore the highest-rated movies from CineVault"
      />

      <Carousel
        className="w-full overflow-visible "
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="pt-2 pb-12 ">
          {movies.map((movie, index) => (
            <CarouselItem
              key={movie.id}
              className={`basis-1/2 sm:basis-1/3 md:basis-1/6 pl-4 
                ${index % 2 === 0 ? "translate-y-0" : "translate-y-10"} transition-transform`}
            >
              {/* Custom Tailwind Card */}
              <div
                className="bg-card rounded-lg overflow-hidden shadow-md shadow-primary/10 hover:shadow-lg
                hover:scale-[1.03] transition-transform cursor-pointer relative"
              >
                <div className="absolute top-1 left-1 z-10">
                  <div className="relative w-10 h-10 flex items-center justify-center">
                    <Star
                      size={40}
                      className="absolute inset-0 text-primary fill-primary stroke-primary"
                    />
                    <span className="relative text-xs font-bold text-black">
                      {movie.vote_average.toFixed(1)}
                    </span>
                  </div>
                </div>

                {/* Poster */}
                <div className="relative w-full h-56.25 pb-0">
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Info */}
                <div className="p-3">
                  <h3 className="text-sm font-semibold">{movie.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(movie.release_date).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* navigation */}
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary! text-black!" />
        <CarouselNext
          ref={nextButtonRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary! text-black!"
        />
      </Carousel>
    </>
  );
};

export default TopRated;
