import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ShareIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";

const page = () => {
  const articleData = {
    id: 1,
    title:
      "Global Climate Summit 2024: Charting a Path Towards Sustainable Future",
    authorFirstName: "John",
    authorLastName: "Doe",
    authorAvatarUrl:
      "https://cdn.pixabay.com/photo/2020/10/11/19/51/cat-5646889_640.jpg",
    createdAt: new Date(),
    shortDescription:
      "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    tags: ["Technology", "Environment"],
    featuredImageUrl:
      "https://cdn.pixabay.com/photo/2019/04/23/20/46/climate-action-4150536_640.jpg",
  };

  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between py-4 mb-12">
        <div className="max-w-screen-sm mx-auto">
                  {/* Table of contents */}
        <div className="mb-4 md:mb-0 w-48">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="bg-slate-100 p-2 border border-slate-700 rounded-md shadow-sm">
                <h3 className="font-semibold tracking-tight text-gray-600 text-lg ">
                  Table of Contents
                </h3>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="pl-2 text-base text-slate-500 marker:text-blue-600 list-decimal list-inside space-y-1">
                  <li className="hover:text-slate-700">
                    <Link href="#article">Heading 1</Link>
                  </li>
                  <li className="hover:text-slate-700">
                    <Link href="#article">Heading 2</Link>
                  </li>
                  <li className="hover:text-slate-700">
                    <Link href="#article">Paragraph 1</Link>
                  </li>
                  <li className="hover:text-slate-700">
                    <Link href="#article">The Article</Link>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
          <h1 className="text-2xl font-bold text-gray-700 mb-4">
            {articleData.title}
          </h1>
          <div className="flex flex-col md:flex-row items-start space-y-2 md:items-center md:space-y-0  my-4">
            <div className="rounded-full overflow-hidden flex items-center justify-center mr-2">
              <Image
                src={articleData.authorAvatarUrl}
                alt={`${articleData.authorFirstName} ${articleData.authorLastName}`}
                height={40}
                width={40}
              />
            </div>
            <span className="text-sm font-bold text-gray-600">
              {articleData.authorFirstName} {articleData.authorLastName}{" "}
              <span className="text-gray-400 text-xs">
                {new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
                  articleData.createdAt
                )}
              </span>
            </span>
            <div className="md:ml-4 flex items-center space-x-2">
              {articleData.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-500 px-2 py-1 rounded-sm text-xs cursor-pointer hover:text-slate-700 hover:-translate-y-1 duration-300 transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Featured Image using next/image*/}
          <div className="relative h-56 md:h-80">
            <Image
              src={articleData.featuredImageUrl}
              alt="featured-image"
              fill
              className="rounded-md object-cover"
            />
          </div>
          {/* Social Sharing Buttons */}
          <div className="my-6">
            <ul className="flex flex-row justify-start items-center *:cursor-pointer space-x-4">
              <li>
                <h3 className="font-semibold tracking-tight text-gray-600 text-sm flex items-center justify-center">
                  <Button variant={"outline"}>Share this <ShareIcon className="w-4 h-4 ml-2" /></Button> 
                </h3>
              </li>
              <li className="hover:translate-x-1 duration-300">
                <Image
                  src={"/fb.svg"}
                  alt="fb-social-icon"
                  width={30}
                  height={30}
                />
              </li>
              <li className="hover:translate-x-1 duration-300">
                <Image
                  src={"/insta.svg"}
                  alt="fb-social-icon"
                  width={30}
                  height={30}
                />
              </li>
              <li className="hover:translate-x-1 duration-300">
                <Image
                  src={"/link.svg"}
                  alt="fb-social-icon"
                  width={30}
                  height={30}
                />
              </li>
              <li className="hover:translate-x-1 duration-300">
                <Image
                  src={"/twt.svg"}
                  alt="fb-social-icon"
                  width={30}
                  height={30}
                />
              </li>
              <li className="hover:translate-x-1 duration-300">
                <Image
                  src={"/whatsapp.svg"}
                  alt="fb-social-icon"
                  width={30}
                  height={30}
                />
              </li>
              <li className="hover:translate-x-1 duration-300">
                <Image
                  src={"/tel.svg"}
                  alt="fb-social-icon"
                  width={30}
                  height={30}
                />
              </li>
            </ul>
          </div>

          {/* Article description */}
          <p className="text-sm leading-7 font-medium text-gray-500 text-justify">
            {articleData.shortDescription}
          </p>
          {/* Related Articles */}
          <div>
            <RelatedArticles />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
