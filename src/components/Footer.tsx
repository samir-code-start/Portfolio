'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="py-20 md:py-32 bg-background border-t border-white/5 relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10 flex flex-col items-center text-center">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium mb-8 text-primary"
                >
                    Have an idea?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-muted text-lg md:text-xl mb-12 max-w-xl leading-relaxed"
                >
                    Let&apos;s build something extraordinary together. I&apos;m available for freelance projects and open to new opportunities.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Link
                        href="mailto:samirgunjite22@gmail.com"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-background rounded-full font-medium text-lg hover:bg-white hover:scale-105 transition-all duration-300 group"
                    >
                        Start a Conversation
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </motion.div>

                <div className="mt-24 w-full flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-white/5 text-sm text-muted">

                    <div className="flex gap-8">
                        <Link href="https://www.linkedin.com/in/samir-gunjite-5a1621388/" target="_blank" className="hover:text-accent transition-colors flex items-center gap-2">
                            <Linkedin className="w-4 h-4" />
                            <span>LinkedIn</span>
                        </Link>
                        <Link href="https://github.com/samir-code-start" target="_blank" className="hover:text-accent transition-colors flex items-center gap-2">
                            <Github className="w-4 h-4" />
                            <span>GitHub</span>
                        </Link>
                        <Link href="https://www.instagram.com/sam.irr_22/#" target="_blank" className="hover:text-accent transition-colors flex items-center gap-2">
                            <Instagram className="w-4 h-4" />
                            <span>Instagram</span>
                        </Link>
                    </div>

                    <p>© {currentYear} Samir Gunjite. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
