'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">

            {/* Background Ambient Light */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container px-4 mx-auto flex flex-col items-center relative z-10 text-center">

                {/* Intro Tag */}
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="inline-block px-3 py-1 mb-6 text-xs tracking-[0.2em] font-medium text-accent border border-accent/20 rounded-full uppercase"
                >
                    Portfolio 2026
                </motion.span>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-primary mb-6 tracking-tight leading-[1.1]"
                >
                    Samir Gunjite
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-2xl text-muted text-lg md:text-xl font-light mb-12 leading-relaxed"
                >
                    Digital Experience Designer & Developer specializing in building premium, high-performance websites for modern businesses.
                </motion.p>

                {/* Profile Image with Gradient Mask */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="relative w-full max-w-sm aspect-square rounded-full overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-white/10"
                >
                    {/* Gradient Overlay for "Fade to Black" effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10 h-full opacity-80" />

                    <Image
                        src="/images/profile.jpg"
                        alt="Samir Gunjite"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest text-muted">Scroll</span>
                <ArrowDown className="w-5 h-5 text-accent animate-bounce" />
            </motion.div>
        </section>
    );
}
