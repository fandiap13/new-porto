"use client";

import { ButtonSection } from "@/components/buttons/ButtonSection";
import { ProjectListProps } from "@/types";
import { MotionValue, motion, useTransform } from "framer-motion";
import { MoveUpRight } from "lucide-react";
import React from "react";

interface CardProps {
  project: ProjectListProps;
  /** Urutan kartu — nentuin offset tumpukan & z-index */
  i: number;
  /** Progress scroll milik container induk (dibagi ke semua kartu) */
  progress: MotionValue<number>;
  /** Rentang progress tempat kartu ini mengecil */
  range: [number, number];
  /** Skala akhir kartu ini saat ketimbun */
  targetScale: number;
}

const StickyProjectCard: React.FC<CardProps> = ({
  project,
  i,
  progress,
  range,
  targetScale,
}) => {
  // Kartu mengecil mengikuti progress induk, bukan scroll-nya sendiri —
  // makanya tiap kartu berhenti di skala yang beda (tumpukan berlapis)
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="lg:sticky lg:top-0 flex items-center justify-center w-full">
      <motion.div
        style={{
          scale,
          // tiap kartu berhenti sedikit lebih bawah dari kartu sebelumnya
          top: `calc(-5vh + ${i * 25 + 180}px)`,
        }}
        className="card-wrapper relative lg:origin-top w-full border-[.5px] border-default/20 rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 overflow-hidden bg-black shadow shadow-white/15 hover:shadow-lg hover:border-white/30 transition-[border-color,box-shadow] duration-300"
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
