"use client";
import React, { useRef } from "react";
import { usePathname } from "next/navigation";
import {
  ChevronDoubleRightIcon,
  ChevronDoubleLeftIcon,
  BookOpenIcon,
  NewspaperIcon,
  AcademicCapIcon,
  VideoCameraIcon,
  BriefcaseIcon,
  PencilSquareIcon,
  LightBulbIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const MenuBar: React.FC = () => {
  const pathname = usePathname();
  const lastSegment = pathname.substring(pathname.lastIndexOf("/") + 1);

  const categories = [
    {
      name: "All",
      slug: "category/",
      icon: (
        <StarIcon
          className={`h-7 w-7 mr-2 border p-1 rounded-full border-gray-300 group-hover:bg-white ${
            lastSegment === "category" ? "bg-white" : ""
          }`}
        />
      ),
    },
    {
      name: "Study",
      slug: "category/study",
      icon: (
        <BookOpenIcon
          className={`h-7 w-7 mr-2 border p-1 rounded-full border-gray-300 group-hover:bg-white ${
            lastSegment === "article" ? "bg-white" : ""
          }`}
        />
      ),
    },
    {
      name: "Opinion",
      slug: "category/opinion",
      icon: (
        <LightBulbIcon
          className={`h-7 w-7 mr-2 border p-1 rounded-full border-gray-300 group-hover:bg-white ${
            lastSegment === "opinion" ? "bg-white" : ""
          }`}
        />
      ),
    },
    {
      name: "Quiz",
      slug: "category/quiz",
      icon: (
        <AcademicCapIcon
          className={`h-7 w-7 mr-2 border p-1 rounded-full border-gray-300 group-hover:bg-white ${
            lastSegment === "quiz" ? "bg-white" : ""
          }`}
        />
      ),
    },
    {
      name: "Video",
      slug: "category/video",
      icon: (
        <VideoCameraIcon
          className={`h-7 w-7 mr-2 border p-1 rounded-full border-gray-300 group-hover:bg-white ${
            lastSegment === "video" ? "bg-white" : ""
          }`}
        />
      ),
    },
    {
      name: "Job",
      slug: "category/job",
      icon: (
        <BriefcaseIcon
          className={`h-7 w-7 mr-2 border p-1 rounded-full border-gray-300 group-hover:bg-white ${
            lastSegment === "job" ? "bg-white" : ""
          }`}
        />
      ),
    },
    {
      name: "Blog",
      slug: "category/blog",
      icon: (
        <PencilSquareIcon
          className={`h-7 w-7 mr-2 border p-1 rounded-full border-gray-300 group-hover:bg-white ${
            lastSegment === "blog" ? "bg-white" : ""
          }`}
        />
      ),
    },
    {
      name: "News",
      slug: "category/news",
      icon: (
        <NewspaperIcon
          className={`h-7 w-7 mr-2 border p-1 rounded-full border-gray-300 group-hover:bg-white ${
            lastSegment === "news" ? "bg-white" : ""
          }`}
        />
      ),
    },
  ];
  const menuRef = useRef<HTMLDivElement>(null);
  const handlePrev = () => {
    const menu = menuRef.current;
    if (menu) {
      const newScrollPosition = menu.scrollLeft - 200; // Adjust scroll amount as needed
      smoothScroll(menu, newScrollPosition);
    }
  };

  const handleNext = () => {
    const menu = menuRef.current;
    if (menu) {
      const newScrollPosition = menu.scrollLeft + 200; // Adjust scroll amount as needed
      smoothScroll(menu, newScrollPosition);
    }
  };

  const smoothScroll = (element: HTMLElement, to: number, duration = 500) => {
    const start = element.scrollLeft;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;
      const val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollLeft = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };

  // Easing function for smooth scroll
  const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  return (
    <div className="border-b border-slate-200 pb-1 sticky inset-0  bg-white">
      <div className="flex items-center justify-between">
        <button onClick={handlePrev} className="mr-2">
          <ChevronDoubleLeftIcon className="h-8 w-8 bg-slate-100 hover:bg-slate-200 p-2 rounded-sm" />
        </button>
        <div
          ref={menuRef}
          className="flex overflow-hidden space-x-4"
          style={{ whiteSpace: "nowrap" }}
        >
          {categories.map((category, index) => (
            <Link key={index} href={`/${category.slug}`}>
              <span
                className={`border border-gray-300 rounded-xl px-2 py-1 flex items-center group hover:bg-slate-200 ${
                  lastSegment === "category" && category.slug === "category/"
                    ? "bg-slate-200"
                    : lastSegment === category.slug.split("/")[1]
                    ? "bg-slate-200"
                    : ""
                }`}
              >
                <div className="rounded-full text-xs md:text-base ">
                  {category.icon}
                </div>
                <span className="text-xs md:text-base">{category.name}</span>
              </span>
            </Link>
          ))}
        </div>
        <button onClick={handleNext} className="ml-2">
          <ChevronDoubleRightIcon className="h-8 w-8 bg-slate-100 hover:bg-slate-200 p-2 rounded-sm" />
        </button>
      </div>
    </div>
  );
};

export default MenuBar;
