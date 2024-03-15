import React from "react";
import Image from "next/image";
import {
  BookOpenIcon,
  ArrowTopRightOnSquareIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { BookmarkIcon, PersonIcon } from "@radix-ui/react-icons";

interface CardProps {
  category: string;
  title: string;
  author: string;
  chapters: number;
  videos: number;
  imageUrl: string;
}

const CategoryCard: React.FC<CardProps> = ({
  category,
  title,
  author,
  chapters,
  videos,
  imageUrl,
}) => {
  return (
    <div className="max-w-sm overflow-hidden bg-white rounded-lg shadow-lg border border-gray-200">
      <div className="relative h-44">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute top-2 left-2 space-x-2">
          <span className="bg-black/30 text-white px-2 py-1 rounded-lg text-xs">
            {category}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between px-6 py-3 bg-slate-900">
        <span className="flex items-center">
          <BookOpenIcon className="text-white w-6 h-6" />
          <h1 className="mx-3 text-lg font-semibold text-white">{title}</h1>
        </span>
        <span>
          <ArrowTopRightOnSquareIcon className="text-white h-6 w-6 hover:scale-105 duration-300 cursor-pointer" />
        </span>
      </div>

      <div className="px-6 py-4">
        <h1 className="text-lg font-medium text-gray-800">{title}</h1>

        <div className="flex items-center mt-4 text-gray-700">
          <PersonIcon className="h-5 w-5 text-slate-500" />
          <span className="px-2 text-sm font-medium text-slate-500">
            Author: {author}
          </span>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <BookmarkIcon className="h-5 w-5 text-slate-500" />
          <span className="px-2 text-sm font-medium text-slate-500">
            {chapters} Chapters
          </span>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <PlayCircleIcon className="h-5 w-5 text-slate-500" />
          <span className="px-2 text-sm font-medium text-slate-500">
            {videos} Videos
          </span>
        </div>
        <Button className="mt-4" variant={"outline"}>
          View
        </Button>
      </div>
    </div>
  );
};

export default CategoryCard;
