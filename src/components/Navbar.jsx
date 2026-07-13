import { useState, useEffect } from "react";
import { siteConfig } from "../data/siteConfig";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-navy/80 backdrop-blur-md border-b border-border" : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
                {/* <a href="#" className="font-display text-xl font-semibold tracking-wide text-text">
                    IM<span className="text-gold">.</span>
                </a> */}
                <a href="#" className="font-display text-xl font-semibold tracking-wide text-text">
                    IrtazaManzoor<span className="text-accent">.</span>dev
                </a>

                <div className="hidden md:flex gap-8  text-sm">
                    {siteConfig.navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="text-muted hover:text-text transition-colors">
                            {link.label}
                        </a>
                    ))}
                </div>

                <button
                    className="md:hidden text-text"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? "✕" : "☰"}
                </button>
            </div>

            {open && (
                <div className="md:hidden bg-surface border-t border-border flex flex-col px-6 py-4 gap-4 font-mono text-sm">
                    {siteConfig.navLinks.map((link) => (
                        <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-muted hover:text-text">
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}