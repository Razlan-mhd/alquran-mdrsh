import Card from "./updateNewsCard";
import { useRouter } from "next/navigation";

const HomeCard = () => {
    const router = useRouter();
    return(
      <>    <div className="text-center pt-10">
                <h2 className="text-xl text-green-600 font-bold">OUR NEWS UPDATES</h2>
                <h1 className="text-4xl font-bold mt-5">Latest News & Articles From<br />
The Blog</h1>
            </div>

        <div className="min-h-screen bg-gray-100 sm:px-10 lg:py-12  flex flex-col md:flex-row  justify-between gap-5 items-center">
            <Card
                imageSrc="/Card/news-1.jpg"
                altText="Man"
                heading1="Abandoning Prayer – Why to Avoid at all Costs?"
                description="There are many variations of passages of lorem Ipsum available islam courses"    status={[]}             
                buttonText="Study Now"
                onButtonClick={() => router.push("/blog/blogDetails")}  
                text= "Amri Khan"
                imgsrc="/Card/author-2.png"
                price="Amri Khan"
             /> 
               <Card
                imageSrc="/Card/news-2.jpg"
                altText="Man"
                heading1="What are the Conditions of the Shahadah in Islam"
                description="There are many variations of passages of lorem Ipsum available islam courses"    status={[]}             
                buttonText="Study Now"
                onButtonClick={() => router.push("/blog/blogDetails")}  
                text= "Amri Khan"
                imgsrc="/Card/author-3.png"
                price="Amri Khan"
             /> 
               <Card
                imageSrc="/Card/news-3.jpg"
                altText="Man"
                heading1="Types of Khawf (Fear) and Tawakkul (Reliance) in Islam"
                description="There are many variations of passages of lorem Ipsum available islam courses"    status={[]}             
                buttonText="Study Now"
                onButtonClick={() => router.push("/blog/blogDetails")}  
                text= "Amri Khan"
                imgsrc="/Card/author-4.png"
                price="Amri Khan"
             /> 
        </div></>
    )
}

export default HomeCard;