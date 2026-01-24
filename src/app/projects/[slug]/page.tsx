"use client";

import "swiper/css";
import Link from "next/link";
import Image from "next/image";
import "swiper/css/pagination";
import { projects } from "@/data/projects";
import { BsBrowserChrome } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { notFound, useParams } from "next/navigation";
import { FaApple, FaGithub, FaGoogleDrive, FaGooglePlay } from "react-icons/fa";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.id === slug);
  if (!project) {
    return notFound();
  }
  const playAudio = () => {
    const audio = new Audio("/assets/audios/mouseClick.mp3");
    audio.play().catch(() => { });
  };

  return (
    <main id="main">
      <section id="portfolio-details" className="py-20 px-10">
        <div className="container mx-auto px-4 my-10">
          <ol className="flex space-x-2 text-sm text-gray-600 mb-2">
            <li>
              <Link href="/#hero" className="text-middle-blue hover:underline">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>{project.title}</li>
          </ol>
          <h2 className="text-2xl font-bold text-darkness-blue">{project.title} Details</h2>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                className="portfolio-details-slider pb-12!"
              >
                {project.images.map((img, index) => (
                  <SwiperSlide key={index} className="flex justify-center">
                    <div className="relative w-full max-w-4xl aspect-4/3 sm:aspect-16/10 bg-[#E8E8E8] rounded-xl overflow-hidden">
                      <Image
                        src={img}
                        alt={`Slide ${index + 1}`}
                        fill
                        sizes="(max-width: 640px) 100vw,
                        (max-width: 1024px) 80vw,
                        60vw"
                        className="object-contain"
                        priority={index === 0}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-white p-6 shadow-lg rounded-lg mb-8 animated-border">
                <h3 className="text-xl font-bold border-b border-gray-200 pb-4 mb-4 text-darkness-blue">
                  Project information
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li>
                    <strong className="text-darkness-blue">Category:</strong> {project.category}
                  </li>
                  {project.date && (
                    <li>
                      <strong className="text-darkness-blue">Project date:</strong> {project.date}
                    </li>
                  )}
                  <li>
                    <strong className="text-darkness-blue">Description:</strong>
                    <p className="mt-2">{project.description}</p>
                  </li>
                </ul>
                <div className="m-6 mb-0 grid grid-cols-1 gap-4">
                  {project.gitHubLink && (
                    <a
                      href={project.gitHubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={playAudio}
                      className="
                      group flex items-center gap-4 rounded-xl px-5 py-3
                      bg-linear-to-r from-black via-neutral-900 to-neutral-800
                      animated-border transition-all duration-300
                      hover:-translate-y-1 hover:shadow-xl
                    "
                    >
                      <FaGithub className="text-3xl text-white group-hover:scale-110 transition-transform" />
                      <div className="flex flex-col leading-tight">
                        <span className="text-xs text-gray-300">Source Code on</span>
                        <span className="text-lg font-semibold text-white">GitHub</span>
                      </div>
                    </a>
                  )}
                  {project.webLink && (
                    <a
                      href={project.webLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={playAudio}
                      className="
                      group flex items-center gap-4 rounded-xl px-5 py-3
                      bg-[#1A6FE1]
                      animated-border transition-all duration-300
                      hover:-translate-y-1 hover:shadow-xl
                    "
                    >
                      <BsBrowserChrome className="text-3xl text-white group-hover:scale-110 transition-transform" />
                      <div className="flex flex-col leading-tight">
                        <span className="text-xs text-gray-300">Explore on</span>
                        <span className="text-lg font-semibold text-white">Web Browser</span>
                      </div>
                    </a>
                  )}
                  {project.appStoreLink && (
                    <a
                      href={project.appStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={playAudio}
                      className="
                      group flex items-center gap-4 rounded-xl px-5 py-3
                      bg-[#909090]
                      animated-border transition-all duration-300
                      hover:-translate-y-1 hover:shadow-xl
                    "
                    >
                      <FaApple className="text-3xl text-white group-hover:scale-110 transition-transform" />
                      <div className="flex flex-col leading-tight">
                        <span className="text-xs text-gray-300">Download on the</span>
                        <span className="text-lg font-semibold text-white">App Store</span>
                      </div>
                    </a>
                  )}
                  {project.playStoreLink && (
                    <a
                      href={project.playStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={playAudio}
                      className="
                      group flex items-center gap-4 rounded-xl px-5 py-3
                      bg-[#EA4335]
                      animated-border transition-all duration-300
                      hover:-translate-y-1 hover:shadow-xl
                    "
                    >
                      <FaGooglePlay className="text-3xl text-white group-hover:scale-110 transition-transform" />
                      <div className="flex flex-col leading-tight">
                        <span className="text-xs text-white/90">Get it on</span>
                        <span className="text-lg font-semibold text-white">Google Play</span>
                      </div>
                    </a>
                  )}
                  {project.driveLink && (
                    <a
                      href={project.driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={playAudio}
                      className="
                      group flex items-center gap-4 rounded-xl px-5 py-3
                    bg-[#FBBC05]
                      animated-border transition-all duration-300
                      hover:-translate-y-1 hover:shadow-xl
                    "
                    >
                      <FaGoogleDrive className="text-3xl text-white group-hover:scale-110 transition-transform" />
                      <div className="flex flex-col leading-tight">
                        <span className="text-xs text-white/80">Download from</span>
                        <span className="text-lg font-semibold text-white">Drive</span>
                      </div>
                    </a>
                  )}
                </div>

              </div>
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-bold border-b border-gray-200 pb-4 mb-4 text-darkness-blue">
                  Languages and Technologies used
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  {project.technologies.map((tech, index) => (
                    <li key={index}>
                      <strong>{tech}</strong>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}