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
  data: {
    category: string;
    playlist_name: string;
    course_name: string;
    author: string;
    chapters?: number;
    videos?: number;
    imageUrl: string;
    tags: string[];
    fee: string;
  };
}
const CategoryCard: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="max-w-sm overflow-hidden bg-white rounded-lg shadow-lg border border-gray-200">
      <div className="relative h-44">
        <Image
          src={data.imageUrl}
          alt={data.playlist_name}
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute top-2 left-2 space-x-2">
          {data.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-black/30 text-white px-2 py-1 rounded-lg text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between px-6 py-3 bg-slate-900">
        <span className="flex items-center">
          <BookOpenIcon className="text-white w-6 h-6" />
          <h1 className="mx-3 text-lg font-semibold text-white">
            {data.playlist_name}
          </h1>
        </span>
        <span className="text-white">{data.fee}</span>
      </div>

      <div className="px-6 py-4">
        <h1 className="text-lg font-medium text-gray-800">
          {data.course_name}
        </h1>

        <div className="flex items-center mt-4 text-gray-700">
          <PersonIcon className="h-5 w-5 text-slate-500" />
          <span className="px-2 text-sm font-medium text-slate-500">
            Author: {data.author}
          </span>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <BookmarkIcon className="h-5 w-5 text-slate-500" />
          <span className="px-2 text-sm font-medium text-slate-500">
            {data.chapters} Chapters
          </span>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <PlayCircleIcon className="h-5 w-5 text-slate-500" />
          <span className="px-2 text-sm font-medium text-slate-500">
            {data.videos} Videos
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
