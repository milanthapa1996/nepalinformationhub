"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  MagnifyingGlassIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import {
  BookOpenIcon,
  NewspaperIcon,
  AcademicCapIcon,
  VideoCameraIcon,
  BriefcaseIcon,
  PencilSquareIcon,
  LightBulbIcon,
  StarIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

const HeroSection = () => {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "f" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  const categories = [
    {
      name: "All",
      slug: "category/",
      icon: (
        <StarIcon
          className={`h-7 w-7 mr-2 border p-1 rounded-full border-gray-300 group-hover:bg-white`}
        />
      ),
    },
    {
      name: "Loksewa",
      slug: "category/study",
      icon: (
        <Image
          src="/loksewaicon.png"
          alt="Loksewa Icon"
          width={30}
          height={24}
          className={`mr-2 border rounded-full border-gray-300 group-hover:bg-white `}
        />
      ),
    },
    {
      name: "Quiz",
      slug: "category/quiz",
      icon: (
        <Image
          src="/loksewaicon.png"
          alt="Loksewa Icon"
          width={30}
          height={24}
          className={`mr-2 border rounded-full border-gray-300 group-hover:bg-white `}
        />
      ),
    },
    {
      name: "Video",
      slug: "category/video",
      icon: (
        <Image
          src="/loksewaicon.png"
          alt="Loksewa Icon"
          width={30}
          height={24}
          className={`mr-2 border rounded-full border-gray-300 group-hover:bg-white `}
        />
      ),
    },
    {
      name: "Vacancy",
      slug: "category/job",
      icon: (
        <Image
          src="/loksewaicon.png"
          alt="Loksewa Icon"
          width={30}
          height={24}
          className={`mr-2 border rounded-full border-gray-300 group-hover:bg-white `}
        />
      ),
    },
    {
      name: "Blog",
      slug: "category/blog",
      icon: (
        <Image
          src="/loksewaicon.png"
          alt="Loksewa Icon"
          width={30}
          height={24}
          className={`mr-2 border rounded-full border-gray-300 group-hover:bg-white `}
        />
      ),
    }
  ];
  return (
    <section className="min-h-screen flex flex-col md:flex-row mb-6 lg:mb-0">
      <div className="w-full flex items-start pt-12 justify-center">
        <Image
          src={"/heroicon.png"}
          alt="Hero image"
          width={600}
          height={300}
        />
      </div>
      <div className="w-full flex flex-col items-start pt-4 lg:pt-24 space-y-6">
        <h1 className="text-2xl lg:text-4xl font-bold">
          Find your next course.
        </h1>
        <Button
          className="flex justify-between h-14 w-[90%] rounded-full text-slate-500 shadow-md shadow-slate-400"
          variant={"outline"}
          onClick={() => setOpen(true)}
        >
          <span className="flex items-center">
            <MagnifyingGlassIcon className="h-6 w-6 mr-2" />
            Search Courses...
          </span>
          <p className="text-sm text-muted-foreground ml-6">
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">Ctrl + F</span>
            </kbd>
          </p>
        </Button>
        <p className=" italic font-medium text-slate-500">
          ** Or browse by subject or university
        </p>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <FaceIcon className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <RocketIcon className="mr-2 h-4 w-4" />
                <span>Launch</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <PersonIcon className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
                <span>Mail</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <GearIcon className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
        <div>
          <h2 className="font-bold text-slate-700 text-lg mb-2">
            Popular courses
          </h2>
          <ul className="flex items-start gap-4 flex-wrap max-w-md">
            {categories.map((category, index) => (
              <Link key={index} href={`/${category.slug}`}>
                <li
                  className={`border border-gray-300 rounded-xl px-2 py-1 flex items-center group hover:bg-slate-200 `}
                >
                  <div className="rounded-full text-xs md:text-base ">
                    {category.icon}
                  </div>
                  <span className="text-xs md:text-base">{category.name}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
