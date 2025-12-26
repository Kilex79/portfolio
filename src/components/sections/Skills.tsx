"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/use-translation";

export function Skills() {
    const { t } = useTranslation();

    // Skills are now fully dynamic from i18n -> portfolio.tsx
    const skills = t.skills.items;

    return (
        <section id="skills" className="py-20 relative bg-foreground/5">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">{t.skills.title}</h2>
                    <div className="h-1 w-20 bg-accent rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skills.map((group, index) => (
                        <motion.div
                            key={index} // Changed key to index because category name changes
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="space-y-4"
                        >
                            <h3 className="text-xl font-semibold text-foreground">{group.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-foreground/5 border border-foreground/10 rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-accent/50 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
