"use client";
import TopNavbar from "@/components/navBar/topNavbar";
import { useState } from "react";
import Navbar from "@/components/navBar/navbar";
import Footer from "@/components/footer/footer";
import { TiTickOutline } from "react-icons/ti";
import { FiMinus, FiPlus } from "react-icons/fi";
import EventLastCardRender from "@/components/eventCard/eventLastCardRender";
import Link from "next/link";

export default function PastEvet() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TopNavbar />
      <Navbar />
      <div className="relative w-full ">
        <img
          src="/home/page-title.jpg"
          alt="reading"
          className="w-full h-auto"
        />
        <h1
          className="absolute inset-0 text-4xl
                    text-white font-bold text-center justify-center
                     flex items-center"
        >
          Events Details
        </h1>
        <p className="text-xl font-bold text-white text-center items-center justify-center">
          Home
        </p>
      </div>
      <div className="relative group m-5 md:m-10">
        <div className=" flex items-center justify-center">
          <img
            src="/Event/event-2.jpg"
            alt="quraan"
            className="rounded-2xl w-[1200px]  "
          />
        </div>
        <div className="absolute md:top-[720px] md:left-12 bg-green-600 text-white px-2 py-1 rounded-md">
          <h3>10:00 pm - 11:45 pm</h3>
        </div>

        {/* column part */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-start">
          <div className="p-4 lg:col-span-2">
            <p className="text-xl text-gray-500 font-semibold mt-10 ml-8">
              Fiolveien 230, Norway
            </p>
            <h1 className="text-4xl font-bold mb-5 ml-8">
              Learning Quranic Arabic For Beginners
            </h1>

             {/* ............... */}
            <div className="flex items-center"> 
              <div className=" flex flex-col lg:flex-row">
                <div className="bg-gray-400 py-4 w-[300px] md:w-[400px] md:ml-10 ">
                  <h3 className="text-lg flex font-bold ">
                    <p className="pr-10 ml-7">Upcoming Event Price</p>
                    <div className="bg-black px-4 text-white p-3">$12.00</div>
                  </h3>
                </div>
                <Link href="/about/price">
                  <button
                    className="border border-green-600 text-green-600 my-5 px-20 py-7
                         rounded-lg hover:bg-green-600 hover:text-white transition md:ml-10"
                  >
                    Get tickets
                  </button>
                </Link>
              </div>
            </div>
            <h1 className=" text-3xl md:text-2xl  my-10 font-bold">
              About This Event
            </h1>
            <p className="text-gray-400 md:text-right font-semibold text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <div className="flex items-start gap-4 mt-6">
              {/* Icon */}
              <div className="bg-green-600 text-white rounded-md p-2 flex items-center justify-center shrink-0">
                <TiTickOutline />
              </div>
              {/* Paragraph */}
              <p className="text-gray-600 font-semibold">
                Lorem ipsum dolor sit amet, consectetur this class focuses
                mainly on Quraan memorisation and revision of surahs that have
                already been memorised.
              </p>
            </div>

            <div className="flex items-start gap-4 mt-6">
              {/* Icon */}
              <div className="bg-green-600 text-white rounded-md p-2 flex items-center justify-center shrink-0">
                <TiTickOutline />
              </div>
              {/* Paragraph */}
              <p className="text-gray-600 font-semibold">
                Sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id the laborum vero eos et accusamus et
                iusto odio dignissimos ducimus qui blanditiis quran
              </p>
            </div>
            <p className="text-gray-600 font-semibold mt-4">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea the commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
              lorem ipsum dolor sit amet.
            </p>

            <div className="my-5">
              <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
              <div className="max-w-3xl mx-auto mt-10">
                {/* Button */}
                <button
                  onClick={() => setOpen(!open)}
                  className="w-full flex items-center justify-between 
                                                bg-gray-500 text-white px-6 py-4 
                                                rounded-lg font-semibold text-left"
                >
                  <span>What age category is this event suitable for?</span>

                  {/* + / - icon */}
                  {open ? <FiMinus size={20} /> : <FiPlus size={20} />}
                </button>

                {/* Dropdown paragraph */}
                {open && (
                  <div className="bg-gray-100 p-6 rounded-b-lg">
                    <p className="text-gray-700 leading-relaxed">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum lorem ipsum
                      dolor sit amet.
                    </p>
                  </div>
                )}
              </div>

              <div className="max-w-3xl mx-auto mt-10">
                {/* Button */}
                <button
                  onClick={() => setOpen(!open)}
                  className="w-full flex items-center justify-between 
                                                bg-gray-500 text-white px-6 py-4 
                                                rounded-lg font-semibold text-left"
                >
                  <span>Can I take pictures and film during the show?</span>

                  {/* + / - icon */}
                  {open ? <FiMinus size={20} /> : <FiPlus size={20} />}
                </button>

                {/* Dropdown paragraph */}
                {open && (
                  <div className="bg-gray-100 p-6 rounded-b-lg">
                    <p className="text-gray-700 leading-relaxed">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum lorem ipsum
                      dolor sit amet.
                    </p>
                  </div>
                )}
              </div>
              <div className="max-w-3xl mx-auto mt-10">
                {/* Button */}
                <button
                  onClick={() => setOpen(!open)}
                  className="w-full flex items-center justify-between 
                                                bg-gray-500 text-white px-6 py-4 
                                                rounded-lg font-semibold text-left"
                >
                  <span>Are there any known Health & Safety issues?</span>

                  {/* + / - icon */}
                  {open ? <FiMinus size={20} /> : <FiPlus size={20} />}
                </button>

                {/* Dropdown paragraph */}
                {open && (
                  <div className="bg-gray-100 p-6 rounded-b-lg">
                    <p className="text-gray-700 leading-relaxed">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum lorem ipsum
                      dolor sit amet.
                    </p>
                  </div>
                )}
              </div>
              <div className="max-w-3xl mx-auto mt-10">
                {/* Button */}
                <button
                  onClick={() => setOpen(!open)}
                  className="w-full flex items-center justify-between 
                                                bg-gray-500 text-white px-6 py-4 
                                                rounded-lg font-semibold text-left"
                >
                  <span>What age category is this event suitable for?</span>

                  {/* + / - icon */}
                  {open ? <FiMinus size={20} /> : <FiPlus size={20} />}
                </button>

                {/* Dropdown paragraph */}
                {open && (
                  <div className="bg-gray-100 p-6 rounded-b-lg">
                    <p className="text-gray-700 leading-relaxed">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum lorem ipsum
                      dolor sit amet.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <h1>Our Speaker</h1>
            <EventLastCardRender />
          </div>

          {/* 2nd column */}
          <div className="bg-gray-50 rounded-2xl p-6 space-y-4 shadow-sm">
            <h3 className="text-lg font-semibold">About The Organiser</h3>

            <div className="text-sm space-y-2">
              <p>
                <b>Name:</b> Abdullah Al Hasan
              </p>
              <p>
                <b>Email:</b> abcd@gmail.com
              </p>
              <p>
                <b>Phone:</b> +880172232132
              </p>
              <p>
                <b>Date:</b> 21 November 2025
              </p>
            </div>

            <img
              src="/Event/organiser.webp"
              alt="organiser"
              className="rounded-xl w-full object-cover h-56"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
