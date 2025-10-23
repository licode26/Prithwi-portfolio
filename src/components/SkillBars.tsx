import React from 'react';

export type Skill = {
  name: string;
  level: number; // 0-100
};

type SkillBarsProps = {
  title?: string;
  subtitle?: string;
  skills: Skill[];
};

export const SkillBars: React.FC<SkillBarsProps> = ({ title = 'Skills', subtitle = 'What I work with', skills }) => {
  return (
    <section className="w-full py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-fuchsia-600 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          {subtitle && (
            <p className="text-lg text-white/60">{subtitle}</p>
          )}
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((s) => (
            <div key={s.name} className="group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white/95 font-semibold text-lg">{s.name}</span>
                <span className="text-transparent bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text font-bold text-xl">
                  {s.level}%
                </span>
              </div>
              
              {/* Outer container with glow effect */}
              <div className="relative h-4 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 overflow-hidden border border-white/5 shadow-lg">
                {/* Inner animated bar */}
                <div
                  className="h-full rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-fuchsia-600 transition-all duration-1200 ease-out relative"
                  style={{ 
                    width: `${Math.min(Math.max(s.level, 0), 100)}%`,
                    boxShadow: `0 0 20px rgba(255, 100, 150, 0.6), inset 0 0 10px rgba(255, 255, 255, 0.2)`
                  }}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse rounded-full" />
                </div>
                
                {/* Background glow */}
                <div 
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(ellipse at ${Math.min(Math.max(s.level, 0), 100)}% 50%, rgba(255, 100, 150, 0.3) 0%, transparent 70%)`,
                  }}
                />
              </div>

              {/* Skill level indicator */}
              <div className="mt-2 flex justify-between text-xs text-white/40">
                <span>Beginner</span>
                <span>Expert</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-white/50">
          <p>Hover over the bars to see the enhanced glow effect</p>
        </div>
      </div>
    </section>
  );
};
