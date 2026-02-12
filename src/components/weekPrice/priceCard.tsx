import Link from "next/link";

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

const Card2 = ({
  imageSrc,
  heading1,
  altText,
  description,
  buttonText = "Read More",
  onButtonClick,
  text,
}: Card2Props) => {
  return (
    <div
  className="
    bg-gray-200
    rounded-3xl
    border-2 border-black
    shadow-md
    p-6 sm:p-8 md:p-9
    flex flex-col
    items-center text-center
    hover:shadow-xl
    transition-shadow duration-300
    group
    w-full
    my-8 md:my-14
  "
>
  <img
    src={imageSrc}
    alt={altText}
    className="
      w-24 h-24 sm:w-28 sm:h-28
      rounded-full
      border-4 border-green-600
      object-cover
      transition-transform
      group-hover:scale-110
    "
  />

  <h2 className="mt-4 text-xl sm:text-2xl font-semibold">
    {heading1}
  </h2>

  <div className="bg-yellow-300 px-3 py-2 rounded-md mt-2">
    <p className="text-black font-bold text-xs sm:text-sm">
      {description}
    </p>
  </div>

  {text && (
    <ol className="mt-4 list-decimal list-inside text-left text-sm text-gray-700 space-y-1 font-semibold w-full max-w-xs">
      {text.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  )}

  <Link href="/course/courseDetails">
    <button
      type="button"
      onClick={onButtonClick}
      className="
        mt-6
        w-32 sm:w-36
        h-11 sm:h-12
        rounded-xl
        bg-green-800
        text-sm sm:text-base
        font-medium
        text-white
        hover:bg-green-700
        transition-colors
      "
    >
      {buttonText}
    </button>
  </Link>
</div>

  );
};
export default Card2;
