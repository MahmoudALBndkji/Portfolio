"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
export default function Techniques() {
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
        <section
            id="techniques"
            className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
            data-aos="fade-up"
        >
            <div className="container mx-auto px-4">
                <div className="text-center pb-14">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase relative pb-5 font-jost text-darkness-blue
                        before:content-[''] before:absolute before:block before:w-32 before:h-px before:bg-gray-300 before:bottom-[1px] before:left-1/2 before:-translate-x-1/2
                        after:content-[''] after:absolute after:block after:w-10 after:h-[3px] after:bg-middle-blue after:bottom-0 after:left-1/2 after:-translate-x-1/2">
                        Techniques
                    </h2>
                    <p className="text-lg text-gray-500 mt-4 italic">
                        Languages & Frameworks I Work With
                    </p>
                </div>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    loop
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        0: { slidesPerView: 1.2 },
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 },
                    }}
                    className="techniquesSwiper pb-12!"
                >
                    {techniques.map((tech, index) => (
                        <SwiperSlide key={index} className="h-auto">
                            <div
                                className="
                                    group
                                    flex flex-col items-center justify-center
                                    rounded-2xl border border-gray-100
                                    bg-white/80 backdrop-blur
                                    py-6 text-center
                                    shadow-sm transition-all duration-300 ease-out
                                    hover:-translate-y-2 hover:shadow-xl
                                    hover:border-middle-blue/40
                                "
                            >
                                <div
                                    className="
                                        relative w-24 h-24 mb-2
                                        transition-transform duration-300
                                        group-hover:scale-110
                                    "
                                >
                                    <Image
                                        src={tech.img}
                                        alt={tech.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <h3
                                    className="
                                        text-lg font-semibold text-gray-800
                                        tracking-wide
                                        transition-colors duration-300
                                        group-hover:text-middle-blue
                                    "
                                >
                                    {tech.name}
                                </h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
