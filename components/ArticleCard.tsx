import React from "react";
import Image from "next/image";
import { BookOpenIcon, CalendarIcon,UserIcon } from "@heroicons/react/24/outline";
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
const ArticleCard: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="max-w-sm overflow-hidden bg-white rounded-lg shadow-lg border border-gray-200">
      <Link href={"/category/study/loksewa"}>
        <div className="relative h-44 group">
          <Image
            src={data.imageUrl}
            alt={data.title}
            fill
            className="object-cover"
            quality={100}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-20"></div>
          <div className="absolute top-2 left-2 space-x-2">
            {data.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-sky-50 text-sky-300 rounded-full border border-sky-100 px-2 py-0.5 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>

      <div className="flex items-center justify-between px-6 py-3 bg-slate-50 border">
        <span className="flex items-center">
          <BookOpenIcon className="text-slate-700 w-6 h-6" />
          <h1 className="mx-3 text-lg font-semibold text-slate-600">
            {data.course_name}
          </h1>
        </span>
        <span className="text-slate-600 text-sm font-medium">{data.fee}</span>
      </div>

      <div className="px-6 py-4">
        <h1 className="text-lg font-medium text-gray-600">
          {data.title}
        </h1>
        <div className="flex items-center justify-start flex-wrap mt-2 space-x-4">
          <div className="flex items-center  text-gray-700">
            <UserIcon className="h-4 w-4 text-slate-500 mr-1" />
            <span className="text-sm font-medium text-slate-500">
              {data.author}
            </span>
          </div>
          <div className="flex items-center  text-gray-700">
            <CalendarIcon className="h-4 w-4 text-slate-500 mr-1" />
            <span className="text-sm font-medium text-slate-500">
              {data.updated_date}
            </span>
          </div>
        </div>
        <Link href={"/category/study/loksewa"}>
          <Button className="mt-4" variant={"outline"}>
            View
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
