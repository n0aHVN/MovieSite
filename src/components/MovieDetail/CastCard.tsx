interface CastCardProps {
    actor: {
        profile_path: string;
        name: string;
        character: string;
    };
}
export default function CastCard({ actor }: CastCardProps) {
  return (
    <div className="flex flex-col items-center">
      <img
        className="w-24 h-36 rounded-lg shadow-md"
        src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
        alt={actor.name}
      />
      <h3 className="mt-2 text-sm font-semibold text-white">{actor.name}</h3>
      <p className="text-xs text-gray-400">{actor.character}</p>
    </div>
  );
}
