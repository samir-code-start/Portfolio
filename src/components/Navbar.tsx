'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#' }, // Placeholder for now
];

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-serif font-bold text-primary tracking-tighter">
                    SG.
                </Link>

                {/* Center Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted hover:text-primary transition-colors duration-300"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <Link href="https://wa.me/919226347261" target="_blank">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2.5 bg-primary text-background font-medium rounded-full text-sm hover:bg-white transition-colors"
                    >
                        Let&apos;s Talk
                    </motion.button>
                </Link>
            </div>
        </nav>
    );
}
