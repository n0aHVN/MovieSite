interface BannerContentProps {
    data: any;
}

export default function BannerContent({ data }: BannerContentProps) {
    return (
    <div className="relative flex items-center  h-full gap-16 max-w-7xl mx-auto justify-between ">
        {/* Left: Title, Description, 2 Buttons */}
        <div className="flex-1 flex-col justify-center">
            <h2 className="font-bold text-6xl tracking-tight mb-8">
                {data.title}
            </h2>

            <p className="text-lg mb-10 max-w-2xl">{data.overview}</p>

            <div className="flex gap-6">
                <button className="bg-red-600 text-lg font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-red-700 transition">
                    Watch Now
                </button>
                <button className="border text-lg font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-white hover:text-red-500 transition">
                    Watch Trailer
                </button>
            </div>
        </div>
        
        {/* Right: Poster Card */}
        <div className="flex shrink-0">
            <img
                className="rounded-2xl shadow-2xl w-80 h-[30rem] object-cover "
                src={`https://image.tmdb.org/t/p/original${data.poster_path}`}/>
        </div>
    </div>
    );
}