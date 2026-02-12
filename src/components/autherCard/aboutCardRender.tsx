import AboutCard from "./aboutCard";
import { FaMosque } from "react-icons/fa";

 const AboutCardRender = () => {
    return(
        <>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto ">
                <AboutCard 
                    imagesrc="/About/scholar-1.webp"
                    text="man"
                    heading="Osama Gamal"
                    para="Quran & Arabic Teacher"
                    icon={<FaMosque />}
                />
                   <AboutCard 
                    imagesrc="/About/scholar-2.webp"
                    text="man"
                    heading="Ahmed Hany"
                    para="Quran & Arabic Teacher"
                    icon={<FaMosque />}
                />
                   <AboutCard 
                    imagesrc="/About/scholar-3.webp"
                    text="man"
                    heading="Yusuf Samir"
                    para="Quran & Arabic Teacher"
                    icon={<FaMosque />}
                />

            </div>
        </>
    )
}
export default AboutCardRender;