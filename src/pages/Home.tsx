import { HomeCarousel } from "@/components/Home/Carousel/HomeCarousel";
import { useTrendingMovies } from "@/hooks/useTrendingMovies";

export default function Home() {
  const {
    data: trendingData,
    isLoading: isTrendingLoading,
    isError: isTrendingError,
    error: trendingError,
  } = useTrendingMovies();

  return (
    <div className="container p-0 bg-black">
      <h1 className="text-3xl font-bold text-center mb-8">
        Welcome to MovieSite
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-400">
        Your movie discovery platform
      </p>
      
      {/* Trending Carousel */}
      {isTrendingLoading && (
        <p className="text-center text-blue-500">Loading trending movies...</p>
      )}
      {trendingData && !isTrendingError && (
        <HomeCarousel
          data={trendingData.results}
        />
      )}

    </div>
  );
}
