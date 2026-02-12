import Link from "next/link";

interface CardProps {
  imageSrc: string;
  heading1: string;
  altText: string;
  description: string;
  imgsrc: string;
  price: string;
  text: string;
  // statOne: string;
  // statOneLabel: string;
  status: {
    value: number;
    label: string;
  }[];
  /** Button props */
  buttonText?: string;
  onButtonClick?: () => void;
}
interface Card2Props {
  imageSrc: string;
  heading1: string;
  altText: string;
  description: string;
  imgsrc: string;
  price: string;
  text?: string[];
  // statOne: string;
  // statOneLabel: string;
  status: {
    value: number;
    label: string;
  }[];
  /** Button props */
  buttonText?: string;
  onButtonClick?: () => void;
}
const Card = ({
  imageSrc,
  heading1,
  altText,
  description,
  imgsrc,
  buttonText = "Read More",
  onButtonClick,
  price,
  status,
}: CardProps) => {
  return (
    <div
      className="bg-white rounded-2xl 
    shadow-md p-5 flex flex-col hover:shadow-xl 
    transition-shadow duration-300"
    >
      <div className="relative">
        {/* Image */}
        <Link href="/course/courseDetails" className=" block">
          <div className="group overflow-hidden rounded-xl">
            <img
              src={imageSrc}
              alt={altText}
              className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </Link>
        <div className="rounded-full bg-gray-300">
          <div className="absolute bg-white w-10 h-10 z-10 group overflow-hidden rounded-full flex items-center justify-center text-white">
            <img
              src={imgsrc}
              alt={altText}
              className="w-6 h-6 rounded-xl transition-transform duration-500 hover:animate-bounce"
            />
          </div>
        </div>
      </div>

      {/* heading eka */}
      <div className="flex-1">
        <Link href="Pages/course/courseDetails" className=" block">
          <h2 className="text-lg font-bold mt-10 transition-transform hover:text-green-800">
            {heading1}
          </h2>
        </Link>
      </div>

      <div className="mt-4 border-y border-gray-200 py-4">
        <div className="grid grid-cols-3 text-center">
          {status.map((item, index) => (
            <div key={index}>
              <p className="text-green-600 font-bold text-lg">{item.value}</p>
              <p className="text-xs text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <p className="mt-4 text-gray-700 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Button */}
      <div className="flex justify-between items-center mt-10">
        <>
          <button
            type="button"
            onClick={onButtonClick}
            className=" w-[90px] h-10 rounded-xl bg-green-800 py-2.5 text-sm font-medium text-white hover:bg-green-700 transition-colors"
          >
            {buttonText}
          </button>

          <div className="rounded-xl w-[100px] bg-slate-400 py-2.5 font-medium mx-auto">
            <p className="text-sm px-auto">{price}</p>
          </div>
        </>
      </div>
    </div>
  );
};

export default Card;