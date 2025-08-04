import axios from "axios";

export async function fetchPopularMovies() {
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=0048a7854ed872ee25fad62b1d7df6c1"
  );
  if (response.status !== 200) {
    throw new Error("Failed to fetch popular movies");
  }
  return response.data;
}