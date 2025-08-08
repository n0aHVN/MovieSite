import { MovieCard } from "@/components/shared/MovieCard";
import SearchBar from "@/components/shared/SearchBar";
import TVBanner from "@/components/TV/TVBanner";
import useSearchTVSeries from "@/hooks/useSearchTVSeries";
import { useTrendingTVSeries } from "@/hooks/useTrendingTVSeries";
import { useEffect, useState } from "react";

export default function TVSeriesPage(){
  const {
    data: trendingTVSeriesData,
    isLoading: isTrendingTVSeriesLoading,
    isError: isTrendingTVSeriesError,
    error: trendingTVSeriesError,
  } = useTrendingTVSeries();
  const trendingTVSeries = trendingTVSeriesData?.results ?? [];
  const [displayData, setDisplayData] = useState(trendingTVSeries);

  useEffect(()=>{
    if (trendingTVSeries.length > 0) {
      setDisplayData(trendingTVSeries);
    }
  },[trendingTVSeries]);
  
  return (
    <div className="flex flex-col w-full h-full">
      <TVBanner />
      <div className="flex mx-auto max-w-screen-xl w-full">
        <SearchBar 
          fallbackData={trendingTVSeries}
          onDataChange={setDisplayData}
          placeholder="Find a TV series"
          useSearch={useSearchTVSeries} 
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8 w-full max-w-screen-2xl mx-auto mt-8">
        {displayData &&
          !isTrendingTVSeriesLoading &&
          displayData.map((item: any) => {
            return <MovieCard key={item.id} data={item} />;
          })}
      </div>
    </div>
  );
}