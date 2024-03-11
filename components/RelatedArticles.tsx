// components/RelatedArticles.tsx

import Image from "next/image";
import Link from "next/link";
import React from "react";

const RelatedArticles: React.FC = () => {
  // Fetch related articles data (replace with actual data)
  const relatedArticles = [
    {
      id: 2,
      title:
        "Advancements in Renewable Energy: A Sustainable Solution for the Future",
      authorFirstName: "Emma",
      authorLastName: "Johnson",
      authorAvatarUrl:
        "https://cdn.pixabay.com/photo/2020/10/11/19/51/cat-5646889_640.jpg",
      createdAt: new Date(),
      shortDescription:
        "Renewable energy sources such as solar, wind, and hydroelectric power are increasingly being recognized as key components of a sustainable energy future. This article explores recent advancements in renewable energy technologies and their potential to revolutionize the global energy landscape.",
      tags: ["Technology", "Environment", "Renewable"],
      featuredImageUrl:
        "https://cdn.pixabay.com/photo/2013/06/07/09/59/cape-ortegal-117601_640.jpg",
    },
    {
      id: 3,
      title:
        "The Rise of Electric Vehicles: Paving the Way for a Greener Transportation Sector",
      authorFirstName: "Michael",
      authorLastName: "Smith",
      authorAvatarUrl:
        "https://cdn.pixabay.com/photo/2020/10/11/19/51/cat-5646889_640.jpg",
      createdAt: new Date(),
      shortDescription:
        "As concerns over air pollution and climate change escalate, electric vehicles (EVs) have emerged as a promising solution to reduce greenhouse gas emissions from the transportation sector. This article explores the growing popularity of EVs, advancements in battery technology, and the potential impact on the automotive industry.",
      tags: ["Technology", "Environment", "Electric"],
      featuredImageUrl:
        "https://cdn.pixabay.com/photo/2022/01/16/23/15/car-6943487_640.jpg",
    },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4 text-slate-600">
        Related Articles
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {relatedArticles.map((article) => (
          <div
            key={article.id}
            className="p-2 rounded-md shadow border border-gray-200"
          >
            <Link
              href={`/article/${article.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            >
              <div className="h-32 w-full relative">
              <Image
                src={article.featuredImageUrl}
                alt={article.title}
                fill
                className="object-cover rounded-md"
              />
              </div>
              <p className="text-sm font-semibold text-slate-600 hover:text-slate-800 hover:underline mt-2">{article.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
