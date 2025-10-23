import { LucideIcon } from 'lucide-react';

interface Section {
  id: number;
  title: string;
  icon: LucideIcon;
  color: string;
}

interface WheelProps {
  sections: Section[];
  activeSection: number;
  onSectionChange: (index: number) => void;
}

export function Wheel({ sections, activeSection, onSectionChange }: WheelProps) {
  const rotation = -(activeSection * (360 / sections.length));

  return (
    <div className="relative w-80 h-80 md:w-96 md:h-96">
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div className="relative w-full h-full">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
            <defs>
              <radialGradient id="tireGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#1a1a1a" />
                <stop offset="60%" stopColor="#2d2d2d" />
                <stop offset="80%" stopColor="#0f0f0f" />
                <stop offset="100%" stopColor="#000000" />
              </radialGradient>
              <filter id="tireShadow">
                <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
                <feOffset dx="0" dy="4" result="offsetblur" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.5" />
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <circle
              cx="200"
              cy="200"
              r="190"
              fill="url(#tireGradient)"
              filter="url(#tireShadow)"
              className="animate-pulse"
              style={{ animationDuration: '3s' }}
            />

            <circle cx="200" cy="200" r="180" fill="none" stroke="#ff6b00" strokeWidth="2" opacity="0.3" />
            <circle cx="200" cy="200" r="165" fill="none" stroke="#00d4ff" strokeWidth="1" opacity="0.5" />
            <circle cx="200" cy="200" r="150" fill="none" stroke="#ffd700" strokeWidth="1" opacity="0.4" />

            {[...Array(24)].map((_, i) => {
              const angle = (i * 15 * Math.PI) / 180;
              const x1 = 200 + Math.cos(angle) * 140;
              const y1 = 200 + Math.sin(angle) * 140;
              const x2 = 200 + Math.cos(angle) * 180;
              const y2 = 200 + Math.sin(angle) * 180;
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#444"
                  strokeWidth="2"
                />
              );
            })}

            <circle cx="200" cy="200" r="130" fill="#0a0a0a" />
            <circle cx="200" cy="200" r="125" fill="none" stroke="#ff6b00" strokeWidth="3" />

            {sections.map((section, index) => {
              const angle = (index * (360 / sections.length) * Math.PI) / 180;
              const radius = 100;
              const x = 200 + Math.cos(angle - Math.PI / 2) * radius;
              const y = 200 + Math.sin(angle - Math.PI / 2) * radius;

              return (
                <g key={section.id}>
                  <circle
                    cx={x}
                    cy={y}
                    r="35"
                    fill={section.color}
                    opacity={activeSection === index ? 1 : 0.6}
                    className="transition-all duration-300 cursor-pointer"
                    style={{
                      filter: activeSection === index ? 'drop-shadow(0 0 20px currentColor)' : 'none'
                    }}
                  />
                </g>
              );
            })}

            <circle cx="200" cy="200" r="40" fill="#1a1a1a" stroke="#ff6b00" strokeWidth="4" />
            <circle cx="200" cy="200" r="20" fill="#ff6b00" className="animate-pulse" />
          </svg>

          {sections.map((section, index) => {
            const angle = (index * (360 / sections.length) * Math.PI) / 180;
            const radius = 100;
            const x = 200 + Math.cos(angle - Math.PI / 2) * radius;
            const y = 200 + Math.sin(angle - Math.PI / 2) * radius;
            const Icon = section.icon;

            return (
              <div key={section.id}>
                {/* Label above icon */}
                <div
                  className="absolute text-center transition-all duration-300"
                  style={{
                    left: `${(x / 400) * 100}%`,
                    top: `${((y - 50) / 400) * 100}%`,
                    transform: `translate(-50%, -50%) rotate(-${rotation}deg)`,
                    zIndex: activeSection === index ? 20 : 10
                  }}
                >
                  <p className={`font-bold whitespace-nowrap transition-all duration-300 ${
                    activeSection === index 
                      ? 'text-white text-sm drop-shadow-lg' 
                      : 'text-white/60 text-xs'
                  }`}>
                    {section.title}
                  </p>
                </div>

                {/* Icon button */}
                <button
                  className="absolute transition-all duration-300 hover:scale-110"
                  style={{
                    left: `${(x / 400) * 100}%`,
                    top: `${(y / 400) * 100}%`,
                    transform: `translate(-50%, -50%) rotate(-${rotation}deg)`,
                    zIndex: activeSection === index ? 20 : 10
                  }}
                  onClick={() => onSectionChange(index)}
                  title={section.title}
                >
                  <Icon
                    size={activeSection === index ? 28 : 24}
                    color="white"
                    className="drop-shadow-lg"
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => onSectionChange(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === index ? 'w-8 bg-orange-500' : 'bg-gray-600 hover:bg-gray-400'
            }`}
            aria-label={section.title}
          />
        ))}
      </div>
    </div>
  );
}
