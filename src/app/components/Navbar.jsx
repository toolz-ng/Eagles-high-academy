
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import ApplyButton from "./admission/ApplyButton";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/admissions", label: "Admissions" },
    { href: "/news", label: "Latest News" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
        setScrolled(window.scrollY > 8);
        };

        onScroll();
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Lock background scroll while mobile menu is open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";

        return () => {
        document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
                scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-md"
                    : "bg-transparent"
                }`}
            >
                <div
                className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${
                    open ? "invisible md:visible" : ""
                }`}
                >
                <div className="flex h-16 items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 shrink-0">
                    <span
                        className={`flex h-9 w-9 px-2 items-center justify-center rounded-full font-display text-sm transition-colors ${
                        scrolled
                            ? "bg-navy text-paper"
                            : "bg-navy text-white backdrop-blur-sm"
                        }`}
                    >
                        EHA
                    </span>

                    <span
                        className={`font-display text-lg transition-colors ${
                        scrolled ? "text-navy" : "text-white"
                        }`}
                    >
                        Eagles High Academy
                    </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                        key={link.href}
                        href={link.href}
                        className={`group relative text-sm font-medium transition-colors ${
                            scrolled
                            ? "text-ink/80 hover:text-navy"
                            : "text-white/90 hover:text-white"
                        }`}
                        >
                        {link.label}

                        <span
                            className={`absolute -bottom-1 left-0 h-px w-0 transition-all duration-200 group-hover:w-full ${
                            scrolled ? "bg-navy" : "bg-white"
                            }`}
                        />
                        </Link>
                    ))}
                    </nav>

                    {/* Apply Button */}
                    <div className="hidden md:block">
                        <ApplyButton className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark">
                            Apply Now
                        </ApplyButton>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                    type="button"
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    aria-label="Open menu"
                    aria-expanded={open}
                    onClick={() => setOpen(true)}
                    >
                    <FaBars
                        size={20}
                        className={`transition-colors ${
                        scrolled ? "text-navy" : "text-white"
                        }`}
                    />
                    </button>
                </div>
                </div>
            </header>

            {/* Mobile Overlay */}
            <div
                className={`md:hidden fixed inset-0 z-50 transition-opacity duration-200 ${
                open
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
            >
                <div
                className="absolute inset-0 bg-ink/70 backdrop-blur-md"
                onClick={() => setOpen(false)}
                />

                <div
                className={`relative mx-4 mt-4 flex flex-col gap-3 transition-transform duration-200 ${
                    open ? "translate-y-0" : "-translate-y-3"
                }`}
                >
                {/* Mobile Header */}
                <div className="flex items-center justify-between rounded-2xl bg-ink px-5 py-4 shadow-xl">
                    <span className="font-display text-lg text-paper">
                    Eagles High Academy
                    </span>

                    <button
                    type="button"
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                    className="text-paper/80 hover:text-paper transition-colors"
                    >
                    <FaTimes size={20} />
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className="rounded-2xl bg-ink/95 shadow-xl overflow-hidden">
                    <nav className="flex flex-col divide-y divide-paper/10">
                    {links.map((link) => (
                        <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="px-5 py-4 text-center text-base font-medium text-paper/90 hover:bg-paper/5 hover:text-white transition-colors"
                        >
                        {link.label}
                        </Link>
                    ))}
                    </nav>

                    <div className="p-4">
                        <ApplyButton className="flex items-center justify-center gap-2 rounded-full bg-paper px-5 py-3 text-sm font-semibold text-ink hover:bg-white transition-colors">
                            Apply Now <FiArrowUpRight className="h-4 w-4" />
                        </ApplyButton>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}
//flex items-center justify-center gap-2 rounded-full bg-paper px-5 py-3 text-sm font-semibold text-ink hover:bg-white transition-colors
