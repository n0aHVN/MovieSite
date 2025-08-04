import { useQuery } from "@tanstack/react-query";
import { fetchPopularMovies } from "../utils/fetchPopularMovie";

export function usePopularMovies(){
    return useQuery({
        queryKey: ['popular-movies'],
        queryFn: fetchPopularMovies
    });
}