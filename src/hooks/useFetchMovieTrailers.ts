import { fetchMovieDB } from "@/utils/fetchMovieDB";
import { useQuery } from "@tanstack/react-query";

export default function useFetchMovieTrailers({id}: {id: string}) {
    return useQuery({
        queryKey: ['movie-trailers', id],
        queryFn: () => fetchMovieDB(`https://api.themoviedb.org/3/movie/${id}/videos`),
        select(data: any) {
            return (data.results as Array<any>).filter(
                (video: any) => video.type === "Trailer" && video.site === "YouTube" && video.official === true
            );
        },
    })
}