"use client";

import { useState } from "react";
import {
    ArrowUpRight,
    CheckCircle2,
} from "lucide-react";

const initialFormData = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
};

export default function ContactForm() {
    const [formData, setFormData] = useState(initialFormData);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        setLoading(true);

        // Simulate submission
        await new Promise((resolve) =>
            setTimeout(resolve, 1000)
        );

        setLoading(false);
        setSubmitted(true);
    }

    function handleNewMessage() {
        setFormData(initialFormData);
        setSubmitted(false);
    }

    return (
        <div className="rounded-3xl border border-navy/10 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:p-8 lg:p-10">
            {submitted ? (
                /* Success Message */
                <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                        <CheckCircle2 className="h-8 w-8" />
                    </div>

                    <h2 className="mt-6 font-heading text-3xl font-semibold text-navy">
                        Message Sent!
                    </h2>

                    <p className="mt-4 max-w-md text-sm leading-7 text-ink/60 sm:text-base">
                        Thank you for reaching out to Eagles High
                        Academy. Your message has been received
                        successfully.
                    </p>

                    <div className="mt-6 max-w-md rounded-2xl bg-navy/5 p-5">
                        <p className="text-sm leading-6 text-ink/60">
                            Our team will review your enquiry and
                            get back to you through the email address
                            or phone number you provided.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={handleNewMessage}
                        className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy/90 hover:shadow-lg"
                    >
                        Send Another Message
                        <ArrowUpRight className="h-4 w-4" />
                    </button>
                </div>
            ) : (
                <>
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                            Send a message
                        </p>

                        <h2 className="mt-2 font-heading text-2xl font-semibold text-navy sm:text-3xl">
                            How can we help?
                        </h2>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="mt-8 space-y-5"
                    >
                        <div className="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-medium text-navy"
                                >
                                    Full Name
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    required
                                    className="w-full rounded-xl border border-navy/10 bg-paper px-4 py-3 text-sm outline-none transition placeholder:text-ink/35 focus:border-accent focus:ring-4 focus:ring-accent/10"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-medium text-navy"
                                >
                                    Email Address
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    required
                                    className="w-full rounded-xl border border-navy/10 bg-paper px-4 py-3 text-sm outline-none transition placeholder:text-ink/35 focus:border-accent focus:ring-4 focus:ring-accent/10"
                                />
                            </div>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="mb-2 block text-sm font-medium text-navy"
                                >
                                    Phone Number
                                </label>

                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+234..."
                                    className="w-full rounded-xl border border-navy/10 bg-paper px-4 py-3 text-sm outline-none transition placeholder:text-ink/35 focus:border-accent focus:ring-4 focus:ring-accent/10"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="mb-2 block text-sm font-medium text-navy"
                                >
                                    Subject
                                </label>

                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-xl border border-navy/10 bg-paper px-4 py-3 text-sm text-ink outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/10"
                                >
                                    <option value="">
                                        Select a subject
                                    </option>
                                    <option value="admissions">
                                        Admissions
                                    </option>
                                    <option value="general">
                                        General Enquiry
                                    </option>
                                    <option value="school-tour">
                                        School Visit
                                    </option>
                                    <option value="academics">
                                        Academics
                                    </option>
                                    <option value="other">
                                        Other
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="mb-2 block text-sm font-medium text-navy"
                            >
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us how we can help..."
                                required
                                className="w-full resize-none rounded-xl border border-navy/10 bg-paper px-4 py-3 text-sm outline-none transition placeholder:text-ink/35 focus:border-accent focus:ring-4 focus:ring-accent/10"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy/90 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                        >
                            {loading ? (
                                "Sending..."
                            ) : (
                                <>
                                    Send Message
                                    <ArrowUpRight className="h-4 w-4" />
                                </>
                            )}
                        </button>
                    </form>
                </>
            )}
        </div>
    );
}