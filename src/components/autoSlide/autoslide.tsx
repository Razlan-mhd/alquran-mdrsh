import { useEffect, useState } from "react";

type Slide = {
  id: number;
  heading: string;
  desc: string;
  title: string;
  description: string;
  image: string;
};

const slides: Slide[] = [
  {
    id: 1,
    heading:"Customer Review",
    desc: "Hionestly i don't have enough good words to write about gesala academy everyone in resala academy are very nice very calm they are also flexible about your schedules. i just want say .",
    title: "Quran Learning Program",
    description:
      "Quran Teacher",
    image: "/animation/author-1.png",
  },
  {
    id: 2,
    heading:"Customer Review",
    desc: "Hionestly i don't have enough good words to write about gesala academy everyone in resala academy are very nice very calm they are also flexible about your schedules. i just want say .",
    title: "Online Quran Classes",
    description:
      "Quran Teacher",
    image: "/animation/author-1.png",
  },
  {
    id: 3,
    heading:"Customer Review",
    desc: "Hionestly i don't have enough good words to write about gesala academy everyone in resala academy are very nice very calm they are also flexible about your schedules. i just want say .",
    title: "Hifz Quran Course",
    description:
      "Quran Teacher",
    image: "/animation/author-1.png",
  },
];

const AutoSlider = () => {
  const [index, setIndex] = useState(0);

 useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % slides.length);
  }, 3000);

  return () => clearInterval(interval);
}, []);


  return (
    <div className="max-w-5xl mx-auto overflow-hidden">
      {/* SLIDES WRAPPER */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full flex items-center gap-6 p-6"
          >
            <div className="py-5 ">
               <h1 className="text-bold text-5xl py-10"> {slide.heading}</h1>
               <p className=" text-xl sm:px-2 lg:text-2xl text-bold pb-8 px-10 text-gray-600 ">{slide.desc}</p>
            
            {/* LEFT IMAGE */}
        <div className="flex items-center justify-between gap-6">

  {/* LEFT IMAGE */}
  <div className=" hidden md:block flex-shrink-0">
    <img
      src={slide.image}
      alt={slide.title}
      className="w-32 h-32 rounded-full object-cover border-4 border-green-600"
    />
  </div>

  {/* RIGHT TEXT */}
  <div className="flex-1">
    <h2 className="text-4xl font-bold text-gray-800">
      {slide.title}
    </h2>
    <p className="mt-2 text-gray-600 leading-relaxed">
      {slide.description}
    </p>
  </div>

</div>

          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;