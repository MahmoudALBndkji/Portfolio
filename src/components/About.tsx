"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white text-dark-color">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="text-center pb-12">
          <h2 className="text-3xl font-bold uppercase relative pb-5 font-jost text-darkness-blue before:content-[''] before:absolute before:block before:w-32 before:h-px before:bg-light-grey before:bottom-px before:left-[calc(50%-64px)] after:content-[''] after:absolute after:block after:w-10 after:h-0.75 after:bg-middle-blue after:bottom-0 after:left-[calc(50%-20px)]">
            About Me
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0" data-aos="fade-right" data-aos-delay="100">
            <Image
              src="/assets/img/aboutMe_scection/myPhoto.jpg"
              className="rounded-lg shadow-lg max-w-[80%] h-auto"
              alt="my Photo"
              width={400}
              height={400}
            />
          </div>
          <div className="lg:w-1/2 pt-4 lg:pt-0 lg:pl-12" data-aos="fade-left" data-aos-delay="100">
            <h2 className="text-2xl font-bold text-grey mb-4 flex justify-center lg:justify-start font-jost">
              Who Am I ?
            </h2>
            <div className="italic text-lg mb-4 text-center md:text-start">
              A Mobile Application Developer, My expertise spans Swift for iOS development, Kotlin for Android
              development, and Dart for Flutter, allowing me to craft seamless cross-platform applications.
              <br />
              <br />
              I'm adept at leveraging frameworks like Flutter
              to build dynamic, responsive, and user-friendly interfaces. My proficiency in these technologies enables
              me to deliver high-quality, efficient, and scalable solutions across various platforms.
            </div>
            <hr className="border-t-2 border-middle-blue my-6" />
            <h2 className="text-2xl font-bold text-grey mb-4 flex justify-center lg:justify-start font-jost">
              Education
            </h2>
            
            <div className="mb-6 text-center md:text-start">
               <h3 className="text-xl font-bold font-jost">⏹️ Associate Degree TCI Software Engineering</h3>
               <h4 className="mt-2 text-base ml-8">Damascus University [ 16/09/2020 - 20/09/2022 ]</h4>
               <h5 className="mt-1 text-base ml-9">Final grade: 86.49%</h5>
            </div>

            <hr className="border-t border-grey mx-24 my-6" />

             <div className="mb-6 text-center md:text-start">
               <h3 className="text-xl font-bold font-jost">⏹️ Bachelor's Degree in Computer Technologies</h3>
               <h4 className="mt-2 text-base ml-8">Damascus University [ 18/09/2022 - 21/09/2025 ]</h4>
               <h5 className="mt-1 text-base ml-9">Final grade: 80%</h5>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
