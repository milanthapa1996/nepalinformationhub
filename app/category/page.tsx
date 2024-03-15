import React from "react";
import CategoryCard from "@/components/CategoryCard";

const page = () => {
  const data = [
    {
      category: "Study",
      playlist_name: "Loksewa",
      course_name:"Section Officer (Sakha Adhikrit)",
      author: "Author 1",
      chapters: 10,
      videos: 5,
      imageUrl: "/Loksewa.png",
      tags: ["study","loksewa","Free"],
      fee:"Free"
    },
    {
      category: "Quiz",
      playlist_name: "Playlist 1",
      course_name:"Course Name 1",
      author: "Author 3",
      chapters: 12,
      videos: 7,
      imageUrl: "/Loksewa.png",
      tags: ["quiz","tag 2","Paid"],
      fee:"150 NPR /-"
    },
  ];
  return (
    <div className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((item, index) => (
        <CategoryCard key={index} data={item} />
      ))}
    </div>
  );
};

export default page;
