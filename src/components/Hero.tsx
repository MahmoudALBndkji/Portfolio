"use client";

import { useEffect } from "react";
import Image from "next/image";
import { ReactTyped } from "react-typed";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiLogoLinkedin, BiLogoStackOverflow, BiLogoGithub, BiLogoBehance, BiLogoFacebook, BiLogoGoogle, BiCaretRight } from "react-icons/bi";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  const playAudio = () => {
    const audio = new Audio("/assets/audios/mouseClick.mp3");
    audio.play().catch(e => console.log("Audio play failed", e));
  };

  return (
    <section id="hero" className="d-flex align-items-center bg-darkness-blue text-white min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div
            className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1 pt-4 lg:pt-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="text-2xl lg:text-3xl font-medium mb-4 flex items-center text-[rgba(255,255,255,0.8)] font-jost">
              Welcome To My Portfolio !
              <span className="ml-2 wave">
                <Image src="/assets/img/hero_scetion/hi.gif" alt="hi" width={35} height={35} />
              </span>
            </h2>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 font-jost text-white">Mahmoud AL-Bndkji</h1>
            <div className="flex items-center text-xl lg:text-2xl mb-8 font-jost text-[rgba(255,255,255,0.8)] border-b-2 border-transparent pb-2">
               <BiCaretRight className="text-light-blue mr-2" />
               <span>I'm a </span>
               <span className="ml-2 text-white border-b-2 border-light-blue pb-1">
                 <ReactTyped
                  strings={[
                    "Software Engineer",
                    "Mobile Application Developer",
                    "Flutter Developer",
                    "Web Developer",
                    "Front-End Developer",
                    "Desktop Developer",
                    "Programmer"
                  ]}
                  typeSpeed={100}
                  backSpeed={50}
                  loop
                />
               </span>
            </div>

            <div className="flex justify-center lg:justify-start mb-8">
              <a
                href="https://www.mediafire.com/file/6m5d0big9xfqwv3/CV_-_Mahmoud_AL_Bndkji%25282%2529.pdf/file"
                className="btn-get-started scrollto inline-block px-8 py-3 rounded-full transition-all duration-500 text-white bg-light-blue hover:bg-light-middle-blue font-jost font-medium text-base tracking-wide no-underline"
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a>
            </div>

            <div className="flex justify-center lg:justify-start space-x-4">
              {[
                { icon: BiLogoLinkedin, href: "https://www.linkedin.com/in/mahmoud-al-bndkji-619a14241", color: "#0077b5" },
                { icon: BiLogoStackOverflow, href: "https://stackoverflow.com/users/19486739/mahmoud-al-bndkji", color: "#ef8236" },
                { icon: BiLogoGithub, href: "https://github.com/MahmoudALBndkji", color: "#333" }, // GitHub dark
                { icon: BiLogoBehance, href: "https://www.behance.net/mahmoudal-bndk1", color: "#053eff" },
                { icon: BiLogoFacebook, href: "https://www.facebook.com/MahmoudALBndkji", color: "#1877f2" },
                { icon: BiLogoGoogle, href: "mailto:mahmoudalbndkji@gmail.com", color: "#ea4335" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={playAudio}
                  className="bg-[rgba(255,255,255,0.1)] p-3 rounded-full hover:bg-white transition-all duration-300 group no-underline"
                >
                  <social.icon className="text-2xl text-white group-hover:text-light-blue transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div
            className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end hero-img"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Image
              src="/assets/img/hero_scetion/hero-img.gif"
              className="img-fluid animated max-w-full h-auto animate-float"
              alt="hero image"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
