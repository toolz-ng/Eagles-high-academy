import { Quote, Star } from "lucide-react";

export default function TestimonialCard({
    name,
    role,
    initials,
    quote,
}) {
    return (
        <article className="group relative h-full overflow-hidden rounded-3xl border border-navy/10 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:p-7">

            {/* Decorative Quote */}
            <div className="absolute -right-3 -top-4 text-[100px] font-serif leading-none text-accent/5 transition-colors duration-500 group-hover:text-accent/10">
                ”
            </div>

            {/* Stars */}
            <div className="relative flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        className="h-4 w-4 fill-accent text-accent"
                    />
                ))}
            </div>

            {/* Quote */}
            <p className="relative mt-6 text-[15px] leading-7 text-navy/70">
                “{quote}”
            </p>

            {/* Divider */}
            <div className="my-6 h-px bg-navy/10" />

            {/* Author */}
            <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white">
                    {initials}
                </div>

                <div>
                    <h3 className="text-sm font-semibold text-navy">
                        {name}
                    </h3>

                    <p className="mt-0.5 text-xs text-navy/50">
                        {role}
                    </p>
                </div>
            </div>
        </article>
    );
}