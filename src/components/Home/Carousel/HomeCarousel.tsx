import {
  Carousel,
  CarouselContent,
} from "@/components/ui/carousel";
import HomeCarouselItem from "./HomeCarouselItem";
import Autoplay from 'embla-carousel-autoplay'
interface HomeCarouselProps {
  data: any[];
}

export function HomeCarousel({ data }: HomeCarouselProps) {
  if (!data || data.length === 0) {
    return <p className="text-center text-gray-500">No movies found</p>;
  }

  return (
    <Carousel
      className="w-full"
      opts={{
        align: "start",
        loop: true,
        // dragFree: true,
        skipSnaps: true,
      }}
      plugins={[
        Autoplay({ delay: 4000 }),
      ]}
    >
      <CarouselContent className="w-full flex">
        {data.map((item: any) => (
          <HomeCarouselItem key={item.id} data={item} />
        ))}
      </CarouselContent>
    </Carousel>
  );
}
