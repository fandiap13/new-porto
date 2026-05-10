"use client";

import { Code, Gauge, LayoutDashboard, Link, Server } from "lucide-react";

const offers = [
  {
    title: "Web Development",
    desc: "Build professional websites that are easy to use and tailored to your business needs.",
    icon: Code,
  },
  {
    title: "Backend Development",
    desc: "Provide secure and reliable server systems that scale with your business.",
    icon: Server,
  },
  {
    title: "UI/UX Animation",
    desc: "Create interactive and engaging user experiences.",
    icon: LayoutDashboard,
  },
  {
    title: "Performance Optimization",
    desc: "Boost app speed and efficiency for smoother performance.",
    icon: Gauge,
  },
  {
    title: "System Integration",
    desc: "Seamlessly connect your app with third-party services and systems.",
    icon: Link,
  },
];

const Showcase = () => {
  return (
    <section id="hero" className="container container-custom py-16 lg:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12">
        {offers.map((offer) => (
          <div
            key={offer.title}
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
      </div>
    </section>
  );
};

export default Showcase;
