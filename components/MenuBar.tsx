"use client"
import React, { useState, useRef } from "react";
import { ChevronDoubleRightIcon, ChevronDoubleLeftIcon} from "@heroicons/react/24/solid";
import Link from "next/link";

interface Category {
  name: string;
  slug: string;
}

const MenuBar: React.FC = () => {
  const categories: Category[] = [
    { name: "Recent", slug: "/" },
    { name: "Loksewa", slug: "loksewa" },
    { name: "Engineering", slug: "engineering" },
    { name: "Management", slug: "management" },
    { name: "Technology", slug: "technology" },
    { name: "Design", slug: "design" },
    { name: "Finance", slug: "finance" },
    { name: "Category 1", slug: "category-1" },
    { name: "Category2", slug: "category-2" },
    { name: "Category3", slug: "category-3" },
    { name: "Category4", slug: "category-4" },
    { name: "Category5", slug: "category-5" },
    { name: "Category6", slug: "category-5" },
    { name: "Category7", slug: "category-5" },
    { name: "Category8", slug: "category-5" },
  ];
  const [scrollPosition, setScrollPosition] = useState<number>(0);
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
    <div className="border-b border-slate-200 pb-1 sticky inset-0 z-50 bg-white">
      <div className="flex items-center justify-between">
        <button onClick={handlePrev} className="mr-2">
          <ChevronDoubleLeftIcon className="h-8 w-8 bg-slate-100 hover:bg-slate-200 p-2 rounded-sm" />
        </button>
        <div ref={menuRef} className="flex overflow-hidden space-x-4" style={{ whiteSpace: "nowrap" }}>
          {categories.map((category, index) => (
            <Link key={index} href={`/${category.slug}`} className={`${index === 0 ? 'text-blue-500' : 'text-slate-400'} hover:text-slate-800 text-sm font-semibold hover:border-x px-1 border-slate-400`}>
              {category.name}
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

