// https://api.themoviedb.org/3/search/movie?query=28&api_key=0048a7854ed872ee25fad62b1d7df6c1

import { fetchMovieDB } from "@/utils/fetchMovieDB";
import { useQuery } from "@tanstack/react-query";

export default function useSearchTVSeries(query: string) {
    return useQuery<any>({
        queryKey: ['search-tv-series', query],
        queryFn: ()=> fetchMovieDB(`https://api.themoviedb.org/3/search/tv?query=${query}`)
    });
}