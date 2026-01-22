"use client";

import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return notFound();
  }

  // Play click audio
  const playAudio = () => {
    const audio = new Audio("/assets/audios/mouseClick.mp3");
    audio.play().catch(() => {});
  };

  return (
    <main id="main">
      {/* Breadcrumbs */}
      <section id="breadcrumbs" className="py-10 bg-section-bg">
        <div className="container mx-auto px-4">
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
      </section>

      {/* Portfolio Details Section */}
      <section id="portfolio-details" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Image Slider - 8 cols on large screens */}
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
                className="portfolio-details-slider pb-10"
              >
                {project.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-[400px] md:h-[600px] flex justify-center items-center bg-gray-50 rounded-lg overflow-hidden">
                       <Image
                        src={img}
                        alt={`Slide ${index + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Project Info - 4 cols on large screens */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 shadow-lg rounded-lg mb-8">
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
                    <p className="mt-2 text-justify">{project.description}</p>
                  </li>
                </ul>

                <div className="mt-6 flex flex-col space-y-3">
                  {project.appStoreLink && (
                    <a
                      href={project.appStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                      onClick={playAudio}
                    >
                      <FaApple className="text-3xl mr-3" />
                      <div className="flex flex-col">
                        <span className="text-xs">Download on the</span>
                        <span className="text-lg font-bold leading-none">App Store</span>
                      </div>
                    </a>
                  )}
                  {project.playStoreLink && (
                    <a
                      href={project.playStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                      onClick={playAudio}
                    >
                      <FaGooglePlay className="text-2xl mr-3 ml-1" />
                      <div className="flex flex-col">
                        <span className="text-xs">Get It On</span>
                        <span className="text-lg font-bold leading-none">Google Play</span>
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
