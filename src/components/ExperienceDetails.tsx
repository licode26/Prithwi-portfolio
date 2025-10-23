import React from 'react';
import { Briefcase } from 'lucide-react';

export type Experience = {
  role: string;
  company: string;
  duration: string;
  points: string[];
};

type ExperienceDetailsProps = {
  title?: string;
  subtitle?: string;
  experiences: Experience[];
};

export const ExperienceDetails: React.FC<ExperienceDetailsProps> = ({
  title = 'Experience',
  subtitle = "Where I've Worked",
  experiences,
}) => {
  return (
    <section id="experience" className="w-full py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-3">
            <span className="bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          {subtitle && (
            <p className="text-lg text-white/60 font-mono">{subtitle}</p>
          )}
        </header>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative p-6 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-green-500/30 hover:bg-white/5"
            >
              <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-3">
                <h3 className="text-2xl font-bold text-green-400">{exp.role}</h3>
                <p className="text-sm text-white/50 font-mono mt-1 sm:mt-0">{exp.duration}</p>
              </div>
              <p className="text-lg text-white/80 mb-4 font-semibold">{exp.company}</p>
              <ul className="space-y-2 list-disc list-inside">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-white/70 leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
              <div className="absolute top-4 right-4 text-green-500/20">
                <Briefcase size={28} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};