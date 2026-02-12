"use client";
import BlogCard from "./blogCard";
import { useRouter } from "next/navigation";

export default function BlogCardRender() {
    const router = useRouter();
  return (
    
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 items-stretch max-w-7xl mx-auto h-full">
      <BlogCard
        imageSrc="/Card/news-1.jpg"
        comment="03 Comment"
        date="October 18 2025"
        heading="Abandoning Prayer – Why to Avoid at all Costs?"
        desc="There are many variations of passages of lorem Ipsum available islam courses"
        image="/Card/author-2.png"
        heading2="Amir Khan"
        buttonText="Read More"
        onClick={() => router.push("/blog/blogDetails")}
      />
      <BlogCard
        imageSrc="/Card/news-2.jpg"
        comment="03 Comment"
        date="October 18 2025"
        heading="What are the Conditions of the Shahadah in Islam"
        desc="There are many variations of passages of lorem Ipsum available islam courses"
        image="/Card/author-4.png"
        heading2="Amir Khan"
        buttonText="Read More"
        onClick={() => router.push("/blog/blogDetails")}
      />
      <BlogCard
        imageSrc="/Card/news-3.jpg"
        comment="03 Comment"
        date="October 18 2025"
        heading="Types of Khawf (Fear) and Tawakkul (Reliance) in Islam"
        desc="There are many variations of passages of lorem Ipsum available islam courses"
        image="/Card/author-3.png"
        heading2="Amir Khan"
        buttonText="Read More"
        onClick={() => router.push("/blog/blogDetails")}
      />
      <BlogCard
        imageSrc="/Card/news-8.jpg"
        comment="03 Comment"
        date="October 18 2025"
        heading="The Purpose of Revelation of the Holy Quran"
        desc="There are many variations of passages of lorem Ipsum available islam courses"
        image="/Card/author-8.webp"
        heading2="Amir Khan"
        buttonText="Read More"
        onClick={() => router.push("/blog/blogDetails")}
      />
      <BlogCard
        imageSrc="/Card/news-9.jpg"
        comment="03 Comment"
        date="October 18 2025"
        heading="The Purpose of Revelation of the Holy Quran"
        desc="There are many variations of passages of lorem Ipsum available islam courses"
        image="/Card/author-8.webp"
        heading2="Amir Khan"
        buttonText="Read More"
        onClick={() => router.push("/blog/blogDetails")}
      />
      <BlogCard
        imageSrc="/Card/news-10.webp"
        comment="03 Comment"
        date="October 18 2025"
        heading="The Purpose of Revelation of the Holy Quran"
        desc="There are many variations of passages of lorem Ipsum available islam courses"
        image="/Card/author-10.png"
        heading2="Amir Khan"
        buttonText="Read More"
        onClick={() => router.push("/blog/blogDetails")}
      />
    </div>
  );
}
