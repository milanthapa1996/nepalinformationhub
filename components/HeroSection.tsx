"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  LayersIcon,
  MagnifyingGlassIcon,
  FileTextIcon,
  Pencil2Icon
} from "@radix-ui/react-icons";
import {
  StarIcon,
  BookOpenIcon,
  LightBulbIcon,
  AcademicCapIcon,
  VideoCameraIcon,
  BriefcaseIcon,
  PencilSquareIcon,
  NewspaperIcon,
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
      value: "all",
      icon: (
        <StarIcon
          className={`h-6 w-6 mr-2 border p-1 rounded-full border-gray-300 group-hover:bg-white `}
        />
      ),
    },
    {
      name: "Loksewa",
      value: "loksewa",
      icon: (
        <BookOpenIcon
          className={`h-6 w-6 mr-2 border p-1 rounded-full border-gray-300 group-hover:bg-white`}
        />
      ),
    },
    {
      name: "Teacher sewa",
      value: "tsc",
      icon: (
        <LightBulbIcon
          className={`h-6 w-6 mr-2 border p-1 rounded-full border-gray-300 group-hover:bg-white `}
        />
      ),
    },
    {
      name: "NRB",
      value: "nrb",
      icon: (
        <AcademicCapIcon
          className={`h-6 w-6 mr-2 border p-1 rounded-full border-gray-300 group-hover:bg-white`}
        />
      ),
    },
    {
      name: "CAAN",
      value: "caan",
      icon: (
        <VideoCameraIcon
          className={`h-6 w-6 mr-2 border p-1 rounded-full border-gray-300 group-hover:bg-white`}
        />
      ),
    },
    {
      name: "NTC",
      value: "ntc",
      icon: (
        <BriefcaseIcon
          className={`h-6 w-6 mr-2 border p-1 rounded-full border-gray-300 group-hover:bg-white`}
        />
      ),
    },
    {
      name: "NEA",
      value: "nea",
      icon: (
        <PencilSquareIcon
          className={`h-6 w-6 mr-2 border p-1 rounded-full border-gray-300 group-hover:bg-white `}
        />
      ),
    },
    {
      name: "Nepal Oil Corporation",
      value: "noc",
      icon: (
        <NewspaperIcon
          className={`h-6 w-6 mr-2 border p-1 rounded-full border-gray-300 group-hover:bg-white`}
        />
      ),
    },
    {
      name: "Nepal Army",
      value: "nparmy",
      icon: (
        <NewspaperIcon
          className={`h-6 w-6 mr-2 border p-1 rounded-full border-gray-300 group-hover:bg-white`}
        />
      ),
    },
    {
      name: "APF",
      value: "apf",
      icon: (
        <NewspaperIcon
          className={`h-6 w-6 mr-2 border p-1 rounded-full border-gray-300 group-hover:bg-white`}
        />
      ),
    },
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
          className="flex justify-between h-12 lg:h-14 w-[90%] rounded-full text-slate-500 hover:text-slate-500 shadow-md shadow-slate-400 hover:scale-105 duration-300 transition-all"
          variant={"outline"}
          onClick={() => setOpen(true)}
        >
          <span className="flex items-center">
            <MagnifyingGlassIcon className="h-6 w-6 mr-2" />
            Search your interest...
          </span>
          <p className="text-sm text-muted-foreground ml-6">
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">Ctrl + F</span>
            </kbd>
          </p>
        </Button>
        <p className=" italic font-medium text-slate-500">
          ** browse by courses or articles
        </p>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Search Courses or Articles ..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Courses">
              <CommandItem>
                <LayersIcon className="mr-2 h-2 w-2" />
                <Link href={"/courses"}>
                  <span className="text-xs font-medium text-slate-700">
                    All Courses
                  </span>
                </Link>
              </CommandItem>
              <CommandItem>
                <LayersIcon className="mr-2 h-2 w-2" />
                <Link href={"/courses"}>
                  <span className="text-xs font-medium text-slate-700">
                    Section Officer
                  </span>
                </Link>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Articles">
              <CommandItem>
                <FileTextIcon className="mr-2 h-2 w-2" />
                <span className="text-xs font-medium text-slate-700">Introduction to history</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Quizzes">
              <CommandItem>
                <Pencil2Icon className="mr-2 h-2 w-2" />
                <span className="text-xs font-medium text-slate-700">Section Officer Quiz 1</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
        <div>
          <h2 className="font-bold text-slate-700 text-lg mb-2">
            Popular courses
          </h2>
          <ul className="flex items-start gap-3 flex-wrap max-w-xl">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant="outline"
                className={`border border-gray-300 rounded-xl px-2 py-1 flex items-center group hover:bg-slate-200 hover:scale-105 duration-300 transition-all`}
              >
                <div className="rounded-full text-xs md:text-base ">
                  {category.icon}
                </div>
                <span className="text-xs text-slate-600">{category.name}</span>
              </Button>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
