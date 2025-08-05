
import { useQuery } from "@tanstack/react-query";
import { fetchMovieDB } from "@/utils/fetchMovieDB";

export function useTrendingMovies(){
    return useQuery<any>({
        queryKey: ['trending-movies'],
        queryFn: () => fetchMovieDB("https://api.themoviedb.org/3/trending/movie/week")
    });
}