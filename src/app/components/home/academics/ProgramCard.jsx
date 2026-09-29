import { ArrowUpRight } from "lucide-react";

export default function ProgramCard({ title, description }) {
    return (
        <div className="group rounded-2xl border border-navy/10 bg-paper p-6 transition-all duration-300 hover:-translate-y-1 active:-translate-y-1 hover:shadow-lg active:shadow-lg sm:p-7">
            <div className="flex items-start justify-between gap-4">
                <div>
                <p className="text-sm font-medium text-accent">
                    Learning Programme
                </p>
                <h3 className="mt-2 text-xl font-semibold text-navy">{title}</h3>
                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tint text-navy transition-colors duration-300 group-hover:bg-accent group-hover:text-white group-active:bg-accent group-active:text-white">
                <ArrowUpRight className="h-4 w-4" />
                </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-ink/70">{description}</p>

            {/*<div className="mt-6 h-px w-full bg-navy/10" />

            <p className="mt-4 text-sm font-semibold text-navy transition-colors group-hover:text-accent">
                Explore programme
            </p> */}
        </div>
    );
}