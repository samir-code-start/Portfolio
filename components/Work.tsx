import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import ecommerceImg from '@/images/ecommerce-website.png';
import financeImg from '@/images/finance-tracker.png';
import restaurantImg from '@/images/restaurant-website.png';
import cafeImg from '@/images/cafe-website.png';

const projects: Project[] = [
  {
    id: 'ecommerce',
    title: 'Comfort',
    category: 'E-Commerce Platform',
    imageUrl: ecommerceImg, // Dark moody vibe
    link: "https://e-commerce-website-iota-flame-35.vercel.app/"
  },
  {
    id: 'finance',
    title: 'Finance Tracker',
    category: 'Web App / Dashboard',
    imageUrl: financeImg, // Clean workspace
    link: "https://finance-tracker-rust-eight.vercel.app/"
  },
  {
    id: 'restaurant',
    title: 'Family Restaurant',
    category: 'Brand Website',
    imageUrl: restaurantImg, // Restaurant/Tea vibe
    link: "https://family-resturant.vercel.app/index.html"
  },
  {
    id: 'cafe',
    title: 'Urban Cafe',
    category: 'Web Design',
    imageUrl: cafeImg, // Coffee
    link: "https://cozy-9mg7qrui2-samir-code-starts-projects.vercel.app/"
  },
];

export const Work: React.FC = () => {
  return (
    <section id="work" className="pt-8 pb-24 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16">
          <div className="text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-6xl mb-2"
            >
              Selected
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-6xl text-gray-600 italic"
            >
              Work
            </motion.h2>
          </div>
          <div className="hidden md:block">
            <button className="text-xs uppercase tracking-widest text-gray-500 hover:text-[#CABCA1] transition-colors flex items-center gap-2 group">
              Start a project
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group cursor-pointer relative block"
            >
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-lg bg-[#121214] aspect-[4/3]">
                {/* Image */}
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Arrow Icon Top Right */}
                <div className="absolute top-4 right-4 bg-[#CABCA1]/10 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 text-[#CABCA1]" />
                </div>
              </div>

              {/* Text Content */}
              <div className="mt-4 flex justify-between items-start">
                <div>
                  <h3 className="text-lg md:text-2xl font-serif text-[#CABCA1] group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 mt-1 block">
                    {project.category}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};