import React from 'react';
import { Linkedin, Github, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-[#CABCA1]/5 bg-[#0b0b0c]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Socials */}
        <div className="flex items-center space-x-6">
          <a href="https://www.linkedin.com/in/samir-gunjite-5a1621388/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#CABCA1] transition-colors">
            <Linkedin className="w-4 h-4" />
            <span className="hidden md:inline">LinkedIn</span>
          </a>
          <a href="https://github.com/samir-code-start" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#CABCA1] transition-colors">
            <Github className="w-4 h-4" />
            <span className="hidden md:inline">GitHub</span>
          </a>
          <a href="https://www.instagram.com/sam.irr_22/#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#CABCA1] transition-colors">
            <Instagram className="w-4 h-4" />
            <span className="hidden md:inline">Instagram</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-600">
          © 2026 Samir Gunjite. All rights reserved.
        </div>
      </div>
    </footer>
  );
};