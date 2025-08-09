import CastCard from "./CastCard";
import MovieTag from "./MovieTag";

export default function MovieDetailBanner({
  detailsData,
  creditsData,
}: {
  detailsData: any;
  creditsData: any;
}) {
  const tags = detailsData.genres.map((genre: { name: string }) => genre.name);
  const actors = (creditsData.cast as Array<any>)
    .filter((member: any) => member.known_for_department === "Acting")
    .slice(0, 5);


  return (
    <div
      className='relative px-4 md:px-8 lg:px-16 py-12 md:pt-32 md:pb-20 bg-center bg-no-repeat bg-cover z-0
        before:content-[""] -z-10 before:top-0 before:absolute before:left-0 before:right-0 before:h-1/2 before:bg-gradient-to-b before:from-transparent before:to-black-main
        after:content-[""] -z-10 after:top-1/2 after:absolute after:left-0 after:right-0 after:h-1/2 after:bg-black-main
        '
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original${detailsData.backdrop_path}')`,
      }}
    >
      {/* Poster */}
      <div className="relative z-1 flex gap-10 justify-items-start mx-auto">
        <img
          className="rounded-4xl shadow-lg"
          src={`https://image.tmdb.org/t/p/w500${detailsData.poster_path}`}
          alt=""
        />
        <div className="flex flex-col items-start gap-10">
          {/* Movie Title */}
          <h1 className="py-2 lg:py-4 font-bold text-white text-3xl md:text-5xl lg:text-7xl">
            {detailsData.original_title}
          </h1>
          {/* Movie Tags */}
          <div className="flex items-center gap-4">
            <MovieTag label={tags} />
          </div>
          {/* Movie Overview */}
          <p className="py-2 lg:py-4 text-white text-xs md:text-sm lg:text-base">
            {detailsData.overview}
          </p>

          {/* Cast Cards*/}
          <div className="flex gap-3">
            {actors.map((actor: any) => (
              <CastCard
                key={actor.id}
                actor={{
                  name: actor.name,
                  profile_path: actor.profile_path,
                  character: actor.character,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
