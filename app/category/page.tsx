import {
  BookOpenIcon,
  ArrowTopRightOnSquareIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  BookmarkIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import CategoryCard from "@/components/CategoryCard";

const page = () => {
  const data = [
    {
      category: "Article",
      title: "Loksewa (Adhikrit)",
      author: "Author 1",
      chapters: 10,
      videos: 5,
      imageUrl: "/Loksewa.png",
    },
    {
      category: "Opinion",
      title: "Opinion Title 1",
      author: "Author 2",
      chapters: 8,
      videos: 3,
      imageUrl: "/Loksewa.png",
    },
    {
      category: "Quiz",
      title: "Quiz Title 1",
      author: "Author 3",
      chapters: 12,
      videos: 7,
      imageUrl: "/Loksewa.png",
    },
  ];
  return (
    <div className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item, index) => (
        <CategoryCard
          key={index}
          category={item.category}
          title={item.title}
          author={item.author}
          chapters={item.chapters}
          videos={item.videos}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
};

export default page;
