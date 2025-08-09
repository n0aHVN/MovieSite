import MovieDetailBanner from "@/components/MovieDetail/MovieDetailBanner";
import useFetchMovieCredits from "@/hooks/useFetchMovieCredits";
import useFetchMovieTrailers from "@/hooks/useFetchMovieTrailers";
import useMovieDetails from "@/hooks/useMovieDetails";
import { useParams } from "react-router-dom";

export function MovieDetail() {
  const { id: movieId } = useParams<{ id: string }>() as { id: string };
  const { data: detailsData, isLoading: isDetailsDataLoading } =
    useMovieDetails(movieId);
  const { data: creditsData, isLoading: isCreditsDataLoading } =
    useFetchMovieCredits({ id: movieId });

  const { data: trailersData, isLoading: isTrailersDataLoading } =
    useFetchMovieTrailers({ id: movieId });
  if (isDetailsDataLoading || isCreditsDataLoading || isTrailersDataLoading) {
    return <div>Loading...</div>;
  }
  if (!isCreditsDataLoading) {
    console.log("Movie credits Data:", creditsData);
  }

  const imageUrl = ((detailsData as any)?.backdrop_path as string) || "";

  return (
    <div className="w-full">
      {imageUrl && (
        <MovieDetailBanner
          detailsData={detailsData}
          creditsData={creditsData}
        />
      )}

      {/* Trailers */}
      <div className="flex flex-col gap-8 px-16">
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Trailers:</h1>
        {trailersData && trailersData.map((trailer: any) => (
          <div key={trailer.id} className="justify-items-center items-center">
            <iframe
              width="1000"
              height="500"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title={trailer.name}
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
