"use client";
import { useRouter } from "next/router";
import ServiceCard from "./serviceCard";
import { ImBook } from "react-icons/im";

export default function ServicecardRender() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto">
      <ServiceCard
        imageSrc="/Service/service-1.png"
        alt="symbol"
        icon={ImBook}
        heading="Online Quran Classes"
        text="There are many variations of passages of lorem ipsum available lorem ipsum dolor sit amet"
        buttonText="Read More"
        onButtonClick={() => router.push("/service/serviceDetails")}
      />
      <ServiceCard
        imageSrc="/Service/service-1.png"
        alt="symbol"
        icon={ImBook}
        heading="Online Quran Classes"
        text="There are many variations of passages of lorem ipsum available lorem ipsum dolor sit amet"
        buttonText="Read More"
        onButtonClick={() => router.push("/service/serviceDetails")}
      />
      <ServiceCard
        imageSrc="/Service/service-1.png"
        alt="symbol"
        icon={ImBook}
        heading="Online Quran Classes"
        text="There are many variations of passages of lorem ipsum available lorem ipsum dolor sit amet"
        buttonText="Read More"
        onButtonClick={() => router.push("/service/serviceDetails")}
      />
      <ServiceCard
        imageSrc="/Service/service-1.png"
        alt="symbol"
        icon={ImBook}
        heading="Online Quran Classes"
        text="There are many variations of passages of lorem ipsum available lorem ipsum dolor sit amet"
        buttonText="Read More"
        onButtonClick={() => router.push("/service/serviceDetails")}
      />
      <ServiceCard
        imageSrc="/Service/service-1.png"
        alt="symbol"
        icon={ImBook}
        heading="Online Quran Classes"
        text="There are many variations of passages of lorem ipsum available lorem ipsum dolor sit amet"
        buttonText="Read More"
        onButtonClick={() => router.push("/service/serviceDetails")}
      />
      <ServiceCard
        imageSrc="/Service/service-1.png"
        alt="symbol"
        icon={ImBook}
        heading="Online Quran Classes"
        text="There are many variations of passages of lorem ipsum available lorem ipsum dolor sit amet"
        buttonText="Read More"
        onButtonClick={() => router.push("/service/serviceDetails")}
      />
    </div>
  );
}
