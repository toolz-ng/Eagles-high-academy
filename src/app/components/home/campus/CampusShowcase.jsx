import CampusGallery from "./CampusGallery";

const spaces = [
    {
        name: "Science Laboratory",
        image: "/images/science-lab.webp",
    },
    {
        name: "Modern Classrooms",
        image: "/images/classroom.webp",
    },
    {
        name: "Library",
        image: "/images/library.webp",
    },
    {
        name: "Sports Field",
        image: "/images/sport.webp",
    },
    {
        name: "Computer Lab",
        image: "/images/computer-lab.webp",
    },
    {
        name: "Assembly Hall",
        image: "/images/assembly-hall.webp",
    },
];

export default function CampusShowcase() {
    return (
        <section className="bg-tint/40 py-20 sm:py-24" id="campus">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                            Our Campus
                        </p>

                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl lg:text-5xl">
                            A place designed for{" "}
                            <span className="text-accent">
                                learning, growth, and discovery.
                            </span>
                        </h2>

                        <p className="mt-4 max-w-xl text-base leading-7 text-navy/65">
                            Explore the spaces where our students learn,
                            create, collaborate, play, and grow.
                        </p>
                    </div>

                    <p className="hidden text-sm text-navy/50 sm:block">
                        Click any image to explore
                    </p>
                </div>

                <CampusGallery spaces={spaces} />

            </div>
        </section>
    );
}