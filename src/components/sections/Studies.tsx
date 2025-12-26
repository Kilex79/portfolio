"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/use-translation";

export function Studies() {
    const { t } = useTranslation();

    return (
        <section id="studies" className="py-20 relative bg-foreground/5">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">{t.studies.title}</h2>
                    <div className="h-1 w-20 bg-accent rounded-full" />
                </motion.div>

                <div className="space-y-8">
                    {t.studies.items.map((study, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 border-l border-foreground/10"
                        >
                            <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 bg-accent rounded-full shadow-[0_0_10px_var(--accent)]" />
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                <h3 className="text-xl font-bold text-foreground">{study.institution}</h3>
                                <span className="text-sm text-accent font-medium">{study.period}</span>
                            </div>
                            <h4 className="text-lg text-muted-foreground mb-2">{study.degree}</h4>
                            <p className="text-muted-foreground/80">{study.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
