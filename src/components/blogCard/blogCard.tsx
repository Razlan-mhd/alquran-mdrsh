"use client";

interface CardProps {
  imageSrc: string;
  comment: string;
  date: string;
  heading: string;
  desc: string;
  image?: string;
  heading2?: string;
  buttonText: string;
  onClick: () => void;
}

export default function BlogCard({
  imageSrc,
  comment,
  date,
  heading,
  desc,
  image,
  heading2,
  buttonText,
  onClick,
}: CardProps) {
  return (
    <div
      className="rounded-2xl flex flex-col bg-white shadow-lg hover:shadow-xl 
                        transition-shadow duration-300 h-full group items-stretch"
    >
      <div className="group overflow-hidden">
        <img
          src={imageSrc}
          className="object-cover transition-transform group-hover:scale-110 w-full"
        />
      </div>
      <div className="flex justify-center ">
        <h1 className="my-7 font-bold pr-28 text-gray-400">{comment}</h1>
        <h2 className="my-7 font-bold text-gray-400">{date}</h2>
      </div>
      <div className="px-5 mt-auto my-auto">
        <h1 className="text-3xl font-bold pb-3">{heading}</h1>
        <h2 className="text-gray-400 font-semibold">{desc}</h2>
      </div>
      <div className="p-5">
        <div className="border border-spacing-2 flex justify-center p-5 ">
          <img src={image} className="rounded-fullp-3 " />
          <h1 className="font-bold p-2">{heading2}</h1>
          <button
            onClick={onClick}
            className="ml-auto px-4 py-2 bg-green-800 text-white rounded hover:bg-blue-600"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
