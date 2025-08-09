import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchMovieDB } from "@/utils/fetchMovieDB";

export function useInfiniteTrendingMovies() {
    return useInfiniteQuery({
        queryKey: ['infinite-trending-movies'],
        queryFn: ({ pageParam = 1 }) => fetchMovieDB(`https://api.themoviedb.org/3/trending/movie/week?page=${pageParam}`),
        initialPageParam: 1,
        maxPages: 5,
        getNextPageParam: (lastPage: any, allPages: any[]) => {
            return lastPage.results.length > 0 && allPages.length < 5 ? allPages.length + 1 : undefined;
        }
    });
}