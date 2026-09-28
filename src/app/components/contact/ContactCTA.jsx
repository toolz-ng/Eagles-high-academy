import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ApplyButton from "../admission/ApplyButton";

export default function ContactCTA() {
    return (
        <section className="px-4 pb-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl rounded-3xl bg-navy px-6 py-10 sm:px-10">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wider text-white">
                            Ready to get started?
                        </p>

                        <h2 className="mt-2 font-heading text-2xl font-semibold text-white sm:text-3xl">
                            Take the next step with Eagles High School.
                        </h2>
                    </div>

                    <ApplyButton
                        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
                    >
                        Explore Admissions
                        <ArrowRight className="h-4 w-4" />
                    </ApplyButton>
                </div>
            </div>
        </section>
    );
}