import {
  BookOpenIcon,
  BriefcaseIcon,
  ArrowTopRightOnSquareIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  BookmarkFilledIcon,
  BookmarkIcon,
  PersonIcon,
} from "@radix-ui/react-icons";

const page = () => {
  return (
    <div className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg border border-gray-200">
        <div className="relative h-44">
          <Image
            src={"/Loksewa.png"}
            alt="avatar"
            fill
            className="object-cover"
            quality={100}
          />
          <span className="absolute bg-black/30 text-white px-2 py-1 top-2 left-2 rounded-lg text-xs">
            Article
          </span>
          <span className="absolute bg-black/30 text-white px-2 py-1 top-2 left-16 rounded-lg text-xs">
            Loksewa
          </span>
          <span className="absolute bg-black/30 text-white px-2 py-1 top-2 left-36 rounded-lg text-xs">
            Adhikrit
          </span>
        </div>

        <div className="flex items-center justify-between px-6 py-3 bg-slate-900">
          <span className="flex items-center">
            <BookOpenIcon className="text-white w-6 h-6" />
            <h1 className="mx-3 text-lg font-semibold text-white">
              Loksewa (Adhikrit)
            </h1>
          </span>
          <span>
            <ArrowTopRightOnSquareIcon className="text-white h-6 w-6 hover:scale-105 duration-300 cursor-pointer" />
          </span>
        </div>

        <div className="px-6 py-4">
          <h1 className="text-lg font-medium text-gray-80">
            Section Officer (Sakha Adhikrit)
          </h1>

          <div className="flex items-center mt-4 text-gray-700">
            <PersonIcon className="h-5 w-5 text-slate-500" />
            <span className="px-2 text-sm font-medium text-slate-500">
              Author: Milan Thapa
            </span>
          </div>
          <div className="flex items-center mt-4 text-gray-700">
            <BookmarkIcon className="h-5 w-5 text-slate-500" />
            <span className="px-2 text-sm font-medium text-slate-500">
              24 Chapters
            </span>
          </div>
          <div className="flex items-center mt-4 text-gray-700">
            <PlayCircleIcon className="h-5 w-5 text-slate-500" />
            <span className="px-2 text-sm font-medium text-slate-500">
              9 Videos
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
