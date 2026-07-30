"use client";

import { ButtonSection } from "@/components/buttons/ButtonSection";
import { motion, useReducedMotion } from "framer-motion";
import { useRouter } from "next/navigation";
import TypingRoleComponent from "./TypingRole";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  // stagger manual: tiap elemen dapat delay bertingkat biar masuknya berurutan
  const item = (delay: number) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.8,
      delay: shouldReduceMotion ? 0 : delay,
      ease: [0.19, 1, 0.22, 1] as const,
    },
  });

  const router = useRouter();

  return (
    <section
      id="hero"
      className=" container container-custom text-default pt-40 h-screen"
    >
      <div className="w-full grid md:grid-cols-1 lg:grid-cols-[70%_1fr] gap-10">
        <div className="w-full">
          <motion.h4 {...item(0.5)} className="text-lg font-medium mb-3">
            Hi, I'm Fandi Aziz Pratama
          </motion.h4>
          <motion.h1 {...item(0.65)} className="aura-title mb-10">
            Building scalable, high-performance web experiences
          </motion.h1>
          <motion.p
            {...item(0.8)}
            className="leading-relaxed text-sm md:text-base lg:text-lg mb-10"
          >
            Frontend-focused web developer based in Indonesia. I build clean,
            responsive, and production-ready web apps using Next.js, React, and
            Laravel — with a strong eye for detail and user experience.
          </motion.p>

          <motion.div {...item(0.95)}>
            <TypingRoleComponent />
          </motion.div>
        </div>
      </div>

      <motion.div {...item(1.1)} className="flex items-center gap-5 mt-16">
        <ButtonSection
          onClick={() => {
            window.open("/docs/CV_Fandi Aziz Pratama.pdf", "_blank");
          }}
        >
          Download CV
        </ButtonSection>
        <ButtonSection className="cta-button-outline">My Project</ButtonSection>
      </motion.div>
    </section>
  );
};

export default Hero;

//  {/* GLOW 3 WARNA */}
//       <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
//         {/* Pink */}
//         <span
//           className="absolute -top-24 -left-28 size-[520px] rounded-full
//                          bg-[radial-gradient(closest-side,rgba(250,113,197,1),transparent_70%)]
//                          blur-3xl md:blur-[120px] [animation:blob_16s_ease-in-out_infinite]"
//         />
//         {/* Indigo */}
//         <span
//           className="absolute top-1/3 -right-24 size-[560px] rounded-full
//                          bg-[radial-gradient(closest-side,rgba(99,102,241,1),transparent_70%)]
//                          blur-3xl md:blur-[120px] [animation:blob_16s_ease-in-out_infinite]"
//         />
//         {/* Emerald */}
//         <span
//           className="absolute -bottom-24 left-1/3 size-[640px] rounded-full
//                          bg-[radial-gradient(closest-side,rgba(16,185,129,1),transparent_70%)]
//                          blur-3xl md:blur-[120px] [animation:blob_16s_ease-in-out_infinite]"
//         />

//         {/* Overlay gradasi gelap supaya teks tetap kontras */}
//         <span className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/0 to-slate-900/60" />
//       </div>
