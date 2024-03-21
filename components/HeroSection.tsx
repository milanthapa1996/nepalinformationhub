import { ChatBubbleIcon } from "@radix-ui/react-icons";
import React from "react";

const HeroSection = () => {
  return (
    <section className="pb-28 relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')]">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-x-6 bg-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300  cursor-pointer">
            Search your interest...
            <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600">
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </span>
        </div>
        <div className="mt-5 max-w-2xl text-center mx-auto">
          <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
            <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
              Nepal Information Hub
            </span>
          </h1>
        </div>

        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400">
            Discover a world of learning without limits at Nepal Information
            Hub. Start your journey to knowledge and growth today with Nepal
            Information Hub!
          </p>
        </div>

        <div className="mt-8 gap-3 flex justify-center">
          <span className="group cursor-pointer inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4">
            Get started
            <svg
              className="flex-shrink-0 size-4 group-hover:translate-x-1 duration-300"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <button
            type="button"
            className="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            Contact Us
            <span className="flex justify-center items-center bg-gray-200 rounded-md size-7 dark:bg-gray-700 dark:text-gray-400">
              <ChatBubbleIcon className="h-4 w-4" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
