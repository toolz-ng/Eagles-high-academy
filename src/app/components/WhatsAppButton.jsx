"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    const phoneNumber = "2348012345678";

    const message = encodeURIComponent(
        "Hello Eagles High Academy, I would like to make an enquiry."
    );

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Eagles High Academy on WhatsApp"
            className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg shadow-black/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:bottom-6 sm:right-6"
        >
            <FaWhatsapp className="h-6 w-6 shrink-0" />

            <span className="text-sm font-semibold">
                Chat With Us
            </span>
        </a>
    );
}