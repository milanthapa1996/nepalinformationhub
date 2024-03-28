"use client";
import React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CourseCard from "@/components/CourseCard";

const frameworks = [
  {
    value: "all",
    label: "All Courses",
  },
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

const page = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
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
  ];
  return (
    <main className="max-w-7xl mx-auto p-4">
      <div className="py-4">
        <h1 className="text-2xl lg:text-3xl font-bold text-slate-500 flex items-center">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[250px] justify-between"
              >
                {value
                  ? frameworks.find((framework) => framework.value === value)
                      ?.label
                  : "Select Categories..."}
                <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[250px] p-0">
              <Command>
                <CommandInput
                  placeholder="Search Categories..."
                  className="h-9"
                />
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>
                  {frameworks.map((framework) => (
                    <CommandItem
                      key={framework.value}
                      value={framework.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      {framework.label}
                      <CheckIcon
                        className={cn(
                          "ml-auto h-4 w-4",
                          value === framework.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        </h1>
        <div className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, index) => (
            <CourseCard key={index} data={item} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default page;
