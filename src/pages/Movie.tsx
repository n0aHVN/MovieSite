import MovieBanner from "@/components/Movies/MovieBanner";
import MovieList from "@/components/Movies/MovieInfiniteList";
import { MovieCard } from "@/components/shared/MovieCard";
import SearchBar from "@/components/shared/SearchBar";
import { useInfiniteTrendingMovies } from "@/hooks/useInfiniteTrendingMovies";
import useSearchMovies from "@/hooks/useSearchMovies";
import {useState } from "react";

export default function Movie() {
  const infiniteTrendingReturns = useInfiniteTrendingMovies();
  const [displayData, setDisplayData] = useState([] as any[]);
  const [isDisplayDataLoading, setIsDisplayDataLoading] = useState(false);

  function MovieListCondition() {
    if (displayData.length > 0) {
      return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8 w-full max-w-screen-2xl mx-auto mt-8">
          {displayData.map((item: any) => {
            return <MovieCard key={item.id} data={item} />;
          })}
        </div>
      );
    }
      return <MovieList infiniteTrendingReturns={infiniteTrendingReturns} />;
  }

  return (
    <div className="flex flex-col w-full h-full">
      <MovieBanner />
      <div className="flex mx-auto max-w-screen-xl w-full">
        <SearchBar
          placeholder="Find a movie"
          fallbackData={[]}
          onDataChange={setDisplayData}
          useSearch={useSearchMovies}
          setIsLoading={setIsDisplayDataLoading}
        />
      </div>
        {MovieListCondition()}
    </div>
  );
}
