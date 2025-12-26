"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

import { useTranslation } from "@/hooks/use-translation";

export function Hero() {
    const { t } = useTranslation();

    return (
        <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block mb-4 px-4 py-1.5 rounded-full border border-foreground/10 bg-foreground/5 backdrop-blur-sm"
                >
                    <span className="text-sm font-medium text-accent">{t.hero.badge}</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading tracking-tight mb-6"
                >
                    {t.hero.role}<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">
                        {t.hero.roleSubtitle}
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
                >
                    {t.hero.description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <a
                        href="#projects"
                        className="px-8 py-4 bg-foreground text-background font-semibold rounded-full hover:bg-foreground/90 transition-colors flex items-center gap-2"
                    >
                        {t.hero.ctaProject}
                        <ArrowRight className="w-4 h-4" />
                    </a>
                    {/*<a
                        href="/resume.pdf"
                        className="px-8 py-4 bg-foreground/5 text-foreground font-semibold rounded-full border border-foreground/10 hover:bg-foreground/10 transition-colors flex items-center gap-2"
                    >
                        {t.hero.ctaCv}
                        <Download className="w-4 h-4" />
                    </a>*/}
                </motion.div>
            </div>
        </section>
    );
}
