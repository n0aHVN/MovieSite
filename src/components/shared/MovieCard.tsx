import type { HTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";

interface MovieCard extends HTMLAttributes<HTMLDivElement> {
  data: any;
}

export function MovieCard({ data }: MovieCard) {
  const navigate = useNavigate();
  const handleClick = () => {
    // Navigate to the movie detail page
    navigate(`/movie/${data.id}`);
  };
  return (
    <div onClick={handleClick}>
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w780${data.poster_path})`,
        }}
        className="relative flex w-full h-[20rem] bg-cover bg-center rounded-lg group items-center justify-center cursor-pointer transition-transform duration-300"
      >
        {/* An Layer when hovering */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-lg" />
        {/* Button appear when hovering */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
          height="5em"
          width="5em"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
               text-white opacity-0 group-hover:opacity-100 
               transition-opacity duration-300 bg-red-500 rounded-full p-3"
        >
          <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
        </svg>
      </div>
      <p className="mt-2 text-center text-sm truncate">{data.title}</p>
    </div>
  );
}
