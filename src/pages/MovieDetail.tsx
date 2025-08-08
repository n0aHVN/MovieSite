import MovieDetailBanner from "@/components/MovieDetail/MovieDetailBanner";
import useMovieDetails from "@/hooks/useMovieDetails";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function MovieDetail(){
    const {id: movieId} = useParams<{ id: string }>() as { id: string };
    const {data, isLoading} = useMovieDetails(movieId) as { data: any, isLoading: boolean };
    
    if (isLoading) {
        return <div>Loading...</div>;
    }
    
    const imageUrl = (data as any)?.backdrop_path as string || "";
    
    return (
        <div className="w-full">
            {imageUrl && <MovieDetailBanner data={data} />}
        </div>
    );
}