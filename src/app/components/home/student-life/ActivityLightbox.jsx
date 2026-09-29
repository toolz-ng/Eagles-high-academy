"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
    X,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

export default function ActivityLightbox({
    activities,
    activeIndex,
    onClose,
    onPrevious,
    onNext,
}) {
    const activity = activities[activeIndex];

    useEffect(() => {
        if (activeIndex === null) return;

        document.body.style.overflow = "hidden";

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }

            if (event.key === "ArrowLeft") {
                onPrevious();
            }

            if (event.key === "ArrowRight") {
                onNext();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            document.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, [
        activeIndex,
        onClose,
        onPrevious,
        onNext,
    ]);

    if (activeIndex === null || !activity) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm sm:p-6"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
        >
            {/* Close */}
            <button
                type="button"
                onClick={onClose}
                aria-label="Close image"
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-paper/10 text-paper backdrop-blur-md transition hover:bg-paper hover:text-ink sm:right-6 sm:top-6"
            >
                <X className="h-5 w-5" />
            </button>

            {/* Previous */}
            {activities.length > 1 && (
                <button
                    type="button"
                    onClick={onPrevious}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-paper/10 text-paper backdrop-blur-md transition hover:bg-paper hover:text-ink sm:left-6"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>
            )}

            {/* Image */}
            <div className="relative h-[75vh] w-full max-w-5xl overflow-hidden rounded-2xl">
                <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    priority
                    sizes="100vw"
                    className="object-contain"
                />

                {/* Bottom information */}
                <div className="absolute inset-x-0 bottom-0 flex justify-center items-center flex-col bg-gradient-to-t from-ink/80 via-ink/50 to-transparent px-5 pb-5 pt-16 sm:px-7">
                    <h2 className="font-heading text-xl font-semibold text-paper sm:text-2xl">
                        {activity.title}
                    </h2>

                    <p className="mt-1 max-w-2xl text-sm text-center text-paper/70">
                        {activity.description}
                    </p>
                </div>
            </div>

            {/* Next */}
            {activities.length > 1 && (
                <button
                    type="button"
                    onClick={onNext}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-paper/10 text-paper backdrop-blur-md transition hover:bg-paper hover:text-ink sm:right-6"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>
            )}

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-paper/10 px-3 py-1.5 text-xs font-medium text-paper backdrop-blur-md">
                {activeIndex + 1} / {activities.length}
            </div>
        </div>
    );
}