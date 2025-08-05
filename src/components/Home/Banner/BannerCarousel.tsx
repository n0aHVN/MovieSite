import { Swiper, SwiperSlide } from 'swiper/react';
import { BannerCarouselItem } from "./BannerCarouselItem";

interface BannerCarouselProps {
  data: any[];
}

export function BannerCarousel({ data }: BannerCarouselProps) {
  if (!data || data.length === 0) {
    return <p className="text-center text-gray-500">No movies found</p>;
  }
  return (
    <Swiper
      // modules={[Autoplay]}
      // autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop={true}
      spaceBetween={16}
      slidesPerView={1}
    >
      {data.map((item: any) => (
        <SwiperSlide key={item.id}>
          <BannerCarouselItem data={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
