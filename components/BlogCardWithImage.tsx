import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IArticle {
  title: string;
  authorFirstName: string;
  authorLastName: string;
  authorAvatarUrl: string;
  createdAt: Date;
  shortDescription: string;
  tags: string[];
  featuredImageUrl?: string;
}
interface IBlogCardProps {
  article: IArticle;
  featuredImage?: boolean;
  descriptionLength?: number;
}

const BlogCardWithImage: React.FC<IBlogCardProps> = ({
  article,
  featuredImage,
  descriptionLength,
}) => {
  const formatDate = (date: Date): string => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const renderShortDescription = (): string => {
    if (descriptionLength !== undefined) {
      return (
        article.shortDescription.slice(0, descriptionLength) +
        (article.shortDescription.length > descriptionLength ? "..." : "")
      );
    } else {
      return (
        article.shortDescription.slice(0, 150) +
        (article.shortDescription.length > 150 ? "..." : "")
      );
    }
  };

  return (
    <div>
      {featuredImage && article.featuredImageUrl && (
        <div className="relative h-52 md:h-48 lg:h-56 xl:h-64 mb-4">
          <Image
            src={article.featuredImageUrl}
            alt={article.title}
            fill
            className="rounded-md object-cover"
          />
        </div>
      )}
      <Link
        href={`/article/${article.title.toLowerCase().replace(/\s+/g, "-")}`}
      >
        <h1 className="text-xl md:text-2xl text-slate-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
          {article.title}
        </h1>
      </Link>
      <div className="flex flex-col md:flex-row items-start space-y-2 md:items-center md:space-y-0  my-4">
        <div className="rounded-full overflow-hidden flex items-center justify-center mr-2">
          <Image
            src={article.authorAvatarUrl}
            alt={`${article.authorFirstName} ${article.authorLastName}`}
            height={40}
            width={40}
          />
        </div>
        <span className="text-sm font-bold text-gray-600">
          {article.authorFirstName} {article.authorLastName}{" "}
          <span className="text-gray-400 text-xs">
            {formatDate(article.createdAt)}
          </span>
        </span>
        <div className="md:ml-4 flex items-center space-x-2">
          {article.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-500 px-2 py-1 rounded-sm text-xs cursor-pointer hover:text-slate-700 hover:-translate-y-1 duration-300 transition-all"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="text-slate-500 text-justify">
        {renderShortDescription()}
        <Link
          href={"/"}
          className="hover:underline text-slate-800 font-semibold text-sm"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BlogCardWithImage;
