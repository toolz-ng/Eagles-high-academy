"use client";

import { useState } from "react";
import ActivityCard from "./ActivityCard";
import ActivityLightbox from "./ActivityLightbox";
import { activities } from "./activities";

export default function StudentLife() {
    const [activeIndex, setActiveIndex] = useState(null);

    function openActivity(index) {
        setActiveIndex(index);
    }

    function closeActivity() {
        setActiveIndex(null);
    }

    function showPrevious() {
        setActiveIndex((current) => {
            if (current === null) return null;

            return (
                (current - 1 + activities.length) %
                activities.length
            );
        });
    }

    function showNext() {
        setActiveIndex((current) => {
            if (current === null) return null;

            return (current + 1) % activities.length;
        });
    }

    return (
        <>
            <section
                className="bg-tint py-20"
                id="student-life"
            >
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-sm font-semibold text-accent">
                            Student life
                        </p>

                        <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">
                            Learning doesn&apos;t stop when the{" "}
                            <span className="text-accent">
                                bell rings.
                            </span>
                        </h2>

                        <p className="mt-4 text-ink/70">
                            From sports and creative arts to clubs,
                            trips, and leadership opportunities,
                            students have plenty of ways to discover
                            their interests, build friendships, and
                            create lasting memories.
                        </p>
                    </div>

                    {/* Activities */}
                    <div className="mt-12 space-y-6">
                        {/* Featured */}
                        <ActivityCard
                            {...activities[0]}
                            featured
                            onClick={() => openActivity(0)}
                        />

                        {/* Other Activities */}
                        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                            {activities
                                .slice(1)
                                .map((activity, index) => (
                                    <ActivityCard
                                        key={activity.title}
                                        {...activity}
                                        onClick={() =>
                                            openActivity(index + 1)
                                        }
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Lightbox */}
            <ActivityLightbox
                activities={activities}
                activeIndex={activeIndex}
                onClose={closeActivity}
                onPrevious={showPrevious}
                onNext={showNext}
            />
        </>
    );
}