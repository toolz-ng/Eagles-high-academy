"use client";

import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonials";

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(1);

    useEffect(() => {
        const updateItemsPerView = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerView(3);
            } else if (window.innerWidth >= 640) {
                setItemsPerView(2);
            } else {
                setItemsPerView(1);
            }
        };

        updateItemsPerView();

        window.addEventListener("resize", updateItemsPerView);

        return () => {
            window.removeEventListener("resize", updateItemsPerView);
        };
    }, []);

    const maxIndex = Math.max(
        testimonials.length - itemsPerView,
        0
    );

    useEffect(() => {
        if (current > maxIndex) {
            setCurrent(0);
        }
    }, [itemsPerView, current, maxIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) =>
                prev >= maxIndex ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [maxIndex]);

    const goToSlide = (index) => {
        setCurrent(index);
    };

    return (
        <section className="bg-tint/40 py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                        Testimonials
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl lg:text-5xl">
                        Loved by our{" "}
                        <span className="text-accent">
                            school community.
                        </span>
                    </h2>

                    <p className="mt-4 text-base leading-7 text-navy/60">
                        Hear from parents and members of our community
                        about their experience with our school.
                    </p>
                </div>

                {/* Slider */}
                <div className="mt-12 overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-out"
                        style={{
                            transform: `translateX(-${
                                current * (100 / itemsPerView)
                            }%)`,
                        }}
                    >
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.name}
                                className="w-full shrink-0 px-2 sm:w-1/2 lg:w-1/3"
                            >
                                <TestimonialCard
                                    {...testimonial}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation */}
                <div className="mt-8 flex justify-center gap-2">
                    {Array.from({
                        length: maxIndex + 1,
                    }).map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to testimonial slide ${
                                index + 1
                            }`}
                            className={`
                                h-2 rounded-full transition-all duration-300
                                ${
                                    current === index
                                        ? "w-7 bg-accent"
                                        : "w-2 bg-navy/20 hover:bg-navy/40"
                                }
                            `}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}