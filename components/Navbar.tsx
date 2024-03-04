"use client";
// components/Navbar.tsx
import React, { useState } from "react";
import Link from "next/link";
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
import Image from "next/image";

const frameworks = [
  {
    value: "loksewa",
    label: "Loksewa",
  },
  {
    value: "army-cadet",
    label: "Army Cadet",
  },
  {
    value: "tsc",
    label: "TSC",
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

const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center h-24 px-4 md:px-0">
      {/* Menu items for larger screens */}
      <div className="hidden md:flex space-x-4">
        <ul className="flex justify-between items-center space-x-6 *:font-semibold *:cursor-pointer">
          <li className="text-slate-500 hover:text-slate-800">Resources</li>
          <li className="text-slate-500 hover:text-slate-800">About Us</li>
          <li className="text-slate-500 hover:text-slate-800">Shop</li>
          <li className="text-slate-500 hover:text-slate-800">Contact</li>
        </ul>
      </div>
      {/* Logo */}
      <Link href="/" className="hidden md:inline-block">
        <Image
          src="/logonih.png"
          alt="Logo"
          height={100}
          width={170}
          quality={100}
        />
      </Link>

      {/* Button on the right */}
      <div className="space-x-2">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {value
                ? frameworks.find((framework) => framework.value === value)
                    ?.label
                : `Search...`}
              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search Category..." className="h-9" />
              <CommandEmpty>No Category found.</CommandEmpty>
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
                        value === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
        <Button className="hidden md:inline-block">Sign Up</Button>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="bg-slate-100 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {/* Icon for menu open/close */}
          {!isOpen ? (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          ) : (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu, slide from the left */}
      <div
        className={`fixed top-0 left-0 w-72 h-full bg-gray-100 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-300">
          {/* Brand */}
          <Link href="/">
            <span className="cursor-pointer text-gray-800 font-bold text-xl">
              Brand
            </span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            type="button"
            className="bg-white text-gray-800 inline-flex items-center justify-center p-2 rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300"
            aria-label="Close menu"
          >
            Close
          </button>
        </div>
        {/* Navigation links for mobile */}
        <div className="px-4 pt-2 pb-3 space-y-2 flex flex-col justify-center items-start">
          <Link href="/about">
            <span className="cursor-pointer text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">
              About
            </span>
          </Link>
          <Link href="/services">
            <span className="cursor-pointer text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">
              Resources
            </span>
          </Link>
          <Link href="/contact">
            <span className="cursor-pointer text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </span>
          </Link>
          <Link href="/blog">
            <span className="cursor-pointer text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">
              Blog
            </span>
          </Link>
          {/* Add more navigation links here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
