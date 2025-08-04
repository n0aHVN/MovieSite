import { usePopularMovies } from "../hooks/usePopularMovies";

export default function Home() {
  const {data, isLoading, isError, error} = usePopularMovies();
  
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Welcome to MovieSite</h1>
      <p className="text-center text-gray-600 dark:text-gray-400">
        Your movie discovery platform
      </p>
      {/* Loading State */}
      {isLoading && <p className="text-center text-blue-500">Loading...</p>}
      
      {isError && <p className="text-center text-red-500">Error: {error.message}</p>}
      {/* Movie List */}
      {!isLoading && !isError && data && (
        <ul>
          {data.results.map((movie: any) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}