import type { IconType } from "react-icons";

interface CardProps {
  icon: IconType;
  alt: string;
  imageSrc: string;
  heading: string;
  text: string;
  buttonText: string;
  onButtonClick: () => void;
}

const ServiceCard = ({
  icon: Icon,
  alt,
  imageSrc,
  heading,
  text,
  buttonText,
  onButtonClick,
}: CardProps) => {
  return (
    <div className=" m-5 group bg-yellow-200 rounded-lg shadow-lg p-5 flex flex-col lg:flex-row items-center gap-5 hover:shadow-xl transition-shadow duration-300 relative">
      
      {/* Text + Icon Section */}
      <div className="flex-1 relative">
        {/* Icon Circle */}
        <div className="absolute -top-10 left-0 w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center transform transition-transform duration-300 group-hover:-scale-x-100">
          <Icon size={32} className="text-white" />
        </div>

        {/* Heading & Text */}
        <h1 className="text-2xl font-semibold mt-12 line-clamp-2">{heading}</h1>
        <p className="mt-2">{text}</p>

        {/* Button */}
        <button
          onClick={onButtonClick}
          className=" md:mt-4 w-full px-4  md:py-2 bg-gray-500 text-white rounded 
                  group-hover:bg-yellow-600 transition-colors duration-300"
        >
          {buttonText}
        </button>
      </div>

      {/* Image Section */}
      <div className="flex-1">
        <img
          src={imageSrc}
          alt={alt}
          className="w-full rounded-lg object-cover transition-transform duration-300 group-hover:animate-bounce"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
