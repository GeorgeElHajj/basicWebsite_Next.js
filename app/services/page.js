import Banner from "@/components/Banner";
import Dynamic from "@/components/Dynamic";
import Footer from "@/components/Footer";
import Header from "@/components/Header.js";

export default function Services(){
    return (
        <>
        <Header />
        <Banner image={"banner1.jpg"} text={"Welcome to the services Page"} />
        <Dynamic
        title={"Title"}
        imageSrc={"Service.jpg"}
        description={"Description..."}
        titleClassName={"text-2xl font-semibold text-green-500 mb-2"}
        imageClassName={"h-40 w-40 object-cover  mr-4"}
        descriptionClassName={"text-gray-700"}
        containerClassName={" rounded-lg shadow-md  p-4"}
      />
        <Footer />
        </>
    );


}