"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export const TopBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalID);
  }, []); // Empty dependency array ensures the effect runs only once

  const dayOfWeek = currentTime.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const date = currentTime.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const time = currentTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  });
  return (
    <div className="h-6 max-w-7xl mx-auto px-4 py-1">
      <div className="flex items-center justify-between text-xs font-medium text-slate-700">
        <div suppressHydrationWarning>
          {dayOfWeek} | {date} | {time}
        </div>
        <ul className="hidden lg:flex items-center hover:*:underline space-x-2">
          <Link href={"/"}>
            <li>Privacy Policy</li>
          </Link>
          <li>|</li>
          <Link href={"/"}>
            <li>Disclaimer</li>
          </Link>
          <li>|</li>
          <Link href={"/"}>
            <li>Terms & Conditions</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
