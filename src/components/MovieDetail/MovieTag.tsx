interface MovieTagProps{
    label: string[];
}
export default function MovieTag({ label }: MovieTagProps){
    return (
        <>
            {label.map((item, index) => (
                <div key={index} className="border inline-block px-5 py-1 mr-2 text-m font-semibold text-white bg-black-main rounded-full">
                    {item}
                </div>
            ))}
        </>
    );
}
