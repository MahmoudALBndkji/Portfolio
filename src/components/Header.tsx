"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";
import { BiListUl, BiX } from "react-icons/bi";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#hero", id: "hero" },
    { name: "About", href: "/#about", id: "about" },
    { name: "Projects", href: "/#portfolio", id: "portfolio" },
    { name: "Tools", href: "/#tools", id: "tools" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ];

  const playAudio = () => {
    const audio = new Audio("/assets/audios/mouseClick.mp3");
    audio.play().catch(e => console.log("Audio play failed", e));
  };

  return (
    <header
      id="header"
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-500 py-4",
        scrolled ? "bg-[rgba(40,58,90,0.9)]" : "bg-darkness-blue"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="logo me-auto group flex items-center text-3xl font-medium tracking-wide text-white font-[Times_New_Roman] italic no-underline">
          <Image
            src="/assets/img/hero_scetion/leftTag.png"
            alt="<"
            width={40}
            height={40}
            className="max-h-10 w-auto mr-1"
          />
          <span className="group-hover:text-light-blue transition-colors text-white">Mahmoud</span>
          <Image
            src="/assets/img/hero_scetion/rightTag.png"
            alt=">"
            width={40}
            height={40}
            className="max-h-10 w-auto ml-1"
          />
        </Link>
        <nav id="navbar" className={clsx("hidden lg:block")}>
          <ul className="flex space-x-8 items-center m-0 p-0 list-none">
            {navLinks.map((link) => (
              <li key={link.name} onClick={playAudio}>
                <Link
                  href={link.href}
                  className={clsx(
                    "nav-link text-white text-base font-medium hover:text-light-blue transition-colors relative pb-1 no-underline",
                    activeLink === link.id ? "text-light-blue" : ""
                  )}
                  onClick={() => setActiveLink(link.id)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li onClick={playAudio}>
              <a
                href="https://www.mediafire.com/file/6m5d0big9xfqwv3/CV_-_Mahmoud_AL_Bndkji%25282%2529.pdf/file"
                target="_blank"
                rel="noreferrer"
                className="nav-link text-white text-base font-medium hover:text-light-blue transition-colors border-2 border-light-blue px-5 py-2 rounded-full hover:bg-light-blue no-underline"
              >
                Download CV
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="lg:hidden text-white text-3xl cursor-pointer z-100" onClick={() => setMobileNavOpen(!mobileNavOpen)}>
          {mobileNavOpen ? <BiX /> : <BiListUl />}
        </div>

        {/* Mobile Nav Menu */}
        <div
          className={clsx(
            "fixed inset-0 bg-[rgba(40,58,90,0.9)] z-40 flex flex-col items-center justify-center transition-transform duration-300 lg:hidden",
            mobileNavOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <ul className="flex flex-col space-y-6 items-center m-0 p-0 list-none w-full">
            {navLinks.map((link) => (
              <li key={link.name} onClick={() => { playAudio(); setMobileNavOpen(false); }}>
                <Link
                  href={link.href}
                  className="nav-link text-white text-xl font-medium hover:text-light-blue transition-colors no-underline"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li onClick={() => { playAudio(); setMobileNavOpen(false); }}>
              <a
                href="https://www.mediafire.com/file/6m5d0big9xfqwv3/CV_-_Mahmoud_AL_Bndkji%25282%2529.pdf/file"
                target="_blank"
                rel="noreferrer"
                className="nav-link text-white text-xl font-medium hover:text-light-blue transition-colors border-2 border-light-blue px-6 py-2 rounded-full no-underline"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>

      </div>
    </header>
  );
}
