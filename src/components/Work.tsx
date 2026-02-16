'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "E-Commerce Platform",
        category: "Web Design / React",
        image: "/images/ecommerce.png",
        link: "https://e-commerce-website-iota-flame-35.vercel.app/",
    },
    {
        title: "Finance Tracker",
        category: "Web App / Dashboard",
        image: "/images/finance.png",
        link: "https://finance-tracker-rust-eight.vercel.app/",
    },
    {
        title: "Family Restaurant",
        category: "Brand Website",
        image: "/images/restaurant.png",
        link: "https://family-resturant.vercel.app/",
    },
    {
        title: "Urban Cafe",
        category: "Web Design",
        image: "/images/cafe.png",
        link: "https://cafe-website-orcin.vercel.app/",
    },
];

export default function Work() {
    return (
        <section id="work" className="py-24 md:py-32 bg-background">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6">
                            Selected <br /> <span className="text-muted/50">Work</span>
                        </h2>
                        <div className="h-1 w-20 bg-accent" />
                    </div>

                    <Link href="mailto:samirgunjite22@gmail.com" className="hidden md:flex items-center gap-2 text-muted hover:text-accent transition-colors pb-2 group">
                        <span className="text-sm tracking-widest uppercase">Start a Project</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className={`group ${index % 2 === 1 ? 'md:mt-24' : ''}`}
                        >
                            <Link href={project.link} target="_blank" className="block">
                                <div className="relative aspect-[4/3] rounded-md overflow-hidden mb-6 bg-card border border-white/5 group-hover:border-accent/20 transition-colors">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>

                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-2xl font-serif font-medium mb-1 group-hover:text-accent transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-muted uppercase tracking-wider">
                                            {project.category}
                                        </p>
                                    </div>
                                    <div className="p-2 rounded-full border border-white/10 group-hover:bg-accent group-hover:text-black group-hover:border-transparent transition-all duration-300">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 md:hidden">
                    <Link href="mailto:samirgunjite22@gmail.com" className="flex items-center gap-2 text-muted hover:text-accent transition-colors">
                        <span className="text-sm tracking-widest uppercase">Start a Project</span>
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
