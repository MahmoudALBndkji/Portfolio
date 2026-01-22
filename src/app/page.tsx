import Hero from "@/components/Hero";
import About from "@/components/About";
import Certificates from "@/components/Certificates";
import Projects from "@/components/Projects";
import Tools from "@/components/Tools";
import Contact from "@/components/Contact";
import Techniques from "@/components/Techniques";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Certificates />
      <Projects />
      <Tools />
      <Techniques />
      <Contact />
    </main>
  );
}
