"use client";

import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/constants";
import StickyProjectCard from "./StickyProjectCard";

const Project = () => {
  return (
    <section id="work" className="container container-custom py-16 lg:py-28">
      <SectionHeader
        label="My Project"
        title="Turning ideas into seamless and captivating digital experiences."
      />

      {/* jarak antar kartu bikin tiap kartu sempat "pinned" sebelum ketimbun berikutnya */}
      <div className="wrapper relative space-y-10 lg:space-y-32">
        {projects.map((project, projectIndex) => (
          <StickyProjectCard
            project={project}
            key={project.id}
            index={projectIndex}
            total={projects.length}
          />
        ))}
      </div>

      {/* ruang ekstra biar kartu terakhir sempat lepas dari sticky */}
      <div className="hidden lg:block h-[40vh]" />
    </section>
  );
};

export default Project;
