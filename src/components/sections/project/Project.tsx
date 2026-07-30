"use client";

import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/constants";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import StickyProjectCard from "./StickyProjectCard";

const Project = () => {
  const container = useRef<HTMLDivElement>(null);

  // Satu sumber progress buat semua kartu — tiap kartu ambil potongannya
  // lewat prop `range`, jadi tumpukannya mengecil berurutan
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section id="work" className="container container-custom py-16 lg:py-28">
      <SectionHeader
        label="My Project"
        title="Turning ideas into seamless and captivating digital experiences."
      />

      <div
        ref={container}
        className="wrapper relative space-y-10 lg:space-y-0 lg:pb-[100vh]"
      >
        {projects.map((project, i) => {
          // kartu terakhir tetap skala 1, kartu paling awal paling kecil
          const targetScale = Math.max(
            0.5,
            1 - (projects.length - i - 1) * 0.05
          );

          // start dibagi rata sesuai jumlah kartu — kalau dipatok 0.25 seperti
          // contoh aslinya, kartu ke-5 dst. bakal dapat range terbalik ([1.25, 1])
          const start = (i / projects.length) * 0.9;

          return (
            <StickyProjectCard
              key={project.id}
              i={i}
              project={project}
              progress={scrollYProgress}
              range={[start, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Project;
