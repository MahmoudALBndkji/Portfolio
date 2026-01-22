"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import clsx from "clsx";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);
    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      
    });
    // Play audio
    const audio = new Audio("/assets/audios/mouseClick.mp3");
    audio.play().catch(() => {});
  };

  return (
    <button
      onClick={scrollToTop}
      className={clsx(
        "fixed bottom-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-middle-blue text-white shadow-lg transition-all duration-300 hover:bg-darkness-blue focus:outline-none",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}
      aria-label="Back to top"
    >
      <FaArrowUp className="text-lg" />
    </button>
  );
}
