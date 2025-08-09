import { useCallback, useEffect, useMemo, useRef } from "react";
import type { useInfiniteQuery } from "@tanstack/react-query";
import { MovieCard } from "../shared/MovieCard";
import { useInView } from "react-intersection-observer";
export default function MovieList({
  infiniteTrendingReturns,
}: {
  infiniteTrendingReturns: ReturnType<typeof useInfiniteQuery<any>>;
}) {
  const { ref, inView } = useInView({threshold: 0.2, rootMargin: "100px", root: null});
  const {
    data,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    isFetching,
  } = infiniteTrendingReturns;

  // Flatten all pages into a single array
  const movies = useMemo(() => {
    return data?.pages.flatMap((page) => page.results) ?? [];
  }, [data]);

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8 w-full max-w-screen-2xl mx-auto mt-8">
        {movies.map((item: any) => (
          <MovieCard
            key={item.id}
            data={item}
          />
        ))}
      </div>

      {/* Loader / Trigger */}
      <div ref={ref} className="h-10 flex justify-center items-center">
        {"Inview: " + inView}
        {isFetching && <p>Loading more...</p>}
      </div>
    </>
  );
}
