import MovieBanner from "@/components/Movies/MovieBanner";
import { MovieCard } from "@/components/shared/MovieCard";
import SearchBar from "@/components/shared/SearchBar";
import useSearchMovies from "@/hooks/useSearchMovies";
import { useTrendingMovies } from "@/hooks/useTrendingMovies";
import { useEffect, useState } from "react";

export default function Movie() {
  const {
    data: trendingMoviesData,
    isLoading: isTrendingMoviesLoading,
    isError: isTrendingMoviesError,
    error: trendingMoviesError,
  } = useTrendingMovies();
  
  const trendingMovies = trendingMoviesData?.results ?? [];
  const [displayData, setDisplayData] = useState(trendingMovies);
    // Set initial display data to trending movies
    // Trending movies can be empty because async fetching
  useEffect(() => {
    if (trendingMovies.length > 0) {
      setDisplayData(trendingMovies);
    }
  }, [trendingMovies]);
  
  return (
    <div className="flex flex-col w-full h-full">
      <MovieBanner />
      <div className="flex mx-auto max-w-screen-xl w-full">
        <SearchBar
          placeholder="Find a movie"
          fallbackData={trendingMovies}
          onDataChange={setDisplayData}
          useSearch={useSearchMovies}
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8 w-full max-w-screen-2xl mx-auto mt-8">
        {displayData &&
          !isTrendingMoviesLoading &&
          displayData.map((item: any) => {
            return <MovieCard key={item.id} data={item} />;
          })}
      </div>
    </div>
  );
}
