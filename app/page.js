import Header from "@/components/Header.js";
import Banner from "@/components/Banner";
import Services from "@/components/Services";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";


export default function Page() {
  return (
    <>
      <Header />
      <Banner image={"banner.jpg"} text={"Welcome to my Webiste"} />
      <Services />
      <ContactUs />
      <Footer />
    </>
  );
}
