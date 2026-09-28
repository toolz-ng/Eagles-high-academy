"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
    ArrowLeft,
    ArrowRight,
    X,
} from "lucide-react";

export default function CampusLightbox({
    spaces,
    selectedImage,
    onClose,
    onNext,
    onPrevious,
}) {
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const minSwipeDistance = 50;

    // Keyboard controls
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }

            if (event.key === "ArrowRight") {
                onNext();
            }

            if (event.key === "ArrowLeft") {
                onPrevious();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose, onNext, onPrevious]);

    // Prevent page scrolling
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    const handleTouchStart = (event) => {
        setTouchEnd(null);
        setTouchStart(event.targetTouches[0].clientX);
    };

    const handleTouchMove = (event) => {
        setTouchEnd(event.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;

        if (distance > minSwipeDistance) {
            onNext();
        }

        if (distance < -minSwipeDistance) {
            onPrevious();
        }
    };

    const space = spaces[selectedImage];

    return (
        <div
            className="
                fixed inset-0 z-[100]
                flex items-center justify-center
                bg-black/95
                px-4 py-6
            "
            onClick={onClose}
        >
            {/* Close */}
            <button
                type="button"
                onClick={onClose}
                aria-label="Close image viewer"
                className="
                    absolute right-4 top-4 z-20
                    flex h-11 w-11 items-center justify-center
                    rounded-full
                    bg-white/10 text-white
                    backdrop-blur-md
                    transition hover:bg-white/20
                    sm:right-6 sm:top-6
                "
            >
                <X className="h-6 w-6" />
            </button>

            {/* Counter */}
            <div
                className="
                    absolute left-1/2 top-5
                    -translate-x-1/2
                    rounded-full
                    bg-white/10
                    px-4 py-2
                    text-xs font-medium
                    text-white/80
                    backdrop-blur-md
                    sm:top-6
                "
            >
                {selectedImage + 1} / {spaces.length}
            </div>

            {/* Previous */}
            <button
                type="button"
                onClick={(event) => {
                    event.stopPropagation();
                    onPrevious();
                }}
                aria-label="Previous image"
                className="
                    absolute left-3 top-1/2 z-20
                    flex h-11 w-11
                    -translate-y-1/2
                    items-center justify-center
                    rounded-full
                    bg-white/10 text-white
                    backdrop-blur-md
                    transition hover:bg-white/20
                    sm:left-6 sm:h-12 sm:w-12
                "
            >
                <ArrowLeft className="h-5 w-5" />
            </button>

            {/* Next */}
            <button
                type="button"
                onClick={(event) => {
                    event.stopPropagation();
                    onNext();
                }}
                aria-label="Next image"
                className="
                    absolute right-3 top-1/2 z-20
                    flex h-11 w-11
                    -translate-y-1/2
                    items-center justify-center
                    rounded-full
                    bg-white/10 text-white
                    backdrop-blur-md
                    transition hover:bg-white/20
                    sm:right-6 sm:h-12 sm:w-12
                "
            >
                <ArrowRight className="h-5 w-5" />
            </button>

            {/* Image */}
            <div
                className="
                    relative flex h-full w-full
                    max-w-6xl
                    items-center justify-center
                "
                onClick={(event) => event.stopPropagation()}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div className="relative h-[70vh] w-full">
                    <Image
                        src={space.image}
                        alt={space.name}
                        fill
                        priority
                        className="object-contain"
                        sizes="100vw"
                    />
                </div>

                {/* Image title */}
                <div
                    className="
                        absolute bottom-2 left-1/2
                        -translate-x-1/2
                        whitespace-nowrap
                        rounded-full
                        bg-black/50
                        px-4 py-2
                        text-sm font-medium
                        text-white
                        backdrop-blur-md
                    "
                >
                    {space.name}
                </div>
            </div>
        </div>
    );
}