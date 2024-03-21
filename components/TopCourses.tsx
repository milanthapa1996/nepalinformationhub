import { ChevronRightIcon } from "@radix-ui/react-icons";
import React from "react";
import ArticleCard from "./ArticleCard";

const TopCourses = () => {
    const data = [
        {
          category: "Study",
          title: "Gk: Chapter 1",
          course_name:"Section Officer (PSC)",
          updated_date: "2021-08-3",
          author: "Author 1",
          imageUrl: "/Loksewa.png",
          tags: ["study","loksewa","Gk"],
          fee:"Free"
        },
        {
          category: "Quiz",
          title: "Playlist 1",
          course_name:"Course Name 1",
          updated_date: "2021-08-3",
          author: "Author 3",
          imageUrl: "/Loksewa.png",
          tags: ["quiz","tag 2","Paid"],
          fee:"150 NPR /-"
        },
        {
          category: "Study",
          title: "Loksewa",
          course_name:"Section Officer",
          author: "Author 1",
          updated_date: "2021-08-3",
          imageUrl: "/Loksewa.png",
          tags: ["study","loksewa","Free"],
          fee:"Free"
        },
        {
          category: "Study",
          title: "Loksewa",
          course_name:"Section Officer",
          updated_date: "2021-08-3",
          author: "Author 1",
          imageUrl: "/Loksewa.png",
          tags: ["study","loksewa","Free"],
          fee:"Free"
        },
        {
          category: "Study",
          title: "Loksewa",
          course_name:"Section Officer",
          updated_date: "2021-08-3",
          author: "Author 1",
          imageUrl: "/Loksewa.png",
          tags: ["study","loksewa","Free"],
          fee:"Free"
        },
      ];
  return (
    <section className="min-h-screen">
      <h2 className="text-xl md:text-3xl font-bold text-slate-700 border-l-4 border-slate-600 pl-4 flex items-center justify-between">
        Our Top Courses
        <span className="text-sm text-center text-slate-500 cursor-pointer hover:text-slate-700 hover:translate-x-1 duration-300">
          View all <ChevronRightIcon className="h-4 w-4 inline-block" />
        </span>
      </h2>
      <p className="text-xs md:text-sm mt-2 font-medium text-slate-500 pl-5">Embark on Excellence: Discover Premier Courses at Nepal Information Hub!</p>
      <div className="grid items-center space-y-4 py-16 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {data.map((item, index) => (
        <ArticleCard key={index} data={item} />
      ))}
      </div>
    </section>
  );
};

export default TopCourses;
