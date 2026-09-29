import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-navy text-paper/90 mt-24">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                    <div className="flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper text-navy font-display text-sm">
                        EHA
                    </span>
                    <span className="font-display text-lg text-paper">
                        Eagles High Academy
                    </span>
                    </div>
                    <p className="mt-3 text-sm text-paper/70 max-w-xs">
                    Nurturing curious minds and building confident futures since
                    1996.
                    </p>
                </div>

                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-paper/60">
                    Explore
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm">
                    <li><Link href="/about" className="hover:text-accent">About</Link></li>
                    <li><Link href="/admissions" className="hover:text-accent">Admissions</Link></li>
                    <li><Link href="/news" className="hover:text-accent">Latest News</Link></li>
                    <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-paper/60">
                    Contact
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm text-paper/80">
                    <li>12 Independence Layout, Yenagoa, Bayelsa</li>
                    <li>info@eagleshighacademy.ng</li>
                    <li>+234 800 000 0000</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-paper/60">
                    Office Hours
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm text-paper/80">
                    <li>Mon – Fri: 8:00am – 4:00pm</li>
                    <li>Sat: 9:00am – 12:00pm</li>
                    </ul>
                </div>
                </div>

                <div className="mt-10 pt-6 border-t border-paper/10 text-xs text-paper/50 text-center">
                &copy; {new Date().getFullYear()} Eagles High Academy. All rights reserved.
                </div>
            </div>
        </footer>
    );
}