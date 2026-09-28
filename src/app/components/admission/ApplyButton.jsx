"use client";

import { useAdmission } from "@/app/context/AdmissionContext";

export default function ApplyButton({
    children = "Apply Now",
    className = "",
}) {
    const { openAdmission } = useAdmission();

    return (
        <button
            type="button"
            onClick={openAdmission}
            className={className}
        >
            {children}
        </button>
    );
}