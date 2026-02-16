'use client';

import { motion } from 'framer-motion';
import { Palette, Code, LineChart, ArrowUpRight } from 'lucide-react';

const services = [
    {
        title: "Web Design",
        description: "Creating stunning, user-centric designs that blend aesthetics with functionality. I focus on modern UI/UX principles to ensure your brand looks premium.",
        icon: Palette,
    },
    {
        title: "Development",
        description: "Building robust, scalable applications using the latest technologies like Next.js and Tailwind CSS. Performance and accessibility are at the core of my code.",
        icon: Code,
    },
    {
        title: "SEO & Growth",
        description: "Optimizing your digital presence to reach the right audience. From technical SEO to content strategy, I help your business grow organically.",
        icon: LineChart,
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 md:py-32 bg-background relative">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6">
                        Values & <br /> <span className="text-muted/50">Services</span>
                    </h2>
                    <div className="h-1 w-20 bg-accent" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group p-8 bg-card border border-white/5 hover:border-accent/30 transition-all duration-500 rounded-xl relative overflow-hidden"
                        >
                            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0 translate-x-2 group-hover:translate-x-0">
                                <ArrowUpRight className="w-6 h-6 text-accent" />
                            </div>

                            <service.icon className="w-12 h-12 text-zinc-500 group-hover:text-accent mb-8 transition-colors duration-500 stroke-[1.5]" />

                            <h3 className="text-2xl font-serif font-medium mb-4 text-primary group-hover:text-accent transition-colors duration-300">
                                {service.title}
                            </h3>

                            <p className="text-muted leading-relaxed mb-6 group-hover:text-zinc-400 transition-colors duration-300">
                                {service.description}
                            </p>

                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
