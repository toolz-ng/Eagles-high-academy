import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
    return (
        <section className="py-20" id="about">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center gap-x-16">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-navy/10 bg-tint order-2 lg:order-1">
                        <Image
                        src="/images/hero1.webp"
                        alt="Eagles High Academy campus"
                        fill
                        sizes="(min-width: 1024px) 40vw, 90vw"
                        className="object-cover"
                        />
                    </div>

                    <div className="order-1 lg:order-2">
                        <p className="text-accent font-semibold text-sm">Est. 1996</p>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-navy">
                        Nearly three decades of nurturing excellence.
                        </h2>
                        <p className="mt-5 text-ink/70 max-w-prose">
                        Founded in 1996, Eagles High Academy has grown from a single
                        nursery classroom in Yenagoa into a full Nursery-to-Secondary
                        school trusted by families across Bayelsa State. Our mission
                        has stayed the same from day one: give every child a strong
                        academic foundation, room to explore the arts and sports, and
                        a genuinely caring community to grow up in.
                        </p>
                        <p className="mt-4 text-ink/70 max-w-prose">
                        Today we're home to over 1,200 students and 85 dedicated
                        teaching staff, with alumni who've gone on to universities and
                        careers across Nigeria and abroad — still carrying the same
                        values they learned here.
                        </p>
                        {/*<Link
                        href="/about"
                        className="mt-7 inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-paper hover:bg-navy-dark transition-colors"
                        >
                            Discover our story
                        <ArrowRight className="h-4 w-4" />
                        </Link> */}
                    </div>
                </div>
            </div>
        </section>
    );
}