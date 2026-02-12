import TopNavbar from "@/components/navBar/topNavbar";
import Navbar from "@/components/navBar/navbar";
import Footer from "@/components/footer/footer";
import EventCardRender from "@/components/eventCard/eventCardRender";

export default function Events() {
    return(
        <>
         <TopNavbar />
         <Navbar />
         <div className="relative w-full">
            <img src="/home/page-title.jpg" alt="reading" className="w-full" />
            <h1 className="absolute inset-0 text-4xl 
                    text-white font-bold text-center justify-center
                     flex items-center">Events</h1>
            <p className="text-xl font-bold text-white text-center items-center justify-center">Home</p>
         </div>
         <EventCardRender />
         <Footer />
        </>
    )
}