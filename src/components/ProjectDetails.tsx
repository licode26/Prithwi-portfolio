import React from 'react';
import { Code, ExternalLink } from 'lucide-react';

export type Project = {
  title: string;
  technologies: string;
  year: string;
  description?: string;
  link?: string;
};

type ProjectDetailsProps = {
  title?: string;
  subtitle?: string;
  projects: Project[];
};

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ 
  title = 'Projects', 
  subtitle = 'My Code & Creations',
  projects 
}) => {
  return (
    <section id="projects" className="w-full py-24 px-4 bg-gradient-to-b from-transparent via-black/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-3">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
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
            className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-cyan-500/20 via-blue-500/20 to-indigo-600/20"
            aria-hidden="true"
          />

          {projects.map((proj, index) => (
            <div 
              key={index} 
              // Alternating layout logic
              className={`relative flex items-center mb-16 w-full ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
            >
              {/* Content Card */}
              <div className={`w-1/2 ${index % 2 !== 0 ? 'pl-12' : 'pr-12'}`}>
                <div className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50 hover:bg-white/5 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="relative z-10">
                    <p className="text-lg font-bold text-cyan-400 mb-2">{proj.year}</p>
                    <h3 className="text-2xl font-extrabold text-white mb-2">{proj.title}</h3>
                    <p className="text-md text-white/70 mb-4 font-semibold font-mono">{proj.technologies}</p>
                    {proj.description && (
                      <p className="text-white/70 leading-relaxed mb-4">{proj.description}</p>
                    )}
                    {proj.link && (
                      <a 
                        href={proj.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        View Project <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Timeline Node */}
              <div className="absolute left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 border-2 border-cyan-500 shadow-lg">
                  <Code className="h-5 w-5 text-cyan-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};