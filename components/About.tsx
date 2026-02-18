import React from 'react';
import { motion } from 'framer-motion';
import { Stat } from '../types';
import { Infinity } from 'lucide-react';

const stats: Stat[] = [
  { label: 'Experience', value: 'Fresher' },
  { label: 'Projects', value: '5+' },
  { label: 'Status', value: 'Available' },
  { label: 'Coffee', value: '∞' },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="pt-12 pb-8 md:pb-12 px-6 md:px-12 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-center mb-2"
          >
            About <span className="text-gray-500 italic">Me</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#121214] border border-[#CABCA1]/5 rounded-2xl p-8 md:p-12 relative overflow-hidden group hover:border-[#CABCA1]/10 transition-colors duration-500"
        >
          {/* Subtle gradient glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#CABCA1]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <h3 className="text-2xl md:text-3xl font-serif text-[#CABCA1] mb-6 leading-tight">
            "Empowering Local Businesses Through Modern Web Solutions"
          </h3>

          <div className="space-y-6 text-gray-400 text-sm md:text-base leading-relaxed mb-12 border-l border-[#CABCA1]/10 pl-6">
            <p className="hidden md:block">
              I believe that every local business deserves a digital presence as strong as the reputation they've built on the ground. As a web developer and AIML student at SPPU, I am dedicated to helping our local shops and services transition into the digital age.
            </p>
            <p>
              My goal is simple: to build fast, professional websites that turn neighbors into lifelong customers. Whether you're a family-owned restaurant or a local service provider, I'm here to make sure your brand is seen and heard online.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-[#CABCA1]/5">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-xl md:text-2xl font-serif text-[#CABCA1] mb-1 flex items-center gap-1">
                  {stat.label === 'Coffee' ? <Infinity className="w-6 h-6" /> : stat.value}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-gray-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};