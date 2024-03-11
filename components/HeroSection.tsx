import React from "react";
import Image from "next/image";
import BlogCardWithImage from "./BlogCardWithImage";

interface IArticle {
  id: number;
  title: string;
  authorFirstName: string;
  authorLastName: string;
  authorAvatarUrl: string;
  createdAt: Date;
  shortDescription: string;
  descriptionLength?: number;
  tags: string[];
  featuredImageUrl?: string;
}

interface HeroSectionProps {
  article: IArticle;
}

const HeroSection: React.FC<HeroSectionProps> = ({ article }) => {

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
      <BlogCardWithImage article={article} featuredImage={false} descriptionLength={350}/>
      <div className="relative h-64 md:h-48 lg:h-56 xl:h-80 mb-4">
        <Image
          src={
            "/fimg.webp"
          }
          alt={"add poster"}
          fill
          quality={100}
          className="rounded-md object-cover"
        />
      </div>
    </main>
  );
};

export default HeroSection;
