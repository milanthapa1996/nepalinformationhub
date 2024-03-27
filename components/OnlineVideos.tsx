import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDoubleRightIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@radix-ui/react-icons";

interface Course {
  title: string;
  description: string;
  duration: string;
  youtubeThumbnail: string;
  price: number;
}

const onlineCourses: Course[] = [
  {
    title: "Fundamentals of Sustainable Development",
    description:
      "Understand the principles of sustainable development and how they can be applied in Nepal.",
    duration: "4 Hrs",
    youtubeThumbnail:
      "https://cdn.pixabay.com/photo/2020/08/04/08/58/laptop-5462234_640.jpg",
    price: 0,
  },
  {
    title: "Advanced Nepali Language Skills",
    description:
      "Enhance your Nepali language proficiency with advanced grammar, vocabulary, and writing skills.",
    duration: "6 Days",
    youtubeThumbnail:
      "https://cdn.pixabay.com/photo/2022/11/02/18/06/webcam-7565723_640.png",
    price: 150,
  },
  {
    title: "Himalayan Biodiversity and Conservation",
    description:
      "Explore the unique biodiversity of the Himalayas and learn about conservation efforts.",
    duration: "5 Hrs",
    youtubeThumbnail:
      "https://cdn.pixabay.com/photo/2018/05/11/11/11/nepal-3390257_640.jpg",
    price: 0,
  },
  {
    title: "Introduction to Data Science",
    description:
      "Dive into the world of data analysis, statistics, and machine learning.",
    duration: "30 Mins",
    youtubeThumbnail:
      "https://cdn.pixabay.com/photo/2014/09/23/08/57/ball-457334_1280.jpg",
    price: 0,
  },
  {
    title: "Leadership and Management Essentials",
    description:
      "Develop key leadership and management skills to succeed in professional environments.",
    duration: "3 Weeks",
    youtubeThumbnail:
      "https://cdn.pixabay.com/photo/2019/09/25/14/47/business-4503889_640.jpg",
    price: 0,
  },
];

const OnlineVideos: React.FC = () => {
  return (
    <section className="mb-24">
      <h2 className="text-xl md:text-3xl font-bold text-slate-700 border-l-4 border-slate-600 pl-4 flex items-center justify-between">
        Explre Online Videos
        <span className="text-sm text-center text-slate-500 cursor-pointer hover:text-slate-700 hover:translate-x-1 duration-300">
          View all <ChevronRightIcon className="h-4 w-4 inline-block" />
        </span>
      </h2>
      <p className="text-xs md:text-sm mt-2 font-medium text-slate-500 pl-5">
        Explore Our World: Dive into Diverse Learning Categories at Nepal
        Information Hub!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {onlineCourses.map((course, index) => (
          <Link href={`/courses/${index}`} key={index}>
            <span className="cursor-pointer block">
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300 h-full flex flex-col justify-between hover:shadow-teal-300">
                <div className="relative h-40 mb-4">
                  <Image
                    src={course.youtubeThumbnail}
                    alt={course.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2 truncate">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2 text-pretty">
                  {course.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center justify-start">
                    <PlayCircleIcon className="h-7 w-7 mr-2 text-red-600" />
                    <p className="text-sm text-gray-500">
                      Duration: {course.duration}
                    </p>
                  </span>
                  <p
                    className={`text-sm font-semibold ${
                      course.price === 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {course.price === 0 ? "Free" : `Price: $${course.price}`}
                  </p>
                </div>
              </div>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OnlineVideos;
