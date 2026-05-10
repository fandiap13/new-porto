// "use client";

// import SectionHeader from "@/components/SectionHeader";
// import GlowCard from "@/components/cards/GlowCard";
// import { works } from "@/constants";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { LogOut } from "lucide-react";
// import { useRef } from "react";

// gsap.registerPlugin(ScrollTrigger);

// const Work = () => {
//   const scope = useRef<HTMLDivElement>(null);

//   // useGSAP(
//   //   () => {
//   //     // 1) Kartu kiri: slide-in dari kiri saat 80% viewport
//   //     gsap.utils.toArray<HTMLElement>(".timeline-card").forEach((card) => {
//   //       gsap.from(card, {
//   //         x: -60,
//   //         opacity: 0,
//   //         duration: 0.9,
//   //         ease: "power2.out",
//   //         scrollTrigger: {
//   //           trigger: card,
//   //           start: "top 10%",
//   //           once: false,
//   //         },
//   //       });
//   //     });

//   //     // 2) Garis timeline tengah: grow (scaleY 0 -> 1) dengan scrub
//   //     gsap.fromTo(
//   //       ".timeline",
//   //       { scaleY: 0, transformOrigin: "top center" },
//   //       {
//   //         scaleY: 1,
//   //         ease: "none",
//   //         scrollTrigger: {
//   //           trigger: ".timeline",
//   //           start: "top 10%",
//   //           end: "bottom 20%",
//   //           scrub: true,
//   //         },
//   //       }
//   //     );

//   //     // 3) Kolom kanan (teks): fade + slide dari kanan saat 60%
//   //     gsap.utils.toArray<HTMLElement>(".expText").forEach((el) => {
//   //       gsap.from(el, {
//   //         x: 60,
//   //         opacity: 0,
//   //         duration: 0.9,
//   //         ease: "power2.out",
//   //         scrollTrigger: {
//   //           trigger: el,
//   //           start: "top 10%",
//   //           once: false,
//   //         },
//   //       });
//   //     });
//   //   },
//   //   { scope }
//   // );

//   return (
//     <section id="hero" className="container container-custom py-16 lg:py-28">
//       <SectionHeader
//         label="My Career Overview"
//         title="Professional Work Experience."
//       />

//       <div className="flex flex-col" ref={scope}>
//         {works.map((work, i) => (
//           <div
//             key={work.company}
//             className="grid grid-cols-1 md:grid-cols-[1fr_fit-content(100%)_1fr]"
//           >
//             <div className="pb-28 px-5">
//               <div className="timeline-card">
//                 <GlowCard index={i}>
//                   <p className="leading-relaxed text-lg">{work.comment}</p>
//                 </GlowCard>
//               </div>
//             </div>

//             <div className="w-full h-full px-5 relative">
//               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-full bg-transparent" />

//               <div className="timeline absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-full bg-white -z-10" />

//               <div className="w-full h-full flex flex-col items-center">
//                 <div className="size-20 rounded-full border border-default/25 flex items-center justify-center bg-black">
//                   <div className="size-12 rounded-full flex items-center justify-center bg-primary">
//                     <LogOut className="size-5" />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="pb-28 px-10 expText">
//               <div>
//                 <h1 className="font-semibold text-3xl mb-3">{work.role}</h1>
//                 <span className="text-highlight font-medium text-base">
//                   🗓️ {work.period}
//                 </span>
//               </div>

//               <hr className="my-4 border-0 h-[2px] w-1/3 bg-white/30 rounded-full" />

//               {Array.isArray(work.description) ? (
//                 <ul className="leading-relaxed text-lg list-disc pl-5 space-y-2">
//                   {work.description.map((d, idx) => (
//                     <li key={idx}>{d}</li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="leading-relaxed text-lg">{work.description}</p>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Work;
