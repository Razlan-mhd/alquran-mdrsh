"use client";
import ServiceCard from "./serviceCard";
import { ImBook } from "react-icons/im";

export default function ServicecardRender() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto">
      <ServiceCard
        imageSrc="/Service/service-1.png"
        alt="symbol"
        icon={ImBook}
        heading="Online Quran Classes"
        text="There are many variations of passages of lorem ipsum available lorem ipsum dolor sit amet"
        buttonText="Read More"
        onButtonClick={() => console.log("Read more clicked")}
      />
      <ServiceCard
        imageSrc="/Service/service-1.png"
        alt="symbol"
        icon={ImBook}
        heading="Online Quran Classes"
        text="There are many variations of passages of lorem ipsum available lorem ipsum dolor sit amet"
        buttonText="Read More"
        onButtonClick={() => console.log("Read more clicked")}
      />
      <ServiceCard
        imageSrc="/Service/service-1.png"
        alt="symbol"
        icon={ImBook}
        heading="Online Quran Classes"
        text="There are many variations of passages of lorem ipsum available lorem ipsum dolor sit amet"
        buttonText="Read More"
        onButtonClick={() => console.log("Read more clicked")}
      />
      <ServiceCard
        imageSrc="/Service/service-1.png"
        alt="symbol"
        icon={ImBook}
        heading="Online Quran Classes"
        text="There are many variations of passages of lorem ipsum available lorem ipsum dolor sit amet"
        buttonText="Read More"
        onButtonClick={() => console.log("Read more clicked")}
      />
      <ServiceCard
        imageSrc="/Service/service-1.png"
        alt="symbol"
        icon={ImBook}
        heading="Online Quran Classes"
        text="There are many variations of passages of lorem ipsum available lorem ipsum dolor sit amet"
        buttonText="Read More"
        onButtonClick={() => console.log("Read more clicked")}
      />
      <ServiceCard
        imageSrc="/Service/service-1.png"
        alt="symbol"
        icon={ImBook}
        heading="Online Quran Classes"
        text="There are many variations of passages of lorem ipsum available lorem ipsum dolor sit amet"
        buttonText="Read More"
        onButtonClick={() => console.log("Read more clicked")}
      />
    </div>
  );
}
