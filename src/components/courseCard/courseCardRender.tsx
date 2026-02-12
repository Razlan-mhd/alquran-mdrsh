import CourseCard from "./courseCard";

export default function CourseCardRender() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
      <CourseCard
        imageSrc="/Recorder/class-1.webp"
        alt="children"
        text="study Now"
        heading="Quran Intermediate Course brother"
        text2="Habib Al Noor"
        text3="Arabic Teacher"
        price="$22.00"
        feetext="course free"
      />
      <CourseCard
        imageSrc="/Course/course-6.jpg"
        alt="children"
        text="study Now"
        heading="Online Quran Memorization Course"
        text2="Habib Al Noor"
        text3="Arabic Teacher"
        price="$22.00"
        feetext="course free"
      />
      <CourseCard
        imageSrc="/Course/course-7.webp"
        alt="children"
        text="study Now"
        heading="Tafseer of Surah Al-Fatiha Short Course"
        text2="Habib Al Noor"
        text3="Arabic Teacher"
        price="$22.00"
        feetext="course free"
      />
      <CourseCard
        imageSrc="/Course/course-8.webp"
        alt="children"
        text="study Now"
        heading="Online Tajweed Rules Course"
        text2="Habib Al Noor"
        text3="Arabic Teacher"
        price="$22.00"
        feetext="course free"
      />
      <CourseCard
        imageSrc="/Course/course-9.webp"
        alt="children"
        text="study Now"
        heading="Online Quran ijazah Course"
        text2="Habib Al Noor"
        text3="Arabic Teacher"
        price="$22.00"
        feetext="course free"
      />
      <CourseCard
        imageSrc="/Course/course-10.webp"
        alt="children"
        text="study Now"
        heading="Islamic Philosophy and Quranic Studies"
        text2="Habib Al Noor"
        text3="Arabic Teacher"
        price="$22.00"
        feetext="course free"
      />
    </div>
  );
}
