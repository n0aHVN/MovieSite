export default function MovieBanner(){
    const bgStyle = "bg-gradient-to-b from-white to-black-main";

    return (
        <div className={`flex items-center justify-center min-w-full h-50 ${bgStyle}`}>
            <h1 className="text-4xl font-bold text-center">Movies</h1>
        </div>
    );
}