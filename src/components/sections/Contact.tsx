"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { useTranslation } from "@/hooks/use-translation";

export function Contact() {
    const { t } = useTranslation();

    return (
        <section id="contact" className="py-20 bg-foreground/5 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">{t.contact.title}</h2>
                    <div className="h-1 w-20 bg-accent rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <p className="text-lg text-muted-foreground">
                            {t.contact.p1}
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-muted-foreground">
                                <div className="p-3 bg-foreground/5 rounded-full">
                                    <Mail className="w-5 h-5 text-accent" />
                                </div>
                                <span>{t.contact.email_value}</span>
                            </div>
                            <div className="flex items-center gap-4 text-muted-foreground">
                                <div className="p-3 bg-foreground/5 rounded-full">
                                    <MapPin className="w-5 h-5 text-accent" />
                                </div>
                                <span>{t.contact.remote_label}</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-foreground/5 border border-foreground/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[400px]"
                    >
                        <div className="mb-8 p-6 bg-accent/10 rounded-full animate-pulse">
                            <Mail className="w-16 h-16 text-accent" />
                        </div>

                        <h3 className="text-2xl font-bold mb-8">{t.contact.form.submit}</h3>



                        <a
                            href={`mailto:${portfolio.contact.email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex h-14 w-full sm:w-auto items-center justify-center overflow-hidden rounded-full bg-accent px-10 font-bold text-white transition-all duration-300 hover:bg-accent/90 hover:scale-105 hover:shadow-lg hover:shadow-accent/25 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                        >
                            <span className="mr-3 text-lg">{t.contact.form.submit}</span>
                            <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
