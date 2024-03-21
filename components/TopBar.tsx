"use client";
import React, { useState, useEffect } from "react";
import { ClockIcon } from "@radix-ui/react-icons";
import Image from "next/image";

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
    <div className="h-6 max-w-7xl mx-auto flex items-center justify-between ">
      <div className="flex items-center text-xs font-medium text-slate-700">
        <ClockIcon className="h-4 w-4 mr-2" />
        <span suppressHydrationWarning>
          {dayOfWeek} | {date} | {time}
        </span>
      </div>
    </div>
  );
};