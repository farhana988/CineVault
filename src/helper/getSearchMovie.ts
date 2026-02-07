import { Movie } from "@/types/movie.type";
const BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL!;
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY!;

export async function searchMovies(query: string): Promise<Movie[]> {
  if (!query.trim()) return [];

  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`TMDB API error: ${res.status}`);
    }
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}
