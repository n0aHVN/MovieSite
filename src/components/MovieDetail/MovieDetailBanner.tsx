export default function MovieDetailBanner({ data }: { data: any }) {
  return (
    <div
      className='relative px-4 md:px-8 lg:px-16 py-12 md:pt-32 md:pb-20 bg-center bg-no-repeat bg-cover z-0 
        before:content-[""] -z-10 before:top-0 before:absolute before:left-0 before:right-0 before:h-1/2 before:bg-gradient-to-b before:from-transparent before:to-black-main
        after:content-[""] -z-10 after:top-1/2 after:absolute after:left-0 after:right-0 after:h-1/2 after:bg-black-main
        '
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original${data.backdrop_path}')`,
      }}
    >
      {/* Poster */}
      <div className="relative z-1 flex gap-10 items-center justify-items-start mx-auto">
        <img
          className="rounded-lg shadow-lg"
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt=""
        />
        <div>
          <h1 className="py-2 lg:py-4 font-bold text-white text-3xl md:text-5xl lg:text-7xl">{data.original_title}</h1>
          <p className="py-2 lg:py-4 text-white text-xs md:text-sm lg:text-base">{data.overview}</p>
        </div>
      </div>
    </div>
  );
}
