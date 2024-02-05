import Banner from "@/components/Banner";
import Dynamic from "@/components/Dynamic";
import Footer from "@/components/Footer";
import Header from "@/components/Header.js";

export default function ContactUs(){
    return (
        <>
        <Header />
        <Banner image={"banner2.jpg"} text={"Welcome to the Contact Us Page"} />
        <Dynamic
        title="Title"
        imageSrc={"Service.jpg"}
        description={"Description..."}
        titleClassName={"text-xl text-center font-semibold text-purple-500 mb-2"}
        imageClassName={"h-48 w-full object-cover"}
        descriptionClassName={"text-gray-700 text-center"}
        containerClassName={"bg-white rounded-lg shadow-md overflow-hidden p-4"}
      />
        <Footer />
        </>
    );


}