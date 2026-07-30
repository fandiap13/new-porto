"use client";

import SectionHeader from "@/components/SectionHeader";
import FadeUpStagger from "@/components/animations/FadeUpStagger";
import { educations } from "@/constants";
import { Award, CalendarDays, GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section
      id="education"
      className="container container-custom py-16 lg:py-28"
    >
      <SectionHeader
        label="My Academic Background"
        title="Education & Foundation."
      />

      <FadeUpStagger className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full mx-auto md:max-w-4xl">
        {educations.map((edu) => (
          <div
            key={edu.institution}
            className="h-full border-[.5px] border-default/20 rounded-xl px-8 lg:px-10 py-6 lg:py-8 transform hover:-translate-y-2 hover:border-default/40 shadow shadow-white/15 hover:shadow-lg transition duration-300"
          >
            <div className="mb-6">
              <GraduationCap className="size-10" />
            </div>

            <h3 className="font-semibold text-xl lg:text-2xl bg-gradient-to-r from-default to-white-50 bg-clip-text text-transparent mb-2">
              {edu.institution}
            </h3>

            <p className="text-text-muted text-base md:text-lg mb-4">
              {edu.degree}
            </p>

            <hr className="my-4 border-0 h-[2px] w-1/3 bg-white/30 rounded-full" />

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="flex items-center gap-2 text-highlight font-medium text-sm lg:text-lg">
                <CalendarDays className="size-4 lg:size-6 shrink-0" />
                {edu.period}
              </span>
              {edu.detail && (
                <span className="flex items-center gap-2 text-primary font-medium text-sm lg:text-lg">
                  <Award className="size-4 lg:size-6 shrink-0" />
                  {edu.detail}
                </span>
              )}
            </div>
          </div>
        ))}
      </FadeUpStagger>
    </section>
  );
};

export default Education;
