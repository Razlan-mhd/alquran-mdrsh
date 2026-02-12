import type { ReactNode } from "react";

interface CardProps {
    imagesrc: string;
    text: string;
    heading: string;
    para: string;
    icon: ReactNode;
}

export default function AboutCard({
    imagesrc,
    heading,
    para,
    icon,
    text
}: CardProps) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-0 m-5 h-[400px]">
            
            
            <div className="relative h-64 w-full object-contain rounded-xl group">
                
                {/* Image */}
                <img
                    src={imagesrc}
                    alt={text}
                    className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute bottom-0 left-0 right-0 
                                bg-blue-200/80 
                                flex flex-col items-center justify-center 
                                p-4 rounded-b-xl
                                translate-y-full 
                                group-hover:translate-y-0 
                                transition-transform duration-300">

                    <h1 className="font-semibold">{heading}</h1>
                    <p className="text-sm">{para}</p>
                    <div className="mt-2">{icon}</div>

                </div>
            </div>
        </div>
    );
}
