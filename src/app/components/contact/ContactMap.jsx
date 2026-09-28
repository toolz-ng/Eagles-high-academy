export default function ContactMap() {
    const mapUrl =
        "https://www.google.com/maps?q=Eagles%20High%20School%2C%20Portharcourt%2C%20Nigeria&output=embed";

    return (
        <section className="px-4 pb-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <div className="mb-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                        Find us
                    </p>

                    <h2 className="mt-2 font-heading text-3xl font-semibold text-navy">
                        Come visit our campus.
                    </h2>
                </div>

                <div className="overflow-hidden rounded-3xl border border-navy/10 bg-tint shadow-sm">
                    <iframe
                        src={mapUrl}
                        title="Eagles High School location"
                        className="h-[350px] w-full border-0 sm:h-[450px]"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </section>
    );
}