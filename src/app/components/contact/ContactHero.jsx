import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ContactHero() {
    return (
        <section className="relative min-h-[520px] overflow-hidden">
            {/* Hero Image */}
            <Image
                src="/images/classroom.webp"
                alt="Eagles High Academy campus"
                fill
                priority
                className="object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/85" />

            {/* Subtle accent glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(251,167,65,0.18),transparent_35%)]" />

            <div className="relative z-10 mx-auto flex min-h-[520px] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

                {/* Back */}
                <Link
                    href="/"
                    className="absolute pt-10 md:pt-3 left-2 top-13 md:top-16 inline-flex items-center gap-2 text-sm font-medium text-white/75 transition hover:text-white sm:left-6 lg:left-8"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Home
                </Link>

                {/* Content */}
                <div className="max-w-3xl pt-10">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                        Contact Us
                    </p>

                    <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight text-paper sm:text-5xl lg:text-6xl">
                        We'd love to hear from you.
                    </h1>

                    <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
                        Whether you have a question about admissions, want to
                        learn more about our school, or simply want to speak
                        with us, our team is here to help.
                    </p>
                </div>
            </div>
        </section>
    );
}