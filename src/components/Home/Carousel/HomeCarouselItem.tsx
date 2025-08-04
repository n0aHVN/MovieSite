import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";

interface HomeCarouselItemProp {
  key: number | string;
  data: any;
}

//https://image.tmdb.org/t/p/original/mIg1qCkVxnAlM2TK3RUF0tdEXlE.jpg
export default function HomeCarouselItem({ key, data }: HomeCarouselItemProp) {
  return (
    <CarouselItem key={key} className="sm:basis-1/2 md:basis-1/4 lg:basis-1/6">
      <div className="p-1">
        <Card className="overflow-hidden rounded-xl p-0 border-none bg-black">
          <CardContent className="p-0 aspect-[2/3] relative">
            <div
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w185/${data.poster_path})`,
              }}
              className="w-full h-full bg-cover bg-center"
            ></div>
          </CardContent>
        </Card>
        <p className="mt-2 text-center text-sm truncate">
          {data.title}
        </p>
      </div>
    </CarouselItem>
  );
}
