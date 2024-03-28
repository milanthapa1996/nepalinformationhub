import React from "react";
import ArticleCard from "@/components/ArticleCard";

const page = () => {
  const data = [
    {
      category: "Study",
      title: "Gk: Chapter 1",
      course_name: "Section Officer (PSC)",
      updated_date: "2021-08-3",
      author: "Author 1",
      imageUrl: "/Loksewa.png",
      tags: ["study", "loksewa", "Gk"],
      fee: "Free",
    },
    {
      category: "Quiz",
      title: "Playlist 1",
      course_name: "Course Name 1",
      updated_date: "2021-08-3",
      author: "Author 3",
      imageUrl: "/Loksewa.png",
      tags: ["quiz", "tag 2", "Paid"],
      fee: "150 NPR /-",
    },
    {
      category: "Study",
      title: "Loksewa",
      course_name: "Section Officer",
      author: "Author 1",
      updated_date: "2021-08-3",
      imageUrl: "/Loksewa.png",
      tags: ["study", "loksewa", "Free"],
      fee: "Free",
    },
    {
      category: "Study",
      title: "Loksewa",
      course_name: "Section Officer",
      updated_date: "2021-08-3",
      author: "Author 1",
      imageUrl: "/Loksewa.png",
      tags: ["study", "loksewa", "Free"],
      fee: "Free",
    },
    {
      category: "Study",
      title: "Loksewa",
      course_name: "Section Officer",
      updated_date: "2021-08-3",
      author: "Author 1",
      imageUrl: "/Loksewa.png",
      tags: ["study", "loksewa", "Free"],
      fee: "Free",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-xl md:text-2xl font-bold text-slate-700 border-l-4 border-slate-600 pl-4">
        Course:- <span className="text-slate-500">Loksewa</span>
      </h2>
      <div className="grid items-center space-y-4 py-8 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3">
        {data.map((item, index) => (
          <ArticleCard key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default page;
