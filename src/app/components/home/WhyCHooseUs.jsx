import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import ApplyButton from "../admission/ApplyButton";

const reasons = [
  "Experienced, dedicated teaching staff across all levels",
  "Modern classrooms, science and computer labs",
  "Safe, secure campus with round-the-clock supervision",
  "Strong track record — 100% exam pass rate",
  "Wide range of sports, arts, and extracurricular clubs",
  "Small class sizes for more one-on-one attention",
];

export default function WhyChooseUs() {
    return (
        <section className="bg-tint py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                        Why choose us
                        </p>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-navy">
                        A school families trust, session after session.
                        </h2>
                        <p className="mt-4 text-ink/70 max-w-prose">
                        From experienced teachers to a genuinely safe campus, here's
                        what parents tell us matters most about Eagles High Academy.
                        </p>

                        <ul className="mt-8 space-y-4">
                        {reasons.map((reason) => (
                            <li key={reason} className="flex items-start gap-3">
                            <CheckCircle2
                                className="h-5 w-5 text-accent shrink-0 mt-0.5"
                                strokeWidth={1.75}
                            />
                            <span className="text-ink/80">{reason}</span>
                            </li>
                        ))}
                        </ul>

                        <ApplyButton className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-dark transition-colors">
                            Apply Now
                            <ArrowRight className="h-4 w-4" />
                        </ApplyButton>
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-navy/10 bg-paper">
                        <Image
                        src="/images/hero3.webp"
                        alt="Students learning at Eagles High Academy"
                        fill
                        sizes="(min-width: 1024px) 40vw, 90vw"
                        className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}