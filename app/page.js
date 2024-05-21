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
      <div className="min-h-screen px-10 py-6" >
        <Hero />
      </div>
      <div className="px-4 py-6" >
        <Info />
      </div>
      <div className="px-4" >
        <Footer />
      </div>
    </>
     );
}
