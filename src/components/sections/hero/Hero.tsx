"use client";

import { ButtonSection } from "@/components/buttons/ButtonSection";
import TypingRoleComponent from "./TypingRole";

const Hero = () => {
  return (
    <section
      id="hero"
      className=" container container-custom text-default pt-40 h-screen"
    >
      <div className="w-full grid md:grid-cols-1 lg:grid-cols-[70%_1fr] gap-10">
        <div className="w-full">
          <h4 className="text-lg font-medium mb-3">
            Hi, I'm Fandi Aziz Pratama
          </h4>
          <h1 className="aura-title mb-10">
            Building scalable, high-performance web experiences
          </h1>
          <p className="leading-relaxed text-sm md:text-base lg:text-lg mb-10">
            Frontend-focused web developer based in Indonesia. I build clean,
            responsive, and production-ready web apps using Next.js, React, and
            Laravel — with a strong eye for detail and user experience.
          </p>

          <div>
            <TypingRoleComponent />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-5 mt-16">
        <ButtonSection>Download CV</ButtonSection>
        <ButtonSection className="cta-button-outline">My Project</ButtonSection>
      </div>
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
