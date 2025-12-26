"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/use-translation";
import { useGithubData } from "@/hooks/use-github-data";

export function About() {
    const { t, language } = useTranslation();
    const { user } = useGithubData();

    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">{t.about.title}</h2>
                    <div className="h-1 w-20 bg-accent rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6 text-muted-foreground text-lg leading-relaxed"
                    >
                        <p>{t.about.p1}</p>
                        <p>{t.about.p2}</p>
                        <p>{t.about.p3}</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-foreground/5 border border-foreground/10 rounded-2xl p-8"
                    >
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-foreground/10 pb-4">
                                <span className="font-semibold text-foreground">{t.about.stats.experience}</span>
                                <span className="text-accent">{t.about.stats.years}</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-foreground/10 pb-4">
                                <span className="font-semibold text-foreground">{t.about.stats.projects}</span>
                                <span className="text-accent">
                                    {user?.public_repos
                                        ? `${user.public_repos} ${language === 'es' ? 'Repos Públicos' : 'Public Repos'}`
                                        : t.about.stats.count}
                                </span>
                            </div>
                            <div className="flex justify-between items-center border-b border-foreground/10 pb-4">
                                <span className="font-semibold text-foreground">{t.about.stats.clients}</span>
                                <span className="text-accent">{t.about.stats.global}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
