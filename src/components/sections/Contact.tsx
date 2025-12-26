"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useTranslation } from "@/hooks/use-translation";

export function Contact() {
    const { t } = useTranslation();
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Schema needs to be dynamic or just use static keys for validation messages if we want i18n validation.
    // For simplicity, we'll keep English validation messages or basic ones, but labels will be translated.
    // Ideally, schema should be re-created when language changes or use a function.
    const schema = z.object({
        name: z.string().min(2, t.contact.form.error_name),
        email: z.string().email(t.contact.form.error_email),
        message: z.string().min(10, t.contact.form.error_message),
    });

    type FormData = z.infer<typeof schema>;

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        // Simulate API call
        console.log(data);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        reset();
        setIsSubmitting(false);
        alert(t.contact.form.success);
    };

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
                        className="bg-foreground/5 border border-foreground/10 rounded-2xl p-8"
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">{t.contact.form.name}</label>
                                <input
                                    {...register("name")}
                                    className="w-full bg-foreground/5 border border-foreground/10 rounded-lg p-3 focus:outline-none focus:border-accent transition-colors"
                                    placeholder={t.contact.form.name_placeholder}
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">{t.contact.form.email}</label>
                                <input
                                    {...register("email")}
                                    className="w-full bg-foreground/5 border border-foreground/10 rounded-lg p-3 focus:outline-none focus:border-accent transition-colors"
                                    placeholder={t.contact.form.email_placeholder}
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">{t.contact.form.message}</label>
                                <textarea
                                    {...register("message")}
                                    rows={4}
                                    className="w-full bg-foreground/5 border border-foreground/10 rounded-lg p-3 focus:outline-none focus:border-accent transition-colors resize-none"
                                    placeholder={t.contact.form.message_placeholder}
                                />
                                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? t.contact.form.sending : t.contact.form.submit}
                                {!isSubmitting && <Send className="w-4 h-4" />}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
