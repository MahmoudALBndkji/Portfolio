"use client";

import { BiPhone, BiEnvelope } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";

export default function Contact() {
  return (
    <section id="contact" className="py-10 bg-[#f5f8fd]">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="text-center pb-12">
          <h2 className="text-3xl font-bold uppercase relative pb-5 font-jost text-darkness-blue before:content-[''] before:absolute before:block before:w-32 before:h-px before:bg-light-grey before:bottom-px before:left-[calc(50%-64px)] after:content-[''] after:absolute after:block after:w-10 after:h-0.75 after:bg-middle-blue after:bottom-0 after:left-[calc(50%-20px)]">
            Contact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all text-center group" data-aos="zoom-in" data-aos-delay="100">
            <div className="w-16 h-16 bg-[rgba(66,139,202,0.1)] text-light-blue rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:bg-light-blue group-hover:text-white transition-colors duration-300">
              <CiLocationOn />
            </div>
            <h4 className="text-xl font-bold mb-2 text-gray-800">Address</h4>
            <p className="text-gray-600">Fares Khoury Street, Damascus <span className="text-light-blue">(Syria)</span></p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all text-center group" data-aos="zoom-in" data-aos-delay="200">
            <div className="w-16 h-16 bg-[rgba(66,139,202,0.1)] text-light-blue rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:bg-light-blue group-hover:text-white transition-colors duration-300">
              <BiPhone />
            </div>
            <h4 className="text-xl font-bold mb-2 text-gray-800">Phone</h4>
            <p className="text-gray-600"><span className="text-light-blue">(+963)</span> 967140352</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all text-center group" data-aos="zoom-in" data-aos-delay="300">
            <div className="w-16 h-16 bg-[rgba(66,139,202,0.1)] text-light-blue rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:bg-light-blue group-hover:text-white transition-colors duration-300">
              <BiEnvelope />
            </div>
            <h4 className="text-xl font-bold mb-2 text-gray-800">Email</h4>
            <p className="text-gray-600 break-all">bndkjiprogrammer@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
