"use client";
import React, { useState } from "react";
import {
  BookOpenIcon,
  NewspaperIcon,
  AcademicCapIcon,
  VideoCameraIcon,
  BriefcaseIcon,
  PencilSquareIcon,
  LightBulbIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";


interface CustomTabsProps {
  onTabChange: (tabValue: string) => void;
  children: React.ReactNode; // Allow passing children to CustomTabs
}


const CustomTabs: React.FC<CustomTabsProps> = ({ onTabChange,children }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleCategoryClick = (categoryValue:string) => {
    setActiveCategory(categoryValue);
    onTabChange(categoryValue);
  };
  
  const categories = [
    {
      name: "All",
      value: "all",
      icon: (
        <StarIcon
          className={`h-6 w-6 mr-2 border p-1 rounded-full border-gray-300 group-hover:bg-white ${
            activeCategory === "all" ? "bg-white" : ""
          }`}
        />
      ),
    },
    {
      name: "Loksewa",
      value: "loksewa",
      icon: (
        <BookOpenIcon
          className={`h-6 w-6 mr-2 border p-1 rounded-full border-gray-300 group-hover:bg-white ${
            activeCategory === "loksewa" ? "bg-white" : ""
          } `}
        />
      ),
    },
    {
      name: "Teacher sewa",
      value: "tsc",
      icon: (
        <LightBulbIcon
          className={`h-6 w-6 mr-2 border p-1 rounded-full border-gray-300 group-hover:bg-white `}
        />
      ),
    },
    {
      name: "NRB",
      value: "nrb",
      icon: (
        <AcademicCapIcon
          className={`h-6 w-6 mr-2 border p-1 rounded-full border-gray-300 group-hover:bg-white`}
        />
      ),
    },
    {
      name: "CAAN",
      value: "caan",
      icon: (
        <VideoCameraIcon
          className={`h-6 w-6 mr-2 border p-1 rounded-full border-gray-300 group-hover:bg-white`}
        />
      ),
    },
    {
      name: "NTC",
      value: "ntc",
      icon: (
        <BriefcaseIcon
          className={`h-6 w-6 mr-2 border p-1 rounded-full border-gray-300 group-hover:bg-white`}
        />
      ),
    },
    {
      name: "NEA",
      value: "nea",
      icon: (
        <PencilSquareIcon
          className={`h-6 w-6 mr-2 border p-1 rounded-full border-gray-300 group-hover:bg-white `}
        />
      ),
    },
    {
      name: "Nepal Oil Corporation",
      value: "noc",
      icon: (
        <NewspaperIcon
          className={`h-6 w-6 mr-2 border p-1 rounded-full border-gray-300 group-hover:bg-white`}
        />
      ),
    },
    {
      name: "Nepal Army",
      value: "nparmy",
      icon: (
        <NewspaperIcon
          className={`h-6 w-6 mr-2 border p-1 rounded-full border-gray-300 group-hover:bg-white`}
        />
      ),
    },
    {
      name: "APF",
      value: "apf",
      icon: (
        <NewspaperIcon
          className={`h-6 w-6 mr-2 border p-1 rounded-full border-gray-300 group-hover:bg-white`}
        />
      ),
    },
    {
      name: "Karmachari Sanachaya Kosh",
      value: "epf",
      icon: (
        <NewspaperIcon
          className={`h-6 w-6 mr-2 border p-1 rounded-full border-gray-300 group-hover:bg-white`}
        />
      ),
    },
  ];

  return (
    <section>
      <ScrollArea className="py-4">
        <div className="flex space-x-4">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant="outline"
              className={`border border-gray-300 rounded-xl px-2 py-1 flex items-center group hover:bg-slate-200 ${
                activeCategory === category.value ? "bg-slate-200" : ""
              }`}
              onClick={() => handleCategoryClick(category.value)}
            >
              <div className="rounded-full text-xs md:text-base ">
                {category.icon}
              </div>
              <span className="text-xs text-slate-600">{category.name}</span>
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      {children}
    </section>
  );
};

export default CustomTabs;
