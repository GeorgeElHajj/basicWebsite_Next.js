export default function Banner() {
    return (
        <div className="relative overflow-hidden mt-12">
            <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-1 text-4xl">Welcome to My Website</h2>
            <img src="banner.jpg" alt="Banner Image" className="w-full h-auto" />
        </div>
    );
}