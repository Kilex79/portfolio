"use client";

import { motion } from "framer-motion";
import { GitCommit, GitPullRequest, Star, User } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { useGithubData } from "@/hooks/use-github-data";

export function GithubStats() {
    const { t } = useTranslation();
    const { user, username, loading } = useGithubData();

    // Fallback numbers if loading or no user
    const stats = [
        { label: t.github.commits, value: user?.total_commits ? user.total_commits.toLocaleString() : "1,234+", icon: GitCommit },
        { label: t.github.prs, value: "50+", icon: GitPullRequest }, // Can't fetch total PRs easily via REST
        { label: t.github.followers, value: user ? user.followers.toString() : "0", icon: User },
        { label: "Repos", value: user ? user.public_repos.toString() : "0", icon: Star },
    ];

    if (!username) return null;

    return (
        <section id="github" className="py-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">{t.github.title}</h2>
                    <p className="text-muted-foreground">{t.github.subtitle}</p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-background/50 border border-foreground/5 hover:border-foreground/10 transition-colors"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="p-3 bg-accent/10 rounded-full text-accent">
                                    <stat.icon className="w-6 h-6" />
                                </div>
                            </div>
                            <h3 className="text-3xl font-bold mb-1">{loading ? "..." : stat.value}</h3>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12"
                >
                    {/* Using ghchart since it generates the SVGs nicely from username */}
                    <img
                        src={`https://ghchart.rshah.org/211d4e/${username}`}
                        alt="Github Contribution Chart"
                        className="w-full max-w-4xl mx-auto opacity-70 hover:opacity-100 transition-opacity invert dark:invert-0"
                    />
                </motion.div>
            </div>
        </section>
    );
}
