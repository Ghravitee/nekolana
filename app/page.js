import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
     
     <div className="px-10 py-6" >
        <Navbar />
      </div>
      <div className="min-h-screen px-10 py-6 lg:pt-0 lg:pb-12 pb-16 lg:px-28 md:px-10" >
        <Hero />
      </div>
      <div className="px-4 pt-0 lg:pt-0 lg:pb-12 pb-16 lg:px-28 md:px-10" >
        <Info />
      </div>
      <div className="px-4" >
        <Footer />
      </div>
    </>
     );
}
