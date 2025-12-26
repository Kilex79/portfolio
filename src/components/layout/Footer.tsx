"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

export function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-background border-t border-foreground/10 py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold font-heading">
                        DEV<span className="text-accent">.</span>
                    </h3>
                    <p className="text-muted-foreground text-sm mt-2">
                        {t.footer.tagline}
                    </p>
                </div>

                <div className="flex gap-6">
                    <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>

                <div className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Dev Portfolio. {t.footer.rights}
                </div>
            </div>
        </footer>
    );
}
