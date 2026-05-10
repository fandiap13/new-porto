"use client";

import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/constants";
import StickyProjectCard from "./StickyProjectCard";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  // // const ref = useRef(null);
  // // const { scrollYProgress } = useScroll({
  // //   target: ref,
  // //   // offset: ["start 0.8", "start 0.2"],
  // //   offset: ["start end", "end start"],
  // //   // "start end" = card masuk viewport
  // //   // "end start" = card keluar viewport
  // // });

  // // // transform opacity dan scale berdasarkan progress scroll
  // // const opacity = useTransform(scrollYProgress, [0.7, 1], [1, 0]); // hilang di akhir
  // // const scale = useTransform(scrollYProgress, [0.7, 1], [1, 0.8]); // mengecil di akhir

  // useEffect(() => {
  //   // Ambil semua elemen .card-wrapper (pembungkus tiap card)
  //   const cardsWrappers = gsap.utils.toArray<HTMLElement>(".card-wrapper");

  //   // Ambil semua elemen .card (isi dari wrapper yang akan dianimasi)
  //   const cards = gsap.utils.toArray<HTMLElement>(".card");

  //   // Loop setiap wrapper + card berdasarkan index
  //   cardsWrappers.forEach((wrapper, i) => {
  //     const card = cards[i];

  //     // Default nilai scale & rotation
  //     let scale = 1,
  //       rotation = 0;

  //     // Jika bukan card terakhir, kecilkan dan beri sedikit rotasi
  //     if (i !== cards.length - 1) {
  //       scale = 0.9 + 0.025 * i; // makin tinggi index makin besar skalanya
  //       rotation = -10; // sedikit miring ke atas
  //     }

  //     // Buat animasi dengan GSAP
  //     gsap.to(card, {
  //       scale, // skala target (mengecil sedikit biar stack efek)
  //       rotationX: rotation, // rotasi X (efek miring 3D)
  //       transformOrigin: "top center", // titik transformasi di atas tengah elemen
  //       ease: "none", // tanpa easing, animasi murni ikut scroll

  //       // Konfigurasi ScrollTrigger
  //       scrollTrigger: {
  //         trigger: wrapper, // elemen yang memicu animasi
  //         start: "top " + (60 + 10 * i), // mulai animasi saat bagian atas wrapper
  //         // menyentuh viewport + offset
  //         end: "bottom 550", // selesai saat bagian bawah wrapper melewati posisi 550px
  //         endTrigger: ".wrapper", // end dihitung relatif ke container .wrapper
  //         scrub: true, // animasi halus mengikuti gerakan scroll
  //         pin: wrapper, // card-wrapper dipin (sticky) selama animasi berjalan
  //         pinSpacing: false, // tidak menambahkan spasi ekstra saat pin
  //         id: String(Number(i + 1)), // id unik untuk debugging/markers
  //         // markers: true, // kalau mau debug, nyalakan markers
  //       },
  //     });
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((t) => t.kill());
  //   };
  // }, []);

  return (
    <section id="work" className="container container-custom py-16 lg:py-28">
      <SectionHeader
        label="My Project"
        title="Turning ideas into seamless and captivating digital experiences."
      />

      <div className="space-y-10 wrapper relative">
        {projects.map((project, projectIndex) => (
          <StickyProjectCard project={project} key={projectIndex} />
        ))}
      </div>
    </section>
  );
};

export default Project;
