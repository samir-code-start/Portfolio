'use client';

import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-12 text-center text-primary">
                        About <span className="text-muted/50">Me</span>
                    </h2>

                    <div className="bg-card border border-white/5 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        <div className="relative z-10 space-y-6 text-lg text-muted font-light leading-relaxed">
                            <h3 className="text-2xl md:text-3xl font-serif text-primary font-medium leading-tight">
                                &quot;Empowering Local Businesses Through Modern Web Solutions&quot;
                            </h3>
                            <p>
                                I believe that every local business deserves a digital presence as strong as the reputation they’ve built on the ground.
                                As a web developer and AIML student at SPPU, I am dedicated to helping our local shops and services transition into the digital age.
                            </p>
                            <p>
                                My goal is simple: to build fast, professional websites that turn neighbors into lifelong customers.
                                Whether you’re a family-owned restaurant or a local service provider, I’m here to make sure your brand is seen and heard online.
                            </p>
                        </div>

                        <div className="mt-12 pt-12 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { label: "Experience", value: "Fresher" },
                                { label: "Projects", value: "5+" },
                                { label: "Status", value: "Available" },
                                { label: "Coffee", value: "∞" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (index * 0.1) }}
                                    className="text-center"
                                >
                                    <div className="text-3xl font-serif text-accent mb-2">{stat.value}</div>
                                    <div className="text-sm uppercase tracking-widest text-muted">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
