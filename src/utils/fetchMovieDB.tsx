import axios from "axios";

export async function fetchMovieDB<T>(url: string): Promise<T> {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const response = await axios.get(`${url}`,{
    params: {
      api_key: API_KEY,
    }
  });
  if (response.status !== 200) {
    throw new Error("Failed to fetch TheMovieDB");
  }
  return response.data;
}