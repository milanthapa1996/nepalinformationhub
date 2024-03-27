import { ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedCourses = () => {
  return (
    <section className="min-h-screen">
      <h2 className="text-xl md:text-3xl font-bold text-slate-700 border-l-4 border-slate-600 pl-4 flex items-center justify-between">
        Our Courses
        <span className="text-sm text-center text-slate-500 cursor-pointer hover:text-slate-700 hover:translate-x-1 duration-300">
          View all <ChevronRightIcon className="h-4 w-4 inline-block" />
        </span>
      </h2>
      <p className="text-xs md:text-sm mt-2 font-medium text-slate-500 pl-5">
        Explore Our World: Dive into Diverse Learning Categories at Nepal
        Information Hub!
      </p>
      <div className="grid items-center space-y-4 py-16 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Link
            href={"/courses/slug"}
            key={i}
            className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[200px] group border-t-4 border-slate-400"
          >
            <Image
              src="/Loksewa.png"
              alt="AirMax Pro"
              fill
              className="rounded-md object-cover group-hover:-translate-y-1 duration-300"
            />
            <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
              <h1 className="text-lg font-semibold text-white">Loksewa</h1>
              <p className="mt-2 text-sm text-gray-300">
                Section Officer (Level 1 and Level 2)
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCourses;
