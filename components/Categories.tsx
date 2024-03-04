import Link from "next/link";
import React from "react";

interface ITag {
  name: string;
  slug: string;
  color: string;
}

const tags: ITag[] = [
  { name: "Technology", slug: "technology", color: "#6EE7B7" },
  { name: "Programming", slug: "programming", color: "#F6E05E" },
  { name: "Web Development", slug: "web-development", color: "#9F7AEA" },
  { name: "JavaScript", slug: "javascript", color: "#F687B3" },
  { name: "React", slug: "react", color: "#4299E1" },
  { name: "Node.js", slug: "node-js", color: "#68D391" },
  { name: "Python", slug: "python", color: "#F6AD55" },
  { name: "Data Science", slug: "data-science", color: "#ED64A6" },
  { name: "Fitness", slug: "fitness", color: "#9F7AEA" },
  { name: "Food", slug: "food", color: "#F6AD55" },
  { name: "Machine Learning", slug: "machine-learning", color: "#4FD1C5" },
  { name: "Design", slug: "design", color: "#FBB6CE" },
  { name: "UI/UX", slug: "ui-ux", color: "#48BB78" },
  { name: "Graphic Design", slug: "graphic-design", color: "#A3BFFA" },
  { name: "Productivity", slug: "productivity", color: "#D69E2E" },
  { name: "Entrepreneurship", slug: "entrepreneurship", color: "#FDBA74" },
  { name: "Finance", slug: "finance", color: "#9F5F80" },
  { name: "Marketing", slug: "marketing", color: "#F56565" },
  { name: "Business", slug: "business", color: "#4299E1" },
  { name: "Health", slug: "health", color: "#38B2AC" },

];

const Categories = () => {
  return (
    <section className="py-12 space-y-8 my-16">
      <h2 className="text-2xl font-bold text-slate-700  border-l-4 border-slate-600 pl-4 inline-block">
        Browse By Tags
      </h2>
      <div className="flex flex-wrap gap-4">
        {tags.map((tag) => (
          <Link
            href={`/tags/${tag.slug}`}
            key={tag.slug}
            className={`bg-white p-2 border border-l-8 rounded-md hover:translate-x-1 duration-300 transition-all`}
            style={{ borderColor: tag.color }}
          >
            {tag.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
