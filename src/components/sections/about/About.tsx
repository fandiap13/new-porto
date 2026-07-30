"use client";

import SectionHeader from "@/components/SectionHeader";
import FadeUpStagger from "@/components/animations/FadeUpStagger";

const About = () => {
  return (
    <section id="about" className="container container-custom py-16 lg:py-28">
      <SectionHeader label="About Me" title="Turning ideas into real products." />

      <FadeUpStagger className="w-full mx-auto md:max-w-4xl space-y-6">
        <p className="leading-relaxed text-base md:text-lg lg:text-xl text-text-muted">
          I'm{" "}
          <span className="text-default font-medium">Fandi Aziz Pratama</span>, a
          Web Developer focused on building efficient web applications with
          Laravel, Next.js, and Express.js. I also have experience crafting
          modern, responsive mobile apps with Flutter.
        </p>
        <p className="leading-relaxed text-base md:text-lg lg:text-xl text-text-muted">
          With a strong drive to keep learning and a firm commitment to quality,
          I aim to deliver innovative solutions in every project I take on. To
          me, every challenge is a chance to grow and to create digital products
          that make a real impact.
        </p>
      </FadeUpStagger>
    </section>
  );
};

export default About;
