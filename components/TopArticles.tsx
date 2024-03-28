"use client"
import { ChevronRightIcon } from "@radix-ui/react-icons";
import React from "react";
import ArticleCard from "./ArticleCard";
import Link from "next/link";
import CustomTabs from "./CustomTabs";
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
const TopArticles = () => {
  const handleTabChange = (tabValue: string) => {
    console.log("Tab value:", tabValue);
  };
  return (
    <section className="min-h-screen my-16">
      <h2 className="text-xl md:text-3xl font-bold text-slate-700 border-l-4 border-slate-600 pl-4 flex items-center justify-between">
        Our Top Articles
      </h2>
      <p className="text-xs md:text-sm mt-2 font-medium text-slate-500 pl-5 mb-4">
        Embark on Excellence: Discover Premier Courses at Nepal Information Hub!
      </p>
      <CustomTabs onTabChange={handleTabChange}>
        <>
          <div className="grid items-center space-y-4 mt-2  md:grid-cols-2 gap-6 md:space-y-0 lg:grid-cols-3">
            {data.map((item, index) => (
              <ArticleCard key={index} data={item} />
            ))}
          </div>
          <Link href={"/articles"}>
            <span className="text-sm lg:text-lg mt-8 font-semibold flex items-center justify-center text-slate-600 cursor-pointer hover:text-slate-700 hover:translate-x-1 duration-300">
              View all <ChevronRightIcon className="h-4 w-4 inline-block" />
            </span>
          </Link>
        </>
      </CustomTabs>
    </section>
  );
};

export default TopArticles;
