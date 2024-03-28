"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HamburgerMenuIcon,
  Cross1Icon,
  ChatBubbleIcon,
} from "@radix-ui/react-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20 sticky inset-0 z-50 bg-white border-b border-slate-100">
      {/* Menu items for larger screens */}
      <Link href="/">
        <Image
          src="/logofinal.svg"
          alt="Logo"
          height={100}
          width={80}
          quality={100}
          className="p-1"
        />
        <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-gray-800">
          Nepal Information Hub
        </span>
      </Link>
      <div className="hidden md:inline-block">
        <ul className="flex items-center space-x-4 *:font-medium *:tracking-tight hover:*:bg-slate-100 *:px-2 *:py-1 *:rounded-lg *:cursor-pointer">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/#about"}>
            <li>About</li>
          </Link>
          <Link href={"/courses"}>
            <li>Courses</li>
          </Link>
          <Link href={"/articles"}>
            <li>Articles</li>
          </Link>
          <Link href={"/#contact-us"}>
            <li>Quizzes</li>
          </Link>
        </ul>
      </div>
      <div className="hidden md:flex  space-x-4 items-center">
        <Link href={"/"}>
          <button
            type="button"
            className="relative group p-1 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            Contact Us
            <span className="flex justify-center items-center bg-gray-200 rounded-md size-7 dark:bg-gray-700 dark:text-gray-400">
              <ChatBubbleIcon className="h-4 w-4" />
            </span>
          </button>
        </Link>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          variant={"outline"}
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <HamburgerMenuIcon className="h-4 w-4 text-slate-700" />
        </Button>
      </div>
      {/* Mobile menu, slide from the left */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-slate-50 transform z-[100] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="h-6 bg-white"></div>
        <div className="flex  items-center justify-between h-20 border-b border-white px-4 bg-white">
          {/* Brand */}
          <Link href="/">
            <Image
              src="/logofinal.svg"
              alt="Logo"
              height={100}
              width={80}
              quality={100}
              className="p-1"
            />
            <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-gray-800">
              Nepal Information Hub
            </span>
          </Link>

          <Button
            onClick={() => setIsOpen(false)}
            variant={"outline"}
            className="bg-slate-50 text-gray-700 inline-flex items-center justify-center p-4 rounded-md hover:text-gray-500"
            aria-label="Close menu"
          >
            <Cross1Icon className="w-4 h-4 text-slate-700" />
          </Button>
        </div>
        {/* Navigation links for mobile */}
        <div className="p-4 space-y-2 flex flex-col justify-center items-start bg-white">
          <Link
            href="/"
            className="text-sm font-medium border-b w-full py-3"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/#about"
            className="text-sm font-medium border-b w-full py-3"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/#services"
            className="text-sm font-medium border-b w-full py-3"
            onClick={() => setIsOpen(false)}
          >
            Courses
          </Link>
          <Link
            href="/#gallery"
            className="text-sm font-medium border-b w-full py-3"
            onClick={() => setIsOpen(false)}
          >
            Articles
          </Link>
          <Link
            href="/#teams"
            className="text-sm font-medium border-b w-full py-3"
            onClick={() => setIsOpen(false)}
          >
            Quizzes
          </Link>
        </div>
        <div className="p-4">
          <ul className="grid grid-cols-2 gap-x-4 font-medium">
            <Link
              href="/privacy-policy"
              className="text-sm font-medium w-full py-3"
              onClick={() => setIsOpen(false)}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-sm font-medium w-full py-3"
              onClick={() => setIsOpen(false)}
            >
              Terms & Conditions
            </Link>
            <Link
              href="/disclaimer"
              className="text-sm font-medium w-full py-3"
              onClick={() => setIsOpen(false)}
            >
              Disclaimer
            </Link>
          </ul>
        </div>
        <div className="p-4">
          <h1 className="text-xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
            Follow Us
          </h1>
          <ul className="flex items-center justify-start space-x-4">
            <li>
              <Image
                src={"/fb.svg"}
                alt="Facebook Icon"
                width={30}
                height={30}
              />
            </li>
            <li>
              <Image
                src={"/insta.svg"}
                alt="Facebook Icon"
                width={30}
                height={30}
              />
            </li>
            <li>
              <Image
                src={"/twt.svg"}
                alt="Facebook Icon"
                width={30}
                height={30}
              />
            </li>
            <li>
              <Image
                src={"/whatsapp.svg"}
                alt="Facebook Icon"
                width={30}
                height={30}
              />
            </li>
            <li>
              <Image
                src={"/yt.svg"}
                alt="Facebook Icon"
                width={30}
                height={30}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
