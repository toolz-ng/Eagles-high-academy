"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useAdmission } from "@/app/context/AdmissionContext";

import AdmissionForm from "./AdmissionForm";
import AdmissionSuccess from "./AdmissionSuccess";

const initialForm = {
    studentName: "",
    dateOfBirth: "",
    gender: "",
    classApplyingFor: "",
    previousSchool: "",

    guardianName: "",
    relationship: "",
    phone: "",
    email: "",
    address: "",

    academicSession: "",
    additionalInfo: "",

    paymentReference: "",
    paymentScreenshot: null,
};

export default function AdmissionModal() {
    const { isOpen, closeAdmission } = useAdmission();

    const [form, setForm] = useState(initialForm);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (!isOpen) return;

        document.body.style.overflow = "hidden";

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                handleClose();
            }
        };

        document.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = "";
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen]);

    if (!isOpen) return null;

    function handleChange(event) {
        const { name, value, files } = event.target;

        setForm((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();

        setLoading(true);

        await new Promise((resolve) =>
            setTimeout(resolve, 1200)
        );

        setLoading(false);
        setSuccess(true);
    }

    function handleClose() {
        closeAdmission();

        setTimeout(() => {
            setForm(initialForm);
            setSuccess(false);
            setLoading(false);
        }, 300);
    }

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/70 p-3 backdrop-blur-sm sm:p-5"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                    handleClose();
                }
            }}
        >
            <div className="relative flex max-h-[95vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-paper shadow-2xl">

                {/* Header */}
                <div className="flex shrink-0 items-center justify-between border-b border-black/10 px-5 py-4 sm:px-7">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                            Admissions
                        </p>

                        <h2 className="mt-1 font-heading text-2xl font-semibold text-navy sm:text-3xl">
                            Application Form
                        </h2>
                    </div>

                    <button
                        type="button"
                        onClick={handleClose}
                        aria-label="Close application form"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-navy transition hover:bg-navy hover:text-white"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {success ? (
                    <AdmissionSuccess onClose={handleClose} />
                ) : (
                    <AdmissionForm
                        form={form}
                        loading={loading}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                    />
                )}
            </div>
        </div>
    );
}