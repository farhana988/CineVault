const BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL!;
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY!;
export async function tmdbFetch<T>(endpoint: string) {
  const res = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    const error = await res.text();
    console.error("TMDB STATUS:", res.status);
    console.error("TMDB RESPONSE:", error);
    throw new Error("TMDB API Error");
  }

  return res.json() as Promise<T>;
}
