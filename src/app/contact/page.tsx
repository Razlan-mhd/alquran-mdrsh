import TopNavbar from "@/components/navBar/topNavbar";
import Navbar from "@/components/navBar/navbar";
import Footer from "@/components/footer/footer";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <>
      <TopNavbar />
      <Navbar />

      {/* Page Title */}
      <div className="relative w-full">
        <img src="/home/page-title.jpg" alt="reading" className="w-full h-64 md:h-96 object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold text-center">
            Contact
          </h1>
          <p className="text-lg sm:text-xl text-white mt-2">Home</p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-gray-200 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-5">
          {/* Address */}
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="w-28 h-28 rounded-full bg-black text-white text-5xl flex items-center justify-center transition-transform duration-300 hover:scale-105">
              <FaLocationDot />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Our Address</h2>
            <p className="text-lg text-gray-600">Metro City Shop 11 floor</p>
            <p className="text-lg text-gray-600">Fiolveien 230, Norway</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="w-28 h-28 rounded-full bg-black text-white text-5xl flex items-center justify-center transition-transform duration-300 hover:scale-105">
              <FaPhoneAlt />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Our Phone</h2>
            <p className="text-lg text-gray-600">( +088 ) 48 26 48 26</p>
            <p className="text-lg text-gray-600">Let’s Talk +88 01 27 14 101</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="w-28 h-28 rounded-full bg-black text-white text-5xl flex items-center justify-center transition-transform duration-300 hover:scale-105">
              <MdEmail />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Email Address</h2>
            <p className="text-lg text-gray-600">Isalm_quran@gmail.com</p>
            <p className="text-lg text-gray-600">Info_hr@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto px-5 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Feel free to write Islamic anytime
        </h2>
        <form className="flex flex-col gap-4">
          <input
            name="input1"
            placeholder="Full Name"
            className="border border-gray-300 rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-green-800"
          />
          <input
            name="input2"
            placeholder="Your Email"
            className="border border-gray-300 rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-green-800"
          />
          <textarea
            name="input3"
            placeholder="Enter Your Comment"
            className="border border-gray-300 rounded-md w-full p-3 h-40 focus:outline-none focus:ring-2 focus:ring-green-800"
          />
          <button
            type="submit"
            className="bg-green-800 text-white font-bold px-6 py-3 rounded-md hover:bg-black transition"
          >
            Post Comment
          </button>
        </form>
      </div>

      {/* Google Map */}
      <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden px-5">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://maps.app.goo.gl/3yJKh4YxizoZysbt8"
          loading="lazy"
        ></iframe>
      </div>

      <Footer />
    </>
  );
}
