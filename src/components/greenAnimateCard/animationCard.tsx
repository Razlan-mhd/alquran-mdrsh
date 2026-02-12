
import Link from "next/link";

interface AnimationCardProps {
  imgsrc: string;
  altText: string;
  icon: string;
  heading: string;
  desc: string;
}

const AnimationCard = ({
  imgsrc,
  altText,
  icon,
  heading,
  desc,
}: AnimationCardProps) => {
  return (
    <div className="bg-white group border-black border-2 rounded-2xl overflow-hidden transition-shadow  duration-500 ease-in-out
          transform
          hover:rotate-y-12 hover:scale-[1.03]
          hover:bg-linear-to-br hover:from-green-700 hover:to-yellow-500
          shadow-md hover:shadow-xl">
      
      {/* Image section */}
      <div className="relative group transition-all ">
        <img
          src={imgsrc}
          alt={altText}
          className=" relative h-44 w-full object-contain  transition-transform duration-300 opacity-0 group-hover:opacity-100"
        />

        {/* Icon overlay */}
       
       <div className="absolute ml-24 bottom-1/2 top-1/2 -translate-x-1 -translate-y-1/2 bg-white w-24 h-24 rounded-full shadow flex items-center justify-center ">
            <img
                src={icon}
                alt=""
                className="w-2xl h-auto transition-transform group-hover:rotate-y-180"
            />
            
        </div>
      </div>

      {/* Content */}
      <div className="pt-10 px-5 pb-6 text-center items-center">
        <Link href="/courses/courseDetails" >
          <h2 className="text-2xl justify-center items-center font-bold">{heading}</h2>
        </Link>
        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default AnimationCard;
