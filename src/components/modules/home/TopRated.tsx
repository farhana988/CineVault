"use client";

import SectionHeader from "@/components/shared/SectionHeader";
import { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TopRatedProps } from "@/types/movie.type";
import MovieCard from "@/components/cards/MovieCard";

const TopRated = ({ movies }: TopRatedProps) => {
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
        <CarouselContent className="pt-2 pb-12">
          {movies.map((movie, index) => (
            <CarouselItem
              key={movie.id}
              className={`basis-1/2 sm:basis-1/4 lg:basis-1/5 xl:basis-1/6 pl-4 
                ${index % 2 === 0 ? "translate-y-0" : "translate-y-10"} transition-transform`}
            >
              <MovieCard
                id={movie.id}
                title={movie.title}
                posterPath={movie.poster_path}
                rating={movie.vote_average}
                releaseDate={movie.release_date}
              />
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
