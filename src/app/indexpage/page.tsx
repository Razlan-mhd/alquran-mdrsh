"use client";
import { useState, useEffect, type JSX } from "react";
import { useRouter } from "next/navigation";
import CardRender from "@/components/onlineQuranCard/cardRender";
import { IoBookSharp } from "react-icons/io5";
import { GiDoubleNecklace } from "react-icons/gi";
import { MdGirl } from "react-icons/md";
import Link from "next/link";
import AnimationCardRender from "@/components/greenAnimateCard/animationCardRender";
import AutoSlider from "@/components/autoSlide/autoslide";
import HomeCard from "@/components/updateNews/updateNews";
import CardRender2 from "@/components/weekPrice/priceCardRender";
import Footer from "@/components/footer/footer";
import ServicecardRender2 from "@/components/serviceCard/homeBlackBackground";

type Slide = {
  title: string;
  topic: string;
  desc: string;
  image: string;
  onButtonClick: () => void;
};

export default function Hero(): JSX.Element {
  const router = useRouter();
  const slides: Slide[] = [
    {
      title: "ISLAMIC ONLINE MADRASAH",
      topic: "LARGEST ONLINE MADRASAH",
      desc: "Islamic Online Madrasah is an ISO certified educational institution",
      image: "/slide/prayer1.jpg",
      onButtonClick: () => router.push("/courses/courseDetails"),
    },
    {
      title: "ISLAMIC ONLINE MADRASAH",
      topic: "LARGEST ONLINE MADRASAH",
      desc: "Islamic Online Madrasah is an ISO certified educational institution",
      image: "/slide/prayer2.jpg",
      onButtonClick: () => router.push("/courses/courseDetails"),
    },
    {
      title: "ISLAMIC ONLINE MADRASAH",
      topic: "LARGEST ONLINE MADRASAH",
      desc: "Islamic Online Madrasah is an ISO certified educational institution",
      image: "/slide/prayer3.jpg",
      onButtonClick: () => router.push("/courses/courseDetails"),
    },
  ];

  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const timer: number = window.setInterval(() => {
      setIndex((prev: number) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      <section
        className="relative w-full min-h-screen min-w-screen  flex flex-col md:p-6 items-center justify-center bg-cover bg-center pb-40"
        style={{ backgroundImage: `url(${slides[index].image})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0  bg-black/50 min-w-screen"></div>

        {/* Hero content */}
        <div className="relative z-30 max-w-7xl mx-auto px-4 text-center text-white">
          <p className="text-lg md:text-xl mb-4">{slides[index].topic}</p>

          <h1 className="text-2xl md:text-5xl font-bold mb-4">
            {slides[index].title}
          </h1>

          <p className="text-lg sm:text-3xl mb-6">{slides[index].desc}</p>

          <button
            onClick={slides[index].onButtonClick}
            className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700 transition"
          >
            Find The Course
          </button>
        </div>

        {/* blue color box flating*/}
        <div
          className="absolute -bottom-24 left-1/2 -translate-x-1/2
                     w-[90%] max-w-6xl
                     bg-green-50/95 backdrop-blur-md
                     rounded-xl shadow-xl
                     flex flex-col md:flex-row
                     items-center justify-between
                     gap-8 px-8 py-10 z-40"
        >
          <div className="flex items-center gap-4 ">
            <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-3xl transition-transform hover:rotate-y-180">
              <IoBookSharp />
            </div>
            <h3 className="font-semibold text-lg">
              Learn quick <br /> Quran Classes
            </h3>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-3xl transition-transform hover:rotate-y-180">
              <GiDoubleNecklace />
            </div>
            <h3 className="font-semibold text-lg">
              ISO certified <br /> islamic institution
            </h3>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-3xl transition-transform hover:rotate-y-180">
              <MdGirl />
            </div>
            <h3 className="font-semibold text-lg">
              Online Arabic <br /> Classes For Kids
            </h3>
          </div>
        </div>
      </section>



      <section className="mt-32 md:mt-52 px-4 sm:px-6 md:px-10">
  <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* LEFT SIDE */}
    <div className="text-center lg:text-left">

      <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
        <h1 className="text-green-600 font-semibold tracking-widest text-sm sm:text-base">
          Islamic Online Madrasah
        </h1>
        <img
          src="/logo/bismillah-2.png"
          alt="Bismillah"
          className="w-32 sm:w-40 opacity-95"
        />
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-black mt-4">
        Welcome To Imman Quran <br /> Institute
      </h1>

      <p className="text-base sm:text-lg font-medium text-gray-500 mt-4 max-w-xl mx-auto lg:mx-0">
        We welcome our users to Online Quran teaching services where we
        are offering multiple Islamic as well as character building and
        life reformation courses as per the teachings of Sharia.
      </p>

      {/* IMAGE + TEXT BLOCK */}
      <div className="flex flex-col sm:flex-row gap-6 mt-8 items-center lg:items-start">

        <img
          src="/home/4.jpg"
          alt="Student"
          className="w-full sm:w-64 rounded-lg object-cover"
        />

        <div className="text-center sm:text-left">
          <p className="text-base text-gray-500">
            There are many variations of passages of lorem ipsum
            available, but the majority have suffered business consulting
          </p>

          <div className="flex items-center gap-4 mt-6 justify-center sm:justify-start">
            <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl transition-transform hover:rotate-12">
              🕌
            </div>

            <div className="text-lg text-green-600 font-bold">
              Learn Online at <br /> Your Own Pace
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-500 mt-6 max-w-xl mx-auto lg:mx-0">
        We offer our students high-quality Arabic and Quran at affordable
        prices that meet their budget.
      </p>
    </div>

    {/* RIGHT SIDE (UNCHANGED LOGIC) */}
    <div className="hidden lg:flex relative items-end justify-center">
      <img
        src="/home/reading.jpg"
        alt="Reading"
        className="w-full max-w-lg rounded-xl"
      />
      <img src="/logo/ameen-1.png" className="absolute" />

      <div
        className="
          absolute bottom-0 left-0 right-0 h-16
          bg-gradient-to-r from-green-600 to-yellow-400
          flex items-center gap-3 px-5 rounded-b-xl
        "
      >
        <h2 className="text-black font-medium text-lg">
          Since 1995 Operating in the world
        </h2>
      </div>
    </div>

  </div>
</section>



      <section className="bg-black mt-20" >
       <div
    className="
      relative w-full 
      bg-black
      bg-[url('/background/service-bg.png')]
      bg-cover
      bg-center
      bg-no-repeat
    "
  >
            <div className="text-center font-bold py-10">
                <p className="text-green-800 text-xl pt-16">WHAT WE OFFER</p>
                <h1 className="text-5xl font-bold text-white">We offer an effective<br />Arabic & Quran Services</h1>
            </div>
            <ServicecardRender2 />

        </div>

      </section>



      <section className="mt-20">
        <h2 className="text-xl text-green-700 text-center ">
          Popular Courses
        </h2>
        <h1 className="text-4xl font-extrabold text-center">
          Our Arabic & Islamic Courses
        </h1>
        <CardRender />

        <div
  className="
    mt-14
    mx-4 sm:mx-6 md:mx-10 lg:mx-20
    rounded-xl
    bg-gradient-to-r from-green-800 to-yellow-500
    py-8 md:py-10
  "
>
  <div
    className="
      max-w-7xl mx-auto
      px-6 md:px-10
      flex flex-col lg:flex-row
      items-center justify-between
      gap-6
      text-center lg:text-left
      bg-cover bg-center bg-no-repeat
    "
    style={{ backgroundImage: "url('/home/cta-one_bg.png')" }}
  >
    <h1
      className="
        font-bold text-white
        text-xl sm:text-2xl md:text-3xl lg:text-4xl
        leading-tight
      "
    >
      Do not let Shaitan delay you from starting
      <br className="hidden sm:block" />
      to learn your deen.
    </h1>

    <Link href="/contact">
      <button
        className="
          w-40 md:w-44 lg:w-48
          h-12 md:h-14
          rounded-lg
          bg-green-800
          text-sm md:text-base
          font-medium text-white
          hover:bg-green-700
          transition-colors
        "
      >
        Quick Start Now
      </button>
    </Link>
  </div>
</div>


        <AnimationCardRender />
        <div className="bg-gray-400 mt-10 flex justify-between items-center" style={{ backgroundImage: "url('/background/testimonial-one_bg.png')" }}>
            <div className="py-24">
            <img src="/home/testimonial.jpg" alt="reading =" className=" rounded-xl w-[460px]" />
            </div>
            <AutoSlider /> 
        </div>
        <div className="mt-20 font-bold text-center">
            <h2 className="text-xl text-green-700 ">Why to Choose Us</h2>
            <h1 className="text-5xl  ">Why Choose Our Islamic<br />Institute</h1>
                <CardRender2 />
            </div>
        <div className="lg:my-14 mx-14 md:my-10 my-5 w-full max-w-5xl">
        <div>
          <h2 className="text-xl text:center lg:text-xl font-bold text-green-700">Student Gallery</h2>
        </div>
          <div className="flex-1   rounded-xl flex justify-between">
          <h1 className=" text-2xl md:text-3xl lg:text-4xl font-bold mt-10">Our Islamic Institute<br/>Academy Gallery</h1>
        
        <Link href="/contact">
          <button className="bg-green-800 mr-20 w-28 lg:-mr-2 lg:w-48 lg:h-14  rounded-lg text-white transition-transform hover:bg-black">
            Quick Start Now
          </button>
        </Link>
        </div>
        
        <Link href="/service/serviceDetails" >
        <div className="my-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:-mr-40">
          <img src="/home/3.jpg" alt="quraan" className="rounded-xl w-72 object-cover  transition-transform duration-500 ease-in-out hover:scale-x-105 hover:rotate-3" />
          <img src="/home/1.jpg" alt="girl" className="rounded-xl w-72 object-cover transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-3" />
          <img src="/home/2.jpg" alt="quraan" className="rounded-xl w-72 object-cover transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-3" />
          <img src="/home/4.jpg" alt="quraan" className="rounded-xl w-72 object-cover transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-3" />
        </div>
        </Link>
      </div>
        <HomeCard />
      </section>
      <Footer />
    </>
  );
}
