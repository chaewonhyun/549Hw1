import { useRef } from "react";
import Header from "@/components/layout/Header";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Portfolio() {
  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const sections = {
    about: aboutRef,
    experience: experienceRef,
    education: educationRef,
    skills: skillsRef,
    contact: contactRef
  };

  return (
    <div className="min-h-screen bg-background">
      <Header sections={sections} />
      <div 
        className="h-[50vh] relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-background/10 before:to-background before:z-10"
      >
        <img
          src="/images/seattle-skyline.webp"
          alt="Seattle Skyline"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center drop-shadow-lg">
            My Portfolio
          </h1>
        </div>
      </div>
      <main>
        <About ref={aboutRef} />
        <Experience ref={experienceRef} />
        <Education ref={educationRef} />
        <Skills ref={skillsRef} />
        <Contact ref={contactRef} />
      </main>
      <Footer />
    </div>
  );
}