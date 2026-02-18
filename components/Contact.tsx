import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="contact" className="py-32 px-6 flex flex-col items-center justify-center relative overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CABCA1]/5 rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <motion.h2 
          variants={itemVariants}
          className="font-serif text-6xl md:text-8xl lg:text-9xl text-[#CABCA1] mb-10 tracking-tight"
        >
          Have an idea?
        </motion.h2>
        
        <motion.p 
          variants={itemVariants}
          className="text-secondary text-lg md:text-xl font-normal leading-relaxed mb-14 max-w-2xl mx-auto"
        >
          Let's build something extraordinary together. I'm available for freelance projects and open to new opportunities.
        </motion.p>

        <motion.div variants={itemVariants}>
          <a 
            href="mailto:hello@samir.com" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#CABCA1] text-black rounded-full text-lg font-medium hover:bg-[#d8cbb3] transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            Start a Conversation <ArrowUpRight className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};