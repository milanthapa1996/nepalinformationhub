import React from "react";
import Image from "next/image";
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
    <div className="max-w-sm overflow-hidden bg-white rounded-lg shadow-lg border border-gray-200 group">
      <Link href={"/articles/loksewa"}>
        <div className="relative h-44 group">
          <Image
            src={data.imageUrl}
            alt={data.title}
            fill
            className="object-cover group-hover:scale-105 duration-300"
            quality={100}
          />
        </div>
      </Link>

      <div className="px-6 py-4">
        <div className="space-x-2 ">
          {data.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-sky-500 rounded-sm border border-blue-200 px-2 py-0.5 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-slate-700">
          {data.title}
        </h1>
        <p className=" text-sm text-slate-500">
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to "Naviglio" where you can enjoy the main night life in
          Barcelona.
        </p>
        <Link href={"/articles/loksewa"}>
          <Button className="mt-4" variant={"default"} size={"lg"}>
            View
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
