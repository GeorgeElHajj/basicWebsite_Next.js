export default function Banner({text,image}) {
    return (
        <div className="container mx-auto 2xl:max-w-7xl relative mt-20">
            <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-1 text-4xl">{text}</h2>
            <img src={image} alt="Banner Image" className="w-full h-auto" />
        </div>
    );
}