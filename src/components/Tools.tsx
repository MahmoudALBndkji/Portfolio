"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Tools() {
  const tools = [
    {
      name: "Visual Studio",
      icon: "/assets/icons/visualStudio.png",
      color: "#ab47bc",
      desc: "I worked with him so much For Developing Web Application and Desktop Application using C# .NET Framework",
    },
    {
      name: "Android Studio",
      icon: "/assets/icons/androidStudio.png",
      color: "#3ddc84",
      desc: "I used it so much For Developing Mobile Application",
    },
    {
      name: "Visual Studio Code",
      icon: "/assets/icons/visualStudioCode.png",
      color: "#0078d7",
      desc: "I worked with him for Build and Developing Websites and much more",
    },
    {
      name: "Git",
      icon: "/assets/icons/git.png",
      color: "#f34f29",
      desc: "Tool used for source code management, Version control system (GitHub , GitLab)",
    },
    {
      name: "DB Management",
      icon: "/assets/icons/database.png",
      color: "#518fcb",
      desc: "Sql Server Managment Studio, MySql WorkBench Is used for Storing, and Managing Data in DB",
    },
    {
      name: "Azure",
      icon: "/assets/icons/azure.png",
      color: "#4863a0",
      desc: "A Public Cloud Computing Platform with solutions including Infrastructure as a Service and Software as a Service",
    },
    {
      name: "Visual Paradigm",
      icon: "/assets/icons/visualParadigm.png",
      color: "#cc3233",
      desc: "Supports Notation of UML models, as well as report generation and code Engineering Capabilities",
    },
    {
      name: "Postman",
      icon: "/assets/icons/postman.png",
      color: "#f36933",
      desc: "A Standalone Software Testing API platform to Build, Test, Design, Modify, and Document APIs",
    },
    {
      name: "Figma",
      icon: "/assets/icons/figma.png",
      color: "#333",
      desc: "A Powerful Web-based Design Tool that helps me Create Websites & Application and much more",
    },
    {
      name: "Zeplin",
      icon: "/assets/icons/zeplin.svg",
      color: "#fdbd39",
      desc: "I Deal with The Designs of Applications & Websites, With the Ability to Share Ideas with all members of the project",
    },
  ];

  const techniques = [
    { name: "Dart", img: "/assets/img/techniques_section/dart.png" },
    { name: "Flutter", img: "/assets/img/techniques_section/flutter.png" },
    { name: "Kotlin", img: "/assets/img/techniques_section/kotlin.png" },
    { name: "Swift", img: "/assets/img/techniques_section/swift.png" },
    { name: "Ionic", img: "/assets/img/techniques_section/ionic.png" },
    { name: "JavaScript", img: "/assets/img/techniques_section/js.png" },
    { name: "TypeScript", img: "/assets/img/techniques_section/typescript.png" },
  ];

  return (
    <>
      <section id="tools" className="py-20 bg-[#f5f8fd]">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <div className="text-center pb-12">
            <h2 className="text-3xl font-bold uppercase relative pb-5 font-jost text-darkness-blue before:content-[''] before:absolute before:block before:w-32 before:h-px before:bg-light-grey before:bottom-px before:left-[calc(50%-64px)] after:content-[''] after:absolute after:block after:w-10 after:h-0.75 after:bg-middle-blue after:bottom-0 after:left-[calc(50%-20px)]">
              Tools
            </h2>
            <h5 className="text-lg text-gray-600 mt-4 italic">Software and Tools That I Use</h5>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ol className="list-none p-0 contents">
              {tools.map((tool, index) => (
                <li
                  key={index}
                  className="relative bg-white p-5 rounded-md shadow-sm border-l-4 transition-all hover:-translate-y-1 hover:shadow-md flex items-start group"
                  style={{ borderLeftColor: tool.color }}
                >
                  <div className="shrink-0 mr-4 w-12 h-12 relative">
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1 font-poppins text-darkness-blue">
                      {tool.name}
                    </div>
                    <div className="text-sm text-gray-600 font-open-sans leading-relaxed">
                      {tool.desc}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
