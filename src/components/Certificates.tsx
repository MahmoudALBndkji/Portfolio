"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function Certificates() {
  const certificates = [
    "/assets/img/certificates/1.jpg",
    "/assets/img/certificates/2.jpg",
    "/assets/img/certificates/3.jpg",
    "/assets/img/certificates/4.jpg",
    "/assets/img/certificates/5.jpg",
    "/assets/img/certificates/6.jpg",
    "/assets/img/certificates/7.jpg",
    "/assets/img/certificates/8.jpg",
    "/assets/img/certificates/9.jpg",
    "/assets/img/certificates/10.jpg",
    "/assets/img/certificates/11.png",
  ];

  return (
    <section id="certificates" className="py-20 bg-[#f5f8fd]">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="text-center pb-12">
          <h2 className="text-3xl font-bold uppercase relative pb-5 font-jost text-darkness-blue before:content-[''] before:absolute before:block before:w-32 before:h-px before:bg-light-grey before:bottom-px before:left-[calc(50%-64px)] after:content-[''] after:absolute after:block after:w-10 after:h-0.75 after:bg-middle-blue after:bottom-0 after:left-[calc(50%-20px)]">
            Certificates
          </h2>
          <h5 className="text-lg text-gray-600 mt-4 italic">My Achievements</h5>
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="certificateSwiper pb-12!"
        >
          {certificates.map((cert, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <div className="relative w-full h-75 md:h-100">
                 <Image
                  src={cert}
                  alt={`Certificate ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}