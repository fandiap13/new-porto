"use client";

import { ButtonSection } from "@/components/buttons/ButtonSection";
import { ProjectListProps } from "@/types";
import { motion, useScroll, useTransform } from "framer-motion";
import { MoveUpRight } from "lucide-react";
import React, { useRef } from "react";

interface CardProps {
  project: ProjectListProps;
  /** Urutan kartu — dipakai buat offset sticky bertingkat */
  index: number;
  /** Total kartu — buat ngitung sisa kartu di atasnya */
  total: number;
}

const StickyProjectCard: React.FC<CardProps> = ({ project, index, total }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Progress scroll kartu ini: 0 = baru masuk viewport, 1 = udah ketimbun kartu berikutnya
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Makin ketimbun, makin mengecil & meredup — bikin kesan tumpukan berlapis
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.7, 0.35]);
  const blur = useTransform(scrollYProgress, [0, 1], [0, 4]);
  const filter = useTransform(blur, (v) => `blur(${v}px)`);

  // Tiap kartu berhenti sedikit lebih bawah dari kartu sebelumnya,
  // jadi tepi atas kartu lama tetap kelihatan sebagai "tumpukan"
  const topOffset = 9 + index * 1.75; // rem

  return (
    // sticky di div luar (tanpa transform), motion.div menganimasi isinya —
    // transform pada elemen sticky bikin perhitungan posisinya kacau
    <div
      ref={containerRef}
      className="lg:sticky"
      style={{
        top: `${topOffset}rem`,
        // kartu terakhir paling atas biar urutan tumpukannya natural
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{ scale, opacity, filter, transformOrigin: "center top" }}
        className="card-wrapper border-[.5px] border-default/20 rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 overflow-hidden bg-black shadow shadow-white/15 hover:shadow-lg hover:border-white/30 transition-[border-color,box-shadow] duration-300"
      >
        <div className="order-2 lg:order-1 px-6 md:px-8 lg:px-12 py-4 md:py-6 lg:py-10">
          <div className="space-y-5 mb-4 md:mb-8 lg:mb-10">
            <h3 className="font-semibold text-2xl bg-gradient-to-r from-default to-white-50 bg-clip-text text-transparent">
              {project.title}
            </h3>
            <p className="text-text-muted text-base md:text-lg">
              {project.description}
            </p>
          </div>

          <ButtonSection
            className="cta-button-outline"
            onClick={() => project.link && window.open(project.link, "_blank")}
            disabled={!project.link}
          >
            <div className="flex items-center gap-3">
              <MoveUpRight className="size-5" /> View Site
            </div>
          </ButtonSection>

          <hr />

          {project.tech.length > 0 && (
            <div className="tech-parent">
              {project.tech.map((tec) => (
                <div key={tec} className="tech-item">
                  <span>{tec}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="order-1 lg:order-2 w-full h-[300px] lg:translate-x-16 lg:translate-y-16 lg:rounded-3xl overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover lg:object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default StickyProjectCard;
