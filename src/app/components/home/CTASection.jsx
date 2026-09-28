import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ApplyButton from "../admission/ApplyButton";

export default function CTASection() {
    return (
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-navy px-6 py-14 text-center sm:px-10 sm:py-16 lg:px-20">
                
                {/* Decorative elements */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

                <div className="relative z-10 mx-auto max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                        Begin the journey
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Ready to take the next step?
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                        Give your child an environment where curiosity is encouraged,
                        talents are nurtured, and every learner is supported to grow
                        with confidence.
                    </p>

                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <ApplyButton
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            Apply for Admission
                            <ArrowUpRight className="h-4 w-4" />
                        </ApplyButton>

                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
                        >
                            Contact Us
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}