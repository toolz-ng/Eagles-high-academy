export default function SectionHeading({
    icon,
    title,
    description,
}) {
    return (
        <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy/5 text-navy">
                {icon}
            </div>

            <div>
                <h3 className="font-heading text-xl font-semibold text-navy">
                    {title}
                </h3>

                <p className="text-xs text-ink/50">
                    {description}
                </p>
            </div>
        </div>
    );
}