"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Sun, Moon, Languages, ChevronDown, Check } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useTranslation } from "@/hooks/use-translation";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const { language, setLanguage, t } = useTranslation();
    const [mounted, setMounted] = useState(false);
    const langMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);

        // Close dropdown on click outside
        const handleClickOutside = (event: MouseEvent) => {
            if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
                setIsLangOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const navLinks = [
        { name: t.nav.about, href: "#about" },
        { name: t.nav.skills, href: "#skills" },
        { name: t.nav.projects, href: "#projects" },
        { name: t.nav.contact, href: "#contact" },
    ];

    const languages = [
        { code: "en", label: "English", flag: "🇺🇸" },
        { code: "es", label: "Español", flag: "🇪🇸" }
    ];

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <nav className="w-full max-w-7xl bg-background/60 backdrop-blur-xl border border-foreground/5 rounded-full shadow-2xl transition-all duration-300">
                <div className="px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold font-heading tracking-tighter hover:text-primary transition-colors">
                        DEV<span className="text-accent">.</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium hover:text-accent transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-3">
                        {mounted && (
                            <>
                                {/* Language Dropdown */}
                                <div className="relative" ref={langMenuRef}>
                                    <button
                                        onClick={() => setIsLangOpen(!isLangOpen)}
                                        className="p-2 hover:bg-foreground/5 rounded-full transition-colors flex items-center gap-1 font-medium text-xs border border-foreground/5 cursor-pointer"
                                        aria-label="Toggle language menu"
                                    >
                                        <span className="text-lg leading-none">{languages.find(l => l.code === language)?.flag}</span>
                                        <ChevronDown className={cn("w-3 h-3 transition-transform opacity-50", isLangOpen && "rotate-180")} />
                                    </button>

                                    <AnimatePresence>
                                        {isLangOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.1 }}
                                                className="absolute top-full right-0 mt-3 w-32 bg-background/95 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-xl py-1 overflow-hidden"
                                            >
                                                {languages.map((lang) => (
                                                    <button
                                                        key={lang.code}
                                                        onClick={() => {
                                                            setLanguage(lang.code as "es" | "en");
                                                            setIsLangOpen(false);
                                                        }}
                                                        className={cn(
                                                            "w-full text-left px-4 py-2 text-sm flex items-center gap-2 hover:bg-foreground/5 transition-colors cursor-pointer",
                                                            language === lang.code && "text-accent bg-accent/5"
                                                        )}
                                                    >
                                                        <span>{lang.flag}</span>
                                                        <span className="flex-1">{lang.label}</span>
                                                        {language === lang.code && <Check className="w-3 h-3" />}
                                                    </button>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <div className="h-4 w-px bg-foreground/10" />

                                <button
                                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                    className="p-2 hover:bg-foreground/5 rounded-full transition-colors text-foreground/80 hover:text-foreground cursor-pointer"
                                    aria-label="Toggle theme"
                                >
                                    {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                                </button>

                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 hover:bg-foreground/5 rounded-full transition-colors text-foreground/80 hover:text-foreground"
                                >
                                    <Github className="w-4 h-4" />
                                </a>
                            </>
                        )}
                    </div>

                    {/* Mobile Toggle */}
                    <div className="flex md:hidden items-center gap-4">
                        <button
                            className="p-2"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 right-0 mt-4 bg-background/90 backdrop-blur-xl border border-foreground/10 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl mx-auto w-full md:hidden"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium hover:text-accent p-2 text-center"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="h-px w-full bg-foreground/10 my-2" />

                            <div className="flex items-center justify-between px-4">
                                <span className="text-sm font-medium text-muted-foreground">{t.nav.language || "Language"}</span>
                                <div className="flex gap-2">
                                    {languages.map(lang => (
                                        <button
                                            key={lang.code}
                                            onClick={() => setLanguage(lang.code as "es" | "en")}
                                            className={cn(
                                                "px-3 py-1 rounded-full text-sm border transition-colors",
                                                language === lang.code
                                                    ? "bg-accent text-white border-accent"
                                                    : "border-foreground/10 hover:bg-foreground/5"
                                            )}
                                        >
                                            {lang.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center justify-between px-4">
                                <span className="text-sm font-medium text-muted-foreground">{t.nav.theme || "Theme"}</span>
                                <button
                                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                    className="p-2 bg-foreground/5 rounded-full"
                                    aria-label="Toggle theme"
                                >
                                    {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </div>
    );
}
