import React from "react";
import ArticleCard from "@/components/ArticleCard";

const page = () => {
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
    <div className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((item, index) => (
        <ArticleCard key={index} data={item} />
      ))}
    </div>
  );
};

export default page;
