"use client";
import Card from "./card";
import { useRouter } from "next/navigation";

const CardRender = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">
      {/* Card Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        <Card
          imageSrc="/Card/course-1.jpg"
          altText="Nature"
          heading1="Quran Intermediate Course brother"
          price="$45.00 $32.00"
          status={[
            { value: 20, label: "lessons" },
            { value: 10, label: "weeks" },
            { value: 50, label: "enroll" },
          ]}
          description="There are many variations of lorem class passages of lorem ipsum available online"
          imgsrc="/icon/service-1.svg"
          buttonText="Study Now"
          onButtonClick={() => router.push("/courses/courseDetails")}
          text={""}
        />

        <Card
          imageSrc="/Card/course-2.jpg"
          altText="Technology"
          description="There are many variations of lorem class passages of lorem ipsum available online"
          imgsrc="/icon/service-2.svg"
          heading1="Online Quran Classes For Ladies"
          price="$45.00 $32.00"
          status={[
            { value: 20, label: "lessons" },
            { value: 10, label: "weeks" },
            { value: 50, label: "enroll" },
          ]}
          buttonText="Study Now"
          onButtonClick={() => router.push("/courses/courseDetails")}
          text={""}
        />

        <Card
          imageSrc="/Card/course-3.jpg"
          altText="Security"
          description="There are many variations of lorem class passages of lorem ipsum available online"
          imgsrc="/icon/service-3.svg"
          heading1="Online Quran Classes for Kids"
          price="$45.00 $32.00"
          status={[
            { value: 20, label: "lessons" },
            { value: 10, label: "weeks" },
            { value: 50, label: "enroll" },
          ]}
          buttonText="Study Now"
          onButtonClick={() => router.push("/courses/courseDetails")}
          text={""}
        />

        <Card
          imageSrc="/Card/course-4.jpg"
          altText="Security"
          description="There are many variations of lorem class passages of lorem ipsum available online."
          imgsrc="/icon/service-4.svg"
          heading1="Hifz Quran (Quran Memorization Course)"
          price="$45.00 $32.00"
          status={[
            { value: 20, label: "lessons" },
            { value: 10, label: "weeks" },
            { value: 50, label: "enroll" },
          ]}
          buttonText="Study Now"
          onButtonClick={() => router.push("/courses/courseDetails")}
          text={""}
        />
      </div>
    </div>
  );
};

export default CardRender;
