"use client";
// components/Navbar.tsx
import React, { useState } from "react";
import Link from "next/link";
import {
  CaretSortIcon,
  CheckIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "All Category",
    href: "/category",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Study",
    href: "/category/study",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Opinion",
    href: "/category/opinion",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Quiz",
    href: "/category/quiz",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Jobs",
    href: "/category/jobs",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Online Videos",
    href: "/category/online-videos",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Blogs",
    href: "/category/blogs",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

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
    <nav className="flex justify-between items-center h-28 z-10">
      {/* Menu items for larger screens */}
      <Link href="/">
        <Image
          src="/logofinal.svg"
          alt="Logo"
          height={100}
          width={90}
          quality={100}
          className="p-1"
        />
        <span className="text-xs font-bold">Nepal Information Hub</span>
      </Link>
      <NavigationMenu className="hidden md:inline-block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        shadcn/ui
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components built with Radix UI and
                        Tailwind CSS.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Button>SignIn</Button>

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
        className={`fixed top-0 left-0 w-full h-full bg-slate-50 transform z-[100] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex  items-center justify-between h-24 border-b border-white p-4 bg-white">
          {/* Brand */}
          <div className="flex flex-col">
            <Image
              src="/logofinal.svg"
              alt="Logo"
              height={100}
              width={80}
              quality={100}
            />
            <span className="text-xs font-bold tracking-tight">
              Nepal Information Hub
            </span>
          </div>

          <Button
            onClick={() => setIsOpen(false)}
            variant={"outline"}
            className="bg-slate-50 text-gray-700 inline-flex items-center justify-center p-4 rounded-md hover:text-gray-500"
            aria-label="Close menu"
          >
            <ChevronDoubleLeftIcon className="w-4 h-4 text-slate-500" />
          </Button>
        </div>
        {/* Navigation links for mobile */}
        <div className="p-4 space-y-2 flex flex-col justify-center items-start bg-white">
          <Link href="/" className="text-sm font-medium border-b w-full py-3">
            Home
          </Link>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="p-4">
          <ul className="grid grid-cols-2 gap-4 font-medium">
            <li>Privacy Policy</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="p-4">
          <h1 className="text-lg font-bold mb-4">Follow Us</h1>
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
                src={"/link.svg"}
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
                src={"/tel.svg"}
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
