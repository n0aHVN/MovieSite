
import { useQuery } from "@tanstack/react-query";
import { fetchMovieDB } from "@/utils/fetchMovieDB";

export function useTopRatedMovies(){
    return useQuery<any>({
        queryKey: ['top-rated-movies'],
        queryFn: () => fetchMovieDB("https://api.themoviedb.org/3/movie/top_rated")
    });
}