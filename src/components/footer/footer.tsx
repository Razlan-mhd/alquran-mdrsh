"use client";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
    return(
        <div className="relative mt-10 rounded-xl overflow-hidden">
  
  <img
    src="/home/cta-one_bg.png"
    alt="background"
    className="absolute inset-0 w-full h-full object-cover"
  />


  <div className="relative">
  <div className="absolute left-1/2 -translate-x-1/2 lg:-top-24 rounded-lg z-10 
                   max-w-7xl w-full inset-0 bg-gradient-to-r from-green-600 to-yellow-400 opacity-70" ></div>
  <div className="relative flex items-center justify-between px-6 py-10 z-20 -mb-14"  style={{ backgroundImage: "url('/home/cta-one_bg.png')",
  }}>
   
   <img src="/icon/full-moon.png" alt="mosque" className="w-10 h-10 hidden md:block  items-center  lg:w-20 lg:h-20 object-contain ml-6" />

    {/* Text */}
    <div className="flex-1 text-left mx-6">
      <h1 className="text-4xl font-bold text-white">
        Proud to be serving thousands of Muslim<br />
        Families around the World
      </h1>
    </div>

    {/* Button */}
    <Link href="/contact">
    <button className="bg-white w-20 h-20 rounded-lg lg:w-40 lg:h-10 font-semibold mr-6">
      Get In touch
    </button>
    </Link>
  </div>
</div>

{/* foooter */}
<footer className="relative bg-black text-white">
  {/* Grid content */}
  <div
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6
               px-10 py-24
               bg-black"
    style={{ backgroundImage: "url('/background/footer-bg.jpg')" }}
  >
    <div>
      <Link href="/" className="block">
        <img src="/logo/logo.svg" alt="logo" className="border-b border-gray-600 mb-4" />
      </Link>
      <p>58 Howard Street #2 cairo.<br />CA 941</p>
      <p>(+88)311-2121101</p>
    </div>

    <div className="transition-transform hover:right-4">
      <h2 className="text-2xl font-bold py-6">LINKS</h2>
      <Link href="/about/aboutUs" className="block">About Us</Link>
      <Link href="/pages/scholards/scholards" className="block">Scholars</Link>
      <Link href="/courses/courses" className="block">Courses</Link>
      <Link href="/" className="block">Latest News</Link>
      <Link href="/contact" className="block">Contact</Link>
    </div>

    <div>
      <h2 className="text-2xl font-bold py-6">Other Links</h2>
      <Link href="/pages/faqs" className="bolck" >
      <p>Online Courses</p>
      <p>Audio Listening</p>
      <p>Sehri & Iftar</p>
      <p>Our Events</p>
      <p>Quran Hifz Classes</p>
      </Link>
    </div>

    <div>
      <h2 className="text-2xl font-bold py-6">Newsletter</h2>
      <p>Waiting for your message is not your important time</p>

      <div className="flex gap-3 mt-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-gray-300 rounded-lg px-4 py-2 w-64"
          id="emailInput"
        />
        <button
          className="bg-green-600 text-white px-5 py-2 rounded-lg"
          onClick={() => {
            const email = (document.getElementById("emailInput") as HTMLInputElement).value;
            window.location.href = `mailto:${email}`;
          }}
        >
          Send
        </button>
      </div>
    </div>
  </div>

  <div className="relative w-full">
  <img
    src="/background/footer-bg_2.jpg"
    alt="footer decoration"
    className="w-full block"
  />
  <div className="absolute inset-0 flex items-center justify-between px-10 text-white z-10">
    <div className="flex gap-6 text-sm font-semibold">
      <p>Terms of use</p>
      <p>Privacy and Policy</p>
    </div>
  </div>
  </div>
</footer>

</div>
    )
}