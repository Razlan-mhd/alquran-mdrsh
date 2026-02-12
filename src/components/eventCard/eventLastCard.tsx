
interface CardProps {
    imageSrc: string;
    text1: string;
    text2: string;
    heading: string;
    label: string;
    price: string;
}

export default function EventLastCard({
    imageSrc,
    text1,
    text2,
    heading,
    label,
    price
}: CardProps) {
    return (
       <>
        <div className="bg-gray-300 rounded-2xl shadow-md p-0 m-5 h-[500px] ">
            
            {/* Image container (relative parent) */}
            <div className="relative h-64 w-full rounded-xl overflow-hidden">
                
                {/* Image */}
                <img
                    src={imageSrc}
                    alt={text1}
                    className="w-full h-full object-cover"
                />

                {/* Overlay text */}
                <div className="absolute top-52 left-3 bg-green-600 text-white px-2 py-1 rounded-md">
                    <p className="font-bold text-lg">{text1}</p>
                </div>
            </div>

            {/* Content below image */}
            <div className="p-4">
                <p className="text-gray-500 font-semibold">{text2}</p>
                <h1 className="text-2xl font-bold mb-5">{heading}</h1>
                 <div className="bg-white p-4 flex items-center">
                    <h3 className="text-sm flex font-bold ">
                        <p className="pr-10">{label} </p>
                        <div className="bg-black px-4 text-white p-3">
                           {price}
                        </div>
                    </h3>
                </div>
            </div>
            
        </div>

         
        
</> 
    );
}
