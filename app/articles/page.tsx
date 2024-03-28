"use client"
import ArticleCard from "@/components/ArticleCard";
import CustomTabs from "@/components/CustomTabs";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const data = [
  {
    category: "Study",
    title: "Gk: Chapter 1",
    course_name: "Section Officer (PSC)",
    updated_date: "2021-08-3",
    author: "Author 1",
    imageUrl: "/Loksewa.png",
    tags: ["loksewa", "Gk"],
    fee: "Free",
  },
  {
    category: "Quiz",
    title: "Gk: Chapter 2",
    course_name: "Course Name 1",
    updated_date: "2021-08-3",
    author: "Author 3",
    imageUrl: "/Loksewa.png",
    tags: ["tag 2", "free"],
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
];
const page = () => {
  const handleTabChange = (tabValue: string) => {
    console.log("Tab value:", tabValue);
  };
  return (
    <section className="max-w-7xl mx-auto px-4 py-4">
      <CustomTabs onTabChange={handleTabChange}>
        <>
          <div className="grid items-center space-y-4 mt-2  md:grid-cols-2 gap-6 md:space-y-0 lg:grid-cols-3">
            {data.map((item, index) => (
              <ArticleCard key={index} data={item} />
            ))}
          </div>
        </>
      </CustomTabs>
    </section>
  );
};

export default page;
