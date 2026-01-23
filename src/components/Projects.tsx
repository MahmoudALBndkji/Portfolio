"use client";

import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaLink, FaExpand } from "react-icons/fa";
import { projects, Project } from "@/data/projects";

export default function Projects() {
  const [filter, setFilter] = useState("*");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  useEffect(() => {
    if (filter === "*") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => {
          if (filter === ".filter-mobile") return project.category.includes("Mobile");
          if (filter === ".filter-web") return project.category.includes("Web");
          if (filter === ".filter-desktop") return project.category.includes("Desktop");
          return true;
        })
      );
    }
  }, [filter]);

  const handleFilter = (newFilter: string) => {
    setFilter(newFilter);
    const audio = new Audio("/assets/audios/mouseClick.mp3");
    audio.play().catch(() => { });
  };

  return (
    <section id="portfolio" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="text-center pb-12">
          <h2 className="text-3xl font-bold uppercase relative pb-5 font-jost text-darkness-blue before:content-[''] before:absolute before:block before:w-32 before:h-px before:bg-light-grey before:bottom-px before:left-[calc(50%-64px)] after:content-[''] after:absolute after:block after:w-10 after:h-0.75 after:bg-middle-blue after:bottom-0 after:left-[calc(50%-20px)]">
            Projects
          </h2>
          <h5 className="text-lg text-gray-600 mt-4 italic">My Recent Work</h5>
        </div>
        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 flex justify-center mb-10">
            <ul className="relative flex items-center gap-2 bg-white/70 backdrop-blur-md p-2 rounded-full shadow-md border border-gray-200">

              {[
                { label: "All", value: "*" },
                { label: "Mobile", value: ".filter-mobile" },
                { label: "Web", value: ".filter-web" },
                { label: "Desktop", value: ".filter-desktop" },
              ].map((item) => (
                <li
                  key={item.value}
                  onClick={() => handleFilter(item.value)}
                  className={clsx(
                    "relative px-5 py-2 text-sm font-semibold uppercase rounded-full cursor-pointer transition-all duration-300",
                    "select-none",
                    filter === item.value
                      ? "text-white"
                      : "text-gray-600 hover:text-middle-blue"
                  )}
                >
                  {filter === item.value && (
                    <span
                      className="absolute inset-0 rounded-full bg-middle-blue shadow-md animate-scaleIn"
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white shadow-lg overflow-hidden rounded-xl"
            >
              <div className="relative w-full aspect-4/3 sm:aspect-16/10">
                <Image
                  src={project.mainImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw,
             (max-width: 1024px) 50vw,
             33vw"
                  className="object-contain sm:object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={false}
                />
              </div>
              <div className="absolute inset-0 bg-white/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center text-center p-4">
                <h4 className="text-xl font-bold text-darkness-blue mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-600 mb-4">{project.category}</p>
                <div className="flex space-x-5">
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-darkness-blue hover:text-middle-blue text-2xl transition-transform hover:scale-110"
                    title="More Details"
                  >
                    <FaLink />
                  </Link>
                  <a
                    href={project.mainImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-darkness-blue hover:text-middle-blue text-2xl transition-transform hover:scale-110"
                    title="Zoom in"
                  >
                    <FaExpand />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}