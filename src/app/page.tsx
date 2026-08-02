import Hero from "@/components/Hero";
import About from "@/components/About";
import SystemBlueprint from "@/components/SystemBlueprint";
import WhatIBuild from "@/components/WhatIBuild";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import ThoughtsPreview from "@/components/ThoughtsPreview";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SystemBlueprint />
      <WhatIBuild />
      <Projects />
      <Experience />
      <Skills />
      <Testimonials />
      <ThoughtsPreview />
      <Contact />
    </>
  );
}
