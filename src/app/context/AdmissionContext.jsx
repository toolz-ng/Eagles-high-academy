"use client";

import { createContext, useContext, useState } from "react";

const AdmissionContext = createContext(null);

export function AdmissionProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    function openAdmission() {
        setIsOpen(true);
    }

    function closeAdmission() {
        setIsOpen(false);
    }

    return (
        <AdmissionContext.Provider
            value={{
                isOpen,
                openAdmission,
                closeAdmission,
            }}
        >
            {children}
        </AdmissionContext.Provider>
    );
}

export function useAdmission() {
    const context = useContext(AdmissionContext);

    if (!context) {
        throw new Error(
            "useAdmission must be used inside AdmissionProvider"
        );
    }

    return context;
}