interface CardProps {
  imageSrc: string;
  alt: string;
  text: string;
  heading: string;
  text2: string;
  text3: string;
  price: string;
  feetext: string;
}

const CourseCard = ({
  imageSrc,
  alt,
  text,
  heading,
  text2,
  text3,
  price,
  feetext,
}: CardProps) => {
  return (
    <div
      className="bg-white rounded-2xl
    shadow-md p-5 flex flex-col hover:shadow-xl 
    transition-shadow duration-300"
    >
      <div className="relative ">
        <div className="object-cover">
          <img
            src={imageSrc}
            alt={alt}
            className="w-full h-56 object-cover rounded-xl"
          />
        </div>
        <div className="absolute bg-green-600  top-52 md:bottom-72 md:left-4 px-5 py-2 rounded-lg ml-7">
          <h1 className="text-white">{text}</h1>
        </div>
        <h1 className="text-2xl font-bold mt-8 line-clamp-2 min-h-[4rem]">
          {heading}
        </h1>
        <div className="border border-y-2 border-x-0 border-gray-600 grid grid-cols-3 lg:grid-cols-3 py-5 mt-7 text-center">
          <div className="">
            <h1 className="text-green-600">20</h1>
            <h3>lessons</h3>
          </div>
          <div>
            <h1 className="text-green-600">10</h1>
            <h3>weeks</h3>
          </div>
          <div>
            <h1 className="text-green-600">50</h1>
            <h3>enroll</h3>
          </div>
        </div>
        <div className="flex justify-between bg-blue-200 p-5 mt-3">
          <div className="flex flex-col">
            <p>{text2}</p>
            <p className="text-sm text-gray-600">{text3}</p>
          </div>
          <div className="bg-yellow-400 text-center">
            <h3 className="font-semibold">{price}</h3>
            <p className="text-green-600 px-2">{feetext}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
