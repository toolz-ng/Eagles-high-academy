"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import ApplyButton from "./admission/ApplyButton";

const links = [
    { href: "/", label: "Home", id: "home" },
    { href: "/#about", label: "About", id: "about" },
    { href: "/#campus", label: "Campus Gallery", id: "campus" },
    { href: "/#student-life", label: "Student Life", id: "student-life" },
    { href: "/contact", label: "Contact", id: "contact" },
];

export default function Navbar() {
    const pathname = usePathname();

    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("home");

    // Handle navbar scroll state
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

    // Handle active section / page
    useEffect(() => {
        // Contact page
        if (pathname === "/contact") {
            setActive("contact");
            return;
        }

        // Only run section tracking on homepage
        if (pathname !== "/") {
            return;
        }

        const sections = [
            { id: "home", elementId: null },
            { id: "about", elementId: "about" },
            { id: "student-life", elementId: "student-life" },
            { id: "campus", elementId: "campus" },
        ];

        const updateActiveSection = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition < 150) {
                setActive("home");
                return;
            }

            let currentSection = "home";
            let currentTop = -Infinity;

            sections.forEach((section) => {
                if (!section.elementId) return;
                const element = document.getElementById(section.elementId);
                if (!element) return;

                const top = element.getBoundingClientRect().top + window.scrollY;

                // Only take this section if we've scrolled past it AND it's
                // further down the page than whatever we've already matched.
                if (scrollPosition >= top - 180 && top > currentTop) {
                currentSection = section.id;
                currentTop = top;
                }
            });

            setActive(currentSection);
            };

        updateActiveSection();

        window.addEventListener("scroll", updateActiveSection);

        return () => {
            window.removeEventListener(
                "scroll",
                updateActiveSection
            );
        };
    }, [pathname]);

    function handleNavClick(id) {
        setActive(id);
        setOpen(false);
    }

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
                        <Link
                            href="/"
                            onClick={() => handleNavClick("home")}
                            className="flex shrink-0 items-center gap-2"
                        >
                            <span
                                className={`flex h-9 w-9 items-center justify-center rounded-full px-2 font-display text-sm transition-colors ${
                                    scrolled
                                        ? "bg-navy text-paper"
                                        : "bg-navy text-white backdrop-blur-sm"
                                }`}
                            >
                                EHA
                            </span>

                            <span
                                className={`font-display text-lg transition-colors ${
                                    scrolled
                                        ? "text-navy"
                                        : "text-white"
                                }`}
                            >
                                Eagles High Academy
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden items-center gap-8 md:flex">
                            {links.map((link) => {
                                const isActive =
                                    active === link.id;

                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() =>
                                            handleNavClick(link.id)
                                        }
                                        className={`group relative text-sm font-medium transition-colors ${
                                            isActive
                                                ? "text-navy"
                                                : scrolled
                                                ? "text-ink/80 hover:text-navy"
                                                : "text-white/90 hover:text-white"
                                        }`}
                                    >
                                        {link.label}

                                        <span
                                            className={`absolute -bottom-1 left-0 h-px transition-all duration-200 ${
                                                isActive
                                                    ? "w-1/2 bg-navy"
                                                    : "w-0 bg-white group-hover:w-1/2"
                                            } ${
                                                scrolled && !isActive
                                                    ? "group-hover:bg-navy"
                                                    : ""
                                            }`}
                                        />
                                    </Link>
                                );
                            })}

                            {/* Admissions */}
                            <ApplyButton
                                className={`group relative text-sm font-medium transition-colors ${
                                    scrolled
                                        ? "text-ink/80 hover:text-navy"
                                        : "text-white/90 hover:text-white"
                                }`}
                            >
                                Admissions

                                <span
                                    className={`absolute -bottom-1 left-0 h-px w-0 bg-navy transition-all duration-200 group-hover:w-full`}
                                />
                            </ApplyButton>
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
                            className="flex flex-col gap-1.5 p-2 md:hidden"
                            aria-label="Open menu"
                            aria-expanded={open}
                            onClick={() => setOpen(true)}
                        >
                            <FaBars
                                size={20}
                                className={`transition-colors ${
                                    scrolled
                                        ? "text-navy"
                                        : "text-white"
                                }`}
                            />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Overlay */}
            <div
                className={`fixed inset-0 z-50 transition-opacity duration-200 md:hidden ${
                    open
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0"
                }`}
            >
                <div
                    className="absolute inset-0 bg-ink/70 backdrop-blur-md"
                    onClick={() => setOpen(false)}
                />

                <div
                    className={`relative mx-4 mt-4 flex flex-col gap-3 transition-transform duration-200 ${
                        open
                            ? "translate-y-0"
                            : "-translate-y-3"
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
                            className="text-paper/80 transition-colors hover:text-paper"
                        >
                            <FaTimes size={20} />
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <div className="overflow-hidden rounded-2xl bg-ink/95 shadow-xl">
                        <nav className="flex flex-col divide-y divide-paper/10">
                            {links.map((link) => {
                                const isActive =
                                    active === link.id;

                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() =>
                                            handleNavClick(link.id)
                                        }
                                        className={`px-5 py-4 text-center text-base font-medium transition-colors ${
                                            isActive
                                                ? "bg-paper/5 text-accent"
                                                : "text-paper/90 hover:bg-paper/5 hover:text-white"
                                        }`}
                                    >
                                        {link.label}

                                        {isActive && (
                                            <span className="mx-auto mt-1 block h-px w-8 bg-accent" />
                                        )}
                                    </Link>
                                );
                            })}

                            {/* Mobile Admissions */}
                            <ApplyButton
                                onClick={() => setOpen(false)}
                                className="w-full px-5 py-4 text-center text-base font-medium text-paper/90 transition-colors hover:bg-paper/5 hover:text-white"
                            >
                                Admissions
                            </ApplyButton>
                        </nav>

                        <div className="p-4">
                            <ApplyButton
                                onClick={() => setOpen(false)}
                                className="flex w-full items-center justify-center gap-2 rounded-full bg-paper px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white"
                            >
                                Apply Now
                                <FiArrowUpRight className="h-4 w-4" />
                            </ApplyButton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}