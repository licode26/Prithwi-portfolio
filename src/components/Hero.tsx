import { Zap, Menu, X } from 'lucide-react';
import { useState } from 'react';
import profileImage from '../assets/1760986081834.jpeg';

interface HeroProps {
  sections?: Array<{ id: number; title: string }>;
  onSectionClick?: (index: number) => void;
}

export function Hero({ sections = [], onSectionClick }: HeroProps): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative overflow-hidden">
      {/* Navigation Header */}
      {sections.length > 0 && (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-gray-900 via-gray-900/80 to-transparent backdrop-blur-sm border-b border-white/5">
          <div className="container mx-auto px-2 sm:px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="text-lg md:text-2xl font-black bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                PRITHWIRAJ CHARCHI
              </div>

              {/* Hamburger Menu Button */}
              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex gap-1 md:gap-2 flex-wrap justify-end">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => onSectionClick?.(section.id)}
                    className="px-3 md:px-4 py-2 text-xs md:text-sm font-semibold text-white/80 hover:text-white transition-all duration-300 hover:bg-white/10 rounded-lg border border-transparent hover:border-orange-500/50"
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-900/90 backdrop-blur-sm">
              <div className="container mx-auto px-4 py-4 flex flex-col items-center gap-4">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      onSectionClick?.(section.id);
                      setIsMenuOpen(false); // Close menu on click
                    }}
                    className="px-4 py-2 text-sm font-semibold text-white/80 hover:text-white transition-all duration-300 w-full text-center hover:bg-white/10 rounded-lg"
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>
      )}

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-24 md:pt-32 pb-10">
        {/* Glowing Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 rounded-full opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-orange-500 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={profileImage}
                    alt="Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center animate-pulse shadow-xl">
                  <Zap className="text-white h-7 w-7 sm:h-9 sm:w-9" />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-orange-500"></div>
                <Zap className="text-orange-500 animate-pulse" size={32} />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-orange-500"></div>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter">
                <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent animate-gradient">
                  PRITHWIRAJ CHARCHI
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent animate-gradient">
                  FULL STACK / ML
                </span>
                <br />
                <span className="text-white drop-shadow-2xl">DEVELOPER</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-light max-w-2xl">
                Racing through code at{' '}
                <span className="text-cyan-400 font-semibold">high speed</span>
                <br />
                Building tomorrow&apos;s technology{' '}
                <span className="text-orange-400 font-semibold">today</span>
              </p>

              <div className="flex items-center justify-center lg:justify-start gap-2 text-orange-500 text-xs sm:text-sm font-mono">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span>ROTATE THE WHEEL TO EXPLORE</span>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
      </div>
    </div>
  );
}