export default function Services() {
    return (
        <div className="flex flex-col items-center m-5 p-5 border border-gray-300 rounded-lg">
            <h3 className="text-lg font-semibold bl">Services</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                <div className="mx-4 m-4 border border-gray-300 rounded-md shadow-lg shadow-black box-border ">
                    <div className="image">
                        <img src="Service.jpg" alt="Service 1" className="w-full rounded-t-md" />
                    </div>
                    <div className="text-center p-2.5">
                        <h1 className="sm:text-xl text-base font-semibold">Service 1</h1>
                    </div>
                    <div className="p-1 text-center rounded-t-md pt-2.5 text-base">
                        <p>Description...</p>
                        <button className="sm:mt-8 mt-3.5 mb-2 bg-white border border-black rounded-md sm:p-2.5 p-1.5 px-4 py-2 transition-colors duration-500 ease-in-out hover:bg-black hover:text-white hover:cursor-pointer">Read More...</button>
                    </div>
                </div>

                <div className="mx-4 m-4 border border-gray-300 rounded-md shadow-lg shadow-black box-border">
                    <div className="image">
                        <img src="Service.jpg" alt="Service 2" className="w-full rounded-t-md" />
                    </div>
                    <div className="text-center p-2.5">
                        <h1 className="sm:text-xl text-base font-semibold">Service 2</h1>
                    </div>
                    <div className="p-1 text-center rounded-t-md pt-2.5 text-base">
                        <p>Description...</p>
                        <button className="sm:mt-8 mt-3.5 mb-2 bg-white border border-black rounded-md sm:p-2.5 p-1.5 px-4 py-2 transition-colors duration-500 ease-in-out hover:bg-black hover:text-white hover:cursor-pointer">Read More...</button>
                    </div>
                </div>

                <div className="mx-4 m-4 border border-gray-300 rounded-md shadow-lg shadow-black box-border">
                    <div className="image">
                        <img src="Service.jpg" alt="Service 3" className="w-full rounded-t-md" />
                    </div>
                    <div className="text-center p-2.5">
                        <h1 className="sm:text-xl text-base font-semibold">Service 3</h1>
                    </div>
                    <div className="p-1 text-center rounded-t-md pt-2.5 text-base">
                        <p>Description...</p>
                        <button className="sm:mt-8 mt-3.5 mb-2 bg-white border border-black rounded-md sm:p-2.5 p-1.5 px-4 py-2 transition-colors duration-500 ease-in-out hover:bg-black hover:text-white hover:cursor-pointer">Read More...</button>
                    </div>
                </div>

                <div className="mx-4 m-4 border border-gray-300 rounded-md shadow-lg shadow-black box-border">
                    <div className="image">
                        <img src="Service.jpg" alt="Service 4" className="w-full rounded-t-md" />
                    </div>
                    <div className="text-center p-2.5">
                        <h1 className="sm:text-xl text-base font-semibold">Service 4</h1>
                    </div>
                    <div className="p-1 text-center rounded-t-md pt-2.5 text-base">
                        <p>Description...</p>
                        <button className="sm:mt-8 mt-3.5 mb-2 bg-white border border-black rounded-md sm:p-2.5 p-1.5 px-4 py-2 transition-colors duration-500 ease-in-out hover:bg-black hover:text-white hover:cursor-pointer">Read More...</button>
                    </div>
                </div>

                <div className="mx-4 m-4  border border-gray-300 rounded-md shadow-lg shadow-black box-border">
                    <div className="image">
                        <img src="Service.jpg" alt="Service 5" className="w-full rounded-t-md" />
                    </div>
                    <div className="text-center p-2.5">
                        <h1 className="sm:text-xl text-base font-semibold">Service 5</h1>
                    </div>
                    <div className="p-1 text-center rounded-t-md pt-2.5 text-base">
                        <p>Description...</p>
                        <button className="sm:mt-8 mt-3.5 mb-2 bg-white border border-black rounded-md sm:p-2.5 p-1.5 px-4 py-2 transition-colors duration-500 ease-in-out hover:bg-black hover:text-white hover:cursor-pointer">Read More...</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
