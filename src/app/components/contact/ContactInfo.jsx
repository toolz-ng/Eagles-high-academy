import {
    MapPin,
    Phone,
    Mail,
    Clock,
} from "lucide-react";

const contactDetails = [
    {
        icon: MapPin,
        title: "Visit Us",
        text: "123 School Avenue, Lagos, Nigeria",
    },
    {
        icon: Phone,
        title: "Call Us",
        text: "+234 800 000 0000",
        href: "tel:+2348000000000",
    },
    {
        icon: Mail,
        title: "Email Us",
        text: "info@eagleshighschool.com",
        href: "mailto:info@eagleshighschool.com",
    },
    {
        icon: Clock,
        title: "School Hours",
        text: "Monday – Friday, 8:00 AM – 4:00 PM",
    },
];

export default function ContactInfo() {
    return (
        <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Get in touch
            </p>

            <h2 className="mt-3 font-heading text-3xl font-semibold text-navy sm:text-4xl">
                We're here to help.
            </h2>

            <p className="mt-4 max-w-lg leading-7 text-ink/65">
                Have a question or need more information? Reach out to us
                through any of the channels below.
            </p>

            <div className="mt-8 space-y-5">
                {contactDetails.map((item) => {
                    const Icon = item.icon;

                    const content = (
                        <div className="flex gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                                <Icon className="h-5 w-5" />
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-navy">
                                    {item.title}
                                </p>

                                <p className="mt-1 text-sm leading-6 text-ink/60">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    );

                    return item.href ? (
                        <a
                            key={item.title}
                            href={item.href}
                            className="block transition hover:translate-x-1"
                        >
                            {content}
                        </a>
                    ) : (
                        <div key={item.title}>{content}</div>
                    );
                })}
            </div>
        </div>
    );
}