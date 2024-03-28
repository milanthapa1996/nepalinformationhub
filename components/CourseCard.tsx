import React from "react";
import Image from "next/image";
import {
  CalendarIcon,
  PersonIcon,
  VideoIcon,
  Pencil2Icon,
  LayersIcon,
  FileIcon
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CardProps {
  data: {
    category: string;
    title: string;
    course_name: string;
    author: string;
    updated_date: string;
    imageUrl: string;
    tags: string[];
    fee: string;
  };
}
const CourseCard: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="max-w-sm overflow-hidden bg-white rounded-lg shadow-lg border-t-4 border-slate-300 group ">
      <Link href={"/courses/loksewa"}>
        <div className="relative h-44 group">
          <Image
            src={data.imageUrl}
            alt={data.title}
            fill
            className="object-cover group-hover:scale-105 duration-300"
            quality={100}
          />
          <div className="absolute top-2 left-2 space-x-2">
            {data.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-sky-500 rounded-sm border border-blue-200 px-2 py-0.5 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
      <div className="bg-slate-500 py-1">
        <h2 className="text-slate-100 text-lg font-semibold px-6 flex items-center">
          <LayersIcon className="h-4 w-4 text-slate-100 mr-2" />
          Section Officer
        </h2>
        <span className="text-xs text-slate-100 font-semibold px-6">{`( Loksewa )`}</span>
      </div>

      <div className="px-6 py-4">
        <div className="flex items-center justify-start flex-wrap space-x-4">
          <div className="flex items-center  text-gray-700">
            <PersonIcon className="h-3.5 w-3.5 text-slate-500 mr-1" />
            <span className="text-xs font-medium text-slate-500">
              {data.author}
            </span>
          </div>
          <div className="flex items-center  text-gray-700">
            <CalendarIcon className="h-3.5 w-3.5 text-slate-500 mr-1" />
            <span className="text-xs font-medium text-slate-500">
              {data.updated_date}
            </span>
          </div>
        </div>
        <div className="flex items-center mt-2">
          <FileIcon className="h-4 w-4 text-slate-700 mr-2" />
          <span className="text-sm font-medium text-slate-700">14 Articles</span>
        </div>
        <div className="flex items-center mt-2">
          <VideoIcon className="h-4 w-4 text-slate-700 mr-2" />
          <span className="text-sm font-medium text-slate-700">5 Videos</span>
        </div>
        <div className="flex items-center mt-2">
          <Pencil2Icon className="h-4 w-4 text-slate-700 mr-2" />
          <span className="text-sm font-medium text-slate-700">2 Quizzes</span>
        </div>
        <Link href={"/courses/loksewa"}>
          <Button className="mt-4 w-full" variant={"outline"} size={"lg"}>
            View
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
