"use client"
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

export default function ButtonContent() {
  const [active, setActive] = useState(1);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const curriculum = [
    {
      title: "Quran Literacy, level 1",
      content: "This course covers basic Quran reading skills."
    },
    {
      title: "Basic Quran Memorization, level 2",
      content: "Memorization techniques with guided practice."
    },
    {
      title: "Quran Tajweed, level 1",
      content: "Learn proper pronunciation and rules of Tajweed."
    },
    {
      title: "Intermediate Quran Level Course",
      content: "Advance your Quran understanding and recitation."
    }
  ];

  const lessons = [
    "Quran Memorization Lesson 1",
    "Quran Memorization Lesson 2",
    "Quran Memorization Lesson 3",
    "Quran Memorization Lesson 4",
    "Quran Memorization Lesson 5"
  ];

  const handleTabChange = (tab: number) => {
    setActive(tab);
    setOpenIndex(null); // close accordion on tab change
  };

  return (
    <div className=" max-w-5xl mx-auto p-5">

      {/* Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {["Curriculum", "Instructor", "Review", "Faq"].map((tab, i) => (
          <button
            key={i}
            onClick={() => handleTabChange(i + 1)}
            className={`px-4 py-2 text-white ${
              active === i + 1 ? "bg-blue-700" : "bg-blue-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <h1 className="text-3xl py-4">Course Structure</h1>
      <h2 className="text-xl text-gray-400 font-semibold">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. 
        Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam,
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
      </h2>

      {/* Content */}
      <div className="bg-gray-100 p-5 rounded my-7">

        {/* CURRICULUM */}
        {active === 1 && (
          <div className="space-y-6">
            {curriculum.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center 
                             bg-gray-500 text-white px-6 py-4 
                             rounded-lg font-semibold"
                >
                  <span>{item.title}</span>
                  {openIndex === index ? <FiMinus /> : <FiPlus />}
                </button>

                {openIndex === index && (
                  <div className="bg-white p-6 border rounded-b-lg">
                    <p className="text-gray-700">{item.content}</p>
                  </div>
                )}
              </div>
              
            ))}
             
      <h1 className="text-3xl font-bold mt-10">
        Intermediate Quran Level Course
      </h1>
      <p className="text-xl font-semibold text-gray-500 mb-6">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. 
        Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, 
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
      </p>

      <div className="space-y-6">
        {lessons.map((lesson, index) => (
          <div key={index}>
            <button
              onClick={() =>
                setOpenIndex(openIndex === index + 100 ? null : index + 100)
              }
              className="w-full flex justify-between items-center 
                         bg-gray-500 text-white px-6 py-4 
                         rounded-lg font-semibold"
            >
              <span>{lesson}</span>
              {openIndex === index + 100 ? <FiMinus /> : <FiPlus />}
            </button>

            {openIndex === index + 100 && (
              <div className="bg-white p-6 border rounded-b-lg">
                <p className="text-gray-700">
                  Lesson description content goes here.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
          </div>
        )}

        {/* INSTRUCTOR */}
        {active === 2 && (
          <div>
            <img
              src="/Course/course-6.jpg"
              alt="Instructor"
              className="w-full mb-4 rounded"
            />
            <p>Instructor details go here.</p>
          </div>
        )}

        {/* REVIEW */}
        {active === 3 && (
          <p>Student reviews will appear here.</p>
        )}

        {/* FAQ */}
        {active === 4 && (
          <p>Frequently asked questions will appear here.</p>
        )}
      </div>

     

    </div>
  );
}
