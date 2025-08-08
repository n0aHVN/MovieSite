import { fetchMovieDB } from "@/utils/fetchMovieDB";
import { useQuery } from "@tanstack/react-query";

export default function useMovieDetails(movieId: string) {
    return useQuery({
        queryKey: ['movie-details', movieId],
        queryFn: () => fetchMovieDB(`https://api.themoviedb.org/3/movie/${movieId}`),
    })
}