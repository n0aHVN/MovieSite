
import { useQuery } from "@tanstack/react-query";
import { fetchMovieDB } from "@/utils/fetchMovieDB";

export function useTopRatedTVShows(){
    return useQuery<any>({
        queryKey: ['top-rated-tv-shows'],
        queryFn: () => fetchMovieDB("https://api.themoviedb.org/3/tv/top_rated")
    });
}