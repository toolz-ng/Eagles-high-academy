import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ActivityCard({
  title,
  description,
  image,
  featured = false,
}) {
    return (
        <div
        className={`group relative overflow-hidden rounded-2xl ${
            featured ? "aspect-[16/7] sm:aspect-[21/8]" : "aspect-[3/4]"
        }`}
        >
            <Image
                src={image}
                alt={title}
                fill
                sizes={
                featured
                    ? "100vw"
                    : "(min-width: 1024px) 25vw, 50vw"
                }
                className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <div className="flex items-center justify-between gap-3">
                <h3
                    className={`font-semibold text-paper ${
                    featured ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
                    }`}
                >
                    {title}
                </h3>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-paper/15 text-paper backdrop-blur-md transition-colors duration-300 group-hover:bg-accent">
                    <ArrowUpRight className="h-4 w-4" />
                </div>
                </div>

                {/* Hover-reveal description on a blurred navy panel */}
                <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100">
                    <div className="overflow-hidden">
                        <p className="mt-3 rounded-xl bg-navy/70 backdrop-blur-md px-3.5 py-3 text-sm leading-6 text-paper/90">
                        {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}