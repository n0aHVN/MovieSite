interface HomeCarouselItemProp {
  data: any;
}

export function BodyCarouselItem({ data }: HomeCarouselItemProp) {
  return (
    <div>
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w780${data.poster_path})`,
            }}
            className="w-full h-[20rem] bg-cover bg-center rounded-lg"
          ></div>
      <p className="mt-2 text-center text-sm truncate">
        {data.title}
      </p>
    </div>
  );
}
