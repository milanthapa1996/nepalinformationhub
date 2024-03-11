"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ChevronUpIcon } from "@radix-ui/react-icons";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  // Show button when page is scrolled down
  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <Button size="icon" className="fixed bottom-4 right-4" onClick={scrollToTop}>
          <ChevronUpIcon className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default ScrollTop;
