"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        // Connect your backend/email service here later.
        console.log(formData);
    }

    return (
        <div className="rounded-3xl border border-navy/10 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:p-8 lg:p-10">
            <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                    Send a message
                </p>

                <h2 className="mt-2 font-heading text-2xl font-semibold text-navy sm:text-3xl">
                    How can we help?
                </h2>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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
                            <option value="">Select a subject</option>
                            <option value="admissions">Admissions</option>
                            <option value="general">General Enquiry</option>
                            <option value="school-tour">School Visit</option>
                            <option value="academics">Academics</option>
                            <option value="other">Other</option>
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
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy/90 hover:shadow-lg sm:w-auto"
                >
                    Send Message
                    <ArrowUpRight className="h-4 w-4" />
                </button>
            </form>
        </div>
    );
}