"use client";

import FadeUpStagger from "@/components/animations/FadeUpStagger";
import { Code, Cpu, Database, Server, Smartphone } from "lucide-react";

const offers = [
  {
    title: "Frontend Development",
    desc: "Build responsive, production-ready interfaces with React and Next.js — focused on performance and maintainability.",
    icon: Code,
  },
  {
    title: "Backend & REST API",
    desc: "Develop REST APIs and web systems with Laravel, CodeIgniter, and Express.js to keep your data flowing reliably.",
    icon: Server,
  },
  {
    title: "Mobile Development",
    desc: "Craft modern, responsive cross-platform mobile apps with Flutter, from prototype to working product.",
    icon: Smartphone,
  },
  {
    title: "Database Design",
    desc: "Structure and manage MySQL and PostgreSQL databases that stay stable under concurrent multi-user access.",
    icon: Database,
  },
  // {
  //   title: "UI/UX Design",
  //   desc: "Design clean, usable interfaces in Figma before a single line of code is written.",
  //   icon: PenTool,
  // },
  {
    title: "IoT Integration",
    desc: "Connect hardware to software — Arduino, Blynk, and BLE device data streamed straight into your app.",
    icon: Cpu,
  },
];

const Showcase = () => {
  return (
    <section id="hero" className="container container-custom py-16 lg:py-28">
      <FadeUpStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12">
        {offers.map((offer, i) => (
          <div
            key={i}
            className="border-[.5px] border-default/20 rounded-xl px-8 lg:px-12 py-6 lg:py-10 transform hover:-translate-y-2 hover:border-default/40 shadow shadow-white/15 hover:shadow-lg transition duration-300"
          >
            <div className="mb-6">
              <offer.icon className="size-10" />
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-2xl bg-gradient-to-r from-default to-white-50 bg-clip-text text-transparent">
                {offer.title}
              </h3>
              <p className="text-text-muted text-base md:text-lg">
                {offer.desc}
              </p>
            </div>
          </div>
        ))}
      </FadeUpStagger>
    </section>
  );
};

export default Showcase;
