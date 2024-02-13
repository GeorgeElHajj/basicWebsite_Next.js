export default function Banner({text,image}) {
    return (
        <div className="mx-auto relative mt-20 min-h-full">
            <h2 className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 text-white z-1 text-4xl text-center">{text}</h2>
            <img src={image} alt="Banner Image" className="w-full h-auto" />
        </div>
    );
}
