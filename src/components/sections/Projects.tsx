"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { useGithubData } from "@/hooks/use-github-data";

// We keep tags hardcoded or we can move them to dictionary too if needed, but usually tech stack is universal.
const projectTags = [
    ["Next.js", "TypeScript", "Tailwind", "OpenAI"],
    ["React", "Vite", "Recharts", "Supabase"],
    ["Astro", "TailwindCSS"]
];
// We map tags by index to the items from dictionary

export function Projects() {
    const { t } = useTranslation();
    const { repos, username, loading } = useGithubData();

    // Combine static portfolio projects with fetched repos if available, or just use one source
    // Logic: If github user is set, prioritize showing fetched repos mixed with static or just fetched?
    // User request: "autocomplete automatically".
    // Let's DISPLAY fetched repos IF available, otherwise fallback to static.

    // Map repos to project structure
    const githubProjects = repos.map(repo => ({
        title: repo.name,
        description: repo.description || "No description available",
        tags: [repo.language, ...repo.topics].filter(Boolean),
        links: {
            demo: repo.homepage || (repo.has_pages ? `https://${username}.github.io/${repo.name}/` : null),
            code: repo.html_url
        }
    }));

    // If we have github projects, use them. Otherwise use static.
    const displayProjects = (username && githubProjects.length > 0)
        ? githubProjects
        : t.projects.items.map((item, i) => ({
            ...item,
            tags: ["HTML", "CSS", "JS"], // Default fallback tags since dict doesn't have them
            links: { demo: "#", code: "#" }
        }));

    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">{t.projects.title}</h2>
                    <div className="h-1 w-20 bg-accent rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-foreground/5 border border-foreground/10 rounded-2xl overflow-hidden hover:border-accent/50 transition-colors flex flex-col"
                        >
                            <div className="aspect-video bg-muted relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                <img
                                    src={`https://opengraph.githubassets.com/1/${username}/${project.title}`}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-center bg-foreground/10"
                                    onError={(e) => {
                                        // Fallback to gradient if image fails (though github always serves one)
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.parentElement?.classList.add('bg-gradient-to-br', 'from-accent/20', 'to-purple-900/20');
                                    }}
                                />
                                {/* Overlay/Fallback for loading or error */}
                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-foreground/5 font-bold text-xl uppercase tracking-widest -z-10">
                                    {project.title.slice(0, 2)}
                                </div>
                            </div>
                            <div className="p-6 space-y-4 flex flex-col flex-1">
                                <h3 className="text-xl font-bold group-hover:text-accent transition-colors truncate">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm line-clamp-3 flex-1">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {/* @ts-ignore - tags might be undefined on static items if strict */}
                                    {project.tags?.slice(0, 4).map((tag: string) => (
                                        <span key={tag} className="text-xs px-2 py-1 bg-foreground/5 rounded-md text-muted-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4 pt-4 mt-auto">
                                    {project.links.demo && (
                                        <a
                                            href={project.links.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
                                        >
                                            <ExternalLink className="w-4 h-4" /> {t.projects.demo}
                                        </a>
                                    )}
                                    <a
                                        href={project.links.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
                                    >
                                        <Github className="w-4 h-4" /> {t.projects.code}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
