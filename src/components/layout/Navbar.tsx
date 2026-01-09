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
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const [activeSection, setActiveSection] = useState<string>("home");
    const [isManualScroll, setIsManualScroll] = useState(false);
    const { theme, setTheme } = useTheme();
    const { language, setLanguage, t } = useTranslation();
    const [mounted, setMounted] = useState(false);
    const langMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);

        const observerOptions = {
            root: null,
            rootMargin: "-10% 0px -80% 0px",
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            if (isManualScroll) return;

            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navLinks.forEach((link) => {
            const sectionId = link.href.replace("#", "");
            const element = document.getElementById(sectionId);
            if (element) observer.observe(element);
        });

        const homeElement = document.getElementById("home");
        if (homeElement) observer.observe(homeElement);

        // Scroll listener fallback for top of page
        const handleScroll = () => {
            if (isManualScroll) return;
            if (window.scrollY < 50) {
                setActiveSection("home");
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });

        // Close dropdown on click outside
        const handleClickOutside = (event: MouseEvent) => {
            if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
                setIsLangOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
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
                    <Link
                        href="#home"
                        onClick={() => {
                            setActiveSection("home");
                            setIsManualScroll(true);
                            setTimeout(() => setIsManualScroll(false), 800);
                        }}
                        onMouseEnter={() => setHoveredLink("logo")}
                        onMouseLeave={() => setHoveredLink(null)}
                        className={cn(
                            "text-xl font-bold font-heading tracking-tighter transition-colors relative px-4 py-2 rounded-full",
                            (hoveredLink === "logo" || (activeSection === "home" && !hoveredLink)) ? "text-accent" : "hover:text-accent"
                        )}
                    >
                        <span className="relative z-10">
                            DEV<span className="text-accent">.</span>
                        </span>
                        {(hoveredLink === "logo" || (activeSection === "home" && !hoveredLink)) && (
                            <motion.span
                                layoutId="nav-highlight"
                                className="absolute inset-0 bg-foreground/5 rounded-full z-0"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    type: "spring",
                                    bounce: 0.2,
                                    duration: 0.6
                                }}
                            />
                        )}
                    </Link>

                    {/* Desktop Nav */}
                    <div
                        className="hidden md:flex items-center gap-1"
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        {navLinks.map((link) => {
                            const sectionId = link.href.replace("#", "");
                            const isActive = activeSection === sectionId;
                            const isHovered = hoveredLink === link.name;

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => {
                                        setActiveSection(sectionId);
                                        setIsManualScroll(true);
                                        setTimeout(() => setIsManualScroll(false), 800);
                                    }}
                                    onMouseEnter={() => setHoveredLink(link.name)}
                                    className={cn(
                                        "px-4 py-2 text-sm font-medium transition-colors relative group rounded-full",
                                        (isHovered || (isActive && !hoveredLink)) ? "text-accent" : "text-foreground/70 hover:text-foreground"
                                    )}
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    {(isHovered || (isActive && !hoveredLink)) && (
                                        <motion.span
                                            layoutId="nav-highlight"
                                            className="absolute inset-0 bg-foreground/5 rounded-full z-0"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{
                                                type: "spring",
                                                bounce: 0.2,
                                                duration: 0.6
                                            }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
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

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.98 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="absolute top-full left-0 right-0 mt-4 bg-background/95 backdrop-blur-2xl border border-foreground/[0.08] rounded-[2rem] p-4 flex flex-col gap-2 shadow-[0_20px_50px_rgba(0,0,0,0.2)] md:hidden border-t-foreground/[0.05]"
                        >
                            {navLinks.map((link, i) => {
                                const sectionId = link.href.replace("#", "");
                                const isActive = activeSection === sectionId;
                                return (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                "text-lg font-semibold p-4 rounded-2xl hover:bg-foreground/[0.03] transition-all flex items-center justify-between group",
                                                isActive ? "text-accent bg-foreground/[0.03]" : "hover:text-primary"
                                            )}
                                            onClick={() => {
                                                setActiveSection(sectionId);
                                                setIsOpen(false);
                                                setIsManualScroll(true);
                                                setTimeout(() => setIsManualScroll(false), 800);
                                            }}
                                        >
                                            {link.name}
                                            <span className={cn(
                                                "transition-all",
                                                isActive ? "opacity-100 translate-x-0 text-accent" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-primary"
                                            )}>→</span>
                                        </Link>
                                    </motion.div>
                                );
                            })}

                            <div className="h-px w-full bg-foreground/[0.05] my-2" />

                            <div className="grid grid-cols-2 gap-2 p-2">
                                <div className="flex flex-col gap-3 p-4 rounded-2xl bg-foreground/[0.02] border border-foreground/[0.05]">
                                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground opacity-50">{t.nav.language || "Language"}</span>
                                    <div className="flex flex-col gap-1">
                                        {languages.map(lang => (
                                            <button
                                                key={lang.code}
                                                onClick={() => setLanguage(lang.code as "es" | "en")}
                                                className={cn(
                                                    "px-3 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2",
                                                    language === lang.code
                                                        ? "bg-primary text-white shadow-lg shadow-primary/20"
                                                        : "hover:bg-foreground/[0.05]"
                                                )}
                                            >
                                                <span>{lang.flag}</span>
                                                {lang.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3 p-4 rounded-2xl bg-foreground/[0.02] border border-foreground/[0.05]">
                                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground opacity-50">{t.nav.theme || "Theme"}</span>
                                    <button
                                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                        className="flex-1 flex flex-col items-center justify-center gap-2 rounded-xl bg-background border border-foreground/[0.05] p-2 hover:bg-foreground/[0.02] transition-colors"
                                        aria-label="Toggle theme"
                                    >
                                        {theme === "dark" ? (
                                            <>
                                                <Sun className="w-6 h-6 text-orange-400" />
                                                <span className="text-xs font-bold">LIGTH</span>
                                            </>
                                        ) : (
                                            <>
                                                <Moon className="w-6 h-6 text-blue-400" />
                                                <span className="text-xs font-bold">DARK</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>

                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 p-4 rounded-2xl bg-foreground text-background font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                            >
                                <Github className="w-5 h-5" />
                                GITHUB
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </div>
    );
}
