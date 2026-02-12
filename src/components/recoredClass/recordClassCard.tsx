interface CardProps {
  imageSrc: string;
  alt: string;
  text1: string;
  text2: string;
  heading: string;
  date: string;
  time: string;
}

const RecordCard = ({
  imageSrc,
  alt,
  text1,
  text2,
  heading,
  date,
  time,
}: CardProps) => {
  return (
    <div
      className="p-5 bg-white rounded-xl shadow-md flex flex-col hover:shadow-xl 
                        transition-shadow duration-300"
    >
      <div className="relative">
        <img src={imageSrc} alt={alt} />
        <div className="absolute bg-green-800 rounded-lg w-20 ml-10 -mt-4 p-2">
          <h3 className="text-xl font-semibold text-center text-white">
            {text1}
          </h3>
        </div>
        <div className="absolute bg-yellow-400 rounded-lg w-28 ml-32 -mt-4 ">
          <h3 className="text-xl font-semibold text-center p-2">{text2}</h3>
        </div>
        <h3 className="mt-10 text-left text-3xl font-bold ">{heading}</h3>
        <div className=" flex flex-between">
          <p className="text-green-400">{date}</p>
          <div className="bg-blue-200 p-2 ml-10">
            <p>{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordCard;
