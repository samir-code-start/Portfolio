import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import profileImg from '@/images/profile.jpg';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();

  // Scroll-driven transforms for background decorative elements
  const ring1Scale = useTransform(scrollY, [0, 600], [1.1, 0.95]);
  const ring2Scale = useTransform(scrollY, [0, 600], [1.25, 1.05]);
  const ringOpacity = useTransform(scrollY, [0, 500], [1, 0.2]);

  return (
    <section id="hero" className="min-h-[90vh] flex flex-col justify-center items-center relative px-6 pt-12 md:pt-16 overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col items-center text-center max-w-4xl mx-auto -mt-[4vh] md:-mt-[6vh]"
      >
        {/* Badge */}
        <span className="inline-block py-1 px-3 rounded-full border border-[#CABCA1]/10 bg-[#CABCA1]/5 text-[10px] tracking-widest uppercase text-gray-400 mb-8 backdrop-blur-sm">
          Portfolio 2026
        </span>

        {/* Name */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-[#CABCA1] mb-8 leading-[1.1]">
          Samir Gunjite
        </h1>

        {/* Role */}
        <p className="text-gray-400 text-sm md:text-base max-w-lg leading-relaxed mb-16 md:mb-20">
          Digital Experience Designer & Developer specializing in building premium, high-performance websites for modern businesses.
        </p>

        {/* Profile Image with Enhanced Zoom Interaction */}
        <div className="relative mb-20 md:mb-24 group cursor-default">
          {/* Decorative Rings */}
          <motion.div
            style={{ scale: ring1Scale, opacity: ringOpacity }}
            className="absolute inset-0 rounded-full border border-[#CABCA1]/10 scale-110 pointer-events-none"
          />
          <motion.div
            style={{ scale: ring2Scale, opacity: ringOpacity }}
            className="absolute inset-0 rounded-full border border-[#CABCA1]/5 scale-125 pointer-events-none"
          />

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="w-[15rem] h-[15rem] md:w-[24rem] md:h-[24rem] rounded-full overflow-hidden border-2 border-[#CABCA1]/10 relative z-10 transition-colors duration-700 group-hover:border-[#CABCA1]/40 shadow-2xl shadow-black/50"
          >
            <motion.img
              src={profileImg}
              alt="Samir Gunjite"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              className="w-full h-full object-cover origin-center"
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">Explore Work</span>
          <div className="relative">
            <ArrowDown className="w-4 h-4 text-gray-500 animate-bounce" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-[#CABCA1]/20 to-transparent -z-10 mt-6" />
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};