export default function Footer() {
    return (
        <div className="bg-gray-900">
        <footer className="2xl:container mx-auto  flex sm:flex-row flex-col justify-around items-center text-white p-5 ">
            <div className=" sm:text-left text-center">
            <h3 className="text-white text-3xl mb-6">USEFUL LINKS</h3>
            <a href="#" className="text-white block mb-4 text-lg transition-colors duration-300 ease-in-out hover:text-cyan-500">Home</a>
            <a href="#" className="text-white block mb-4 text-lg transition-colors duration-300 ease-in-out hover:text-cyan-500">Services</a>
            <a href="#" className="text-white block mb-4 text-lg transition-colors duration-300 ease-in-out hover:text-cyan-500">Contact</a>
            </div>

            <div className="comment-box flex flex-col items-center">
                <img src="Service.jpg" alt="User Image" className="h-40 w-40 rounded-xl	 mb-2" />
            </div>

            <div className="footer-bottom flex sm:flex-col flex-row">
                <a href="#" className="mx-4 text-lg text-white transition-colors duration-300 ease-in-out justify-between"> <i className="fa fa-facebook text-9xl	 m-2 hover:text-blue-500"></i></a>
                <a href="#" className="social mx-4 text-lg text-white transition-colors duration-300 ease-in-out justify-between"> <i className="fa fa-instagram text-9xl	 m-2 hover:text-blue-500"></i></a>
                <a href="#" className="social mx-4 text-lg text-white transition-colors duration-300 ease-in-out justify-between"> <i className="fa fa-twitter text-9xl	 m-2 hover:text-blue-500"></i></a>
            </div>
        </footer>
        </div>
    );
}
