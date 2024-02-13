export default function Service({ image, service, description }) {
    return (
        <>
            <div className="2xl:container mx-auto  sm:m-4 m-0   ">
                <div className="image flex justify-center align-middle">
                    <img src={image} alt={service} className="w-1/4 rounded-t-md " />
                </div>
                <div className="text-center p-2.5">
                    <h1 className="sm:text-xl text-base font-semibold">{service}</h1>
                </div>
                <div className="p-1 text-center rounded-t-md pt-2.5 text-base">
                    <p>{description}</p>
                    <button className="sm:mt-6 mt-3.5 mb-6 text-black bg-slate-500	 border border-black rounded-md sm:p-2.5 p-1.5 px-4 py-2 transition-colors duration-500 ease-in-out hover:bg-black hover:text-white hover:cursor-pointer">Read More...</button>
                </div>
            </div>



        </>
    );
}