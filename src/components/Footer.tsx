import React from 'react';
import { Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900/50 border-t border-white/10 py-8 px-4 mt-24">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3">
          Let's Build Something Amazing
        </h3>
        <p className="text-white/60 font-mono mb-6">
          For project inquiries or collaborations, please feel free to reach out.
        </p>
        <div className="flex justify-center items-center flex-wrap gap-6">
          <a 
            href="mailto:prithwi.vibecode26@gmail.com" 
            className="flex items-center gap-2 text-white/80 hover:text-cyan-400 transition-colors"
          >
            <Mail size={18} />
            prithwi.vibecode26@gmail.com
          </a>
          <a 
            href="tel:+91-7749929725" 
            className="flex items-center gap-2 text-white/80 hover:text-cyan-400 transition-colors"
          >
            <Phone size={18} />
            +91-7749929725
          </a>
        </div>
        <div className="mt-8 text-sm text-white/40">
          &copy; {new Date().getFullYear()} Prithwiraj Charchi. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};