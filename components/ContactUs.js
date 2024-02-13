export default function ContactUs() {
    return (
        <div id="contact_us" className=" m-5	container mx-auto 2xl:max-w-7xl p-5 border border-gray-300 rounded-lg p-4 text-center">

            <h3 className="text-lg font-semibold text-bl mb-4">Contact Us</h3>
            <form action="#" method="post" className="">
                <label  className="text-gray-700">Name:</label>
                <input type="text" id="name" name="name" required className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:border-blue-500" />

                <label  className="text-gray-700">Email:</label>
                <input type="email" id="email" name="email" required className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:border-blue-500" />

                <label  className="text-gray-700">Message:</label>
                <textarea id="message" name="message" rows="4" required className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:border-blue-500"></textarea>

                <input type="submit" value="Submit" className="btn bg-green-500 text-white px-4 py-2 mt-4 rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-green-600" />
            </form>
        </div>
    );
}
