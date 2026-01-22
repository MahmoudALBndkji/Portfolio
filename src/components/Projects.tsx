"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, Project } from "@/data/projects";
import { FaLink, FaExpand } from "react-icons/fa";
import clsx from "clsx";

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
    // Play audio if available (optional, matching legacy behavior)
    const audio = new Audio("/assets/audios/mouseClick.mp3");
    audio.play().catch(() => {});
  };

  return (
    <section id="portfolio" className="py-16 bg-section-bg">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="text-center pb-12">
          <h2 className="text-3xl font-bold uppercase relative pb-5 font-jost text-darkness-blue before:content-[''] before:absolute before:block before:w-32 before:h-px before:bg-light-grey before:bottom-[1px] before:left-[calc(50%-64px)] after:content-[''] after:absolute after:block after:w-10 after:h-[3px] after:bg-middle-blue after:bottom-0 after:left-[calc(50%-20px)]">
            Projects
          </h2>
          <h5 className="text-lg text-gray-600 mt-4 italic">My Recent Work</h5>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 flex justify-center mb-8">
            <ul className="flex space-x-4 bg-white py-2 px-6 rounded-full shadow-sm">
              <li
                onClick={() => handleFilter("*")}
                className={clsx(
                  "cursor-pointer text-sm font-medium uppercase transition-colors duration-300 hover:text-middle-blue",
                  filter === "*" ? "text-middle-blue" : "text-gray-700"
                )}
              >
                All
              </li>
              <li
                onClick={() => handleFilter(".filter-mobile")}
                className={clsx(
                  "cursor-pointer text-sm font-medium uppercase transition-colors duration-300 hover:text-middle-blue",
                  filter === ".filter-mobile" ? "text-middle-blue" : "text-gray-700"
                )}
              >
                Mobile
              </li>
              <li
                onClick={() => handleFilter(".filter-web")}
                className={clsx(
                  "cursor-pointer text-sm font-medium uppercase transition-colors duration-300 hover:text-middle-blue",
                  filter === ".filter-web" ? "text-middle-blue" : "text-gray-700"
                )}
              >
                Web
              </li>
              <li
                onClick={() => handleFilter(".filter-desktop")}
                className={clsx(
                  "cursor-pointer text-sm font-medium uppercase transition-colors duration-300 hover:text-middle-blue",
                  filter === ".filter-desktop" ? "text-middle-blue" : "text-gray-700"
                )}
              >
                Desktop
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="200">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative bg-white shadow-lg overflow-hidden h-[300px] rounded-lg">
              <div className="relative w-full h-full">
                <Image
                  src={project.mainImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                <h4 className="text-xl font-bold text-darkness-blue mb-2">{project.title}</h4>
                <p className="text-gray-600 mb-4">{project.category}</p>
                <div className="flex space-x-4">
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-darkness-blue hover:text-middle-blue text-2xl"
                    title="More Details"
                  >
                    <FaLink />
                  </Link>
                  {/* Preview link - could be main image or app store link, using main image for now as per legacy */}
                  <a
                    href={project.mainImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-darkness-blue hover:text-middle-blue text-2xl"
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
