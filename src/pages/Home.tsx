import { BodyCarousel } from "@/components/Home/Carousel/BodyCarousel";
import { useTrendingMovies } from "@/hooks/useTrendingMovies";
import { BannerCarousel } from "@/components/Home/Banner/BannerCarousel";
import { useTopRatedMovies } from "@/hooks/useTopRatedMovies";
import { useTrendingTVShows } from "@/hooks/useTrendingTVShows";
import { useTopRatedTVShows } from "@/hooks/useTopRatedTVShows";
export default function Home() {
  const {
    data: trendingMoviesData,
    isLoading: isTrendingMoviesLoading,
    isError: isTrendingMoviesError,
    error: trendingMoviesError,
  } = useTrendingMovies();

  const {
    data: topRatedMoviesData,
    isLoading: isTopRatedMoviesLoading,
    isError: isTopRatedMoviesError,
    error: topRatedMoviesError,
  } = useTopRatedMovies();

  const {
    data: trendingTVShowsData,
    isLoading: isTrendingTVShowsLoading,
    isError: isTrendingTVShowsError,
    error: trendingTVShowsError,
  } = useTrendingTVShows();

  const {
    data: topRatedTVShowsData,
    isLoading: isTopRatedTVShowsLoading,
    isError: isTopRatedTVShowsError,
    error: topRatedTVShowsError,
  } = useTopRatedTVShows();
  return (
    <>
      <div className="p-0 h-full mx-auto">
        {/* Banner Section */}
        {trendingMoviesData && !isTrendingMoviesLoading && !trendingMoviesError && (
          <BannerCarousel data={trendingMoviesData.results.slice(0, 5)} />
        )}
      </div>
      <div className="p-0 max-w-screen-2xl mx-auto">
        {/* Trending Movies */}
        {isTrendingMoviesLoading && (
          <p className="text-center text-blue-500">
            Loading trending movies...
          </p>
        )}
        {trendingMoviesData && !trendingMoviesError && (
          <BodyCarousel
            carouselTitle="Trending Movies"
            data={trendingMoviesData.results}
          />
        )}
        {/* Top Rated Movies */}
        {isTopRatedMoviesLoading && (
          <p className="text-center text-blue-500">
            Loading top rated movies...
          </p>
        )}
        {topRatedMoviesData && !isTopRatedMoviesError && (
          <BodyCarousel
            carouselTitle="Top Rated Movies"
            data={topRatedMoviesData.results}
          />
        )}

        {/* Trending TV */}
        {isTrendingTVShowsLoading && (
          <p className="text-center text-blue-500">
            Loading trending TV shows...
          </p>
        )}
        {trendingTVShowsData && !isTrendingTVShowsError && (
          <BodyCarousel
            carouselTitle="Trending TV Shows"
            data={trendingTVShowsData.results}
          />
        )}

        {/* Top Rated TV */}
        {isTopRatedMoviesLoading && (
          <p className="text-center text-blue-500">
            Loading top rated TV shows...
          </p>
        )}
        {topRatedTVShowsData && !isTopRatedTVShowsError && (
          <BodyCarousel
            carouselTitle="Top Rated TV Shows"
            data={topRatedTVShowsData.results}
          />
        )}
      </div>
    </>
  );
}
