import BlogSection from "@/components/BlogSection";
import Categories from "@/components/Categories";
import HeroSection from "@/components/HeroSection";
import NewsLetter from "@/components/NewsLetter";
import OnlineVideos from "@/components/OnlineVideos";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import TopArticles from "@/components/TopArticles";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import CourseCard from "@/components/CourseCard";
import Link from "next/link";

export default function Home() {
  const loksewaArticles = [
    {
      id: 1,
      title:
        "Global Climate Summit 2024: Charting a Path Towards Sustainable Future",
      authorFirstName: "John",
      authorLastName: "Doe",
      authorAvatarUrl:
        "https://cdn.pixabay.com/photo/2020/10/11/19/51/cat-5646889_640.jpg",
      createdAt: new Date(),
      shortDescription:
        "In the wake of mounting environmental concerns and escalating climate crises, the Global Climate Summit 2024 emerges as a beacon of hope, bringing together world leaders, activists, and experts to confront the pressing challenges facing our planet. As discussions unfold and commitments are made, the summit serves as a pivotal moment in our collective journey towards a more sustainable and resilient future. From groundbreaking innovations to collaborative initiatives, the summit sets the stage for bold action and transformative change, underscoring the urgency of addressing climate change and safeguarding the health of our planet for generations to come.",
      tags: ["Technology", "Environment"],
      featuredImageUrl:
        "https://cdn.pixabay.com/photo/2019/04/23/20/46/climate-action-4150536_640.jpg",
    },
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
    {
      id: 4,
      title:
        "Sustainable Agriculture Practices: Nurturing the Earth and Feeding the Future",
      authorFirstName: "Sophia",
      authorLastName: "Brown",
      authorAvatarUrl:
        "https://cdn.pixabay.com/photo/2020/10/11/19/51/cat-5646889_640.jpg",
      createdAt: new Date(),
      shortDescription:
        "As the global population continues to grow, the demand for food is increasing exponentially. Sustainable agriculture practices aim to meet this demand while minimizing environmental impact and preserving natural resources for future generations. This article examines innovative farming techniques, agroecological principles, and the importance of biodiversity in ensuring food security and environmental sustainability.",
      tags: ["Environment", "Sustainability", "Agriculture"],
      featuredImageUrl:
        "https://cdn.pixabay.com/photo/2015/07/05/12/03/grain-832194_640.jpg",
    },
  ];
  const data = [
    {
      category: "Study",
      title: "Gk: Chapter 1",
      course_name: "Section Officer (PSC)",
      updated_date: "2021-08-3",
      author: "Author 1",
      imageUrl: "/Loksewa.png",
      tags: ["study", "loksewa", "Gk"],
      fee: "Free",
    },
    {
      category: "Quiz",
      title: "Playlist 1",
      course_name: "Course Name 1",
      updated_date: "2021-08-3",
      author: "Author 3",
      imageUrl: "/Loksewa.png",
      tags: ["quiz", "tag 2", "Paid"],
      fee: "150 NPR /-",
    },
    {
      category: "Study",
      title: "Loksewa",
      course_name: "Section Officer",
      author: "Author 1",
      updated_date: "2021-08-3",
      imageUrl: "/Loksewa.png",
      tags: ["study", "loksewa", "Free"],
      fee: "Free",
    },
    {
      category: "Study",
      title: "Loksewa",
      course_name: "Section Officer",
      updated_date: "2021-08-3",
      author: "Author 1",
      imageUrl: "/Loksewa.png",
      tags: ["study", "loksewa", "Free"],
      fee: "Free",
    },
    {
      category: "Study",
      title: "Loksewa",
      course_name: "Section Officer",
      updated_date: "2021-08-3",
      author: "Author 1",
      imageUrl: "/Loksewa.png",
      tags: ["study", "loksewa", "Free"],
      fee: "Free",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4">
      <HeroSection />
      <section className="min-h-screen py-12 lg:py-0">
        <h2 className="text-xl md:text-3xl font-bold text-slate-700 border-l-4 border-slate-600 pl-4 flex items-center justify-between">
          Our Top Courses
        </h2>
        <p className="text-xs md:text-sm mt-2 font-medium text-slate-500 pl-5">
          Explore Our World: Dive into Diverse Learning Categories at Nepal
          Information Hub!
        </p>
        <div className="grid items-center space-y-4 py-16 md:grid-cols-2 gap-6 md:space-y-0 lg:grid-cols-4">
          {data.map((item, index) => (
            <CourseCard key={index} data={item} />
          ))}
        </div>
        <Link href={"/courses"}>
            <span className="text-sm lg:text-lg mt-8 font-semibold flex items-center justify-center text-slate-600 cursor-pointer hover:text-slate-700 hover:translate-x-1 duration-300">
              View all <ChevronRightIcon className="h-4 w-4 inline-block" />
            </span>
          </Link>
      </section>
      <TopArticles />
      <Categories />
      <OnlineVideos />
      <div className="mb-24">
        <h2 className="text-2xl font-bold text-slate-700 mt-6 border-l-4 border-slate-600 pl-4 flex items-center justify-between">
          Latest Blogs
          <span className="text-sm text-center text-slate-500 cursor-pointer hover:text-slate-700 hover:translate-x-1 duration-300">
            All blogs{" "}
            <ChevronDoubleRightIcon className="h-4 w-4 inline-block" />
          </span>
        </h2>
        <BlogSection loksewaArticles={loksewaArticles} />
      </div>
      <NewsLetter />
    </main>
  );
}
