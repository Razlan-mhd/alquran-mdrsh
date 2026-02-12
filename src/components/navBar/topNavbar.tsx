import type { JSX } from "react";

export default function TopNavbar(): JSX.Element {
  return (
    <div className="hidden md:flex bg-linear-to-r from-green-800 to-yellow-500 text-white text-lg font-serif ">
      <div className="max-w-7xl  pr-8 py-4 flex justify-between">
        <div className="flex gap-10">
          <span className="ml-10">Email</span>
        </div>
        <div className="ml-20">
          <span>Suite 80 Golden Street Germany</span>
        </div>
        <img src="/logo/bismillah-2.png" className=" ml-20 h-9" />
        <div className="ml-15 text-lg flex">
          <span className="mr-2">Sunrise At: 5:15 AM</span>
          <div className="w-[1px] h-8 bg-gray-400"></div>
          <span className="mx-2">Sunset At: 4:50 PM</span>
          <div className="w-[1px] h-8 bg-gray-400"></div>
          <span className="ml-3">Let’s Talk +88 01 27 14 101</span>
        </div>
      </div>
    </div>
  );
}
