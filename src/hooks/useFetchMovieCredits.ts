import { fetchMovieDB } from "@/utils/fetchMovieDB";
import { useQuery } from "@tanstack/react-query";

export default function useFetchMovieCredits({id}: {id: string}) {
    return useQuery({
        queryKey: ['movie-credits', id],
        queryFn: () => fetchMovieDB(`https://api.themoviedb.org/3/movie/${id}/credits`),
    })
}