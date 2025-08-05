
import { useQuery } from "@tanstack/react-query";
import { fetchMovieDB } from "@/utils/fetchMovieDB";

export function useTrendingTVShows(){
    return useQuery<any>({
        queryKey: ['trending-tv-shows'],
        queryFn: () => fetchMovieDB("https://api.themoviedb.org/3/trending/tv/week")
    });
}