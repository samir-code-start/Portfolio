import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-background/80 backdrop-blur-md border-b border-[#CABCA1]/5 py-4'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-serif font-bold tracking-tighter text-[#CABCA1] z-50 inline-block"
        >
          SG.
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {['Services', 'Work', 'About', 'Blog'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item === 'Blog' ? 'hero' : item.toLowerCase())}
              className="text-sm font-medium text-gray-400 hover:text-[#CABCA1] transition-colors duration-200"
            >
              {item}
            </button>
          ))}
        </div>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/919226347261"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-[#CABCA1] text-black font-medium text-sm hover:bg-[#d8cbb3] transition-colors duration-200 inline-block text-center"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Nav Actions */}
        <div className="flex md:hidden items-center space-x-5">
          <button
            onClick={() => scrollToSection('services')}
            className="text-sm font-medium text-gray-400 hover:text-[#CABCA1] transition-colors duration-200"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('work')}
            className="text-sm font-medium text-gray-400 hover:text-[#CABCA1] transition-colors duration-200"
          >
            Work
          </button>
          <a
            href="https://wa.me/919226347261"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-[#CABCA1] text-black font-medium text-xs hover:bg-[#d8cbb3] transition-colors duration-200 inline-block text-center"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </motion.nav>
  );
};