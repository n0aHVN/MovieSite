import { fetchTrendingMovies } from "@/utils/fetchTrendingMovie";
import { useQuery } from "@tanstack/react-query";

export function useTrendingMovies(){
    return useQuery({
        queryKey: ['trending-movies'],
        queryFn: fetchTrendingMovies
    });
}