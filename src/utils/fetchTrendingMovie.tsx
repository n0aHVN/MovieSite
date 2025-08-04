import axios from "axios";

export async function fetchTrendingMovies() {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
  );
  if (response.status !== 200) {
    throw new Error("Failed to fetch trending movies");
  }
  return response.data;
}