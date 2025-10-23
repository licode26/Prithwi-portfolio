import React from 'react';
import { GraduationCap } from 'lucide-react';

export type Education = {
  degree: string;
  institution: string;
  year: string;
  description?: string;
  gpa?: string;
};

type EducationDetailsProps = {
  title?: string;
  subtitle?: string;
  educations: Education[];
};

export const EducationDetails: React.FC<EducationDetailsProps> = ({ 
  title = 'Education', 
  subtitle = 'My Academic Background',
  educations 
}) => {
  return (
    <section id="education" className="w-full py-24 px-4 bg-gradient-to-b from-transparent via-black/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-3">
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-fuchsia-600 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          {subtitle && (
            <p className="text-lg text-white/60 font-mono">{subtitle}</p>
          )}
        </header>

        <div className="relative">
          {/* Central Timeline */}
          <div 
            className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-orange-500/20 via-pink-500/20 to-fuchsia-600/20"
            aria-hidden="true"
          />

          {educations.map((edu, index) => (
            <div 
              key={index} 
              // Updated logic: start on the left, then alternate
              className={`relative flex items-center mb-16 w-full ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
            >
              {/* Content Card */}
              <div className={`w-1/2 ${index % 2 !== 0 ? 'pl-12' : 'pr-12'}`}>
                <div className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-orange-500/50 hover:bg-white/5 hover:shadow-2xl hover:shadow-orange-500/10">
                  <div className="relative z-10">
                    <p className="text-lg font-bold text-orange-400 mb-2">{edu.year}</p>
                    <h3 className="text-2xl font-extrabold text-white mb-2">{edu.degree}</h3>
                    <p className="text-md text-white/70 mb-4 font-semibold">{edu.institution}</p>
                    {edu.gpa && (
                      <p className="text-sm text-white/60 mb-3 font-mono">
                        <span className="font-bold">GPA:</span> {edu.gpa}
                      </p>
                    )}
                    {edu.description && (
                      <p className="text-white/70 leading-relaxed">{edu.description}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Timeline Node */}
              <div className="absolute left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 border-2 border-orange-500 shadow-lg">
                  <GraduationCap className="h-5 w-5 text-orange-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};