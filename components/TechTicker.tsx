import React from 'react';
import { motion } from 'framer-motion';

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", 
  "MongoDB", "GraphQL", "Docker", "AWS", "Tailwind", "Python", "Go"
];

export const TechTicker: React.FC = () => {
  // Duplicate the array to ensure seamless infinite scroll
  const items = [...techStack, ...techStack, ...techStack];

  return (
    <div className="w-full py-8 bg-background relative overflow-hidden flex items-center border-y border-[#CABCA1]/5">
      {/* Gradient Masks for smooth fading at edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap gap-12 md:gap-24"
        animate={{
          x: ["0%", "-33.33%"],
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {items.map((tech, index) => (
          <div key={index} className="flex items-center gap-6 md:gap-12">
            <span className="text-lg md:text-2xl font-serif tracking-widest uppercase text-gray-500 hover:text-[#CABCA1] transition-colors duration-500 cursor-default">
              {tech}
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#CABCA1]/20" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};