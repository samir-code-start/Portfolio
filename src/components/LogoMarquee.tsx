'use client';

import { motion } from 'framer-motion';

const brands = [
    "LUMINA", "VORTEX", "ELEVATE", "SPHERE", "NEXUS", "QUANTUM", "VELOCITY", "HORIZON"
];

export default function LogoMarquee() {
    return (
        <section className="py-12 bg-background border-y border-white/5 overflow-hidden">
            <div className="flex relative items-center max-w-[100vw]">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10" />

                <motion.div
                    className="flex gap-16 md:gap-32 whitespace-nowrap px-4"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20
                    }}
                >
                    {/* Repeat list to fill screen and loop smoothly */}
                    {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
                        <span key={index} className="text-2xl md:text-4xl font-serif font-bold text-white/10 select-none tracking-widest uppercase hover:text-white/30 transition-colors cursor-default">
                            {brand}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
