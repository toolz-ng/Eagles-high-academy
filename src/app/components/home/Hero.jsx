"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import ApplyButton from "../admission/ApplyButton";

const slides = ["/images/hero1.webp", "/images/hero2.webp", "/images/hero3.webp"];
const SLIDE_DURATION = 5000;

export default function Hero() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
        setActive((i) => (i + 1) % slides.length);
        }, SLIDE_DURATION);
        return () => clearInterval(id);
    }, []);

    return (
        <section className="relative overflow-hidden h-screen flex items-center">
        {/* Background slideshow */}
        <div className="absolute inset-0">
            {slides.map((src, i) => (
            <Image
                key={src}
                src={src}
                alt="Students and life at Eagles High Academy"
                fill
                sizes="100vw"
                priority={i === 0}
                className={`object-cover transition-opacity duration-1000 ease-in-out ${
                i === active ? "opacity-100" : "opacity-0"
                }`}
            />
            ))}
            {/* Overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/50 to-black/55" />
        </div>

        {/* Content */}
        <div className="flex justify-center items-center text-center relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 w-full">
            <div className="max-w-xl">
            <p className="text-accent font-semibold text-sm">
                Admissions open for 2026/2027
            </p>
            <h1 className="mt-3 w-full text-5xl font-semibold leading-tight text-paper sm:text-6xl">
                Raising eagles. Shaping tomorrow.
            </h1>
            <p className="mt-5 text-paper/80 max-w-prose">
                Eagles High Academy blends strong academics, creative arts, and
                hands-on learning to prepare every child for what comes next —
                from Nursery through Secondary school.
            </p>
            <div className="mt-8 flex justify-center items-center gap-4">
    
                <ApplyButton className="inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark">
                    Apply Now
                    <ArrowUpRight className="h-4 w-4" />
                </ApplyButton>
                <Link
                href="#about"
                className="inline-flex items-center gap-1.5 rounded-md border border-paper/40 px-6 py-3 text-sm font-semibold text-paper hover:bg-paper/10 transition-colors"
                >
                Learn more
                <ChevronRight className="h-4 w-4" />
                </Link>
            </div>
            </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {slides.map((src, i) => (
            <button
                key={src}
                type="button"
                aria-label={`Show slide ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-6 bg-paper" : "w-1.5 bg-paper/40"
                }`}
            />
            ))}
        </div>
        </section>
    );
}