import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { BodyCarouselItem } from "./BodyCarouselItem";

interface BodyCarouselProps {
  carouselTitle: string;
  data: any[];
}

export function BodyCarousel({ carouselTitle, data }: BodyCarouselProps) {
  if (!data || data.length === 0) {
    return <p className="text-center text-gray-500">No movies found</p>;
  }

  return (
    <div>
      <div className="flex justify-between items-center my-[2rem]">
        <p className="text-center font-semibold text-3xl">{carouselTitle}</p>
        <button className="text-center border rounded-full px-6 py-3 font-semibold text-2xl">
          View More
        </button>
      </div>

      <Swiper
        className="w-full"
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={16}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {data.map((item: any) => (
          <SwiperSlide key={item.id}>
            <BodyCarouselItem data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
