"use client";

import SectionHeader from "@/components/SectionHeader";
import GlowCard from "@/components/cards/GlowCard";
import { works } from "@/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LogOut } from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const scope = useRef<HTMLDivElement>(null);

  return (
    <section
      id="experience"
      className="container container-custom py-16 lg:py-28"
    >
      <SectionHeader
        label="My Career Overview"
        title="Professional Work Experience."
      />

      <div className="flex flex-col" ref={scope}>
        {works.map((work, i) => (
          <div
            key={work.company}
            className="grid grid-cols-1 md:grid-cols-[1fr_fit-content(100%)_1fr]"
          >
            {/* Kiri — hidden mobile */}
            <div className="hidden md:block pb-28 px-5">
              <div className="timeline-card">
                <GlowCard index={i}>
                  <p className="leading-relaxed text-lg">{work.comment}</p>
                </GlowCard>
              </div>
            </div>

            {/* Tengah — timeline desktop */}
            <div className="hidden md:block w-full h-full px-5 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-full bg-transparent" />
              <div className="timeline absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-full bg-white -z-10" />
              <div className="w-full h-full flex flex-col items-center">
                <div className="size-20 rounded-full border border-default/25 flex items-center justify-center bg-black">
                  <div className="size-12 rounded-full flex items-center justify-center bg-primary">
                    <LogOut className="size-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Kanan — konten desktop + semua mobile */}
            <div className="pb-10 md:pb-28 px-0 md:px-10 expText">
              {/* Mobile layout */}
              <div className="flex items-stretch gap-4 md:hidden">
                {/* Icon + garis */}
                <div className="flex flex-col items-center">
                  <div className="size-12 rounded-full border border-default/25 flex items-center justify-center bg-black shrink-0">
                    <div className="size-8 rounded-full flex items-center justify-center bg-primary">
                      <LogOut className="size-4" />
                    </div>
                  </div>
                  {i < works.length - 1 && (
                    <div className="w-[2px] grow bg-white/20 mt-2" />
                  )}
                </div>

                {/* Konten */}
                <div className="flex-1 pb-10">
                  <h1 className="font-semibold text-2xl mb-1">{work.role}</h1>
                  <span className="text-highlight font-medium text-sm">
                    🗓️ {work.period}
                  </span>

                  <hr className="my-4 border-0 h-[2px] w-1/3 bg-white/30 rounded-full" />

                  {Array.isArray(work.description) ? (
                    <ul className="leading-relaxed text-base list-disc pl-5 space-y-2 text-text-muted">
                      {work.description.map((d, idx) => (
                        <li key={idx}>{d}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="leading-relaxed text-base text-text-muted">
                      {work.description}
                    </p>
                  )}

                  <div className="mt-5 hidden lg:block">
                    <GlowCard index={i}>
                      <p className="leading-relaxed text-base">
                        {work.comment}
                      </p>
                    </GlowCard>
                  </div>
                </div>
              </div>

              {/* Desktop layout */}
              <div className="hidden md:block">
                <h1 className="font-semibold text-3xl mb-3">{work.role}</h1>
                <span className="text-highlight font-medium text-base">
                  🗓️ {work.period}
                </span>

                <hr className="my-4 border-0 h-[2px] w-1/3 bg-white/30 rounded-full" />

                {Array.isArray(work.description) ? (
                  <ul className="leading-relaxed text-lg list-disc pl-5 space-y-2">
                    {work.description.map((d, idx) => (
                      <li key={idx}>{d}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="leading-relaxed text-lg">{work.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
