"use client";

import {
  Boxes,
  Cloud,
  Database,
  Layers,
  LucideIcon,
  Palette,
  Terminal,
  Zap,
} from "lucide-react";

const techStack = [
  { name: "Next.js", icon: Boxes },
  { name: "React", icon: Layers },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Framer Motion", icon: Zap },
  { name: "Laravel", icon: Terminal },
  { name: "Express.js", icon: Cloud },
  { name: "PostgreSQL", icon: Database },
];

const LogoIcon = ({ Icon, name }: { Icon: LucideIcon; name: string }) => {
  return (
    <div className="flex items-center gap-2 md:gap-3 p-2 md:p-4 transition text-text-muted/90 marquee-item whitespace-nowrap">
      <Icon className="w-5 h-5 md:w-9 md:h-9 text-hikPrimaryColor" />
      <span className="font-medium text-sm md:text-lg">{name}</span>
    </div>
  );
};

const ShowTech = () => {
  return (
    <section id="skills" className="container container-custom lg:py-28">
      <div className="marquee h-16 md:h-52 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {" "}
        <div className="marquee-box">
          {techStack.map((tech, i) => (
            <LogoIcon Icon={tech.icon} name={tech.name} key={i} />
          ))}
          {techStack.map((tech, i) => (
            <LogoIcon Icon={tech.icon} name={tech.name} key={i} />
          ))}
          {techStack.map((tech, i) => (
            <LogoIcon Icon={tech.icon} name={tech.name} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowTech;
