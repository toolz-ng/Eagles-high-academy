import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CampusCard({ space, index, onClick }) {
    const isWide =
        index === 0 ||
        index === 3 ||
        index === 4;

    return (
        <button
            type="button"
            onClick={onClick}
            className={`
                group relative overflow-hidden rounded-3xl
                border border-navy/10 bg-white
                text-left shadow-sm
                transition-all duration-500
                hover:-translate-y-1 active:-translate-y-1 hover:shadow-xl
                active:shadow-xl
                focus:outline-none focus:ring-2
                focus:ring-accent focus:ring-offset-2

                ${isWide ? "lg:col-span-2" : ""}
            `}
        >
            <div
                className={`
                    relative overflow-hidden aspect-[4/3]
                    ${isWide ? "lg:aspect-[16/8]" : ""}
                `}
            >
                <Image
                    src={space.image}
                    alt={space.name}
                    fill
                    sizes={
                        isWide
                            ? "(min-width: 1024px) 65vw, 100vw"
                            : "(min-width: 1024px) 33vw, 100vw"
                    }
                    className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                        group-active:scale-105
                    "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p className="text-xs font-medium uppercase tracking-wider text-white/70">
                        Campus Space
                    </p>

                    <h3 className="mt-1 text-lg font-semibold text-white sm:text-xl">
                        {space.name}
                    </h3>
                </div>

                <div
                    className="
                        absolute right-5 top-5
                        flex h-10 w-10 items-center justify-center
                        rounded-full bg-white/15
                        text-white backdrop-blur-md
                        opacity-0
                        transition-all duration-300
                        group-hover:opacity-100
                        group-active:opacity-100
                    "
                >
                    <ArrowRight className="h-4 w-4" />
                </div>
            </div>
        </button>
    );
}