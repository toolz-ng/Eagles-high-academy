"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FAQItem from "./FAQItem";
import { faqs } from "./FaqData";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index) => {
        setOpenIndex((current) =>
            current === index ? null : index
        );
    };

    return (
        <section className="bg-tint/40 py-20 sm:py-24">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                        FAQs
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl lg:text-5xl">
                        Everything you need to{" "}
                        <span className="text-accent">
                            know.
                        </span>
                    </h2>

                    <p className="mt-4 text-base leading-7 text-navy/60">
                        Find answers to some of the questions parents
                        and prospective families ask most often.
                    </p>
                </div>

                {/* Questions */}
                <div className="mt-12 rounded-3xl border border-navy/10 bg-white px-5 shadow-sm sm:px-8">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={faq.question}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-10 rounded-3xl bg-navy px-6 py-5 sm:px-10">
                    <div className="flex justify-between items-center text-center gap-6 sm:gap-10 sm:flex-row flex-col">
                        <div>
                            <h3 className="mt-3 text-2xl sm:text-3xl font-semibold text-white">
                                Still have questions?
                            </h3>

                            <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-white/70">
                                Our team is happy to help. Reach out to us and we'll provide
                                the information you need.
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="mt-3 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                        >
                            Get in touch
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}