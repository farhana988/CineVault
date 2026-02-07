"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Movie } from "@/types/movie.type";
import { searchMovies } from "@/helper/getSearchMovie";
import Link from "next/link";
import { Loader2, Search } from "lucide-react";
import GradientButton from "../buttons/GradientButton";

interface SearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SearchModal({ open, onOpenChange }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    try {
      const results = await searchMovies(query);
      setMovies(results);
    } catch (err) {
      console.error(err);
      setMovies([]);
    }
    setLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-screen overflow-y-auto min-w-screen">
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
        <div className="sticky top-0 bg-background z-10 flex gap-2 mt-4 mb-6 p-2 text-black">
          <div className="relative w-full">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-black"
              size={16}
            />

            <Input
              placeholder="Type to search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              autoFocus
              className="pl-10"
            />
          </div>
          <GradientButton onClick={handleSearch} disabled={loading}>
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Search"}
          </GradientButton>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 min-h-screen">
          {movies.map((movie) => (
            <Link
              key={movie.id}
              href={`/movie/${movie.id}`}
              className="relative"
              onClick={() => onOpenChange(false)}
            >
              <div className="relative aspect-2/3 rounded-lg overflow-hidden hover:scale-105 transition">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-sm font-semibold line-clamp-2 absolute bottom-0 bg-black/70 text-white w-full rounded-b-lg p-2">
                {movie.title}
              </h3>
            </Link>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
