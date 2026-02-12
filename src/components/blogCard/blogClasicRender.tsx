"use client";
import { useRouter } from "next/navigation";
import BlogCard from "./blogCard";

export default function BlogClasicRender() {
  const router = useRouter();

  return (
    <div className="h-fit mt-7 mx-5 md:pl-6 rounded-2xl">
      <BlogCard
        imageSrc="/Card/news-11.jpg"
        comment="03 Comment"
        date="October 18 2025"
        heading="Abandoning Prayer – Why to Avoid at all Costs?"
        desc="There are many variations of passages of lorem 
                        Ipsum available islam courses inventore veritatis et quasi architecto 
                        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
                        sit aspernatur aut odit aut fugit, sed quia consequuntur"
        buttonText="Read More"
        onClick={() => router.push("/blog/blogDetails")}
      />
      <BlogCard
        imageSrc="/Event/event-1.webp"
        comment="03 Comment"
        date="October 18 2025"
        heading="Abandoning Prayer – Why to Avoid at all Costs?"
        desc="There are many variations of passages of lorem 
                        Ipsum available islam courses inventore veritatis et quasi architecto 
                        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
                        sit aspernatur aut odit aut fugit, sed quia consequuntur"
        buttonText="Read More"
        onClick={() => router.push("/blog/blogDetails")}
      />
      <BlogCard
        imageSrc="/Card/news-13.webp"
        comment="03 Comment"
        date="October 18 2025"
        heading="The Qur’an on Deep Seas and Internal Waves"
        desc="There are many variations of passages of lorem 
                        Ipsum available islam courses inventore veritatis et quasi architecto 
                        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
                        sit aspernatur aut odit aut fugit, sed quia consequuntur"
        buttonText="Read More"
        onClick={() => router.push("/blog/blogDetails")}
      />
      <BlogCard
        imageSrc="/Card/news-14.webp"
        comment="03 Comment"
        date="October 18 2025"
        heading="Ten Matters Which Invalidate a Person’s Islam"
        desc="There are many variations of passages of lorem 
                        Ipsum available islam courses inventore veritatis et quasi architecto 
                        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
                        sit aspernatur aut odit aut fugit, sed quia consequuntur"
        buttonText="Read More"
        onClick={() => router.push("/blog/blogDetails")}
      />
      <BlogCard
        imageSrc="/Card/news-15.jpg"
        comment="03 Comment"
        date="October 18 2025"
        heading="What are the Conditions of the Shahadah in Islam"
        desc="There are many variations of passages of lorem 
                        Ipsum available islam courses inventore veritatis et quasi architecto 
                        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
                        sit aspernatur aut odit aut fugit, sed quia consequuntur"
        buttonText="Read More"
        onClick={() => router.push("/blog/blogDetails")}
      />
    </div>
  );
}
