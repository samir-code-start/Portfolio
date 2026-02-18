import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Palette, Code2, TrendingUp, ArrowLeft, ArrowRight } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 'web-design',
    title: 'Web Design',
    description: 'Creating stunning, user-centric designs that blend aesthetics with functionality. I focus on modern UI/UX principles to ensure your brand looks premium.',
    icon: Palette,
  },
  {
    id: 'development',
    title: 'Development',
    description: 'Building robust, scalable applications using the latest technologies like React and Tailwind CSS. Performance and accessibility are at the core of my code.',
    icon: Code2,
  },
  {
    id: 'seo',
    title: 'SEO & Growth',
    description: 'Optimizing your digital presence to reach the right audience. From technical SEO to content strategy, I help your business grow organically.',
    icon: TrendingUp,
  },
];

export const Services: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = window.innerWidth * 0.8; // Scroll by roughly one card width
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="services" className="py-24 md:py-48 px-6 md:px-12 bg-[#0b0b0c] relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-8 md:mb-16 border-b border-[#CABCA1]/10 pb-4 flex flex-col md:flex-row items-center md:items-end justify-between gap-6 overflow-hidden">
          
          <div className="w-full md:w-auto flex items-center justify-between md:block">
            {/* Left Arrow - Flanking the title */}
            <button 
              onClick={() => scroll('left')}
              className="md:hidden p-2 text-[#CABCA1]/30 hover:text-[#CABCA1] transition-colors duration-300"
              aria-label="Scroll left"
            >
              <ArrowLeft size={24} strokeWidth={1} />
            </button>

            <div className="text-center md:text-left">
              <motion.h2 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-4xl md:text-5xl"
              >
                Values <span className="font-sans font-light text-2xl md:text-3xl text-gray-500">&</span> <br />
                <span className="text-gray-500 italic">Services</span>
              </motion.h2>
            </div>

            {/* Right Arrow - Flanking the title */}
            <button 
              onClick={() => scroll('right')}
              className="md:hidden p-2 text-[#CABCA1]/30 hover:text-[#CABCA1] transition-colors duration-300"
              aria-label="Scroll right"
            >
              <ArrowRight size={24} strokeWidth={1} />
            </button>
          </div>
        </div>

        {/* Mobile: Horizontal Scroll | Desktop: Grid */}
        <div 
          ref={scrollContainerRef}
          className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Hide scrollbar for webkit */}
          <style>{`
            #services .flex::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          {services.map((service, index) => {
            const isSelected = selectedId === service.id;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                animate={{
                  scale: isSelected ? 1.05 : 1,
                  backgroundColor: isSelected ? '#1a1a1c' : '#121214',
                  borderColor: isSelected ? '#CABCA1' : 'rgba(202, 188, 161, 0.05)'
                }}
                onClick={() => setSelectedId(isSelected ? null : service.id)}
                className="
                  flex-shrink-0 w-[80vw] md:w-auto md:flex-shrink-1
                  snap-center
                  bg-[#121214] 
                  p-5 md:p-8 
                  rounded-xl 
                  border border-[#CABCA1]/5 
                  hover:border-[#CABCA1]/10 
                  transition-all duration-300 
                  group
                  cursor-pointer
                "
              >
                <div className="mb-4 md:mb-6 inline-block p-3 rounded-lg bg-[#CABCA1]/5 text-gray-300 group-hover:text-[#CABCA1] group-hover:bg-[#CABCA1]/10 transition-colors">
                  <service.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg md:text-xl font-medium text-[#CABCA1] mb-3 md:mb-4">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};