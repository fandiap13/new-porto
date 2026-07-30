"use client";

import PageReveal from "@/components/animations/PageReveal";
import About from "@/components/sections/about/About";
import Education from "@/components/sections/education/Education";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/hero/Hero";
import Navbar from "@/components/sections/Navbar";
import Project from "@/components/sections/project/Project";
import Showcase from "@/components/sections/showcase/Showcase";
import ShowTech from "@/components/sections/tech/ShowTech";
import Work from "@/components/sections/work/Work";

export default function Home() {
  return (
    <>
      <Navbar />
      <PageReveal>
        <Hero />
        <About />
        <ShowTech />
        <Showcase />
        <Project />
        <Work />
        <Education />
        <Footer />
      </PageReveal>
    </>
  );
}
