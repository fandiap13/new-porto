"use client";

import PageReveal from "@/components/animations/PageReveal";
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
        <ShowTech />
        <Showcase />
        <Project />
        <Work />
        <Footer />
      </PageReveal>
    </>
  );
}
