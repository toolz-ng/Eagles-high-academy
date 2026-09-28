"use client";

import { ChevronDown } from "lucide-react";

export default function FAQItem({
    question,
    answer,
    isOpen,
    onClick,
}) {
    return (
        <div className="border-b border-navy/10 mx-5">
            <button
                type="button"
                onClick={onClick}
                className="
                    flex w-full items-center justify-between
                    gap-6 py-5 text-left
                    focus:outline-none
                "
                aria-expanded={isOpen}
            >
                <span className="text-sm font-semibold text-navy sm:text-base">
                    {question}
                </span>

                <span
                    className={`
                        flex h-8 w-8 shrink-0 items-center
                        justify-center rounded-full
                        transition-all duration-300
                        ${
                            isOpen
                                ? "rotate-180 bg-accent text-white"
                                : "bg-tint text-navy"
                        }
                    `}
                >
                    <ChevronDown className="h-4 w-4" />
                </span>
            </button>

            <div
                className={`
                    grid transition-all duration-300
                    ${
                        isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                    }
                `}
            >
                <div className="overflow-hidden">
                    <p className="max-w-2xl pb-5 pr-12 text-sm leading-6 text-navy/60">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
}