"use client";

import { useState } from "react";
import CampusCard from "./CampusCard";
import CampusLightbox from "./CampusLightbox";

export default function CampusGallery({ spaces }) {
    const [selectedImage, setSelectedImage] = useState(null);

    const closeModal = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        setSelectedImage((current) => {
            if (current === null) return null;

            return (current + 1) % spaces.length;
        });
    };

    const previousImage = () => {
        setSelectedImage((current) => {
            if (current === null) return null;

            return (current - 1 + spaces.length) % spaces.length;
        });
    };

    return (
        <>
            <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
                {spaces.map((space, index) => (
                    <CampusCard
                        key={space.name}
                        space={space}
                        index={index}
                        onClick={() => setSelectedImage(index)}
                    />
                ))}
            </div>

            {selectedImage !== null && (
                <CampusLightbox
                    spaces={spaces}
                    selectedImage={selectedImage}
                    onClose={closeModal}
                    onNext={nextImage}
                    onPrevious={previousImage}
                />
            )}
        </>
    );
}