import { Zap } from 'lucide-react';

interface HeroProps {
  sections?: Array<{ id: number; title: string }>;
  onSectionClick?: (index: number) => void;
}

export function Hero({ sections = [], onSectionClick }: HeroProps): JSX.Element {
  // The internal handleHeaderClick function is removed as we now use the onSectionClick prop.

  return (
    <div className="relative overflow-hidden">
      {/* Navigation Header */}
      {sections.length > 0 && (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-gray-900 via-gray-900/80 to-transparent backdrop-blur-sm border-b border-white/5">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-black bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                PRITTHWIRAJ CHARCHI
              </div>
              <div className="flex gap-1 md:gap-2 flex-wrap justify-end">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    // This now calls the function passed from App.tsx
                    onClick={() => onSectionClick?.(section.id)}
                    className="px-3 md:px-4 py-2 text-xs md:text-sm font-semibold text-white/80 hover:text-white transition-all duration-300 hover:bg-white/10 rounded-lg border border-transparent hover:border-orange-500/50"
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>
      )}

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-32 pb-10">
        {/* Glowing Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 rounded-full opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-orange-500 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D5603AQFpq_sz6_IjVA/profile-displayphoto-crop_800_800/B56ZoC8yWFI8AI-/0/1760986081834?e=1762992000&v=beta&t=Vet_d-01a76t_bUNDITk8fNc0_6F_DxmQ_tDfpaSUBE"
                    alt="Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center animate-pulse shadow-xl">
                  <Zap className="text-white" size={36} />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left space-y-6">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-orange-500"></div>
                <Zap className="text-orange-500 animate-pulse" size={32} />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-orange-500"></div>
              </div>

              <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
                <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent animate-gradient">
                  PRITHIRAJ CHARCHI
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent animate-gradient">
                  FULL STACK / ML
                </span>
                <br />
                <span className="text-white drop-shadow-2xl">DEVELOPER</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl">
                Racing through code at{' '}
                <span className="text-cyan-400 font-semibold">high speed</span>
                <br />
                Building tomorrow&apos;s technology{' '}
                <span className="text-orange-400 font-semibold">today</span>
              </p>

              <div className="flex items-center justify-center lg:justify-start gap-2 text-orange-500 text-sm font-mono">
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