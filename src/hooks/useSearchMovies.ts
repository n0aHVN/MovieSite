import { fetchMovieDB } from "@/utils/fetchMovieDB";
import { useQuery } from "@tanstack/react-query";

export default function useSearchMovies(query: string) {
    return useQuery<any>({
        queryKey: ['search-movies', query],
        queryFn: ()=> fetchMovieDB(`https://api.themoviedb.org/3/search/movie?query=${query}`)
    });
}