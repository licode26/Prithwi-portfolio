import { LucideIcon, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Section {
  id: number;
  title: string;
  icon: LucideIcon;
  color: string;
  content: {
    heading: string;
    items: string[];
  };
}

interface ContentSectionProps {
  section: Section;
}

export function ContentSection({ section }: ContentSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, [section.id]);

  return (
    <div
      className={`transform transition-all duration-700 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
      }`}
    >
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-10 shadow-2xl">
        {/* Header section has been removed */}

        <div className="space-y-4">
          {section.content.items.map((item, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 group transition-all duration-300 transform hover:translate-x-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{
                transitionDelay: `${index * 100 + 200}ms`
              }}
            >
              <ChevronRight
                size={20}
                className="mt-1 flex-shrink-0 transition-colors duration-300"
                style={{ color: section.color }}
              />
              <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                {item}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-8 h-1 rounded-full transition-all duration-700"
          style={{
            background: `linear-gradient(90deg, ${section.color} 0%, transparent 100%)`,
            width: isVisible ? '100%' : '0%'
          }}
        ></div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2 text-gray-500 text-xs font-mono">
        <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
        <span>CLICK WHEEL ICONS TO NAVIGATE</span>
        <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
      </div>
    </div>
  );
}
