"use client";

import { useState } from "react";
import { CreditCard, Upload, Copy, Check } from "lucide-react";
import FormInput from "./FormInput";
import SectionHeading from "./SectionHeading";

export default function ApplicationFee({ form, onChange }) {
    const [copied, setCopied] = useState(false);

    async function handleCopy() {
        await navigator.clipboard.writeText("1234567890");

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }

    return (
        <section className="border-t border-black/10 pt-8">
            <SectionHeading
                icon={<CreditCard className="h-5 w-5" />}
                title="Application Fee"
                description="Complete the payment and provide your transaction details for review."
            />

            <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                            Application Fee
                        </p>

                        <p className="mt-1 font-heading text-3xl font-semibold text-navy">
                            ₦20,000
                        </p>
                    </div>

                    <div className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-navy shadow-sm">
                        Required
                    </div>
                </div>

                <div className="mt-5 rounded-xl bg-white p-4">
                    <p className="mb-4 text-sm font-semibold text-navy">
                        Payment Account
                    </p>

                    <div className="space-y-3 text-sm">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                            <span className="text-ink/50">
                                Bank Name
                            </span>

                            <span className="font-semibold text-ink">
                                Zenith Bank
                            </span>
                        </div>

                        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                            <span className="text-ink/50">
                                Account Name
                            </span>

                            <span className="font-semibold text-ink">
                                Eagles High Academy
                            </span>
                        </div>

                        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                            <span className="text-ink/50">
                                Account Number
                            </span>

                            <div className="flex items-center gap-2">
                                <span className="font-semibold tracking-wide text-navy">
                                    1234567890
                                </span>

                                <button
                                    type="button"
                                    onClick={handleCopy}
                                    className={`flex h-8 items-center justify-center gap-1.5 rounded-lg px-2.5 text-xs font-medium transition ${
                                        copied
                                            ? "bg-green-100 text-green-600"
                                            : "bg-navy/5 text-navy hover:bg-navy hover:text-white"
                                    }`}
                                    aria-label={
                                        copied
                                            ? "Account number copied"
                                            : "Copy account number"
                                    }
                                >
                                    {copied ? (
                                        <>
                                            <Check className="h-3.5 w-3.5" />
                                            Copied
                                        </>
                                    ) : (
                                        <Copy className="h-3.5 w-3.5" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-ink/60">
                    Please transfer the application fee of ₦20,000 to
                    the account above. After payment, enter your
                    transaction reference and upload a screenshot of
                    the payment confirmation below.
                </p>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <FormInput
                    label="Payment Reference / Transaction ID"
                    name="paymentReference"
                    value={form.paymentReference}
                    onChange={onChange}
                    placeholder="Enter payment reference"
                    required
                />

                <div>
                    <label
                        htmlFor="paymentScreenshot"
                        className="mb-2 block text-sm font-medium text-navy"
                    >
                        Payment Screenshot
                        <span className="ml-1 text-accent">*</span>
                    </label>

                    <label
                        htmlFor="paymentScreenshot"
                        className="flex min-h-[48px] cursor-pointer items-center gap-3 rounded-xl border border-dashed border-black/15 bg-white px-4 text-sm text-ink/50 transition hover:border-accent hover:bg-accent/5"
                    >
                        <Upload className="h-4 w-4 shrink-0" />

                        <span className="truncate">
                            {form.paymentScreenshot
                                ? form.paymentScreenshot.name
                                : "Choose payment screenshot"}
                        </span>

                        <input
                            id="paymentScreenshot"
                            name="paymentScreenshot"
                            type="file"
                            accept="image/*"
                            onChange={onChange}
                            required
                            className="hidden"
                        />
                    </label>
                </div>
            </div>
        </section>
    );
}