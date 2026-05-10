"use client";

import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/hero/Hero";
import Navbar from "@/components/sections/Navbar";
import Project from "@/components/sections/project/Project";
import Showcase from "@/components/sections/showcase/Showcase";
import ShowTech from "@/components/sections/tech/ShowTech";
import Work from "@/components/sections/work/Work";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoadingPage, setIsLoadingPage] = useState(true);

  useEffect(() => {
    setIsLoadingPage(false);
  }, []);

  if (isLoadingPage) {
    return null;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <ShowTech />
      <Showcase />
      <Project />
      <Work />
      <Footer />
    </>
  );
}
