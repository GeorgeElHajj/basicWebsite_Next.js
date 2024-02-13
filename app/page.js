"use client";
import Header from "@/components/Header.js";
import Banner from "@/components/Banner";
import Services from "@/components/Services";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Dynamic from "@/components/Dynamic";
import CheckBox from "@/components/checkBox";
import { MyAccordion } from "@/components/MyAccordion";
export default function Page() {
  return (
    <>
      <Header />
      <Banner image={"banner.jpg"} text={"Welcome to my Webiste"} />
      <Services />
      <ContactUs />
      <CheckBox />
      <Dynamic  title="Test 1"
        imageSrc={"service.jpg"}
        description={"Description"}
        titleClassName={"text-2xl font-semibold text-blue-500 mb-2"}
        imageClassName={"h-48 w-full object-cover"}
        descriptionClassName={"text-gray-600"}
        containerClassName={" rounded-lg shadow-md overflow-hidden"}/>
        <MyAccordion />
        
      <Footer />
    </>
  );
}
