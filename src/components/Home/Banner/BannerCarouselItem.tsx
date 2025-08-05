import BannerContent from "./BannerContent";

interface BannerCarouselItemProps {
  data: any;
}

export function BannerCarouselItem({ data }: BannerCarouselItemProps) {
  return (
    <div
      className="relative flex-1 bg-cover bg-center h-[40rem] bg-black"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <BannerContent data={data} />
    </div>
  );
}