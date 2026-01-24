import Image from "next/image";
import { tools } from "@/data/tools";

export default function Tools() {
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
