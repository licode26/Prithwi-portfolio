import React from 'react';
import { Instagram, Linkedin, Mail, Phone, MapPin, Github } from 'lucide-react';

// Updated props for the main component
interface PersonalDataProps {
  instagram: string;
  linkedIn: string;
  github: string;
  email: string;
  phone: string;
  address: string;
  university: string;
}

// New, more stylish DetailItem component
const DetailItem: React.FC<{ icon: React.ElementType; href: string; title: string; value: string }> = ({ icon: Icon, href, title, value }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-300 overflow-hidden hover:border-cyan-500/50"
  >
    {/* Glowing effect on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    <div className="relative z-10 flex flex-col items-center text-center">
      {/* Icon container */}
      <div className="mb-4 p-3 rounded-full bg-gradient-to-br from-white/10 to-transparent border border-white/10 group-hover:border-cyan-500/50 transition-all duration-300">
        <Icon className="w-8 h-8 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
      </div>
      
      {/* Title */}
      <h4 className="text-lg font-bold text-white">{title}</h4>
      
      {/* Value */}
      <p className="text-sm text-white/60 truncate w-full">{value}</p>
    </div>
  </a>
);

export const PersonalData: React.FC<PersonalDataProps> = ({
  instagram,
  linkedIn,
  github,
  email,
  phone,
  address,
}) => {
  // Helper function to extract username from URL for cleaner display
  const getUsername = (url: string) => {
    try {
      const path = new URL(url).pathname;
      // Handles formats like /username/ or /in/username/
      return path.split('/').filter(Boolean).pop() || url;
    } catch {
      return url;
    }
  };

  return (
    <section id="personal-data" className="w-full py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-3">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-lg text-white/60 font-mono">My digital footprint and contact details</p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DetailItem icon={Github} href={github} title="GitHub" value={getUsername(github)} />
          <DetailItem icon={Linkedin} href={linkedIn} title="LinkedIn" value={getUsername(linkedIn)} />
          <DetailItem icon={Instagram} href={instagram} title="Instagram" value={getUsername(instagram)} />
          <DetailItem icon={Mail} href={`mailto:${email}`} title="Email" value={email} />
          <DetailItem icon={Phone} href={`tel:${phone}`} title="Phone" value={phone} />
          <DetailItem icon={MapPin} href={address} title="Location" value="Asika, Odisha" />
        </div>
      </div>
    </section>
  );
};