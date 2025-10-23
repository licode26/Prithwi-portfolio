import React from 'react';
import { Trophy } from 'lucide-react';

export type Achievement = {
  title: string;
  description: string;
  year: string;
};

type AchievementDetailsProps = {
  title?: string;
  subtitle?: string;
  achievements: Achievement[];
};

export const AchievementDetails: React.FC<AchievementDetailsProps> = ({ 
  title = 'Achievements', 
  subtitle = 'My Awards & Recognitions',
  achievements 
}) => {
  return (
    <section id="achievements" className="w-full py-24 px-4 bg-gradient-to-b from-transparent via-black/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-3">
            <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
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
            className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-yellow-400/20 via-amber-500/20 to-orange-500/20"
            aria-hidden="true"
          />

          {achievements.map((ach, index) => (
            <div 
              key={index} 
              className={`relative flex items-center mb-16 w-full ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
            >
              {/* Content Card */}
              <div className={`w-1/2 ${index % 2 !== 0 ? 'pl-12' : 'pr-12'}`}>
                <div className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-yellow-500/50 hover:bg-white/5 hover:shadow-2xl hover:shadow-yellow-500/10">
                  <div className="relative z-10">
                    <p className="text-lg font-bold text-yellow-400 mb-2">{ach.year}</p>
                    <h3 className="text-2xl font-extrabold text-white mb-2">{ach.title}</h3>
                    <p className="text-white/70 leading-relaxed">{ach.description}</p>
                  </div>
                </div>
              </div>

              {/* Timeline Node */}
              <div className="absolute left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 border-2 border-yellow-500 shadow-lg">
                  <Trophy className="h-5 w-5 text-yellow-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};